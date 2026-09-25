let apps=[], dataUrl="apps.json";
const grid=document.querySelector("#grid"), search=document.querySelector("#search"), sort=document.querySelector("#sort"), count=document.querySelector("#count");
fetch(dataUrl).then(r=>r.json()).then(d=>{apps=d;render()});
function render(){
 let q=search.value.toLowerCase().trim(), a=apps.filter(x=>(x.name+" "+x.bundleId).toLowerCase().includes(q));
 a.sort((x,y)=>sort.value==="name"?x.name.localeCompare(y.name):sort.value==="version"?x.version.localeCompare(y.version):x.sizeMB-y.sizeMB);
 count.textContent=`${a.length} app${a.length===1?"":"s"}`;
 grid.innerHTML=a.map(x=>`<article class="card"><span class="badge">${x.platform}</span><h2>${x.name}</h2><div class="bundle">${x.bundleId}</div><div class="meta"><div><span class="label">Version</span>${x.version}</div><div><span class="label">Minimum OS</span>iOS ${x.minimumOS}</div><div><span class="label">Binary size</span>${x.binarySize}</div><div><span class="label">Archive</span>${x.archiveAvailable?"Available":"Metadata only"}</div></div></article>`).join("");
}
search.addEventListener("input",render); sort.addEventListener("change",render);
