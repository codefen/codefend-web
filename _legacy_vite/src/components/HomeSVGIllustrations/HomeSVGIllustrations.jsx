// Home Page SVG Illustrations — Codefend dark cobalt theme
// Familia visual coherente: security operations center aesthetic

/* ─── HERO: Dashboard en tiempo real ─── */
export const HeroDashboardSVG = () => (
  <svg viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{width:'100%',height:'100%'}}>
    <defs>
      <linearGradient id="h-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#071428" />
        <stop offset="100%" stopColor="#020b18" />
      </linearGradient>
      <filter id="h-glow">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    {/* Outer frame */}
    <rect x="10" y="10" width="880" height="460" rx="12" fill="url(#h-grad)" stroke="#1a4f8a" strokeWidth="1.5"/>

    {/* Top bar */}
    <rect x="10" y="10" width="880" height="38" rx="12" fill="#0d2444"/>
    <rect x="10" y="36" width="880" height="12" fill="#0d2444"/>
    <circle cx="36" cy="29" r="6" fill="#e8555a"/>
    <circle cx="54" cy="29" r="6" fill="#e8a855"/>
    <circle cx="72" cy="29" r="6" fill="#55e87a"/>
    <text x="430" y="33" fontFamily="monospace" fontSize="11" fill="#5ba3f5" textAnchor="middle" letterSpacing="3">CODEFEND SECURITY PLATFORM</text>

    {/* Left sidebar */}
    <rect x="10" y="48" width="160" height="422" fill="#071428" opacity="0.8"/>
    {['Dashboard','Vulnerabilities','Assets','Reports','Team','Settings'].map((label, i) => (
      <g key={i}>
        <rect x="14" y={62 + i*52} width="152" height="38" rx="4"
          fill={i===0 ? '#1a4f8a' : 'transparent'} opacity={i===0?1:0.6}/>
        <text x="34" y={86 + i*52} fontFamily="monospace" fontSize="10"
          fill={i===0 ? '#93c5fd' : '#3a6ea8'}>{label}</text>
      </g>
    ))}

    {/* Main content area */}
    {/* KPI row */}
    {[
      {label:'THREATS DETECTED', val:'247', delta:'+12', color:'#e8555a'},
      {label:'ASSETS MONITORED', val:'1,482', delta:'+34', color:'#55e87a'},
      {label:'OPEN VULNS', val:'89', delta:'-5', color:'#e8a855'},
      {label:'RISK SCORE', val:'6.4', delta:'-0.8', color:'#5ba3f5'},
    ].map(({label, val, delta, color}, i) => (
      <g key={i}>
        <rect x={178 + i*173} y="58" width="165" height="72" rx="6"
          fill="#0a1f3d" stroke="#1a4080" strokeWidth="1"/>
        <text x={186 + i*173} y="78" fontFamily="monospace" fontSize="8" fill="#3a6ea8">{label}</text>
        <text x={186 + i*173} y="106" fontFamily="monospace" fontSize="22" fill={color} fontWeight="bold">{val}</text>
        <text x={310 + i*173} y="118" fontFamily="monospace" fontSize="9" fill={color}>{delta}</text>
      </g>
    ))}

    {/* Threat timeline chart */}
    <rect x="178" y="142" width="450" height="180" rx="6" fill="#0a1f3d" stroke="#1a4080" strokeWidth="1"/>
    <text x="190" y="162" fontFamily="monospace" fontSize="10" fill="#5ba3f5">THREAT TIMELINE — Last 30 days</text>
    {/* Chart grid lines */}
    {[0,1,2,3].map(i=>(
      <line key={i} x1="190" y1={185+i*30} x2="618" y2={185+i*30} stroke="#1a3a6a" strokeWidth="0.5" strokeDasharray="4,4"/>
    ))}
    {/* Chart bars */}
    {[12,28,18,42,35,22,55,38,48,20,31,45,60,28,35,42,18,52,38,29,44,33,57,40,24,36,48,27,39,52].map((h,i)=>(
      <rect key={i} x={192+i*14} y={305-h} width="10" height={h} rx="2"
        fill={h>45 ? '#e8555a' : h>35 ? '#e8a855' : '#2a7fe8'} opacity="0.8"/>
    ))}
    {/* Chart line overlay */}
    <polyline
      points="197,293 211,277 225,287 239,263 253,270 267,283 281,250 295,267 309,257 323,285 337,274 351,260 365,245 379,277 393,270 407,263 421,287 435,253 449,267 463,276 477,261 491,272 505,248 519,265 533,281 547,269 561,257 575,278 589,266 603,253"
      fill="none" stroke="#5ba3f5" strokeWidth="2" strokeLinejoin="round" filter="url(#h-glow)"/>

    {/* Active incidents panel */}
    <rect x="638" y="142" width="242" height="180" rx="6" fill="#0a1f3d" stroke="#1a4080" strokeWidth="1"/>
    <text x="650" y="162" fontFamily="monospace" fontSize="10" fill="#5ba3f5">ACTIVE INCIDENTS</text>
    {[
      {sev:'CRIT', msg:'SQL Injection /api/users', color:'#e8555a'},
      {sev:'HIGH', msg:'Exposed S3 bucket', color:'#e8a855'},
      {sev:'HIGH', msg:'No auth: /admin/export', color:'#e8a855'},
      {sev:'MED', msg:'Outdated OpenSSL 1.0.2', color:'#93c5fd'},
      {sev:'MED', msg:'Missing HSTS header', color:'#93c5fd'},
      {sev:'LOW', msg:'Directory listing on /docs', color:'#5ba3f5'},
    ].map(({sev, msg, color}, i) => (
      <g key={i}>
        <rect x="648" y={172+i*24} width="35" height="14" rx="2" fill={color} opacity="0.2" stroke={color} strokeWidth="0.5"/>
        <text x="650" y={183+i*24} fontFamily="monospace" fontSize="7" fill={color}>{sev}</text>
        <text x="690" y={183+i*24} fontFamily="monospace" fontSize="8" fill="#8ab4d8">{msg.substring(0,26)}</text>
      </g>
    ))}

    {/* Bottom row */}
    {/* Asset map */}
    <rect x="178" y="334" width="200" height="126" rx="6" fill="#0a1f3d" stroke="#1a4080" strokeWidth="1"/>
    <text x="190" y="352" fontFamily="monospace" fontSize="10" fill="#5ba3f5">ASSET MAP</text>
    {[[250,380,'WEB'],[280,400,'API'],[310,370,'DB'],[270,420,'CDN'],[240,415,'FW'],[320,405,'K8S']].map(([cx,cy,l],i)=>(
      <g key={i}>
        <circle cx={cx-50} cy={cy} r="14" fill="#0d2444" stroke="#2a7fe8" strokeWidth="1.5"/>
        <text x={cx-50} y={cy+4} fontFamily="monospace" fontSize="7" fill="#5ba3f5" textAnchor="middle">{l}</text>
        <line x1={cx-50} y1={cy} x2={i===0?230:cx-50} y2={i===0?380:cy} stroke="#2a7fe8" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.4"/>
      </g>
    ))}

    {/* Scan progress */}
    <rect x="390" y="334" width="238" height="126" rx="6" fill="#0a1f3d" stroke="#1a4080" strokeWidth="1"/>
    <text x="402" y="352" fontFamily="monospace" fontSize="10" fill="#5ba3f5">SCAN PROGRESS</text>
    {[
      {name:'Web App', pct:92, color:'#55e87a'},
      {name:'Network', pct:67, color:'#2a7fe8'},
      {name:'Mobile', pct:100, color:'#55e87a'},
      {name:'Cloud', pct:45, color:'#e8a855'},
    ].map(({name, pct, color}, i) => (
      <g key={i}>
        <text x="402" y={373+i*24} fontFamily="monospace" fontSize="8" fill="#8ab4d8">{name}</text>
        <rect x="450" y={362+i*24} width="160" height="8" rx="4" fill="#071428"/>
        <rect x="450" y={362+i*24} width={160*pct/100} height="8" rx="4" fill={color} opacity="0.85"/>
        <text x="618" y={371+i*24} fontFamily="monospace" fontSize="8" fill={color} textAnchor="end">{pct}%</text>
      </g>
    ))}

    {/* Team status */}
    <rect x="638" y="334" width="242" height="126" rx="6" fill="#0a1f3d" stroke="#1a4080" strokeWidth="1"/>
    <text x="650" y="352" fontFamily="monospace" fontSize="10" fill="#5ba3f5">TEAM STATUS</text>
    {[
      {name:'Chris R.', role:'Lead Pentester', status:'ACTIVE'},
      {name:'Fran M.', role:'Security Analyst', status:'ACTIVE'},
      {name:'Edgardo H.', role:'Cloud Security', status:'REVIEW'},
    ].map(({name, role, status}, i) => (
      <g key={i}>
        <circle cx="660" cy={373+i*30} r="10" fill="#0d2444" stroke="#2a7fe8" strokeWidth="1.5"/>
        <text x="660" y={377+i*30} fontFamily="monospace" fontSize="7" fill="#5ba3f5" textAnchor="middle">{name[0]}</text>
        <text x="676" y={370+i*30} fontFamily="monospace" fontSize="8" fill="#93c5fd">{name}</text>
        <text x="676" y={381+i*30} fontFamily="monospace" fontSize="7" fill="#3a6ea8">{role}</text>
        <rect x="754" y={364+i*30} width="40" height="13" rx="2"
          fill={status==='ACTIVE'?'#0d3a1a':'#1a2a0d'} stroke={status==='ACTIVE'?'#55e87a':'#e8a855'} strokeWidth="0.8"/>
        <text x="774" y={374+i*30} fontFamily="monospace" fontSize="7"
          fill={status==='ACTIVE'?'#55e87a':'#e8a855'} textAnchor="middle">{status}</text>
      </g>
    ))}
  </svg>
);

/* ─── SECTION 1: Íconos de features ─── */
export const ShieldIconSVG = () => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="80" height="80">
    <circle cx="60" cy="60" r="52" fill="#071428" stroke="#2a7fe8" strokeWidth="2"/>
    <path d="M60 22 L85 34 L85 62 Q85 82 60 94 Q35 82 35 62 L35 34 Z"
      fill="#0d2444" stroke="#2a7fe8" strokeWidth="2"/>
    <path d="M48 60 L56 68 L74 50" stroke="#55e87a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const EyeIconSVG = () => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="80" height="80">
    <circle cx="60" cy="60" r="52" fill="#071428" stroke="#2a7fe8" strokeWidth="2"/>
    <ellipse cx="60" cy="60" rx="28" ry="16" fill="none" stroke="#5ba3f5" strokeWidth="2"/>
    <circle cx="60" cy="60" r="8" fill="#2a7fe8"/>
    <circle cx="63" cy="57" r="2.5" fill="#93c5fd"/>
    <path d="M20 60 Q60 30 100 60" fill="none" stroke="#2a7fe8" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5"/>
  </svg>
);

export const NetworkIconSVG = () => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="80" height="80">
    <circle cx="60" cy="60" r="52" fill="#071428" stroke="#2a7fe8" strokeWidth="2"/>
    <circle cx="60" cy="40" r="10" fill="#0d2444" stroke="#2a7fe8" strokeWidth="2"/>
    <circle cx="36" cy="72" r="10" fill="#0d2444" stroke="#5ba3f5" strokeWidth="2"/>
    <circle cx="84" cy="72" r="10" fill="#0d2444" stroke="#5ba3f5" strokeWidth="2"/>
    <line x1="60" y1="50" x2="40" y2="63" stroke="#2a7fe8" strokeWidth="1.5"/>
    <line x1="60" y1="50" x2="80" y2="63" stroke="#2a7fe8" strokeWidth="1.5"/>
    <line x1="46" y1="72" x2="74" y2="72" stroke="#5ba3f5" strokeWidth="1" strokeDasharray="4,3"/>
    <text x="60" y="44" fontFamily="monospace" fontSize="8" fill="#5ba3f5" textAnchor="middle">HUB</text>
    <text x="36" y="76" fontFamily="monospace" fontSize="7" fill="#3a8ae8" textAnchor="middle">A</text>
    <text x="84" y="76" fontFamily="monospace" fontSize="7" fill="#3a8ae8" textAnchor="middle">B</text>
  </svg>
);

/* ─── SECTION 1: Console / terminal grande ─── */
export const ConsoleSVG = () => (
  <svg viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{width:'100%', maxWidth:560}}>
    <rect x="0" y="0" width="560" height="400" rx="10" fill="#071428" stroke="#2a7fe8" strokeWidth="1.5"/>
    <rect x="0" y="0" width="560" height="34" rx="10" fill="#0d2444"/>
    <rect x="0" y="22" width="560" height="12" fill="#0d2444"/>
    <circle cx="22" cy="17" r="5" fill="#e8555a"/>
    <circle cx="38" cy="17" r="5" fill="#e8a855"/>
    <circle cx="54" cy="17" r="5" fill="#55e87a"/>
    <text x="280" y="21" fontFamily="monospace" fontSize="9" fill="#5ba3f5" textAnchor="middle">codefend — zsh</text>
    {[
      {t: '$ codefend scan --target api.client.com --profile full', c: '#5ba3f5', y: 58},
      {t: 'Initializing full security assessment...', c: '#3a8ae8', y: 76},
      {t: '► Fingerprinting: Apache/2.4.51 (CVE-2021-41773 check)', c: '#8ab4d8', y: 94},
      {t: '► Port scan: 22/ssh 80/http 443/https 3306/mysql ⚠', c: '#e8a855', y: 112},
      {t: '► SSL/TLS: TLSv1.0 enabled — DEPRECATED', c: '#e8a855', y: 130},
      {t: '► Auth: /admin reachable without session cookie ✗', c: '#e8555a', y: 148},
      {t: '  CRITICAL: Broken Access Control — OWASP A01:2021', c: '#e8555a', y: 166},
      {t: '► SQLi test /api/search: VULNERABLE (time-based blind)', c: '#e8555a', y: 184},
      {t: '  CRITICAL: Injection — OWASP A03:2021', c: '#e8555a', y: 202},
      {t: '► XSS test /search?q=: VULNERABLE (reflected)', c: '#e8a855', y: 220},
      {t: '► CORS: wildcard origin (*) on /api — HIGH risk', c: '#e8a855', y: 238},
      {t: '► Secrets: API key leaked in /static/app.js', c: '#e8555a', y: 256},
      {t: '────────────────────────────────────────────────', c: '#1a4080', y: 274},
      {t: 'Scan complete. Generating report...', c: '#3a8ae8', y: 292},
      {t: '  Critical: 3  High: 4  Medium: 7  Low: 12', c: '#5ba3f5', y: 310},
      {t: '  Report: /reports/api.client.com_2024-01-15.pdf', c: '#55e87a', y: 328},
    ].map(({t, c, y}) => (
      <text key={y} x="18" y={y} fontFamily="monospace" fontSize="10" fill={c}>{t}</text>
    ))}
    {/* Cursor */}
    <rect x="18" y="340" width="8" height="14" rx="1" fill="#5ba3f5" opacity="0.9"/>
  </svg>
);

/* ─── SECTION 2: Íconos de features (4 cards) ─── */
export const SearchIconSVG = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="60" height="60" aria-hidden="true">
    <circle cx="32" cy="32" r="18" fill="none" stroke="#2a7fe8" strokeWidth="3"/>
    <line x1="45" y1="45" x2="60" y2="60" stroke="#2a7fe8" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="8" fill="#071428" stroke="#5ba3f5" strokeWidth="1.5"/>
    <line x1="28" y1="32" x2="36" y2="32" stroke="#5ba3f5" strokeWidth="1.5"/>
    <line x1="32" y1="28" x2="32" y2="36" stroke="#5ba3f5" strokeWidth="1.5"/>
  </svg>
);

export const LockIconSVG = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="60" height="60" aria-hidden="true">
    <rect x="18" y="36" width="44" height="32" rx="4" fill="#0d2444" stroke="#2a7fe8" strokeWidth="2.5"/>
    <path d="M28 36 L28 26 Q28 14 40 14 Q52 14 52 26 L52 36" fill="none" stroke="#2a7fe8" strokeWidth="2.5"/>
    <circle cx="40" cy="52" r="5" fill="#5ba3f5"/>
    <line x1="40" y1="57" x2="40" y2="63" stroke="#5ba3f5" strokeWidth="2"/>
  </svg>
);

export const AlertIconSVG = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="60" height="60" aria-hidden="true">
    <polygon points="40,10 72,65 8,65" fill="#0d2444" stroke="#e8a855" strokeWidth="2.5"/>
    <line x1="40" y1="28" x2="40" y2="48" stroke="#e8a855" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="40" cy="56" r="3" fill="#e8a855"/>
  </svg>
);

export const ChartIconSVG = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="60" height="60" aria-hidden="true">
    <rect x="10" y="10" width="60" height="60" rx="4" fill="#071428" stroke="#2a7fe8" strokeWidth="1.5"/>
    {[[20,55,10],[34,42,26],[48,30,38],[62,48,52]].map(([x,y,h],i)=>(
      <rect key={i} x={x-5} y={y} width="10" height={h} rx="2" fill={i===2?'#5ba3f5':'#2a7fe8'} opacity="0.85"/>
    ))}
    <polyline points="20,55 34,42 48,30 62,48" fill="none" stroke="#55e87a" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

/* ─── SECTION 3: SOC Dashboard grande ─── */
export const SOCDashboardSVG = () => (
  <svg viewBox="0 0 580 440" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{width:'100%', maxWidth:580}}>
    <defs>
      <filter id="soc-glow">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect x="0" y="0" width="580" height="440" rx="10" fill="#071428" stroke="#1a4080" strokeWidth="1.5"/>

    {/* Header */}
    <rect x="0" y="0" width="580" height="36" rx="10" fill="#0d2444"/>
    <rect x="0" y="26" width="580" height="10" fill="#0d2444"/>
    <text x="24" y="22" fontFamily="monospace" fontSize="10" fill="#5ba3f5">SOC — Security Operations Center</text>
    <rect x="490" y="8" width="74" height="18" rx="3" fill="#0a3a1a" stroke="#55e87a" strokeWidth="1"/>
    <text x="527" y="20" fontFamily="monospace" fontSize="8" fill="#55e87a" textAnchor="middle">● LIVE</text>

    {/* World map outline (simplified) */}
    <g opacity="0.15" stroke="#2a7fe8" strokeWidth="0.5" fill="none">
      <ellipse cx="290" cy="220" rx="260" ry="120"/>
      <ellipse cx="290" cy="220" rx="180" ry="120"/>
      <ellipse cx="290" cy="220" rx="80" ry="120"/>
      <line x1="30" y1="220" x2="550" y2="220"/>
      <line x1="290" y1="100" x2="290" y2="340"/>
    </g>

    {/* Attack origin dots */}
    {[
      [120, 180, '#e8555a', 'CN'],
      [80, 210, '#e8555a', 'RU'],
      [460, 195, '#e8a855', 'US'],
      [330, 260, '#e8a855', 'BR'],
      [380, 170, '#e8a855', 'EU'],
    ].map(([x, y, color, label], i) => (
      <g key={i} filter="url(#soc-glow)">
        <circle cx={x} cy={y} r="6" fill={color} opacity="0.85"/>
        <circle cx={x} cy={y} r="14" fill="none" stroke={color} strokeWidth="0.8" opacity="0.4"/>
        <text x={x} y={y-10} fontFamily="monospace" fontSize="7" fill={color} textAnchor="middle">{label}</text>
      </g>
    ))}

    {/* Protected target */}
    <g filter="url(#soc-glow)">
      <circle cx="290" cy="215" r="16" fill="#0d2444" stroke="#55e87a" strokeWidth="2"/>
      <text x="290" y="219" fontFamily="monospace" fontSize="7" fill="#55e87a" textAnchor="middle">TARGET</text>
    </g>

    {/* Attack lines */}
    {[[120,180,'#e8555a'],[80,210,'#e8555a'],[460,195,'#e8a855'],[330,260,'#e8a855'],[380,170,'#e8a855']].map(([x,y,c],i)=>(
      <line key={i} x1={x} y1={y} x2="290" y2="215"
        stroke={c} strokeWidth="1" strokeDasharray="5,4" opacity="0.5"/>
    ))}

    {/* Bottom stats */}
    <rect x="12" y="360" width="128" height="68" rx="6" fill="#0a1f3d" stroke="#1a4080" strokeWidth="1"/>
    <text x="76" y="376" fontFamily="monospace" fontSize="8" fill="#5ba3f5" textAnchor="middle">BLOCKED TODAY</text>
    <text x="76" y="406" fontFamily="monospace" fontSize="28" fill="#55e87a" textAnchor="middle" fontWeight="bold">2,847</text>
    <text x="76" y="420" fontFamily="monospace" fontSize="7" fill="#3a8ae8" textAnchor="middle">attacks blocked</text>

    <rect x="152" y="360" width="128" height="68" rx="6" fill="#0a1f3d" stroke="#1a4080" strokeWidth="1"/>
    <text x="216" y="376" fontFamily="monospace" fontSize="8" fill="#5ba3f5" textAnchor="middle">DETECTION RATE</text>
    <text x="216" y="406" fontFamily="monospace" fontSize="28" fill="#2a7fe8" textAnchor="middle" fontWeight="bold">99.3%</text>
    <text x="216" y="420" fontFamily="monospace" fontSize="7" fill="#3a8ae8" textAnchor="middle">precision</text>

    <rect x="292" y="360" width="128" height="68" rx="6" fill="#0a1f3d" stroke="#1a4080" strokeWidth="1"/>
    <text x="356" y="376" fontFamily="monospace" fontSize="8" fill="#5ba3f5" textAnchor="middle">RESPONSE TIME</text>
    <text x="356" y="406" fontFamily="monospace" fontSize="28" fill="#e8a855" textAnchor="middle" fontWeight="bold">4.2s</text>
    <text x="356" y="420" fontFamily="monospace" fontSize="7" fill="#3a8ae8" textAnchor="middle">average MTTD</text>

    <rect x="432" y="360" width="136" height="68" rx="6" fill="#0a1f3d" stroke="#1a4080" strokeWidth="1"/>
    <text x="500" y="376" fontFamily="monospace" fontSize="8" fill="#5ba3f5" textAnchor="middle">UPTIME SLA</text>
    <text x="500" y="406" fontFamily="monospace" fontSize="28" fill="#55e87a" textAnchor="middle" fontWeight="bold">100%</text>
    <text x="500" y="420" fontFamily="monospace" fontSize="7" fill="#3a8ae8" textAnchor="middle">last 90 days</text>
  </svg>
);

/* ─── SECTION 5: Product UI ─── */
export const ProductUISVG = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{width:'100%', maxWidth:560}}>
    <rect x="0" y="0" width="560" height="380" rx="10" fill="#071428" stroke="#2a7fe8" strokeWidth="1.5"/>
    <rect x="0" y="0" width="560" height="36" rx="10" fill="#0d2444"/>
    <rect x="0" y="26" width="560" height="10" fill="#0d2444"/>
    <circle cx="22" cy="18" r="5" fill="#e8555a"/>
    <circle cx="38" cy="18" r="5" fill="#e8a855"/>
    <circle cx="54" cy="18" r="5" fill="#55e87a"/>
    <text x="280" y="22" fontFamily="monospace" fontSize="9" fill="#5ba3f5" textAnchor="middle">Codefend Platform — Vulnerability Management</text>

    {/* Left nav */}
    <rect x="0" y="36" width="130" height="344" fill="#061020" opacity="0.9"/>
    {['Overview','Vulnerabilities','Assets','Scans','Reports','Team','Settings'].map((l,i)=>(
      <g key={i}>
        <rect x="4" y={50+i*44} width="122" height="34" rx="4"
          fill={i===1?'#1a4080':'transparent'}/>
        <text x="18" y={72+i*44} fontFamily="monospace" fontSize="9"
          fill={i===1?'#93c5fd':'#3a6ea8'}>{l}</text>
      </g>
    ))}

    {/* Main area — vuln table */}
    <text x="148" y="58" fontFamily="monospace" fontSize="12" fill="#ffffff" fontWeight="bold">Vulnerabilities</text>
    <text x="148" y="74" fontFamily="monospace" fontSize="9" fill="#3a6ea8">89 open issues · filtered: all</text>

    {/* Filter bar */}
    <rect x="148" y="82" width="390" height="26" rx="4" fill="#0a1f3d" stroke="#1a4080" strokeWidth="1"/>
    {['ALL','CRITICAL','HIGH','MEDIUM','LOW'].map((f,i)=>(
      <g key={i}>
        <rect x={154+i*64} y="86" width="56" height="18" rx="3"
          fill={i===0?'#1a4080':'transparent'} stroke={i===0?'#2a7fe8':'transparent'} strokeWidth="1"/>
        <text x={182+i*64} y="98" fontFamily="monospace" fontSize="8"
          fill={i===0?'#93c5fd':'#3a6ea8'} textAnchor="middle">{f}</text>
      </g>
    ))}

    {/* Table header */}
    <rect x="148" y="116" width="390" height="20" rx="0" fill="#0a1f3d"/>
    {['SEVERITY','TITLE','ASSET','CVSS','STATUS'].map((h,i)=>(
      <text key={i} x={[156,218,346,432,480][i]} y="130" fontFamily="monospace" fontSize="8" fill="#3a6ea8">{h}</text>
    ))}

    {/* Table rows */}
    {[
      ['CRIT','SQL Injection — /api/users','api.target.com','9.8','NEW','#e8555a'],
      ['CRIT','Remote Code Execution','app.target.com','9.1','OPEN','#e8555a'],
      ['HIGH','Exposed Admin Panel','admin.target.com','7.5','OPEN','#e8a855'],
      ['HIGH','Broken Auth — JWT none alg','api.target.com','7.2','IN PROG','#e8a855'],
      ['HIGH','S3 Bucket Public Read','aws-assets','6.9','NEW','#e8a855'],
      ['MED','Missing CSP Header','www.target.com','5.3','OPEN','#5ba3f5'],
      ['MED','Outdated jQuery 1.7.2','www.target.com','5.0','OPEN','#5ba3f5'],
      ['LOW','Server Banner Disclosure','api.target.com','3.1','OPEN','#8ab4d8'],
    ].map(([sev,title,asset,cvss,status,c],i)=>(
      <g key={i}>
        <rect x="148" y={136+i*26} width="390" height="26"
          fill={i%2===0?'#071428':'#081630'} opacity="0.9"/>
        <rect x="150" y={141+i*26} width="38" height="14" rx="2" fill={c} opacity="0.15" stroke={c} strokeWidth="0.5"/>
        <text x="156" y={152+i*26} fontFamily="monospace" fontSize="7" fill={c}>{sev}</text>
        <text x="196" y={152+i*26} fontFamily="monospace" fontSize="8" fill="#c0d8f0">{title.substring(0,28)}</text>
        <text x="346" y={152+i*26} fontFamily="monospace" fontSize="7" fill="#5ba3f5">{asset.substring(0,18)}</text>
        <text x="436" y={152+i*26} fontFamily="monospace" fontSize="8" fill={c}>{cvss}</text>
        <text x="476" y={152+i*26} fontFamily="monospace" fontSize="7" fill="#3a8ae8">{status}</text>
      </g>
    ))}
  </svg>
);

/* ─── Check icon para precios ─── */
export const CheckIconSVG = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" aria-hidden="true" style={{display:'inline',verticalAlign:'middle',marginRight:'8px'}}>
    <circle cx="10" cy="10" r="9" fill="#071428" stroke="#2a7fe8" strokeWidth="1.5"/>
    <path d="M6 10 L9 13 L14 7" stroke="#55e87a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
