const ICONS = {
 wa:'<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.4Z"/></svg>',
 ig:'<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1Zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.9.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.4-.3.8-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.1.8.3 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.9-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.4.3-.8.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.9-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.1-.8-.3-1.9-.3-1.3-.1-1.7-.1-4.8-.1Zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.2-3.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg>',
 gh:'<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>',
 li:'<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z"/></svg>',
 mail:'<svg viewBox="0 0 24 24"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 .4v.4l8 5.2 8-5.2v-.4H4ZM20 8.6l-8 5.2-8-5.2V18h16V8.6Z"/></svg>'
};
const SWATCH = ['#ff5a1f','#ffd23f','#1f8a4c','#0f4c81','#7b2d8b','#111','#f4f1ea','#c1121f'];
function initials(t){return t.split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase();}
function workCard(item, opts){
  const media = item.img ? `<img src="${item.img}" alt="${item.title}" loading="lazy">` : `<div class="mono">${initials(item.title)}</div>`;
  const pill = `<span class="pill">${item.tag||item.eyebrow}</span>`;
  const year = item.year ? `<span class="year">${item.year}</span>` : '';
  const stack = item.stack ? `<div class="stack">${item.stack.map(s=>`<span>${s}</span>`).join('')}</div>` : '';
  let links = '';
  if(item.repo){ links = `<div class="work-links"><a href="${item.repo}" target="_blank" rel="noopener">View project ↗</a>${item.demo?`<a href="${item.demo}" target="_blank" rel="noopener">Open demo ↗</a>`:''}</div>`; }
  return `<article class="work-card"><div class="work-media">${media}</div><div class="work-body"><div class="work-top">${pill}${year}</div><h3>${item.title}</h3><p>${item.description}</p>${stack}${links}</div></article>`;
}
function stepCard(s){
  return `<article class="step"><div class="step-media">${s.img?`<img src="${s.img}" alt="${s.title}" loading="lazy">`:`<div class="swatches">${SWATCH.map(c=>`<i style="background:${c}"></i>`).join('')}</div>`}</div><div class="step-body"><div class="step-num">STEP ${s.step}</div><h3>${s.title}</h3><p>${s.description}</p></div></article>`;
}
function mount(id, html){const el=document.getElementById(id); if(el) el.innerHTML=html;}
const ROGUE_AREAS = ['Web & application development','UI & digital product development','Branding & visual identity','Logo & graphic design','Apparel & merchandise branding','Screen printing, DTF, sublimation & vinyl','Product ideation & development','Client & stakeholder engagement','Technology & creative problem-solving'];

// global chrome
mount('year', new Date().getFullYear());
const SOCIAL_HTML = DATA.social.map(s=>`<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.name}" title="${s.name}">${ICONS[s.icon]}</a>`).join('');
mount('socials', SOCIAL_HTML);
mount('socials-inline', SOCIAL_HTML);
mount('stats', [[DATA.graphics.length,'catalog plates'],[DATA.archive.length,'archive pieces'],[DATA.web.length,'web projects'],[DATA.apps.length,'app projects']].map(s=>`<div class="stat"><strong>${String(s[0]).padStart(2,'0')}</strong><small>${s[1]}</small></div>`).join(''));

// graphics catalog with filters (graphics page + index featured)
const artGrid=document.getElementById('art-grid');
if(artGrid){
  const filterRoot=document.getElementById('art-filters');
  const tags=['All',...new Set(DATA.graphics.map(i=>i.tag))]; let activeTag='All';
  const renderFilters=()=>{filterRoot.innerHTML=tags.map(t=>`<button class="filter ${t===activeTag?'active':''}" data-tag="${t}">${t}</button>`).join('');filterRoot.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{activeTag=b.dataset.tag;renderFilters();renderArt();}));};
  const renderArt=()=>{const v=activeTag==='All'?DATA.graphics:DATA.graphics.filter(i=>i.tag===activeTag);artGrid.innerHTML=v.map(i=>workCard(i)).join('');};
  renderFilters();renderArt();
}
mount('featured-graphics', DATA.graphics.slice(0,6).map(i=>workCard(i)).join(''));
mount('archive-grid', DATA.archive.map(i=>workCard({...i,tag:'Archive'})).join(''));
mount('process-grid', DATA.process.map(stepCard).join(''));
mount('web-grid', DATA.web.map(i=>workCard(i)).join(''));
mount('app-grid', DATA.apps.map(i=>workCard(i)).join(''));
mount('featured-web', DATA.web.slice(0,3).map(i=>workCard(i)).join(''));
mount('featured-apps', DATA.apps.slice(0,3).map(i=>workCard(i)).join(''));
mount('rogue-areas', ROGUE_AREAS.map(a=>`<span>${a}</span>`).join(''));
