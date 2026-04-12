// Service SVG Illustrations — cobalt blue theme, high-contrast technical style

export const WebPentestSVG = () => (
  <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="web-glow" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor="#1a6fd4" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#020b18" stopOpacity="0" />
      </radialGradient>
      <filter id="glow-w">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>

    {/* Background glow */}
    <ellipse cx="260" cy="190" rx="220" ry="175" fill="url(#web-glow)" />

    {/* Browser window frame */}
    <rect x="60" y="50" width="400" height="260" rx="10"
      fill="#0a1f3d" stroke="#2a7fe8" strokeWidth="2" />

    {/* Title bar */}
    <rect x="60" y="50" width="400" height="36" rx="10"
      fill="#0d2444" stroke="#2a7fe8" strokeWidth="2" />
    <rect x="60" y="72" width="400" height="14" fill="#0d2444" />
    {/* Traffic lights */}
    <circle cx="88" cy="68" r="6" fill="#e8555a" />
    <circle cx="108" cy="68" r="6" fill="#e8a855" />
    <circle cx="128" cy="68" r="6" fill="#55e87a" />
    {/* URL bar */}
    <rect x="148" y="59" width="270" height="18" rx="4" fill="#071428" stroke="#2a7fe8" strokeWidth="1" />
    <text x="157" y="72" fontFamily="monospace" fontSize="9" fill="#5ba3f5">https://target.app.codefend.com/api</text>

    {/* Content area — code lines */}
    <rect x="60" y="86" width="400" height="224" rx="0" fill="#071428" />
    {/* Line numbers */}
    {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
      <text key={i} x="78" y={110 + i * 18} fontFamily="monospace" fontSize="9" fill="#2a5a9a">{i+1}</text>
    ))}
    {/* Code content */}
    <text x="98" y="110" fontFamily="monospace" fontSize="10" fill="#5ba3f5">GET /api/users?id=1 HTTP/1.1</text>
    <text x="98" y="128" fontFamily="monospace" fontSize="10" fill="#3a8ae8">Host: target.app.codefend.com</text>
    <text x="98" y="146" fontFamily="monospace" fontSize="10" fill="#3a8ae8">Authorization: Bearer eyJhbGc...</text>
    {/* Highlighted vulnerable line */}
    <rect x="95" y="158" width="310" height="16" rx="2" fill="#1a4080" opacity="0.9" />
    <text x="98" y="170" fontFamily="monospace" fontSize="10" fill="#93c5fd" filter="url(#glow-w)">
      id=1 OR 1=1-- (SQL INJECTION DETECTED)
    </text>
    <text x="98" y="190" fontFamily="monospace" fontSize="10" fill="#3a8ae8">{">"} 200 OK | 1247ms | 48KB</text>
    <text x="98" y="208" fontFamily="monospace" fontSize="10" fill="#2a7fe8" opacity="0.8">
      Scanning: endpoints (87/124)...
    </text>
    <text x="98" y="226" fontFamily="monospace" fontSize="10" fill="#5ba3f5" opacity="0.7">
      VULN: XSS /search?q= [HIGH]
    </text>
    <text x="98" y="244" fontFamily="monospace" fontSize="10" fill="#5ba3f5" opacity="0.6">
      VULN: IDOR /api/users/:id [CRITICAL]
    </text>
    <text x="98" y="262" fontFamily="monospace" fontSize="10" fill="#2a7fe8" opacity="0.5">
      INFO: rate-limit bypass detected
    </text>

    {/* Alert badge */}
    <g transform="translate(390, 95)" filter="url(#glow-w)">
      <rect x="0" y="0" width="58" height="22" rx="4" fill="#e8555a" opacity="0.9" />
      <text x="29" y="15" fontFamily="monospace" fontSize="9" fill="#fff" textAnchor="middle" fontWeight="bold">⚠ CRITICAL</text>
    </g>

    {/* Progress bar */}
    <rect x="78" y="290" width="310" height="6" rx="3" fill="#0d2444" stroke="#2a7fe8" strokeWidth="1" />
    <rect x="78" y="290" width="265" height="6" rx="3" fill="#2a7fe8" opacity="0.9" />
    <text x="78" y="310" fontFamily="monospace" fontSize="9" fill="#5ba3f5">Pentest progress: 85%</text>

    {/* Floating connection nodes */}
    <circle cx="30" cy="140" r="5" fill="#2a7fe8" opacity="0.8" filter="url(#glow-w)" />
    <circle cx="30" cy="200" r="5" fill="#2a7fe8" opacity="0.6" filter="url(#glow-w)" />
    <circle cx="490" cy="160" r="5" fill="#2a7fe8" opacity="0.7" filter="url(#glow-w)" />
    <line x1="35" y1="140" x2="60" y2="140" stroke="#2a7fe8" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7" />
    <line x1="35" y1="200" x2="60" y2="200" stroke="#2a7fe8" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
    <line x1="460" y1="160" x2="487" y2="160" stroke="#2a7fe8" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
  </svg>
);

export const MobilePentestSVG = () => (
  <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="mob-glow" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor="#1a6fd4" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#020b18" stopOpacity="0" />
      </radialGradient>
      <filter id="glow-m">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>

    <ellipse cx="260" cy="190" rx="200" ry="175" fill="url(#mob-glow)" />

    {/* Left phone */}
    <rect x="100" y="40" width="120" height="220" rx="16" fill="#0a1f3d" stroke="#2a7fe8" strokeWidth="2" />
    <rect x="110" y="60" width="100" height="160" rx="4" fill="#071428" />
    {/* Notch */}
    <rect x="142" y="44" width="36" height="8" rx="4" fill="#071428" />
    {/* Home bar */}
    <rect x="146" y="244" width="28" height="4" rx="2" fill="#2a7fe8" opacity="0.6" />
    {/* App grid on left phone */}
    {[0,1,2,3,4,5].map(i => (
      <rect key={i} x={118 + (i%3)*32} y={68 + Math.floor(i/3)*35} width="26" height="26" rx="6"
        fill="#0d2444" stroke="#2a7fe8" strokeWidth="1.2" />
    ))}
    {/* Scan overlay on left phone */}
    <rect x="110" y="138" width="100" height="2" rx="1" fill="#e8555a" opacity="0.9" filter="url(#glow-m)" />
    <rect x="110" y="60" width="100" height="80" rx="4" fill="#1a6fd4" opacity="0.08" />

    {/* Right phone */}
    <rect x="300" y="60" width="120" height="220" rx="16" fill="#0a1f3d" stroke="#2a7fe8" strokeWidth="2" />
    <rect x="310" y="80" width="100" height="160" rx="4" fill="#071428" />
    <rect x="342" y="64" width="36" height="8" rx="4" fill="#071428" />
    <rect x="346" y="264" width="28" height="4" rx="2" fill="#2a7fe8" opacity="0.6" />
    {/* Alert on right phone */}
    <rect x="316" y="120" width="88" height="50" rx="6" fill="#0d2444" stroke="#e8555a" strokeWidth="1.5" />
    <text x="360" y="140" fontFamily="monospace" fontSize="8" fill="#e8555a" textAnchor="middle" fontWeight="bold">⚠ VULN</text>
    <text x="360" y="154" fontFamily="monospace" fontSize="7" fill="#93c5fd" textAnchor="middle">Insecure Storage</text>
    <text x="360" y="165" fontFamily="monospace" fontSize="7" fill="#5ba3f5" textAnchor="middle">CVSS 7.8</text>
    {/* Code lines on right phone */}
    {[0,1,2,3].map(i => (
      <rect key={i} x="316" y={182 + i*14} width={i===0?72:i===1?55:i===2?64:45} height="6" rx="2"
        fill="#2a7fe8" opacity={0.5 - i*0.1} />
    ))}

    {/* Center connection line */}
    <line x1="220" y1="150" x2="300" y2="170" stroke="#2a7fe8" strokeWidth="2" strokeDasharray="6,4" opacity="0.7" />
    <circle cx="260" cy="160" r="18" fill="#0d2444" stroke="#2a7fe8" strokeWidth="2" filter="url(#glow-m)" />
    <text x="260" y="155" fontFamily="monospace" fontSize="8" fill="#5ba3f5" textAnchor="middle">MITM</text>
    <text x="260" y="167" fontFamily="monospace" fontSize="7" fill="#93c5fd" textAnchor="middle">PROXY</text>

    {/* Scan label */}
    <rect x="84" y="128" width="20" height="24" rx="2" fill="#e8555a" opacity="0.8" />
    <text x="94" y="145" fontFamily="monospace" fontSize="7" fill="#fff" textAnchor="middle" transform="rotate(-90,94,140)">SCAN</text>

    {/* Bottom stats */}
    <text x="260" y="325" fontFamily="monospace" fontSize="10" fill="#5ba3f5" textAnchor="middle">Mobile Security Assessment</text>
    <text x="260" y="342" fontFamily="monospace" fontSize="9" fill="#2a7fe8" textAnchor="middle">iOS · Android · Hybrid Apps</text>
  </svg>
);

export const NetworkPentestSVG = () => (
  <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="net-glow" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor="#1a6fd4" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#020b18" stopOpacity="0" />
      </radialGradient>
      <filter id="glow-n">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>

    <ellipse cx="260" cy="190" rx="220" ry="175" fill="url(#net-glow)" />

    {/* Network nodes — positions */}
    {/* Center hub */}
    <circle cx="260" cy="190" r="28" fill="#0d2444" stroke="#2a7fe8" strokeWidth="2.5" filter="url(#glow-n)" />
    <text x="260" y="186" fontFamily="monospace" fontSize="9" fill="#93c5fd" textAnchor="middle">HUB</text>
    <text x="260" y="198" fontFamily="monospace" fontSize="8" fill="#5ba3f5" textAnchor="middle">10.0.0.1</text>

    {/* Node positions: top, right, bottom-right, bottom-left, left, top-left */}
    {[
      [260, 80, "SERVER", "10.0.0.2", "#2a7fe8"],
      [390, 130, "DB", "10.0.0.5", "#e8555a"],
      [390, 265, "FW", "10.0.0.3", "#2a7fe8"],
      [260, 310, "CLIENT", "10.0.0.8", "#2a7fe8"],
      [130, 265, "API", "10.0.0.6", "#2a7fe8"],
      [130, 130, "DNS", "10.0.0.4", "#55e87a"],
    ].map(([cx, cy, label, ip, color], i) => (
      <g key={i}>
        <line x1={cx} y1={cy} x2="260" y2="190"
          stroke={color} strokeWidth="1.5" strokeDasharray="5,3" opacity="0.55" />
        <circle cx={cx} cy={cy} r="22" fill="#0a1f3d" stroke={color} strokeWidth="2" />
        <text x={cx} y={cy-4} fontFamily="monospace" fontSize="8" fill={color} textAnchor="middle" fontWeight="bold">{label}</text>
        <text x={cx} y={cy+8} fontFamily="monospace" fontSize="7" fill="#5ba3f5" textAnchor="middle">{ip}</text>
      </g>
    ))}

    {/* Attacker node with alert */}
    <g filter="url(#glow-n)">
      <circle cx="460" cy="190" r="22" fill="#2a0a0a" stroke="#e8555a" strokeWidth="2.5" />
      <text x="460" y="186" fontFamily="monospace" fontSize="8" fill="#e8555a" textAnchor="middle">ATK</text>
      <text x="460" y="198" fontFamily="monospace" fontSize="7" fill="#e8a855" textAnchor="middle">PROBE</text>
    </g>
    <line x1="438" y1="190" x2="412" y2="190" stroke="#e8555a" strokeWidth="2" strokeDasharray="4,3" opacity="0.8" />
    {/* Attack arrow */}
    <polygon points="415,185 427,190 415,195" fill="#e8555a" opacity="0.9" />

    {/* Scan pulse rings */}
    <circle cx="260" cy="190" r="50" fill="none" stroke="#2a7fe8" strokeWidth="1" opacity="0.35" strokeDasharray="8,4" />
    <circle cx="260" cy="190" r="80" fill="none" stroke="#2a7fe8" strokeWidth="1" opacity="0.2" strokeDasharray="8,4" />
    <circle cx="260" cy="190" r="110" fill="none" stroke="#2a7fe8" strokeWidth="0.5" opacity="0.12" />

    {/* Status label */}
    <rect x="10" y="170" width="95" height="40" rx="5" fill="#0d2444" stroke="#2a7fe8" strokeWidth="1" />
    <text x="57" y="186" fontFamily="monospace" fontSize="8" fill="#5ba3f5" textAnchor="middle">NMAP SCAN</text>
    <text x="57" y="198" fontFamily="monospace" fontSize="7" fill="#e8555a" textAnchor="middle">OPEN: 22,80,443</text>
    <text x="57" y="208" fontFamily="monospace" fontSize="7" fill="#2a7fe8" textAnchor="middle">CVE-2024-1234</text>
  </svg>
);

export const SourceCodeSVG = () => (
  <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="src-glow" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor="#1a6fd4" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#020b18" stopOpacity="0" />
      </radialGradient>
      <filter id="glow-s">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>

    <ellipse cx="260" cy="190" rx="220" ry="175" fill="url(#src-glow)" />

    {/* Code editor window */}
    <rect x="40" y="30" width="440" height="310" rx="10" fill="#0a1f3d" stroke="#2a7fe8" strokeWidth="2" />
    {/* Title bar */}
    <rect x="40" y="30" width="440" height="34" rx="10" fill="#0d2444" />
    <rect x="40" y="50" width="440" height="14" fill="#0d2444" />
    <circle cx="65" cy="47" r="6" fill="#e8555a" />
    <circle cx="85" cy="47" r="6" fill="#e8a855" />
    <circle cx="105" cy="47" r="6" fill="#55e87a" />
    <text x="260" y="51" fontFamily="monospace" fontSize="9" fill="#5ba3f5" textAnchor="middle">auth.js — Source Code Review</text>

    {/* Sidebar / file tree */}
    <rect x="40" y="64" width="90" height="276" fill="#071428" />
    <text x="50" y="80" fontFamily="monospace" fontSize="8" fill="#3a8ae8">▾ src/</text>
    <text x="58" y="94" fontFamily="monospace" fontSize="8" fill="#5ba3f5">▾ auth/</text>
    <text x="66" y="108" fontFamily="monospace" fontSize="8" fill="#93c5fd">auth.js</text>
    <text x="66" y="122" fontFamily="monospace" fontSize="8" fill="#3a8ae8">jwt.js</text>
    <text x="58" y="136" fontFamily="monospace" fontSize="8" fill="#3a8ae8">▾ api/</text>
    <text x="66" y="150" fontFamily="monospace" fontSize="8" fill="#3a8ae8">users.js</text>
    <text x="66" y="164" fontFamily="monospace" fontSize="8" fill="#3a8ae8">admin.js</text>

    {/* Code content */}
    <rect x="130" y="64" width="350" height="276" fill="#071a30" />
    {/* Line numbers */}
    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(i => (
      <text key={i} x="140" y={78 + i*18} fontFamily="monospace" fontSize="9" fill="#2a5a9a">{i}</text>
    ))}
    {/* Code */}
    <text x="162" y="96" fontFamily="monospace" fontSize="9" fill="#5ba3f5">function <tspan fill="#93c5fd">authenticate</tspan>(user, pass) {"{"}</text>
    <text x="162" y="114" fontFamily="monospace" fontSize="9" fill="#3a8ae8">  const query = </text>
    <text x="245" y="114" fontFamily="monospace" fontSize="9" fill="#55e87a">{"`SELECT * FROM users`"}</text>
    {/* Vulnerable line highlighted */}
    <rect x="130" y="126" width="350" height="18" rx="0" fill="#3a0a0a" opacity="0.8" />
    <text x="162" y="139" fontFamily="monospace" fontSize="9" fill="#e8555a" filter="url(#glow-s)">
      {'  + " WHERE user=\'" + user + "\'"'}
    </text>
    <rect x="462" y="128" width="16" height="14" rx="2" fill="#e8555a" opacity="0.9" />
    <text x="470" y="139" fontFamily="monospace" fontSize="7" fill="#fff" textAnchor="middle">!</text>

    <text x="162" y="157" fontFamily="monospace" fontSize="9" fill="#3a8ae8">  const hash = md5(pass)</text>
    <rect x="130" y="162" width="350" height="18" rx="0" fill="#3a1a0a" opacity="0.7" />
    <text x="162" y="175" fontFamily="monospace" fontSize="9" fill="#e8a855">  {"// WEAK: use bcrypt instead"}</text>

    <text x="162" y="193" fontFamily="monospace" fontSize="9" fill="#3a8ae8">  return db.query(query)</text>
    <text x="162" y="211" fontFamily="monospace" fontSize="9" fill="#5ba3f5">{"}"}</text>

    {/* Findings panel */}
    <text x="162" y="240" fontFamily="monospace" fontSize="8" fill="#e8555a">▸ SQLi risk: line 4 (CRITICAL)</text>
    <text x="162" y="254" fontFamily="monospace" fontSize="8" fill="#e8a855">▸ Weak hash: line 7 (HIGH)</text>
    <text x="162" y="268" fontFamily="monospace" fontSize="8" fill="#5ba3f5">▸ No rate-limit: auth endpoint</text>
    <text x="162" y="282" fontFamily="monospace" fontSize="8" fill="#2a7fe8">▸ Scanning 1,247 files...</text>
    <text x="162" y="296" fontFamily="monospace" fontSize="8" fill="#2a7fe8" opacity="0.7">▸ SAST engine: codefend v3.1</text>
    <text x="162" y="314" fontFamily="monospace" fontSize="8" fill="#3a8ae8">▸ 12 critical | 34 high | 89 med</text>
  </svg>
);

export const SocialEngineeringSVG = () => (
  <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="soc-glow" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor="#1a6fd4" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#020b18" stopOpacity="0" />
      </radialGradient>
      <filter id="glow-se">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>

    <ellipse cx="260" cy="190" rx="220" ry="175" fill="url(#soc-glow)" />

    {/* Email client window */}
    <rect x="50" y="30" width="420" height="300" rx="10" fill="#0a1f3d" stroke="#2a7fe8" strokeWidth="2" />
    <rect x="50" y="30" width="420" height="34" rx="10" fill="#0d2444" />
    <rect x="50" y="50" width="420" height="14" fill="#0d2444" />
    <circle cx="72" cy="47" r="5" fill="#e8555a" />
    <circle cx="89" cy="47" r="5" fill="#e8a855" />
    <circle cx="106" cy="47" r="5" fill="#55e87a" />
    <text x="260" y="51" fontFamily="monospace" fontSize="9" fill="#5ba3f5" textAnchor="middle">Phishing Campaign Simulator</text>

    {/* Email list sidebar */}
    <rect x="50" y="64" width="140" height="266" fill="#071428" />
    <text x="70" y="82" fontFamily="monospace" fontSize="8" fill="#5ba3f5">📥 Inbox (3)</text>
    <rect x="50" y="86" width="140" height="26" fill="#0d2444" />
    <text x="70" y="100" fontFamily="monospace" fontSize="8" fill="#e8555a">⚠ IT Security Alert</text>
    <text x="70" y="112" fontFamily="monospace" fontSize="7" fill="#3a8ae8">it-support@comp...</text>
    <text x="70" y="124" fontFamily="monospace" fontSize="8" fill="#3a8ae8">Password Reset</text>
    <text x="70" y="136" fontFamily="monospace" fontSize="7" fill="#2a5a9a">no-reply@account...</text>
    <text x="70" y="148" fontFamily="monospace" fontSize="8" fill="#3a8ae8">Invoice #8823</text>
    <text x="70" y="160" fontFamily="monospace" fontSize="7" fill="#2a5a9a">billing@finance-dep...</text>

    {/* Email detail */}
    <rect x="190" y="64" width="280" height="266" fill="#071a30" />
    <text x="200" y="82" fontFamily="monospace" fontSize="8" fill="#2a5a9a">From:</text>
    <text x="228" y="82" fontFamily="monospace" fontSize="8" fill="#e8555a">it-support@c0mpany.com</text>
    <rect x="335" y="74" width="38" height="12" rx="2" fill="#3a0a0a" stroke="#e8555a" strokeWidth="1" />
    <text x="354" y="83" fontFamily="monospace" fontSize="7" fill="#e8555a" textAnchor="middle">FAKE</text>
    <text x="200" y="96" fontFamily="monospace" fontSize="8" fill="#2a5a9a">To:</text>
    <text x="220" y="96" fontFamily="monospace" fontSize="8" fill="#5ba3f5">john.doe@target-org.com</text>
    <text x="200" y="110" fontFamily="monospace" fontSize="8" fill="#2a5a9a">Subj:</text>
    <text x="228" y="110" fontFamily="monospace" fontSize="8" fill="#93c5fd" fontWeight="bold">URGENT: Your password expires today</text>

    <line x1="190" y1="116" x2="470" y2="116" stroke="#1a3a6a" strokeWidth="1" />
    <text x="200" y="132" fontFamily="monospace" fontSize="8" fill="#5ba3f5">Dear John,</text>
    <text x="200" y="148" fontFamily="monospace" fontSize="8" fill="#3a8ae8">Your account will be locked in</text>
    <text x="200" y="162" fontFamily="monospace" fontSize="8" fill="#3a8ae8">24h. Click below to verify:</text>
    {/* Phishing link button */}
    <rect x="200" y="170" width="180" height="26" rx="4" fill="#1a4080" stroke="#e8555a" strokeWidth="1.5" />
    <text x="290" y="187" fontFamily="monospace" fontSize="9" fill="#e8555a" textAnchor="middle" fontWeight="bold">→ Verify Account Now</text>
    {/* Hover tooltip */}
    <rect x="200" y="202" width="220" height="14" rx="2" fill="#0d2444" stroke="#e8a855" strokeWidth="1" />
    <text x="210" y="212" fontFamily="monospace" fontSize="7" fill="#e8a855">hxxp://ev1l-phish.ru/steal-creds</text>

    <text x="200" y="232" fontFamily="monospace" fontSize="7" fill="#2a5a9a">IT Support Team</text>
    <text x="200" y="244" fontFamily="monospace" fontSize="7" fill="#2a5a9a">Company Inc. (spoofed)</text>

    {/* Detection labels */}
    <text x="200" y="270" fontFamily="monospace" fontSize="7" fill="#e8555a">⚠ Domain spoof detected</text>
    <text x="200" y="282" fontFamily="monospace" fontSize="7" fill="#e8a855">⚠ Urgency language pattern</text>
    <text x="200" y="294" fontFamily="monospace" fontSize="7" fill="#e8a855">⚠ Malicious URL flagged</text>
    <text x="200" y="306" fontFamily="monospace" fontSize="7" fill="#5ba3f5">✓ Phishing template: CEO Fraud</text>
    <text x="200" y="318" fontFamily="monospace" fontSize="7" fill="#2a7fe8">✓ Click rate tracking enabled</text>
  </svg>
);

export const CloudSecuritySVG = () => (
  <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="cld-glow" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor="#1a6fd4" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#020b18" stopOpacity="0" />
      </radialGradient>
      <filter id="glow-c">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>

    <ellipse cx="260" cy="190" rx="220" ry="175" fill="url(#cld-glow)" />

    {/* Cloud shape (central) */}
    <g filter="url(#glow-c)">
      <ellipse cx="260" cy="155" rx="105" ry="55" fill="#0d2444" stroke="#2a7fe8" strokeWidth="2.5" />
      <ellipse cx="195" cy="170" rx="55" ry="42" fill="#0d2444" stroke="#2a7fe8" strokeWidth="2.5" />
      <ellipse cx="325" cy="170" rx="55" ry="42" fill="#0d2444" stroke="#2a7fe8" strokeWidth="2.5" />
      <rect x="148" y="170" width="224" height="45" rx="0" fill="#0d2444" />
      <line x1="148" y1="215" x2="372" y2="215" stroke="#2a7fe8" strokeWidth="2.5" />
    </g>
    {/* Cloud label */}
    <text x="260" y="170" fontFamily="monospace" fontSize="11" fill="#93c5fd" textAnchor="middle" fontWeight="bold">CLOUD INFRA</text>
    <text x="260" y="186" fontFamily="monospace" fontSize="9" fill="#5ba3f5" textAnchor="middle">AWS · Azure · GCP</text>

    {/* Services hanging from cloud */}
    {[
      [155, 270, "EC2", "#2a7fe8"],
      [210, 270, "S3", "#e8a855"],
      [260, 270, "IAM", "#e8555a"],
      [310, 270, "RDS", "#2a7fe8"],
      [365, 270, "VPC", "#55e87a"],
    ].map(([cx, cy, label, color], i) => (
      <g key={i}>
        <line x1={cx} y1="215" x2={cx} y2={cy-18} stroke={color} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7" />
        <circle cx={cx} cy={cy} r="20" fill="#0a1f3d" stroke={color} strokeWidth="2" />
        <text x={cx} y={cy+4} fontFamily="monospace" fontSize="9" fill={color} textAnchor="middle" fontWeight="bold">{label}</text>
      </g>
    ))}

    {/* Misconfiguration warnings */}
    <g filter="url(#glow-c)">
      <rect x="183" y="253" width="16" height="14" rx="2" fill="#e8a855" opacity="0.95" />
      <text x="191" y="263" fontFamily="monospace" fontSize="7" fill="#fff" textAnchor="middle">!</text>
    </g>
    <g filter="url(#glow-c)">
      <rect x="233" y="253" width="16" height="14" rx="2" fill="#e8555a" opacity="0.95" />
      <text x="241" y="263" fontFamily="monospace" fontSize="7" fill="#fff" textAnchor="middle">!</text>
    </g>

    {/* Left status panel */}
    <rect x="15" y="60" width="112" height="160" rx="6" fill="#0a1f3d" stroke="#2a7fe8" strokeWidth="1.5" />
    <text x="71" y="78" fontFamily="monospace" fontSize="8" fill="#5ba3f5" textAnchor="middle">FINDINGS</text>
    <line x1="15" y1="82" x2="127" y2="82" stroke="#1a3a6a" strokeWidth="1" />
    <text x="25" y="96" fontFamily="monospace" fontSize="8" fill="#e8555a">✗ Public S3 bucket</text>
    <text x="25" y="110" fontFamily="monospace" fontSize="8" fill="#e8555a">✗ Root keys active</text>
    <text x="25" y="124" fontFamily="monospace" fontSize="8" fill="#e8a855">⚠ Weak IAM role</text>
    <text x="25" y="138" fontFamily="monospace" fontSize="8" fill="#e8a855">⚠ No MFA enforced</text>
    <text x="25" y="152" fontFamily="monospace" fontSize="8" fill="#55e87a">✓ VPC isolated</text>
    <text x="25" y="166" fontFamily="monospace" fontSize="8" fill="#55e87a">✓ Logs enabled</text>
    <text x="25" y="180" fontFamily="monospace" fontSize="8" fill="#2a7fe8">→ 2 critical</text>
    <text x="25" y="194" fontFamily="monospace" fontSize="8" fill="#2a7fe8">→ 2 high risk</text>
    <text x="25" y="208" fontFamily="monospace" fontSize="8" fill="#2a7fe8">→ scanning...</text>

    {/* Right status panel */}
    <rect x="393" y="60" width="112" height="130" rx="6" fill="#0a1f3d" stroke="#2a7fe8" strokeWidth="1.5" />
    <text x="449" y="78" fontFamily="monospace" fontSize="8" fill="#5ba3f5" textAnchor="middle">COMPLIANCE</text>
    <line x1="393" y1="82" x2="505" y2="82" stroke="#1a3a6a" strokeWidth="1" />
    <text x="403" y="96" fontFamily="monospace" fontSize="8" fill="#55e87a">✓ SOC 2 Type II</text>
    <text x="403" y="110" fontFamily="monospace" fontSize="8" fill="#e8a855">⚠ ISO 27001</text>
    <text x="403" y="124" fontFamily="monospace" fontSize="8" fill="#e8555a">✗ PCI DSS</text>
    <text x="403" y="138" fontFamily="monospace" fontSize="8" fill="#55e87a">✓ GDPR</text>
    <text x="403" y="152" fontFamily="monospace" fontSize="8" fill="#e8a855">⚠ HIPAA</text>
    <text x="403" y="166" fontFamily="monospace" fontSize="8" fill="#2a7fe8">Score: 68/100</text>
    <text x="403" y="180" fontFamily="monospace" fontSize="8" fill="#2a5a9a">→ remediating</text>

    {/* Connector lines from panels to cloud */}
    <line x1="127" y1="140" x2="148" y2="160" stroke="#2a7fe8" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
    <line x1="393" y1="140" x2="372" y2="160" stroke="#2a7fe8" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />

    {/* Bottom text */}
    <text x="260" y="350" fontFamily="monospace" fontSize="9" fill="#5ba3f5" textAnchor="middle">Cloud Security Posture Management</text>
  </svg>
);
