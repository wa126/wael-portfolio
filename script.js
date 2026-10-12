const $=s=>document.querySelector(s), esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const dlg=$("#dlg"), dbody=$("#dlg-body");
$("#projects-grid").innerHTML=PROJECTS.map(p=>`<article class="card project">
 ${p.img?`<img src="${p.img}" alt="${esc(p.title)} dashboard screenshot" loading="lazy">`:`<div class="ph" role="img" aria-label="Screenshot to be added">Dashboard screenshot to be added</div>`}
 <div class="pad"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
 <ul class="tags">${p.tools.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>
 <button class="btn ghost" data-p="${p.id}">View details</button></div></article>`).join("");
$("#certs-grid").innerHTML=CERTS.map((c,i)=>`<article class="card cert"><button class="thumb" data-c="${i}" aria-label="View certificate: ${esc(c.title)}"><img src="${c.img}" alt="${esc(c.title)} certificate" loading="lazy"></button>
 <div class="pad"><h3>${esc(c.title)}</h3><p>${esc(c.org)}<br><small>${esc(c.date)}</small></p>${c.link?`<a href="${c.link}" target="_blank" rel="noopener">Verify credential</a>`:""}</div></article>`).join("");
document.addEventListener("click",e=>{
 const p=e.target.closest("[data-p]"), c=e.target.closest("[data-c]");
 if(p){const x=PROJECTS.find(q=>q.id===p.dataset.p), L=x.links,
  btn=(k,t)=>L[k]?`<a class="btn" href="${L[k]}" target="_blank" rel="noopener">${t}</a>`:`<span class="btn off" aria-disabled="true">${t}: link to be added</span>`;
  dbody.innerHTML=`<h2>${esc(x.title)}</h2><ul class="tags">${x.tools.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>
  ${x.gallery.length?`<div class="gal">${x.gallery.map(g=>`<img src="${g}" alt="${esc(x.title)} screenshot" loading="lazy">`).join("")}</div>`:`<div class="ph">Dashboard screenshot to be added</div>`}
  <p>${esc(x.desc)}</p>${x.status?`<p><strong>Status:</strong> ${esc(x.status)}</p>`:""}
  <div class="two"><div><h3>Key features</h3><ul>${x.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul></div>
  <div><h3>Key analytical questions</h3><ul>${x.questions.map(f=>`<li>${esc(f)}</li>`).join("")}</ul></div></div>
  <div class="actions">${btn("live","Live dashboard")}${btn("file","Download file")}${btn("linkedin","LinkedIn post")}${btn("github","GitHub")}</div>`;dlg.showModal();}
 else if(c){const x=CERTS[c.dataset.c];dbody.innerHTML=`<h2>${esc(x.title)}</h2><img class="big" src="${x.img}" alt="${esc(x.title)} certificate">`;dlg.showModal();}
 else if(e.target===dlg||e.target.closest("[data-close]"))dlg.close();
});
const nav=$("#nav"),tg=$("#menu-toggle");
tg.addEventListener("click",()=>{const o=nav.classList.toggle("open");tg.setAttribute("aria-expanded",o)});
nav.addEventListener("click",e=>{if(e.target.tagName==="A"){nav.classList.remove("open");tg.setAttribute("aria-expanded","false")}});
$("#year").textContent=new Date().getFullYear();
