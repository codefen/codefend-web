// DifferencesIllustrations.jsx
// SVG components replacing red images in mainDifferences and ourSoftware sections

// ─── Icon 1: On-Demand Pentesting (target / radar) ──────────────────────────
export const DifIcon1 = () => (
  <svg width="64" height="64" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="dif-icon1-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#2a7fe8" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#071428" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Outer glow */}
    <circle cx="30" cy="30" r="28" fill="url(#dif-icon1-glow)" />
    {/* Outer ring dashed */}
    <circle cx="30" cy="30" r="24" stroke="#2a7fe8" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.7" />
    {/* Mid ring */}
    <circle cx="30" cy="30" r="17" stroke="#5ba3f5" strokeWidth="2" fill="none" opacity="0.9" />
    {/* Inner ring */}
    <circle cx="30" cy="30" r="10" stroke="#2a7fe8" strokeWidth="2.5" fill="rgba(42,127,232,0.08)" />
    {/* Center dot */}
    <circle cx="30" cy="30" r="4" fill="#5ba3f5" />
    {/* Crosshair lines */}
    <line x1="30" y1="2" x2="30" y2="13" stroke="#2a7fe8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="30" y1="47" x2="30" y2="58" stroke="#2a7fe8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="2" y1="30" x2="13" y2="30" stroke="#2a7fe8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="47" y1="30" x2="58" y2="30" stroke="#2a7fe8" strokeWidth="2.5" strokeLinecap="round" />
    {/* Scan arc */}
    <path d="M30 30 L54 30 A24 24 0 0 0 30 6 Z" fill="#2a7fe8" opacity="0.18" />
  </svg>
);

// ─── Icon 2: Issues Communicated Quickly (alert / pulse) ────────────────────
export const DifIcon2 = () => (
  <svg width="64" height="64" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="dif-icon2-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#2a7fe8" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#071428" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="30" cy="30" r="28" fill="url(#dif-icon2-glow)" />
    {/* Outer pulse ring */}
    <circle cx="30" cy="30" r="24" stroke="#2a7fe8" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="3 4" />
    {/* Bell body */}
    <path
      d="M30 11 C22 11 16 18 16 27 L16 36 L11 41 L49 41 L44 36 L44 27 C44 18 38 11 30 11 Z"
      fill="rgba(42,127,232,0.12)" stroke="#5ba3f5" strokeWidth="2" strokeLinejoin="round"
    />
    {/* Bell bottom cap */}
    <path d="M25 41 Q30 48 35 41" fill="none" stroke="#5ba3f5" strokeWidth="2.5" strokeLinecap="round" />
    {/* Lightning bolt */}
    <path
      d="M34 13 L27 27 L34 27 L26 45 L42 25 L34 25 Z"
      fill="#2a7fe8" opacity="0.95"
      stroke="#93c5fd" strokeWidth="0.6"
    />
    {/* Alert dot */}
    <circle cx="46" cy="14" r="5" fill="#2a7fe8" opacity="0.95" />
    <circle cx="46" cy="14" r="8" fill="none" stroke="#2a7fe8" strokeWidth="1.5" opacity="0.5" />
    <circle cx="46" cy="14" r="3" fill="#93c5fd" />
  </svg>
);

// ─── Icon 3: Connected with Real Hackers (network graph) ────────────────────
export const DifIcon3 = () => (
  <svg width="64" height="64" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="dif-icon3-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#2a7fe8" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#071428" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="30" cy="30" r="28" fill="url(#dif-icon3-glow)" />
    {/* Outer dashed ring */}
    <circle cx="30" cy="30" r="24" stroke="#2a7fe8" strokeWidth="1" fill="none" opacity="0.35" strokeDasharray="3 5" />
    {/* Network edges */}
    <line x1="30" y1="30" x2="10" y2="14" stroke="#2a7fe8" strokeWidth="1.8" opacity="0.75" />
    <line x1="30" y1="30" x2="50" y2="14" stroke="#2a7fe8" strokeWidth="1.8" opacity="0.75" />
    <line x1="30" y1="30" x2="10" y2="46" stroke="#2a7fe8" strokeWidth="1.8" opacity="0.75" />
    <line x1="30" y1="30" x2="50" y2="46" stroke="#2a7fe8" strokeWidth="1.8" opacity="0.75" />
    <line x1="30" y1="30" x2="30" y2="7" stroke="#5ba3f5" strokeWidth="1.8" opacity="0.75" />
    <line x1="10" y1="14" x2="10" y2="46" stroke="#2a7fe8" strokeWidth="1" opacity="0.45" />
    <line x1="50" y1="14" x2="50" y2="46" stroke="#2a7fe8" strokeWidth="1" opacity="0.45" />
    {/* Peripheral nodes */}
    <circle cx="10" cy="14" r="4.5" fill="#0d2444" stroke="#2a7fe8" strokeWidth="2" />
    <circle cx="50" cy="14" r="4.5" fill="#0d2444" stroke="#2a7fe8" strokeWidth="2" />
    <circle cx="10" cy="46" r="4.5" fill="#0d2444" stroke="#2a7fe8" strokeWidth="2" />
    <circle cx="50" cy="46" r="4.5" fill="#0d2444" stroke="#2a7fe8" strokeWidth="2" />
    <circle cx="30" cy="7" r="4" fill="#0d2444" stroke="#5ba3f5" strokeWidth="2" />
    {/* Center hub */}
    <circle cx="30" cy="30" r="9" fill="#0d2444" stroke="#5ba3f5" strokeWidth="2.5" />
    <circle cx="30" cy="30" r="5" fill="#2a7fe8" opacity="0.95" />
    <circle cx="30" cy="30" r="2.5" fill="#93c5fd" />
  </svg>
);

// ─── Comparison Table SVG (bilingual) ───────────────────────────────────────
const TABLE_DATA = {
  en: {
    col1: "CODEFEND",
    col2: "TRADITIONAL",
    rows: [
      "Continuous monitoring",
      "On-demand pentesting",
      "Real-time alerts",
      "Hacker intelligence",
      "Web-based platform",
      "Daily scans",
      "Transparent pricing",
    ],
  },
  es: {
    col1: "CODEFEND",
    col2: "TRADICIONAL",
    rows: [
      "Monitoreo continuo",
      "Pentesting a demanda",
      "Alertas en tiempo real",
      "Inteligencia de hackers",
      "Plataforma web",
      "Escaneos diarios",
      "Precios transparentes",
    ],
  },
};

const codefend_check = [true, true, true, true, true, true, true];
const traditional_check = [false, false, false, false, false, false, false];

export const ComparisonTableSVG = ({ lang = "en" }) => {
  const d = TABLE_DATA[lang] || TABLE_DATA.en;
  const W = 580;
  const rowH = 48;
  const headerH = 60;
  const totalH = headerH + d.rows.length * rowH + 20;
  // Column positions: feature label from left, then Codefend col, then Traditional col
  const col1X = 350;   // Codefend column center
  const col2X = 480;   // Traditional column center
  const colW = 100;    // width of each data column

  return (
    <svg
      width={W}
      height={totalH}
      viewBox={`0 0 ${W} ${totalH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: W, height: "auto", borderRadius: 12 }}
    >
      <defs>
        <linearGradient id="ctHdr" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#071428" />
          <stop offset="100%" stopColor="#0d2444" />
        </linearGradient>
        <linearGradient id="ctBlueCol" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a6fd4" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#071428" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width={W} height={totalH} rx={12} fill="#07192f" />

      {/* Header */}
      <rect width={W} height={headerH} rx={12} fill="url(#ctHdr)" />
      <rect y={headerH - 12} width={W} height={12} fill="url(#ctHdr)" />

      {/* Blue column highlight under Codefend */}
      <rect x={col1X - colW / 2} width={colW} height={totalH} fill="url(#ctBlueCol)" />

      {/* Header — FEATURES label */}
      <text x={160} y={38} textAnchor="middle" fill="#8ab4d8" fontSize={11} fontFamily="monospace" letterSpacing={2}>
        FEATURES
      </text>

      {/* Header — CODEFEND */}
      <text x={col1X} y={32} textAnchor="middle" fill="#2a7fe8" fontSize={15} fontWeight="700" fontFamily="monospace" letterSpacing={1}>
        {d.col1}
      </text>
      <rect x={col1X - 44} y={40} width={88} height={3} rx={2} fill="#2a7fe8" opacity="0.8" />

      {/* Header — TRADITIONAL */}
      <text x={col2X} y={38} textAnchor="middle" fill="#4a6080" fontSize={12} fontFamily="monospace" letterSpacing={1}>
        {d.col2}
      </text>

      {/* Rows */}
      {d.rows.map((label, i) => {
        const y = headerH + i * rowH;
        const isEven = i % 2 === 0;
        const textY = y + rowH / 2 + 5;
        const has1 = codefend_check[i];
        const has2 = traditional_check[i];
        return (
          <g key={i}>
            {isEven && <rect x={0} y={y} width={W} height={rowH} fill="#ffffff" fillOpacity={0.028} />}
            <line x1={0} y1={y} x2={W} y2={y} stroke="#1a3a5c" strokeWidth={0.5} />
            {/* Feature label */}
            <text x={24} y={textY} fill="#8ab4d8" fontSize={13.5} fontFamily="system-ui, sans-serif">
              {label}
            </text>
            {/* Codefend check */}
            {has1 ? (
              <g transform={`translate(${col1X - 11}, ${textY - 13})`}>
                <circle cx={11} cy={11} r={11} fill="#1a6fd4" fillOpacity="0.22" />
                <path d="M4 11 L9 16 L18 5" stroke="#5ba3f5" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
              </g>
            ) : (
              <g transform={`translate(${col1X - 11}, ${textY - 13})`}>
                <path d="M5 5 L17 17 M17 5 L5 17" stroke="#3a5070" strokeWidth={2.5} strokeLinecap="round" />
              </g>
            )}
            {/* Traditional cross */}
            {has2 ? (
              <g transform={`translate(${col2X - 11}, ${textY - 13})`}>
                <path d="M4 11 L9 16 L18 5" stroke="#5ba3f5" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
              </g>
            ) : (
              <g transform={`translate(${col2X - 11}, ${textY - 13})`}>
                <path d="M5 5 L17 17 M17 5 L5 17" stroke="#4a3040" strokeWidth={2.5} strokeLinecap="round" />
              </g>
            )}
          </g>
        );
      })}

      {/* Bottom accent bar */}
      <rect y={totalH - 5} width={W} height={5} rx={0} fill="#2a7fe8" opacity="0.45" />

      {/* Column dividers */}
      <line x1={col1X - colW / 2} y1={headerH} x2={col1X - colW / 2} y2={totalH} stroke="#1a3a5c" strokeWidth={1} />
      <line x1={col1X + colW / 2} y1={headerH} x2={col1X + colW / 2} y2={totalH} stroke="#1a3a5c" strokeWidth={1} />
    </svg>
  );
};

// ─── Vulnerability Panel SVG (replaces software-img1.webp) ──────────────────
export const VulnerabilityPanelSVG = () => {
  const vulns = [
    { id: "CVF-001", name: "SQL Injection in /api/login", sev: "CRITICAL", sevColor: "#ef4444", status: "Open", score: "9.8" },
    { id: "CVF-002", name: "XSS in user profile endpoint", sev: "HIGH", sevColor: "#f97316", status: "Mitigating", score: "7.5" },
    { id: "CVF-003", name: "Outdated TLS 1.0 configuration", sev: "HIGH", sevColor: "#f97316", status: "Open", score: "7.1" },
    { id: "CVF-004", name: "Directory traversal /static/", sev: "MEDIUM", sevColor: "#eab308", status: "Fixed", score: "5.4" },
    { id: "CVF-005", name: "Missing rate limiting on API", sev: "MEDIUM", sevColor: "#eab308", status: "Open", score: "4.8" },
    { id: "CVF-006", name: "HTTP security headers absent", sev: "LOW", sevColor: "#22c55e", status: "Fixed", score: "2.9" },
    { id: "CVF-007", name: "Session cookie without Secure flag", sev: "LOW", sevColor: "#22c55e", status: "Open", score: "2.1" },
  ];

  const W = 620;
  const H = 460;
  const rowH = 46;
  const headerH = 48;
  const toolbarH = 50;
  const statsH = 54;
  const tableTop = toolbarH + statsH + headerH;

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: W, height: "auto", borderRadius: 10, display: "block" }}
    >
      <defs>
        <linearGradient id="vpBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#071428" />
          <stop offset="100%" stopColor="#020b18" />
        </linearGradient>
        <linearGradient id="vpToolbar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1f3d" />
          <stop offset="100%" stopColor="#071428" />
        </linearGradient>
        <clipPath id="vpClip">
          <rect width={W} height={H} rx={10} />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width={W} height={H} rx={10} fill="url(#vpBg)" />

      {/* Toolbar */}
      <rect width={W} height={toolbarH} fill="url(#vpToolbar)" clipPath="url(#vpClip)" />
      <rect y={toolbarH} width={W} height={1} fill="#1a3a5c" />

      {/* Window dots */}
      <circle cx={18} cy={25} r={5} fill="#ef4444" opacity={0.8} />
      <circle cx={34} cy={25} r={5} fill="#eab308" opacity={0.8} />
      <circle cx={50} cy={25} r={5} fill="#22c55e" opacity={0.8} />

      {/* App title */}
      <text x={W / 2} y={31} textAnchor="middle" fill="#5ba3f5" fontSize={13} fontFamily="monospace" fontWeight="600" letterSpacing={2}>
        VULNERABILITY MANAGER
      </text>

      {/* Filter bar */}
      <rect x={14} y={toolbarH + 10} width={160} height={28} rx={5} fill="#0d2444" stroke="#1a3a5c" strokeWidth={1} />
      <text x={94} y={toolbarH + 28} textAnchor="middle" fill="#4a7aaa" fontSize={11} fontFamily="monospace">
        🔍 Search findings...
      </text>
      {/* Filter chips */}
      {["All", "Critical", "High", "Medium"].map((label, i) => (
        <g key={i}>
          <rect
            x={184 + i * 72} y={toolbarH + 10} width={64} height={28} rx={14}
            fill={i === 0 ? "#1a6fd4" : "#0a1f3d"}
            stroke={i === 0 ? "#2a7fe8" : "#1a3a5c"} strokeWidth={1}
          />
          <text
            x={184 + i * 72 + 32} y={toolbarH + 28}
            textAnchor="middle" fill={i === 0 ? "#fff" : "#4a7aaa"} fontSize={11} fontFamily="monospace"
          >
            {label}
          </text>
        </g>
      ))}

      {/* Stats row */}
      {[
        { label: "TOTAL", val: "24", color: "#5ba3f5" },
        { label: "CRITICAL", val: "3", color: "#ef4444" },
        { label: "HIGH", val: "7", color: "#f97316" },
        { label: "FIXED", val: "11", color: "#22c55e" },
      ].map((s, i) => (
        <g key={i}>
          <rect x={14 + i * 150} y={toolbarH + 48} width={138} height={42} rx={6} fill="#0a1f3d" stroke="#1a3a5c" strokeWidth={1} />
          <text x={14 + i * 150 + 69} y={toolbarH + 66} textAnchor="middle" fill={s.color} fontSize={20} fontWeight="700" fontFamily="monospace">
            {s.val}
          </text>
          <text x={14 + i * 150 + 69} y={toolbarH + 82} textAnchor="middle" fill="#3a5a7a" fontSize={9} fontFamily="monospace" letterSpacing={1}>
            {s.label}
          </text>
        </g>
      ))}

      {/* Table header */}
      <rect x={0} y={tableTop} width={W} height={headerH} fill="#0d2444" />
      <line x1={0} y1={tableTop} x2={W} y2={tableTop} stroke="#1a3a5c" strokeWidth={1} />
      {[
        { label: "ID", x: 20 },
        { label: "DESCRIPTION", x: 80 },
        { label: "SEVERITY", x: 380 },
        { label: "CVSS", x: 466 },
        { label: "STATUS", x: 526 },
      ].map((col) => (
        <text key={col.label} x={col.x} y={tableTop + 28} fill="#3a6090" fontSize={10} fontFamily="monospace" fontWeight="600" letterSpacing={1}>
          {col.label}
        </text>
      ))}
      <line x1={0} y1={tableTop + headerH} x2={W} y2={tableTop + headerH} stroke="#1a3a5c" strokeWidth={1} />

      {/* Rows */}
      {vulns.map((v, i) => {
        const y = tableTop + headerH + i * rowH;
        if (y + rowH > H) return null;
        const isEven = i % 2 === 0;
        const midY = y + rowH / 2;
        const textY = midY + 4;
        const statusColor = v.status === "Fixed" ? "#22c55e" : v.status === "Mitigating" ? "#eab308" : "#5ba3f5";
        return (
          <g key={v.id}>
            {isEven && <rect x={0} y={y} width={W} height={rowH} fill="#ffffff" fillOpacity={0.02} />}
            <line x1={0} y1={y} x2={W} y2={y} stroke="#0f2540" strokeWidth={0.5} />
            {/* ID */}
            <text x={20} y={textY} fill="#3a6090" fontSize={10} fontFamily="monospace">{v.id}</text>
            {/* Name */}
            <text x={80} y={textY} fill="#8ab4d8" fontSize={12} fontFamily="system-ui, sans-serif">
              {v.name.length > 34 ? v.name.slice(0, 34) + "…" : v.name}
            </text>
            {/* Severity badge */}
            <rect x={374} y={midY - 10} width={72} height={20} rx={4} fill={v.sevColor} fillOpacity={0.15} />
            <text x={410} y={textY} textAnchor="middle" fill={v.sevColor} fontSize={10} fontFamily="monospace" fontWeight="600">
              {v.sev}
            </text>
            {/* CVSS score */}
            <text x={466} y={textY} fill={v.sevColor} fontSize={12} fontFamily="monospace" fontWeight="700">{v.score}</text>
            {/* Status */}
            <text x={526} y={textY} fill={statusColor} fontSize={10} fontFamily="monospace">{v.status}</text>
          </g>
        );
      })}

      {/* Bottom gradient fade */}
      <defs>
        <linearGradient id="vpFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020b18" stopOpacity="0" />
          <stop offset="100%" stopColor="#020b18" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect y={H - 60} width={W} height={60} fill="url(#vpFade)" />

      {/* Bottom bar */}
      <rect y={H - 8} width={W} height={8} rx={0} fill="#2a7fe8" opacity={0.5} />
    </svg>
  );
};
