const courses={analisis:{name:"Análisis y Diseño",color:"#e84545"},integrador:{name:"Curso Integrador I",color:"#4263eb"},cloud:{name:"Servicios Cloud GCP",color:"#159b8c"},operativa:{name:"Investigación Operativa",color:"#805ad5"},planeamiento:{name:"Planeamiento Estratégico TIC",color:"#f1a633"},distribuidos:{name:"Sistemas Distribuidos",color:"#e76f51"}};
const schedule=[
 {day:"Lunes",course:"planeamiento",time:"6:30 p. m."},
 {day:"Martes",course:"cloud",time:"6:30 p. m."},{day:"Martes",course:"integrador",time:"9:00 p. m."},
 {day:"Miércoles",course:"planeamiento",time:"6:30 p. m."},
 {day:"Jueves",course:"cloud",time:"6:30 p. m."},{day:"Jueves",course:"integrador",time:"9:00 p. m."},
 {day:"Viernes",course:"distribuidos",time:"6:30 p. m."},{day:"Sábado",course:"distribuidos",time:"6:30 p. m."}
];
const tasks=[
 {id:"ana-foro-s3",course:"analisis",title:"Foro Situación inicial · Semana 3",due:"2026-08-31T23:59:00-05:00",label:"31 ago",type:"formative",urgent:true,weight:"PA 10%"},
 {id:"ana-pa1",course:"analisis",title:"Participación en Clase 1 (PA1)",due:"2026-08-31T23:59:00-05:00",label:"31 ago",type:"evaluation",urgent:true,weight:"PA 10%"},
 {id:"int-apf1",course:"integrador",title:"Avance de Proyecto Final 1",due:"2026-09-01T21:00:00-05:00",label:"1 sep · 9:00 p. m.",type:"evaluation",urgent:true,weight:"20%"},
 {id:"cloud-skills",course:"cloud",title:"Crear cuenta UTP en Google Skills Boost",due:"2026-09-06T23:59:00-05:00",label:"Esta semana",type:"formative",urgent:true,weight:"Obligatoria"},
 {id:"cloud-path",course:"cloud",title:"Iniciar Cloud Engineer Learning Path",due:"2026-09-06T23:59:00-05:00",label:"Esta semana",type:"formative",urgent:false,weight:"Ruta del curso"},
 {id:"op-tarea1",course:"operativa",title:"Ejercicios de la semana 1",due:"2026-12-08T23:59:00-05:00",label:"8 dic",type:"formative",urgent:true,weight:"Práctica"},
 {id:"op-tarea2",course:"operativa",title:"Ejercicios de la semana 2",due:"2026-12-08T23:59:00-05:00",label:"8 dic",type:"formative",urgent:true,weight:"Práctica"},
 {id:"op-intro2",course:"operativa",title:"Introducción a la semana 2",due:"2026-12-08T23:59:00-05:00",label:"8 dic",type:"formative",urgent:true,weight:"Autoevaluación"},
 {id:"op-tarea3",course:"operativa",title:"Ejercicios de la semana 3",due:"2026-12-08T23:59:00-05:00",label:"8 dic",type:"formative",urgent:true,weight:"Práctica"},
 {id:"op-intro3",course:"operativa",title:"Introducción a la semana 3",due:"2026-12-08T23:59:00-05:00",label:"8 dic",type:"formative",urgent:true,weight:"Autoevaluación"},
 {id:"op-auto3",course:"operativa",title:"Autoevaluación de formulación de restricciones",due:"2026-12-08T23:59:00-05:00",label:"8 dic",type:"formative",urgent:true,weight:"Autoevaluación"},
 {id:"plan-foro3",course:"planeamiento",title:"Foro de Consultas · Semana 3",due:"2026-08-30T23:59:00-05:00",label:"30 ago",type:"formative",urgent:true,weight:"Consulta"},
 {id:"plan-apf1",course:"planeamiento",title:"Avance de Proyecto Final 1",due:"2026-09-14T18:00:00-05:00",label:"14 sep · 6:00 p. m.",type:"evaluation",urgent:false,weight:"25%"},
 {id:"dist-s01",course:"distribuidos",title:"S01.s1.Tarea · Vencida",due:"2026-08-14T20:00:00-05:00",label:"Venció 14 ago",type:"formative",urgent:true,weight:"Revisar"},
 {id:"dist-foro1",course:"distribuidos",title:"S01.s1.Participar en Foro · Vencida",due:"2026-08-14T20:00:00-05:00",label:"Venció 14 ago",type:"formative",urgent:true,weight:"Revisar"},
 {id:"dist-s02",course:"distribuidos",title:"S02.s1.Tarea · Vencida",due:"2026-08-21T20:00:00-05:00",label:"Venció 21 ago",type:"formative",urgent:true,weight:"Revisar"},
 {id:"dist-foro2",course:"distribuidos",title:"S02.s1.Participar en Foro · Vencida",due:"2026-08-21T20:00:00-05:00",label:"Venció 21 ago",type:"formative",urgent:true,weight:"Revisar"},
 {id:"op-pc1",course:"operativa",title:"Práctica Calificada 1",due:"2026-09-13T23:59:00-05:00",label:"11–13 sep",type:"evaluation",urgent:false,weight:"20%"},
 {id:"ana-apf1",course:"analisis",title:"Avance de Proyecto Final 1",due:"2026-09-14T23:59:00-05:00",label:"14 sep",type:"evaluation",urgent:false,weight:"20%"},
 {id:"cloud-pc1",course:"cloud",title:"Práctica Calificada 1",due:"2026-09-13T23:59:00-05:00",label:"Semana 5",type:"evaluation",urgent:false,weight:"20%"},
 {id:"dist-pc1",course:"distribuidos",title:"Práctica Calificada 1",due:"2026-09-13T23:59:00-05:00",label:"Semana 5",type:"evaluation",urgent:false,weight:"20%"},
 {id:"int-apf2",course:"integrador",title:"Avance de Proyecto Final 2",due:"2026-10-04T23:59:00-05:00",label:"Semana 8",type:"evaluation",urgent:false,weight:"20%"},
 {id:"op-pc2",course:"operativa",title:"Práctica Calificada 2",due:"2026-10-04T23:59:00-05:00",label:"2–4 oct",type:"evaluation",urgent:false,weight:"20%"},
 {id:"ana-apf2",course:"analisis",title:"Avance de Proyecto Final 2",due:"2026-10-19T23:59:00-05:00",label:"19 oct",type:"evaluation",urgent:false,weight:"20%"},
 {id:"plan-apf2",course:"planeamiento",title:"Avance de Proyecto Final 2",due:"2026-10-26T18:00:00-05:00",label:"26 oct · 6:00 p. m.",type:"evaluation",urgent:false,weight:"25%"},
 {id:"op-pc3",course:"operativa",title:"Práctica Calificada 3",due:"2026-11-01T23:59:00-05:00",label:"30 oct–1 nov",type:"evaluation",urgent:false,weight:"20%"},
 {id:"ana-apf3",course:"analisis",title:"Avance de Proyecto Final 3",due:"2026-11-23T23:59:00-05:00",label:"23 nov",type:"evaluation",urgent:false,weight:"20%"},
 {id:"plan-final",course:"planeamiento",title:"Proyecto Final",due:"2026-12-07T18:00:00-05:00",label:"7 dic · 6:00 p. m.",type:"evaluation",urgent:false,weight:"40%"},
 {id:"op-final",course:"operativa",title:"Examen Final",due:"2026-12-08T23:59:00-05:00",label:"7–8 dic",type:"evaluation",urgent:false,weight:"40%"},
 {id:"ana-final",course:"analisis",title:"Proyecto Final",due:"2026-12-14T23:59:00-05:00",label:"14 dic",type:"evaluation",urgent:false,weight:"30%"}
];
const storageKey="miSemanaUTP.v1";let completed=new Set(JSON.parse(localStorage.getItem(storageKey)||"[]"));
const save=()=>localStorage.setItem(storageKey,JSON.stringify([...completed]));
const fmtToday=()=>new Intl.DateTimeFormat("es-PE",{weekday:"long",day:"numeric",month:"long"}).format(new Date());
document.getElementById("todayLabel").textContent=fmtToday().replace(/^./,c=>c.toUpperCase());
function updateProgress(){const n=completed.size,p=Math.round(n/tasks.length*100);document.getElementById("progressPercent").textContent=p+"%";document.getElementById("progressCount").textContent=`${n} de ${tasks.length}`;document.getElementById("progressRing").style.setProperty("--value",p*3.6+"deg")}
function renderPriorities(){const data=tasks.filter(t=>t.urgent&&!completed.has(t.id)).sort((a,b)=>new Date(a.due)-new Date(b.due)).slice(0,3);document.getElementById("priorityGrid").innerHTML=data.map(t=>`<article class="priority-card" style="--course:${courses[t.course].color}"><div class="date">${t.label.split(" ")[0]}</div><div class="month">${t.label.slice(t.label.indexOf(" ")+1).toUpperCase()}</div><h3>${t.title}</h3><p>${courses[t.course].name}</p><span class="weight">${t.weight}</span></article>`).join("")||"<div class='panel'>¡Prioridades completadas! 🎉</div>"}
function renderMiniSchedule(){document.getElementById("miniSchedule").innerHTML=schedule.slice(0,6).map(s=>`<div class="mini-class" style="--course:${courses[s.course].color}"><span class="day">${s.day.slice(0,3).toUpperCase()}</span><div><strong>${courses[s.course].name}</strong><small>Virtual en vivo</small></div><time>${s.time}</time></div>`).join("")}
function renderSchedule(){const days=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];document.getElementById("weekGrid").innerHTML=days.map(d=>`<div class="day-column"><div class="day-title">${d}</div>${schedule.filter(s=>s.day===d).map(s=>`<article class="class-card" style="--course:${courses[s.course].color}"><time>${s.time}</time><strong>${courses[s.course].name}</strong><small>Zoom · En vivo</small></article>`).join("")}</div>`).join("")}
function populateFilters(){document.getElementById("courseFilter").innerHTML+=Object.entries(courses).map(([id,c])=>`<option value="${id}">${c.name}</option>`).join("")}
function renderTasks(){const cf=document.getElementById("courseFilter").value,sf=document.getElementById("statusFilter").value,tf=document.getElementById("typeFilter").value;const data=tasks.filter(t=>(cf==="all"||t.course===cf)&&(sf==="all"||(sf==="done")===completed.has(t.id))&&(tf==="all"||(tf==="urgent"?t.urgent:t.type===tf))).sort((a,b)=>new Date(a.due)-new Date(b.due));document.getElementById("taskList").innerHTML=data.map(t=>`<article class="task-item ${completed.has(t.id)?"done":""}" style="--course:${courses[t.course].color}"><input class="check" type="checkbox" aria-label="Marcar ${t.title} como cumplida" data-id="${t.id}" ${completed.has(t.id)?"checked":""}><div class="task-main"><h3>${t.title}</h3><div class="task-meta"><span class="pill course">${courses[t.course].name}</span><span class="pill ${t.type}">${t.type==="evaluation"?"Evaluación":"Actividad formativa"}</span>${t.urgent?'<span class="pill urgent">Prioridad</span>':""}</div></div><div class="due"><strong>${t.label}</strong><small>${t.weight}</small></div></article>`).join("");document.getElementById("emptyState").hidden=!!data.length;document.querySelectorAll(".check").forEach(x=>x.addEventListener("change",e=>{e.target.checked?completed.add(e.target.dataset.id):completed.delete(e.target.dataset.id);save();renderAll()}))}
function switchView(name){document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.view===name));document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id===name+"View"));window.scrollTo({top:0,behavior:"smooth"})}
function renderAll(){updateProgress();renderPriorities();renderTasks()}
document.querySelectorAll(".tab").forEach(x=>x.addEventListener("click",()=>switchView(x.dataset.view)));document.querySelectorAll("[data-go]").forEach(x=>x.addEventListener("click",()=>switchView(x.dataset.go)));["courseFilter","statusFilter","typeFilter"].forEach(id=>document.getElementById(id).addEventListener("change",renderTasks));document.getElementById("resetButton").addEventListener("click",()=>{if(confirm("¿Quieres desmarcar todas las actividades?")){completed.clear();save();renderAll()}});
populateFilters();renderMiniSchedule();renderSchedule();renderAll();

