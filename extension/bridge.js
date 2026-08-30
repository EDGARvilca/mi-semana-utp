window.addEventListener("message",event=>{
  if(event.source!==window||event.origin!==location.origin||event.data?.source!=="mi-semana-utp-web"||event.data.type!=="SYNC_REQUEST")return;
  chrome.runtime.sendMessage({type:"SYNC_REQUEST"},response=>{
    const error=chrome.runtime.lastError?.message;
    window.postMessage(error?{source:"mi-semana-utp-extension",type:"SYNC_ERROR",message:error}:{source:"mi-semana-utp-extension",...(response||{type:"SYNC_ERROR",message:"El conector no respondió."})},location.origin);
  });
});

