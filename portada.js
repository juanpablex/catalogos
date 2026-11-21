(async()=>{
 const latest=(document)=>document.slice().sort((a,b)=>Number(b.id)-Number(a.id))[0];
 try{const r=await fetch('joyas-packs.json',{cache:'no-store'});if(!r.ok)return;const pack=latest((await r.json()).packs);if(pack){document.querySelector('#jewels-pack').textContent=pack.nombre;for(const id of ['jewels-link','nav-jewels'])document.getElementById(id).href=pack.url}}
 catch{}
})();
