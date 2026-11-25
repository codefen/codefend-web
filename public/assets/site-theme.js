(()=>{const root=document.documentElement,key='codefend-theme-mode';const media=window.matchMedia('(prefers-color-scheme: light)');const allowed=['auto','light','dark'];let mode='auto';try{mode=localStorage.getItem(key)||'auto'}catch(e){}
if(!allowed.includes(mode))mode='auto';
const btn=document.getElementById('theme-cycle');
function systemResolved(){return media.matches?'light':'dark'}
function labelFor(m){return btn?.dataset['label'+m[0].toUpperCase()+m.slice(1)]||m}
function apply(){
  const resolved=mode==='auto'?systemResolved():mode;
  root.dataset.theme=mode;
  root.dataset.resolvedTheme=resolved;
  if(!btn)return;
  const label=labelFor(mode);
  btn.title=label;
  btn.setAttribute('aria-label',label);
  btn.querySelectorAll('.theme-cycle-ico').forEach(ico=>{
    const on=ico.getAttribute('data-theme-ico')===mode;
    ico.toggleAttribute('hidden',!on);
  });
}
btn?.addEventListener('click',()=>{
  if(mode==='auto'){
    mode=systemResolved()==='dark'?'light':'dark';
  }else{
    mode=mode==='light'?'dark':'light';
  }
  try{localStorage.setItem(key,mode)}catch(e){}
  apply();
});
media.addEventListener?.('change',()=>{if(mode==='auto')apply()});
apply()})();
(()=>{const toggle=document.querySelector('.nav-toggle'),panel=document.getElementById('nav-panel'),backdrop=document.querySelector('.nav-backdrop'),closeBtn=document.querySelector('.nav-panel-close'),nav=document.querySelector('.site-nav'),actions=document.querySelector('.nav-actions');
if(!toggle||!panel||!nav)return;
const mq=window.matchMedia('(max-width:850px)');
const setOpen=(open)=>{toggle.setAttribute('aria-expanded',open?'true':'false');panel.classList.toggle('is-open',open);backdrop?.classList.toggle('is-open',open);if(backdrop)backdrop.hidden=!open;document.body.classList.toggle('nav-open',open)};
/* On mobile, fixed panel must live on body — header backdrop-filter creates a containing block.
   On desktop, keep panel inside .site-nav so the flex row layout works. */
const placePanel=()=>{
  if(mq.matches){
    if(panel.parentElement!==document.body)document.body.appendChild(panel);
    if(backdrop&&backdrop.parentElement!==document.body)document.body.appendChild(backdrop);
  }else{
    setOpen(false);
    if(panel.parentElement!==nav){actions?nav.insertBefore(panel,actions):nav.appendChild(panel)}
  }
};
placePanel();
toggle.addEventListener('click',()=>setOpen(toggle.getAttribute('aria-expanded')!=='true'));
closeBtn?.addEventListener('click',()=>setOpen(false));
backdrop?.addEventListener('click',()=>setOpen(false));
panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false)});
mq.addEventListener?.('change',()=>placePanel())})();
(()=>{
  const items=[...document.querySelectorAll('.nav-item.has-mega')];
  if(!items.length)return;
  const mq=window.matchMedia('(max-width:850px)');
  const closeAll=()=>items.forEach(item=>{
    item.classList.remove('is-open');
    const trigger=item.querySelector('.nav-link-parent');
    const mega=item.querySelector('.nav-mega');
    if(trigger)trigger.setAttribute('aria-expanded','false');
    if(mega)mega.hidden=true;
  });
  const openItem=(item)=>{
    closeAll();
    item.classList.add('is-open');
    const trigger=item.querySelector('.nav-link-parent');
    const mega=item.querySelector('.nav-mega');
    if(trigger)trigger.setAttribute('aria-expanded','true');
    if(mega)mega.hidden=false;
  };
  items.forEach(item=>{
    const trigger=item.querySelector('.nav-link-parent');
    const mega=item.querySelector('.nav-mega');
    if(!trigger||!mega)return;
    let timer=null;
    const clear=()=>{if(timer){clearTimeout(timer);timer=null}};
    item.addEventListener('mouseenter',()=>{if(mq.matches)return;clear();openItem(item)});
    item.addEventListener('mouseleave',()=>{if(mq.matches)return;clear();timer=setTimeout(closeAll,120)});
    trigger.addEventListener('click',(e)=>{
      if(!mq.matches)return;
      e.preventDefault();
      const open=item.classList.contains('is-open');
      if(open){closeAll()}else{openItem(item)}
    });
    trigger.addEventListener('keydown',(e)=>{
      if(e.key==='Escape'){closeAll();trigger.focus()}
      if((e.key==='Enter'||e.key===' ')&&mq.matches){e.preventDefault();trigger.click()}
    });
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAll()});
  document.addEventListener('click',e=>{if(!e.target.closest('.nav-item.has-mega'))closeAll()});
  mq.addEventListener?.('change',closeAll);
})();