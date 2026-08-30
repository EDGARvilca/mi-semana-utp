const COURSE_MAP={
  "ANÁLISIS Y DISEÑO DE SISTEMAS DE INFORMACIÓN":"analisis",
  "CURSO INTEGRADOR I: SISTEMAS - SOFTWARE":"integrador",
  "INTEGRACIÓN DE SERVICIOS CLOUD GCP":"cloud",
  "INVESTIGACIÓN OPERATIVA":"operativa",
  "PLANEAMIENTO ESTRATÉGICO DE LAS TICS":"planeamiento",
  "SISTEMAS DISTRIBUIDOS":"distribuidos"
};

function parseDate(value){
  const m=value.match(/(\d{2})\/(\d{2})\/(\d{4})\s+a las\s+(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if(!m)return null;let hour=Number(m[4]);if(m[6].toUpperCase()==="PM"&&hour<12)hour+=12;if(m[6].toUpperCase()==="AM"&&hour===12)hour=0;
  return `${m[3]}-${m[2]}-${m[1]}T${String(hour).padStart(2,"0")}:${m[5]}:00-05:00`;
}
function labelDate(iso){if(!iso)return"Sin fecha";return new Intl.DateTimeFormat("es-PE",{day:"numeric",month:"short",hour:"numeric",minute:"2-digit"}).format(new Date(iso));}
function normalize(value){return value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();}
function courseId(name){const target=normalize(name);return Object.entries(COURSE_MAP).find(([key])=>normalize(key)===target)?.[1]||"analisis";}

async function extractFromUtp(tabId){
  const [{result:rows}]=await chrome.scripting.executeScript({target:{tabId},func:()=>[...document.querySelectorAll('a[href*="/student/courses/"][href*="/content/"]')].map(a=>({url:a.href,lines:(a.innerText||a.textContent||"").split("\n").map(x=>x.trim()).filter(Boolean)}))});
  return rows.map(row=>{
    const lines=[...new Set(row.lines)];const dateLine=lines.find(x=>/^(Vence|Desde):/i.test(x))||"";const status=lines.find(x=>/^(Por entregar|Programada|Vencida|Entregada|Calificada)$/i.test(x))||"";
    const course=lines.find(x=>Object.keys(COURSE_MAP).some(k=>normalize(k)===normalize(x)))||"ANÁLISIS Y DISEÑO DE SISTEMAS DE INFORMACIÓN";
    const typeLine=lines[0]||"Actividad";const candidates=lines.filter(x=>x!==typeLine&&x!==status&&x!==course&&x!==dateLine&&!/^\d+\s*pts$/i.test(x)&&!/\.\.\.$/.test(x));
    const title=candidates.sort((a,b)=>b.length-a.length)[0]||typeLine;const due=parseDate(dateLine);const id=(row.url.match(/content\/([^/]+)/)||[])[1]||row.url;
    const graded=/^(Tarea|Evaluación|Examen|Práctica).*calificad/i.test(typeLine);
    return {id:`utp-${id}`,course:courseId(course),title,due:due||new Date(8640000000000000).toISOString(),label:labelDate(due),type:graded?"evaluation":"formative",urgent:/Por entregar|Vencida/i.test(status),weight:(lines.find(x=>/^\d+\s*pts$/i.test(x))||(graded?"Calificada":"No calificada")),url:row.url,status};
  }).filter((task,index,all)=>all.findIndex(x=>x.url===task.url)===index);
}

chrome.runtime.onMessage.addListener((message,_sender,sendResponse)=>{
  if(message.type!=="SYNC_REQUEST")return;
  chrome.tabs.query({url:"https://class.utp.edu.pe/*"},async tabs=>{
    try{const tab=tabs.find(t=>t.url?.includes("/student/courses"))||tabs[0];if(!tab)throw new Error("Abre UTP+class en otra pestaña e inicia sesión.");const tasks=await extractFromUtp(tab.id);sendResponse({type:"SYNC_RESULT",tasks});}
    catch(error){sendResponse({type:"SYNC_ERROR",message:error.message||"No se pudo leer UTP+class."});}
  });return true;
});

