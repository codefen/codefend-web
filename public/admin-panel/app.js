'use strict';
const $=id=>document.getElementById(id);
const apiEndpoint = location.hostname === 'localhost' || location.hostname === '127.0.0.1' ? '/api.codefend.com/index.php' : 'https://api.codefend.com/index.php';
const countries=[['AR','🇦🇷','Argentina'],['SA','🇸🇦','Saudi Arabia'],['BH','🇧🇭','Bahrain'],['IN','🇮🇳','India']];
let country='AR',domains=[],total=0,page=0,snapshot='',busy=false,selected=null,job=null,generation=0,hasMore=true,searchTimer;
const rowHeight=68;
const routeBase='/admin-panel/';
let routeGeneration=0;
function domainPath(domain){return routeBase+encodeURIComponent(domain)+'/';}
function issuePath(domain,id){return domainPath(domain)+'issue/'+encodeURIComponent(id);}
function go(path){if(location.pathname!==path)history.pushState({codefendRoute:path},'',path);}
function session(){return sessionStorage.getItem('codefendSupervisorSession') || ''}
async function api(model,params={}){const token=session();if(!token)throw Error('Sign in as an administrator in the user panel first.');const body=new FormData();body.append('model','supervisor/'+model);body.append('session',token);for(const [key,val] of Object.entries(params))body.append(key,val);const response=await fetch(apiEndpoint,{method:'POST',body});if(!response.ok)throw Error('API unavailable ('+response.status+')');const result=await response.json();if(result.error!=='0')throw Error(result.info||'Request failed');return result}
function showError(error){$('message').textContent=error.message||String(error);$('message').className='error'}
function node(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n}
function drawCountries(){const nav=$('countries');nav.replaceChildren();for(const [code,flag,name] of countries){const button=node('button',flag+'  '+name,code===country?'active':'');button.onclick=()=>{routeGeneration++;go(routeBase);country=code;$('countryTitle').textContent=name;$('search').value='';selected=null;reset()};nav.append(button)}}
function reset(){generation++;domains=[];page=0;snapshot='';total=0;busy=false;hasMore=true;$('list').scrollTop=0;$('content').replaceChildren(node('div','Select a domain','empty'));drawCountries();render();load()}
async function load(){if(busy||!hasMore)return;busy=true;const gen=generation;try{const data=await api('catalog_index',{country,search:$('search').value,page:page+1,snapshot});if(gen!==generation)return;page++;snapshot=data.snapshot;domains.push(...data.domains);total=Number(data.total);hasMore=domains.length<total&&data.domains.length>0;$('count').textContent=total.toLocaleString()+' domains';render()}catch(e){if(gen===generation){showError(e);hasMore=false}}finally{if(gen===generation)busy=false}}
function render(){const scroll=$('list').scrollTop, height=$('list').clientHeight,start=Math.max(0,Math.floor(scroll/rowHeight)-5),end=Math.min(domains.length,Math.ceil((scroll+height)/rowHeight)+5);$('spacer').style.height=domains.length*rowHeight+'px';$('rows').style.transform=`translateY(${start*rowHeight}px)`;const fragment=document.createDocumentFragment();for(let i=start;i<end;i++){const d=domains[i],b=node('button',undefined,'row'+(selected?.id===d.id?' active':''));const title=node('strong',d.domain);title.title=d.domain;b.append(title);const parts=[];if(Number(d.leak_count))parts.push('💧 '+d.leak_count);if(Number(d.checked))parts.push('✓');b.append(node('span',parts.join('  '),'indicator'));b.append(node('small',d.sector==='government'?'Government':'Organization'));b.onclick=()=>{routeGeneration++;go(domainPath(d.domain));selectDomain(d)};fragment.append(b)}$('rows').replaceChildren(fragment);$('range').textContent=domains.length?`${start+1}–${end} of ${total.toLocaleString()} · ${domains.length.toLocaleString()} loaded`:'No domains loaded';if(end>=domains.length-8&&hasMore&&!busy)load()}
$('list').addEventListener('scroll',render);window.addEventListener('resize',render);$('search').addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>{selected=null;reset()},250)});
async function selectDomain(d){$('message').textContent='';$('message').className='';selected=d;render();const content=$('content');content.replaceChildren(node('p','Loading…','muted'));try{const data=await api('catalog_detail',{catalog_id:d.id});if(selected?.id!==d.id)return;content.replaceChildren();const head=node('div',undefined,'detail-head');const title=node('div');title.append(node('p','DOMAIN OVERVIEW','label'),node('h2',d.domain),node('p','Independent supervisor workspace','muted'));head.append(title);content.append(head);const controls=node('div',undefined,'modules');for(const [value,label,checked] of [['leaks','Leaks',true],['subdomains','Attack surface',false],['webscan','Web scan',false]]){const labelEl=node('label');const input=document.createElement('input');input.type='checkbox';input.value=value;input.checked=checked;labelEl.append(input,document.createTextNode(label));controls.append(labelEl)}content.append(controls);const start=node('button','Start selected scan','action');start.onclick=async()=>{const modules=[...controls.querySelectorAll('input:checked')].map(x=>x.value).join(',');if(!modules){showError(Error('Select at least one module.'));return}start.disabled=true;try{const result=await api('catalog_scan',{catalog_id:d.id,modules});$('message').className='';$('message').textContent='Scan #'+result.neuroscan.id+' started.';await selectDomain(d)}catch(e){showError(e)}finally{start.disabled=false}};content.append(start);content.append(node('h3','Issues · '+data.issues.length));if(!data.issues.length)content.append(node('p','No issues found for this domain.','muted'));for(const issue of data.issues){const b=node('button',undefined,'issue');const left=node('div');left.append(node('strong',issue.name),node('small','Issue #'+issue.id));b.append(left,node('span','Risk '+(issue.risk_score||'—')));b.onclick=()=>{routeGeneration++;go(issuePath(d.domain,issue.id));openIssue(d,issue)};content.append(b)}content.append(node('h3','Recent scans'));for(const scan of data.scans)content.append(node('p',`#${scan.id} · ${scan.m_leaks_phase||scan.phase} · ${scan.m_leaks_found||0} leaks`,'muted'));if(!data.scans.length)content.append(node('p','No scans found.','muted'))}catch(e){showError(e);content.replaceChildren(node('p','Unable to load domain.','muted'))}}
function countReportHashes(html){
 const tmp=document.createElement('div');
 tmp.innerHTML=DOMPurify.sanitize(html||'',{ALLOWED_TAGS:['table','thead','tbody','tr','th','td','b','strong','hr'],ALLOWED_ATTR:['colspan','rowspan','class']});
 let pending=0,cracked=0;
 for(const tr of tmp.querySelectorAll('tr')){
  const cells=tr.querySelectorAll('td');
  if(cells.length<2)continue;
  const key=(cells[0].textContent||'').trim().toLowerCase();
  if(key==='hash'){
   const next=tr.nextElementSibling;
   const nextKey=next?.querySelector('td')?.textContent?.trim().toLowerCase();
   if(next?.classList.contains('cracked-password')||nextKey==='password') cracked++;
   else pending++;
  }
 }
 return {pending,cracked,total:pending+cracked};
}
function renderIssueReport(content,domain,issueData){
 content.replaceChildren();
 const back=node('button','← Back to issues','report-back');
 back.onclick=()=>{const previous=history.state?.codefendRoute||'';if(previous===domainPath(domain.domain))history.back();else go(domainPath(domain.domain));};
 content.append(back,node('h2',issueData.name),node('p','Risk '+issueData.risk_score,'muted'));
 const counts=countReportHashes(issueData.issue||'');
 if(counts.total>0){
  const bar=node('div',undefined,'crack-bar');
  const info=node('p',counts.pending
   ? `${counts.pending} uncracked hash${counts.pending===1?'':'es'} in this report${counts.cracked?` · ${counts.cracked} already cracked`:''}.`
   : `All ${counts.total} hash${counts.total===1?'':'es'} in this report already have cracked passwords.`,'muted');
  bar.append(info);
  if(counts.pending>0){
   const crackBtn=node('button',`Crack all hashes (${counts.pending})`,'action crack-all');
   const status=node('p','','muted crack-status');
   crackBtn.onclick=async()=>{
    if(counts.pending>200 && !confirm(`This report has ${counts.pending} uncracked hashes. Continue?`)) return;
    crackBtn.disabled=true;
    status.textContent='Cracking hashes…';
    $('message').textContent='';
    $('message').className='';
    let remaining=counts.pending, crackedTotal=0, latest=issueData;
    try{
     const lookupErrors=[];
     do{
      const result=await api('catalog_crack_hashes',{catalog_id:domain.id,issue_id:issueData.id,batch_size:40});
      crackedTotal+=Number(result.cracked||0);
      remaining=Number(result.remaining||0);
      latest=result.issue||latest;
      if(Array.isArray(result.lookup_errors)) lookupErrors.push(...result.lookup_errors);
      status.textContent=`Cracked ${crackedTotal} so far`+(remaining?` · ${remaining} remaining…`:' · done.');
      if(result.done) break;
     }while(remaining>0);
     renderIssueReport(content,domain,latest);
     if(lookupErrors.length && !crackedTotal){
      showError(Error('Hash lookup failed: '+lookupErrors[0]));
     }else{
      $('message').textContent=crackedTotal
       ?`Cracked ${crackedTotal} password${crackedTotal===1?'':'s'} and updated the report.`
       :'No passwords found for the hashes in this report.';
     }
    }catch(e){
     showError(e);
     crackBtn.disabled=false;
     status.textContent='';
    }
   };
   bar.append(crackBtn,status);
  }
  content.append(bar);
 }
 const report=node('div',undefined,'report');
 const sanitized=DOMPurify.sanitize(issueData.issue||'',{RETURN_DOM_FRAGMENT:true,ALLOWED_TAGS:['h2','h3','h4','p','br','hr','ul','ol','li','strong','b','em','i','table','thead','tbody','tr','th','td','pre','code','blockquote'],ALLOWED_ATTR:['colspan','rowspan','class']});
 report.append(sanitized);
 content.append(report);
}
async function openIssue(domain,issue){try{const data=await api('catalog_issue',{catalog_id:domain.id,issue_id:issue.id});renderIssueReport($('content'),domain,data.issue)}catch(e){showError(e)}}
async function applyRoute(){
 const run=++routeGeneration; const path=location.pathname;
 if(path===routeBase || path===routeBase.slice(0,-1)){selected=null;reset();return;}
 const match=path.match(/^\/admin-panel\/([^/]+)(?:\/issue\/(\d+))?\/?$/);
 if(!match){$('content').replaceChildren(node('h2','Page not found'),node('p','This supervisor link is invalid.','muted'));return;}
 let domain; try{domain=decodeURIComponent(match[1]).toLowerCase()}catch{showError(Error('Invalid domain link.'));return;}
 try{
  const found=await api('catalog_resolve',{domain});if(run!==routeGeneration)return;
  const item=found.domain; country=item.country_code;
  $('countryTitle').textContent=countries.find(c=>c[0]===country)?.[2] || country;
  $('search').value=domain;selected=null;reset();
  await selectDomain(item);if(run!==routeGeneration)return;
  if(match[2]) await openIssue(item,{id:match[2]});
 }catch(error){if(run===routeGeneration){$('content').replaceChildren(node('h2','Unable to open link'));showError(error)}}
}
window.addEventListener('popstate',()=>{if(session() && $('login').hidden)applyRoute()});
async function loadJob(){try{const data=await api('catalog_job',{action:'status'});job=data.job;$('job').textContent=job?`${job.completed||0} / ${job.total||0} · ${job.status}`:'Not started';$('queueAction').textContent=job&&['running','queued'].includes(job.status)?'Stop queue':job&&['paused','failed'].includes(job.status)?'Resume leak queue':'Start leak queue'}catch(e){$('job').textContent='Unavailable';showError(e)}}
$('queueAction').onclick=async()=>{const action=job&&['running','queued'].includes(job.status)?'stop':'start';$('queueAction').disabled=true;try{await api('catalog_job',{action});await loadJob()}catch(e){showError(e)}finally{$('queueAction').disabled=false}};
function showLogin(message='') { sessionStorage.removeItem('codefendSupervisorSession'); document.querySelector('.layout').hidden=true; $('login').hidden=false; $('loginError').textContent=message; $('password').value=''; }
async function enter(){ await api('catalog_index',{country:'AR',page:1}); $('login').hidden=true; document.querySelector('.layout').hidden=false; drawCountries(); await applyRoute(); loadJob(); }
$('loginForm').addEventListener('submit', async event=>{event.preventDefault(); const button=event.currentTarget.querySelector('button'); button.disabled=true; $('loginError').textContent=''; try {const data=new FormData();data.append('model','users/access');data.append('provided_email',$('email').value.trim());data.append('provided_password',$('password').value);if($('mfa').value) data.append('provided_mfa_code',$('mfa').value);const response=await fetch(apiEndpoint,{method:'POST',body:data});const result=await response.json();if(result.error_info==='mfa_code_undefined'){ $('mfa').hidden=false; $('mfaLabel').hidden=false; $('mfa').required=true; $('mfa').focus(); return; }if(!response.ok || !result.session) throw Error(result.info || 'Unable to sign in.');sessionStorage.setItem('codefendSupervisorSession',result.session);$('password').value='';await enter();} catch(error){showLogin(error.message || 'Unable to sign in.')} finally {button.disabled=false;}});
$('logout').onclick=()=>showLogin();
if(!history.state?.codefendRoute) history.replaceState({codefendRoute:location.pathname},'',location.href);
if(session()) enter().catch(()=>showLogin('Your session has expired. Please sign in.')); else showLogin();
setInterval(()=>{if(session() && $('login').hidden)loadJob()},10000);
