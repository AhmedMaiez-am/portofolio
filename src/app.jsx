import { useState, useEffect, useRef, useContext, createContext } from "react";
import { AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineGithub, AiOutlineFacebook, AiOutlineSearch } from "react-icons/ai";
import { FiMoon, FiSun, FiArrowUp, FiVolume2, FiVolumeX, FiHome, FiBriefcase, FiCode, FiFolder, FiMail, FiDownload, FiPlay, FiHeart, FiTrendingUp } from "react-icons/fi";
import photo from "./props/profile.webp";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/maiez-ahmed-dhia-eddine-b75ba4180/",
  github: "https://github.com/AhmedMaiez-am",
  whatsapp: "https://api.whatsapp.com/send?phone=21653874245&text=Hi",
  facebook: "https://www.facebook.com/DhiaMaiez/",
  email: "mailto:ahmedmaiez98@gmail.com",
};

const sfx = { on: false, ctx: null };
function beep(f = 520, d = 0.06) {
  if (!sfx.on) return;
  try {
    sfx.ctx = sfx.ctx || new (window.AudioContext || window.webkitAudioContext)();
    const o = sfx.ctx.createOscillator(), g = sfx.ctx.createGain();
    o.frequency.value = f; g.gain.value = 0.04;
    o.connect(g); g.connect(sfx.ctx.destination); o.start(); o.stop(sfx.ctx.currentTime + d);
  } catch (e) {}
}
const vibe = () => { if (sfx.on && navigator.vibrate) navigator.vibrate(18); };

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const LINES = [
  ["Item", "AL-EXT", "Extensions and event subscribers", "1", "Project"],
  ["Item", "API-PG", "API pages and web services", "1", "Project"],
  ["Item", "RDLC", "Reports that survive layout changes", "1", "Project"],
  ["Resource", "REACT", "Front ends that talk to Business Central", "1", "Project"],
  ["Item", "COFFEE", "Tunisian coffee, strong", "3", "Cup"],
];

const TILES = [
  ["Extensions in AL", "Table and page extensions, event subscribers and codeunits that leave the base app untouched.", "t1"],
  ["API pages and web services", "REST and SOAP endpoints so mobile and web apps can talk to Business Central.", "t2"],
  ["Reports", "RDLC and dataset work: extra fields, multi-select filters, layouts people can print.", "t3"],
  ["C/AL and upgrades", "Classic NAV 2018 code, and moving versions forward to current Business Central.", "t4"],
  ["Cloud and on-premises", "5+ on-premises servers set up with IIS, SSL and authentication, plus extensions delivered on the cloud.", "t5"],
  ["Web front ends", "React and Node apps connected to Business Central, from order entry to invoicing.", "t6"],
];

const LEDGER = [
  { date: "Jul 2023 to now", type: "Job", k: "work", title: "Business Central Consultant", place: "Smart Business Solution, Tunis", open: true,
    more: ["Custom solutions for purchasing and sales: pricing, free-quantity rules, request lines and workflows.",
      "Multi-level item classification and mapping for simpler navigation of item data.",
      "Fleet and transport features: operational tracking, reporting, vehicle data and fuel logic.",
      "REST and OData integrations that consume external APIs and post their data into Business Central and NAV, including automotive manufacturer data.",
      "E-invoicing and e-reporting: accounting documents, structured XML files and external platforms.",
      "Navision to Business Central migrations with code adaptation and data integrity checks, across multi-company and multi-environment setups.",
      "ERP-web interfaces in React, Node.js and MongoDB, deployed on Windows Server with PM2.",
      "User training, plus corrective and evolutive maintenance."] },
  { date: "2020 to 2023", type: "Education", k: "edu", title: "Engineering degree, web development", place: "ESPRIT, Tunis", more: ["Graduated with honors (Très Bien).", "Projects in MERN, Symfony, JavaFX and a full DevOps pipeline."] },
  { date: "Jan to Jun 2023", type: "Graduation project", k: "project", title: "Web platform connected to Business Central", place: "Smart Business Solution, Tunis", more: ["Sales order placement and invoicing from the web, synced with the ERP."] },
  { date: "Jul to Sep 2022", type: "Internship", k: "intern", title: "Task and resource management app", place: "Tunisia Smart Technoparks, Tunis", more: ["Built for the municipality of Ras Jebel."] },
  { date: "Jan to Jun 2020", type: "Graduation project", k: "project", title: "Mixed reality in Unreal Engine 4", place: "DigiArt LivingLab, Nabeul", more: ["AR and VR solution for children with autism and their parents."] },
  { date: "2017 to 2020", type: "Education", k: "edu", title: "Higher technician diploma, software development", place: "ISET Nabeul", more: ["Graduated with honors (Très Bien)."] },
  { date: "Jan to Feb 2019", type: "Internship", k: "intern", title: "Serious game: Garbage Collector in Java", place: "DigiArt LivingLab, Nabeul", more: ["Gamified teaching of Java memory concepts."] },
  { date: "Jan 2018", type: "Internship", k: "intern", title: "Introductory internship", place: "STB Bank, Ras Jebel", more: [] },
  { date: "2017", type: "Education", k: "edu", title: "Bachelor's degree in Technical Science", place: "Mohamed Ali Ennabi High School, Ras Jebel", more: [] },
];

const PROJECTS = [
  { name: "Web platform for Business Central", tag: "Business Central", stack: "Web and Business Central", year: "2023", text: "Order placement and invoicing flow connected to the ERP. Client work, so no public code.", links: [] },
  { name: "Ras Jebel municipality app", tag: "Web", stack: "MERN", year: "2022", text: "Task and resource management for a municipality.", links: [["GitHub", "https://github.com/RJInnovationCenter/Municipalite-MERN_Stack"]] },
  { name: "E-learning website", tag: "Web", stack: "MERN", year: "2022", text: "Online learning platform with MongoDB, Express, React and Node.", links: [["GitHub", "https://github.com/Maryem726/BesTest"]] },
  { name: "DevOps pipeline", tag: "DevOps", stack: "Spring Boot, Jenkins, Docker", year: "2022", text: "Maven, JUnit, SonarQube, Jenkins, Docker Compose, Nexus, Prometheus and Grafana around a Spring Boot app.", links: [["GitHub", "https://github.com/AhmedMaiez-am/DevOps-Backend"]] },
  { name: "E-learning application", tag: "Web", stack: "JavaFX, Symfony, CodeNameOne", year: "2021", text: "One product in three versions: desktop, web and mobile.", links: [["Web", "https://github.com/AhmedMaiez-am/Web-Masters-PIDEV"], ["Desktop", "https://github.com/AhmedMaiez-am/PIDEV-JAVAFX"]] },
];

const COMMANDS = [
  ["What I build", "build"], ["AL code", "code"], ["Run a codeunit", "code"], ["Business Central work", "bcwork"],
  ["Experience", "ledger"], ["Projects", "projects"], ["Contact Ahmed", "contact"], ["Hire Ahmed", "contact"],
  ["Post a sales invoice", "top"], ["Toolbox", "toolbox"], ["Switch theme", "@theme"], ["Show error", "@error"], ["Open terminal", "@term"],
];

const BCWORK = [
  ["Fleet, tyres and fuel", "AL extension", ["Install and permutation history for every tyre", "Maintenance records per vehicle", "Fuel card imports straight from Excel"], ["AL", "Excel import", "Fleet"]],
  ["Equipment and GMAO", "Data model", ["One equipment table merging the truck fleet", "Resource-based vehicle and tanker pages kept in sync with it", "No double entry for the people using them"], ["Tables", "Pages", "Resources"]],
  ["PDA inventory web services", "API", ["26 REST API pages under one publisher", "SOAP codeunits for scanner transactions", "Built for a warehouse app on Business Central cloud"], ["REST", "SOAP", "OData"]],
  ["Version 17 to 25 migration", "Upgrade", ["On-premise upgrade to current Business Central", "Customizations moved forward to the new version"], ["Upgrade", "AL", "On-premise"]],
  ["Multi-section RDLC report", "Reporting", ["Built on NAV 2018 in C/AL", "Vendor receipts, invoices and unmatched entries in one report"], ["RDLC", "C/AL", "NAV 2018"]],
  ["On-premises and cloud setup", "Infrastructure", ["5+ on-premises servers set up", "Certificates, authentication, IIS and service tiers", "Extensions delivered on cloud tenants too"], ["IIS", "SSL", "Cloud", "On-premises"]],
  ["E-invoicing and e-reporting", "Compliance", ["Accounting documents turned into structured XML files", "Interfaces with external platforms"], ["XML", "AL", "E-invoicing"]],
  ["External API integrations", "Integration", ["Consume external REST APIs from AL and C/AL", "Post the received data into Business Central and NAV", "Used on cloud and on-premises"], ["REST", "AL", "C/AL"]],
  ["Purchase module improvements", "Process", ["Fixes driven by a client audit report", "Purchase lines generated from free quantities"], ["AL", "Purchasing"]],
];

function BCCard({ c: [t, kind, items, tags] }) {
  const mv = (e) => {
    const el = e.currentTarget, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", -y * 7 + "deg"); el.style.setProperty("--ry", x * 7 + "deg");
    el.style.setProperty("--mx", (x + 0.5) * 100 + "%"); el.style.setProperty("--my", (y + 0.5) * 100 + "%");
  };
  const lv = (e) => { e.currentTarget.style.setProperty("--rx", "0deg"); e.currentTarget.style.setProperty("--ry", "0deg"); };
  return (
    <article className="bc rv" onMouseMove={mv} onMouseLeave={lv}>
      <span className="kind">{kind}</span>
      <h3>{t}</h3>
      <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
      <div className="tags">{tags.map((x) => <span key={x}>{x}</span>)}</div>
    </article>
  );
}

const KW = new Set("codeunit,table,tableextension,page,procedure,var,begin,end,if,then,else,exit,local,field,layout,area,repeater,error,label,record,decimal,code,integer,boolean,true,false,not,or,and,for,to,do,until,repeat".split(","));
function hl(line) {
  const re = /(\/\/.*)|('(?:[^']|'')*')|("[^"]*")|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)/g;
  const out = []; let last = 0, m, k = 0;
  while ((m = re.exec(line))) {
    if (m.index > last) out.push(line.slice(last, m.index));
    const t = m[0];
    const c = m[1] ? "cm" : m[2] ? "st" : m[3] ? "id" : m[4] ? "nu" : KW.has(t.toLowerCase()) ? "kw" : null;
    out.push(c ? <span key={k++} className={c}>{t}</span> : t);
    last = m.index + t.length;
  }
  if (last < line.length) out.push(line.slice(last));
  return out;
}

const SNIPS = [
  ["FreeQuantityMgt.al", `codeunit 50101 "Free Quantity Mgt."
{
    // Free means free. Not "free, but please invoice it later".
    procedure CreateFreeLines(var PurchHeader: Record "Purchase Header")
    var
        PurchLine: Record "Purchase Line";
        FreeLine: Record "Purchase Line";
        NextLineNo: Integer;
    begin
        FreeLine.SetRange("Document Type", PurchHeader."Document Type");
        FreeLine.SetRange("Document No.", PurchHeader."No.");
        if FreeLine.FindLast() then
            NextLineNo := FreeLine."Line No." + 10000
        else
            NextLineNo := 10000;

        PurchLine.CopyFilters(FreeLine);
        PurchLine.SetFilter("Free Quantity", '>0');
        if PurchLine.FindSet() then
            repeat
                FreeLine.Init();
                FreeLine."Line No." := NextLineNo;
                FreeLine.Insert(true);
                FreeLine.Validate(Type, PurchLine.Type);
                FreeLine.Validate("No.", PurchLine."No.");
                FreeLine.Validate(Quantity, PurchLine."Free Quantity");
                FreeLine.Validate("Direct Unit Cost", 0);
                FreeLine.Modify(true);
                NextLineNo += 10000;
            until PurchLine.Next() = 0;
    end;
}`],
  ["FuelConsumptionMgt.al", `codeunit 50110 "Fuel Consumption Mgt."
{
    procedure ExpectedLitres(VehicleType: Code[20]; DistanceKm: Decimal): Decimal
    var
        FuelRate: Record "Fuel Rate";
        NoRateErr: Label 'No fuel rate for vehicle type %1. Trucks do not run on optimism.';
    begin
        if not FuelRate.Get(VehicleType) then
            Error(NoRateErr, VehicleType);
        exit(Round(DistanceKm * FuelRate."Litres per 100 km" / 100, 0.01));
    end;

    procedure IsSuspicious(Expected: Decimal; Actual: Decimal; TolerancePct: Decimal): Boolean
    begin
        // The driver says it was the wind. The codeunit disagrees.
        exit(Actual > Expected * (1 + TolerancePct / 100));
    end;
}`],
  ["ItemStockApi.al", `page 50120 "Item Stock API"
{
    PageType = API;
    APIPublisher = 'ahmed';
    APIGroup = 'portfolio';
    APIVersion = 'v1.0';
    EntityName = 'itemStock';
    EntitySetName = 'itemStocks';
    SourceTable = Item;
    DelayedInsert = true;
    ODataKeyFields = SystemId;

    layout
    {
        area(Content)
        {
            repeater(Group)
            {
                field(id; Rec.SystemId) { Editable = false; }
                field(number; Rec."No.") { }
                field(displayName; Rec.Description) { }
                // Your scanner app will thank you.
                field(inventory; Rec.Inventory) { Editable = false; }
            }
        }
    }
}`],
];

function CodeShow() {
  const [i, setI] = useState(0);
  const { u } = useContext(Ctx);
  const [ok, setOk] = useState(false);
  const copy = () => {
    try { navigator.clipboard.writeText(SNIPS[i][1]); } catch (e) {}
    setOk(true); setTimeout(() => setOk(false), 1500);
  };
  return (
    <section id="code" className="sec">
      <h2 className="rv">{u.codeH}</h2>
      <p className="sub rv">{u.codeSub}</p>
      <div className="win rv">
        <div className="win-bar">
          <span className="dots"><i /><i /><i /></span>
          <div className="tabs" role="tablist">
            {SNIPS.map(([n], k) => (<button key={n} role="tab" aria-selected={i === k} className={i === k ? "on" : ""} onClick={() => setI(k)}>{n}</button>))}
          </div>
          <button className="copy" onClick={copy}>{ok ? u.copied : u.copy}</button>
        </div>
        <pre key={i}><code>{SNIPS[i][1].split("\n").map((l, k) => <div key={k} className="ln">{hl(l)}</div>)}</code></pre>
      </div>
    </section>
  );
}

const TOOLS = [
  ["Business Central", ["AL", "C/AL", "API pages", "REST and SOAP", "RDLC reports", "Extensions and events", "Upgrades", "External APIs", "OData", "E-invoicing and XML", "Cloud and on-premises", "IIS, SSL and PM2"]],
  ["Web", ["React", "Node.js", "MongoDB", "JavaScript", "TypeScript", "HTML and CSS", "Angular", "Laravel", "Symfony"]],
  ["Languages", ["Arabic, native", "French, fluent", "English, fluent", "German, basic", "Spanish, basic"]],
  ["Also on my record", ["Java", "Spring Boot", "Python", "SQL", "Docker", "Jenkins", "Unreal Engine", "Office"]],
];

function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 40 }, (_, i) => <i key={i} style={{ "--x": (i * 37) % 100, "--r": (i * 53) % 360 + "deg", "--d": i * 30 + "ms", "--c": ["#FFB81C", "#0F7C8A", "#2A9D63", "#C4314B"][i % 4] }} />)}
    </div>
  );
}

function Count({ to, label, plus }) {
  const ref = useRef();
  const [v, setV] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setV(to);
      const t0 = performance.now();
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / 1400);
        setV(Math.round(to * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <div ref={ref} className="stat rv"><strong>{v}{plus ? "+" : ""}</strong><span>{label}</span></div>;
}

const GRAPH = [
  ["al", 400, 180, ["AL", "The language behind every extension I write: tables, pages, codeunits and events."], ["AL", "Le langage de chaque extension que j’écris : tables, pages, codeunits et événements."]],
  ["cal", 220, 300, ["C/AL", "Classic NAV code. I read it fluently and move it forward."], ["C/AL", "Le code NAV classique. Je le lis couramment et je le fais évoluer."]],
  ["api", 240, 100, ["API pages", "REST and OData endpoints that expose Business Central to other apps."], ["Pages API", "Points d’accès REST et OData qui exposent Business Central aux autres applications."]],
  ["ext", 180, 190, ["External APIs", "Consumed from AL and C/AL, with data mapped and posted into Business Central and NAV."], ["API externes", "Consommées depuis AL et C/AL, avec données transformées et publiées dans Business Central et NAV."]],
  ["inv", 560, 90, ["E-invoicing", "Accounting documents turned into structured XML files for external platforms."], ["E-invoicing", "Documents comptables transformés en fichiers XML structurés pour des plateformes externes."]],
  ["rep", 560, 290, ["Reports", "RDLC and dataset work, from NAV 2018 to current versions."], ["États", "RDLC et datasets, de NAV 2018 aux versions actuelles."]],
  ["mig", 400, 320, ["Upgrades", "Navision to Business Central, with code adapted and data integrity checked."], ["Mises à niveau", "De Navision vers Business Central, avec code adapté et intégrité des données contrôlée."]],
  ["web", 70, 110, ["React and Node", "ERP-web interfaces, dashboards and backends on top of Business Central data."], ["React et Node", "Interfaces ERP-web, tableaux de bord et backends sur les données Business Central."]],
  ["srv", 70, 240, ["Servers", "Windows Server, IIS, SSL and PM2 for on-premises and web deployments."], ["Serveurs", "Windows Server, IIS, SSL et PM2 pour les déploiements on-premise et web."]],
  ["fleet", 700, 250, ["Fleet", "Vehicles, tyres, fuel and maintenance tracking for transport clients."], ["Flotte", "Véhicules, pneus, carburant et entretien pour des clients du transport."]],
  ["buy", 660, 150, ["Purchasing", "Pricing, free-quantity rules, request lines and workflows."], ["Achats", "Tarifs, règles de quantités gratuites, lignes de demande et workflows."]],
];
const EDGES = [["al", "api"], ["al", "inv"], ["al", "fleet"], ["al", "buy"], ["al", "rep"], ["al", "mig"], ["al", "cal"], ["cal", "mig"], ["api", "ext"], ["api", "web"], ["api", "inv"], ["web", "srv"], ["mig", "srv"]];

function SkillGraph() {
  const { u, lang } = useContext(Ctx);
  const [sel, setSel] = useState("al");
  const L = lang === "fr" ? 4 : 3;
  const N = (id) => GRAPH.find((n) => n[0] === id);
  const lit = (id) => id === sel || EDGES.some(([a, b]) => (a === sel && b === id) || (b === sel && a === id));
  const cur = N(sel);
  return (
    <section id="graph" className="sec">
      <h2 className="rv">{u.graphH}</h2>
      <p className="sub rv">{u.graphSub}</p>
      <div className="graph rv">
        <svg viewBox="0 0 780 400" role="group" aria-label={u.graphH}>
          {EDGES.map(([a, b]) => (<line key={a + b} x1={N(a)[1]} y1={N(a)[2]} x2={N(b)[1]} y2={N(b)[2]} className={a === sel || b === sel ? "e lit" : "e"} />))}
          {GRAPH.map((n) => (
            <g key={n[0]} className={"node" + (n[0] === sel ? " sel" : "") + (lit(n[0]) ? "" : " dim")} transform={`translate(${n[1]} ${n[2]})`} tabIndex="0" role="button"
              onClick={() => { setSel(n[0]); beep(600, .05); }} onKeyDown={(e) => e.key === "Enter" && setSel(n[0])}>
              <circle r={n[0] === sel ? 32 : 24} />
              <text y={(n[0] === sel ? 32 : 24) + 18} textAnchor="middle">{n[L][0]}</text>
            </g>
          ))}
        </svg>
        <div className="ginfo" key={sel + lang}><h3>{cur[L][0]}</h3><p>{cur[L][1]}</p></div>
      </div>
    </section>
  );
}

function Terminal({ onClose }) {
  const [log, setLog] = useState(["Ahmed OS 3.0. Type help. Press Esc to leave."]);
  const [v, setV] = useState("");
  const ref = useRef(), end = useRef();
  useEffect(() => ref.current.focus(), []);
  useEffect(() => { if (end.current) end.current.scrollIntoView(); }, [log]);
  const m = (new Date().getFullYear() - 2023) * 12 + new Date().getMonth() - 6;
  const CMD = {
    help: ["help, al build, whoami, stats, skills, coffee, clear, exit"],
    "al build": ["Compiling Ahmed Maiez...", "✔ 0 errors, 0 warnings", "✔ 30+ API pages published", "✔ 5+ on-premises servers up", "✔ E-invoicing XML validated", "Build succeeded. Coffee level: critical."],
    whoami: ["Ahmed Dhia Eddine Maiez, Business Central consultant, Tunisia"],
    stats: [`experience: ${Math.floor(m / 12)} yr ${m % 12} mo`, "api pages: 30+", "servers set up: 5+", "migrations: Navision to Business Central", "bugs: only undocumented features"],
    skills: ["AL, C/AL, OData, REST, SOAP, RDLC, React, Node.js, MongoDB, IIS, PM2"],
    coffee: ["Brewing...", "Tunisian coffee, strong. Ready."],
  };
  const run = (e) => {
    e.preventDefault();
    const c = v.trim().toLowerCase();
    setV(""); beep(420, .03);
    if (c === "exit") return onClose();
    if (c === "clear") return setLog([]);
    setLog((l) => [...l, "> " + v, ...(CMD[c] || (c ? [`Error: '${c}' is not recognized. Did you mean 'help'?`] : []))]);
  };
  return (
    <div className="term" role="dialog" aria-label="Terminal">
      <button className="x" onClick={onClose} aria-label="Close">×</button>
      <div className="out">{log.map((l, i) => <div key={i}>{l}</div>)}<div ref={end} /></div>
      <form onSubmit={run}><span>&gt;</span><input ref={ref} value={v} onChange={(e) => setV(e.target.value)} aria-label="command" spellCheck="false" autoComplete="off" /></form>
    </div>
  );
}

function Marquee() {
  const w = ["Posting Date", "Ledger Entries", "FactBoxes", "Event Subscribers", "Dimensions", "Item Tracking", "OData", "Role Centers", "Page Extensions", "Codeunits", "Job Queue", "XMLports", "Tell Me"];
  return <div className="marq" aria-hidden="true"><div>{[...w, ...w].map((x, i) => <span key={i}>{x}</span>)}</div></div>;
}

function Process() {
  const { u } = useContext(Ctx);
  return (
    <section id="process" className="sec">
      <h2 className="rv">{u.procH}</h2>
      <p className="sub rv">{u.procSub}</p>
      <ol className="proc rv">{u.proc.map(([t, d], i) => (<li key={t} style={{ "--i": i }}><span className="num">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>))}</ol>
    </section>
  );
}

function ErrMuseum() {
  const { u } = useContext(Ctx);
  const [on, setOn] = useState({});
  return (
    <section id="errors" className="sec">
      <h2 className="rv">{u.errH}</h2>
      <p className="sub rv">{u.errSub} {u.errHint}</p>
      <div className="errs">
        {u.errs.map(([e, t], i) => (
          <button key={i} className={"flip rv" + (on[i] ? " on" : "")} aria-pressed={!!on[i]} onClick={() => { setOn({ ...on, [i]: !on[i] }); beep(on[i] ? 400 : 640, .05); }}>
            <span className="fi">
              <span className="ff"><b>{u.error}</b>{e}</span>
              <span className="fb">{t}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function OffClock() {
  const { u } = useContext(Ctx);
  const I = [FiPlay, FiHeart, FiTrendingUp];
  return (
    <section id="off" className="sec">
      <h2 className="rv">{u.offH}</h2>
      <div className="offs">{u.off.map(([t, d], i) => { const Ic = I[i]; return (<article key={t} className="off rv"><Ic /><h3>{t}</h3><p>{d}</p></article>); })}</div>
    </section>
  );
}

function experience(u) {
  const now = new Date();
  const m = (now.getFullYear() - 2023) * 12 + now.getMonth() - 6;
  return u.exp(Math.floor(m / 12), m % 12);
}

function TellMe({ onClose, onAction }) {
  const [q, setQ] = useState("");
  const { u, d } = useContext(Ctx);
  const ref = useRef();
  useEffect(() => ref.current.focus(), []);
  const hits = d.COMMANDS.filter(([l]) => l.toLowerCase().includes(q.toLowerCase()));
  const pick = (id) => { onClose(); if (id[0] === "@") onAction(id); else go(id); };
  return (
    <div className="scrim" onMouseDown={onClose}>
      <div className="tellme" role="dialog" aria-modal="true" aria-label="Tell me" onMouseDown={(e) => e.stopPropagation()}>
        <input ref={ref} value={q} onChange={(e) => setQ(e.target.value)} placeholder={u.tell}
          onKeyDown={(e) => e.key === "Enter" && hits[0] && pick(hits[0][1])} />
        <ul>
          {hits.map(([l, id]) => (<li key={l}><button onClick={() => pick(id)}>{l}</button></li>))}
          {!hits.length && <li className="none">{u.none(q)}</li>}
        </ul>
      </div>
    </div>
  );
}

function Hero() {
  const [s, setS] = useState("open");
  const { u, d, lang } = useContext(Ctx);
  const BASE = ["AL-EXT", "API-PG", "RDLC", "REACT", "COFFEE"];
  const [rows, setRows] = useState(BASE);
  const [qty, setQty] = useState({});
  const [no, setNo] = useState(0);
  const q = (k) => qty[k] ?? (k === "COFFEE" ? 3 : 1);
  const cat = d.CATALOG;
  const add = () => { const n = cat.find((c) => !rows.includes(c[1])); if (n) { setRows([...rows, n[1]]); beep(660); } };
  const step = (k, dl) => { setQty({ ...qty, [k]: Math.max(1, q(k) + dl) }); beep(dl > 0 ? 700 : 500, .04); };
  const rm = (k) => { setRows(rows.filter((r) => r !== k)); beep(300, .05); };
  const tryPost = () => { if (rows.includes("COFFEE") && q("COFFEE") > 5) { setErr(u.stock); beep(180, .2); } else setS("confirm"); };
  const doPost = () => { setNo(100000 + Math.floor(Math.random() * 900000)); setS("posted"); beep(880, .12); vibe(); };
  const again = () => { setS("open"); setRows(BASE); setQty({}); };
  const cv = process.env.PUBLIC_URL + (lang === "fr" ? "/CV-Ahmed-Maiez-FR.pdf" : "/CV-Ahmed-Maiez-EN.pdf");
  const [err, setErr] = useState(false);
  const posted = s === "posted";
  return (
    <header id="top" className="hero">
      <p className="hello">{u.hello}</p>
      <h1>{u.h1}</h1>
      <p className="lede">{u.lede}</p>
      <div className="cta"><a className="cta-main" href="#contact">{u.hire}</a><a className="cta-ghost" href={cv} download><FiDownload /> {u.cv}</a></div>

      <div className="page">
        <div className="page-main">
          <div className="page-head">
            <h2>{u.inv}{posted ? " " + no : ""}</h2>
            <span className={"status " + (posted ? "posted" : "")}>{posted ? u.posted : u.open}</span>
          </div>
          <dl className="fields">
            <div><dt>{u.sell}</dt><dd>{u.next}</dd></div>
            <div><dt>{u.sales}</dt><dd>Ahmed Maiez</dd></div>
          </dl>
          <div className="actions">
            <button className="primary" disabled={posted} onClick={tryPost}>{u.post}</button>
            <button onClick={() => { setErr(u.delMsg); beep(180, .15); }}>{u.del}</button>
            <button disabled={posted || rows.length >= cat.length} onClick={add}>{u.addLine}</button>
            {posted && <><button onClick={() => go("contact")}>{u.openPosted}</button><button onClick={again}>{u.again}</button></>}
          </div>
          <div className="tablewrap">
            <table>
              <thead><tr>{u.th.map((h, k) => <th key={h} className={k === 3 ? "n" : ""}>{h}</th>)}<th /></tr></thead>
              <tbody>
                {rows.map((k, i) => {
                  const c = cat.find((x) => x[1] === k);
                  return (
                    <tr key={k} style={{ "--i": i }}>
                      <td>{c[0]}</td><td>{k}</td><td>{c[2]}</td>
                      <td className="n"><span className="step"><button aria-label="-" disabled={posted} onClick={() => step(k, -1)}>−</button><b>{q(k)}</b><button aria-label="+" disabled={posted} onClick={() => step(k, 1)}>+</button></span></td>
                      <td>{c[3]}</td>
                      <td><button className="rm" aria-label={u.del} disabled={posted} onClick={() => rm(k)}>×</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {posted && <div className="stamp" aria-hidden="true">Posted</div>}
          </div>
          <p className="total">{u.total}</p>
        </div>
        <aside className="factbox">
          <div className="pic"><img src={photo} alt="Ahmed Maiez" /></div>
          <dl>
            <dt>{u.basedL}</dt><dd>{u.based}</dd>
            <dt>{u.withBC}</dt><dd>{experience(u)} {u.counting}</dd>
            <dt>{u.envL}</dt><dd>{u.env}</dd>
            <dt>{u.langsL}</dt><dd>AL, C/AL, JavaScript</dd>
          </dl>
        </aside>
      </div>

      {s === "confirm" && (
        <div className="scrim"><div className="dialog" role="dialog" aria-modal="true">
          <p>{u.confirm}</p>
          <div><button className="primary" autoFocus onClick={doPost}>{u.yes}</button><button onClick={() => setS("open")}>{u.no}</button></div>
        </div></div>
      )}
      {err && (
        <div className="scrim"><div className="dialog error" role="alertdialog" aria-modal="true">
          <h3>{u.error}</h3>
          <p>{err}</p>
          <div><button className="primary" autoFocus onClick={() => setErr(false)}>OK</button></div>
        </div></div>
      )}
      {posted && (
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 28 }, (_, i) => <i key={i} style={{ "--x": (i * 37) % 100, "--r": (i * 53) % 360 + "deg", "--d": i * 35 + "ms", "--c": ["#FFB81C", "#0F7C8A", "#2A9D63", "#C4314B"][i % 4] }} />)}
        </div>
      )}
      {posted && <p className="toast" role="status">{u.toast(no)}</p>}
    </header>
  );
}

function Ledger() {
  const [open, setOpen] = useState(0);
  const { u, d } = useContext(Ctx);
  const [fl, setFl] = useState("all");
  const list = d.LEDGER.filter((e) => fl === "all" || e.k === fl);
  const cnt = (k) => (k === "all" ? d.LEDGER.length : d.LEDGER.filter((e) => e.k === k).length);
  return (
    <section id="ledger" className="sec">
      <h2 className="rv">{u.ledgerH}</h2>
      <p className="sub">{u.ledgerSub}</p>
      <div className="cues rv">
        {[["all", u.cAll], ["work", u.cWork], ["edu", u.cEdu], ["project", u.cProj], ["intern", u.cInt]].map(([k, l]) => (
          <button key={k} className={"cue" + (fl === k ? " on" : "")} onClick={() => { setFl(k); setOpen(-1); }}><strong>{cnt(k)}</strong><span>{l}</span></button>
        ))}
      </div>
      <div className="ledger rv">
        {list.map((e, i) => (
          <div key={fl + i} className={"entry pop " + (open === i ? "show" : "")}>
            <button className="row" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="d">{e.date}</span>
              <span className="t"><strong>{e.title}</strong><small>{e.type}</small></span>
              <span className="p">{e.place}</span>
              <span className={"badge " + (e.open ? "on" : "")}>{e.open ? u.open : u.closed}</span>
            </button>
            <div className="more"><ul>{e.more.map((m) => <li key={m}>{m}</li>)}</ul></div>
          </div>
        ))}
      </div>
    </section>
  );
}

const Ctx = createContext(null);
const mix = (a, b) => a.map((x, i) => ({ ...x, ...b[i] }));

const UI = {
  en: {
    tell: "Tell me what you want to do", none: (q) => `Nothing found for “${q}”. Try “projects”, or hire Ahmed: he is good at finding things.`,
    hello: "Role center ready. Welcome.", h1: "I teach Business Central new tricks.",
    lede: "Ahmed Maiez, consultant and AL developer in Tunisia, on Business Central cloud and on-premises (and NAV). Extensions, APIs, integrations, reports and the occasional React front end.",
    inv: "Sales Invoice", open: "Open", closed: "Closed", posted: "Posted", sell: "Sell-to customer", next: "Your next project", sales: "Salesperson",
    post: "Post…", del: "Delete", openPosted: "Open posted invoice", th: ["Type", "No.", "Description", "Qty", "Unit"], total: "Amount including VAT: let’s talk.",
    basedL: "Based in", based: "Ras Jebel, working in Tunis", withBC: "With Business Central", counting: "and counting", exp: (y, m) => `${y} yr ${m} mo`,
    envL: "Environments", env: "Cloud and on-premises", langsL: "Languages of code",
    confirm: "Do you want to post the invoice?", yes: "Yes", no: "No", error: "Error",
    delMsg: "You cannot delete this profile because it is used on open entries. Try posting it instead.",
    toast: (n) => `Posted Sales Invoice ${n}. Welcome to the team, Ahmed.`, oops: "The Coffee field must have a value in Developer. Fill it in before continuing.",
    st1: "years with Business Central", st2: "REST API pages built", st3: "on-premises servers set up", st4: "Business Central version migrated to",
    buildH: "What I build", codeH: "How I write AL", codeSub: "Illustrative sketches in the style of what I ship. Not client code.", copy: "Copy", copied: "Copied",
    bcH: "Business Central work", bcSub: "Things I have built and run for clients. Names stay private, the problems do not.",
    toolH: "Toolbox", ledgerH: "Experience ledger", ledgerSub: "Every entry posted in order. Open means still running.",
    projH: "Web and school projects", all: "All", priv: "Private",
    contactH: "Let’s post something together.", contactSub: "Tell me about your Business Central project. I reply fast.",
    formT: "New request", fName: "Your name", fMail: "Your email", fMsg: "What do you need?", fSend: "Post request", fSending: "Posting…",
    fSent: "Request posted. I will get back to you soon.", fErr: "Could not post the request. Please try WhatsApp or LinkedIn below.", or: "Or reach me directly",
    hire: "Contact me",
    procH: "How I work", procSub: "Six steps, from the first conversation to the tenth improvement.",
    proc: [["Listen", "Understand the business process and what the users really do all day."], ["Analyze", "Turn functional needs into a technical design that fits standard Business Central."], ["Build", "AL or C/AL, extensions and events first, so upgrades stay painless."], ["Test", "Walk through the real scenarios with the users, including the awkward ones."], ["Go live", "Deploy on cloud or on-premises, with data checked and servers set up."], ["Support", "Train users, then keep improving: fixes, performance and new needs."]],
    errH: "Error museum", errSub: "Classic Business Central messages, translated into human.", errHint: "Click a card to flip it.",
    errs: [["The record in table Item already exists.", "Two items tried to be number 1000. Give one of them a new identity."], ["Another user has modified the record after you retrieved it.", "Someone saved first. Refresh the page and try again, politely."], ["Posting Date is not within your range of allowed posting dates.", "Time travel is restricted. Check the allowed posting period."], ["You cannot delete the customer because there are open entries.", "Money is still in motion. Close the entries first, then delete."], ["You have insufficient quantity of the item on inventory.", "The warehouse says no. Check the stock, or the item tracking."], ["The field No. must have a value. It cannot be zero or empty.", "Fill in the field. It really cannot be empty. Believe me, it tried."]],
    offH: "Off the clock", off: [["Video games", "Interactive worlds. Debugging, but with a health bar."], ["Animals", "Breeding and caring for animals. Patience training, no posting routine required."], ["Tech watch", "Following new tools and release notes so you do not have to."]], addLine: "Add line", again: "Post another", stock: "The inventory of COFFEE is insufficient. Reduce the quantity before posting.",
    cv: "Download CV", cvEn: "CV (English)", cvFr: "CV (Français)", cAll: "All entries", cWork: "Work", cEdu: "Education", cProj: "Final projects", cInt: "Internships", 
    graphH: "How it all connects", graphSub: "Click a node to see what it touches.",
    nHome: "Home", nWork: "Work", nCode: "Code", nProj: "Projects", nContact: "Contact", termHint: "Tip: press ` to open the terminal.", mail: "Email", psst: "Psst: ↑ ↑ ↓ ↓ ← → ← → B A", cheat: "Cheat code accepted. Ahmed gains +10,000 reputation points.",
  },
  fr: {
    tell: "Dites-moi ce que vous voulez faire", none: (q) => `Aucun résultat pour « ${q} ». Essayez « projets », ou embauchez Ahmed : il est doué pour trouver des choses.`,
    hello: "Centre de rôle prêt. Bienvenue.", h1: "J’apprends de nouveaux tours à Business Central.",
    lede: "Ahmed Maiez, consultant et développeur AL en Tunisie, sur Business Central cloud et on-premise (et NAV). Extensions, API, intégrations, états et parfois un front-end React.",
    inv: "Facture vente", open: "Ouverte", closed: "Clôturée", posted: "Comptabilisée", sell: "Donneur d’ordre", next: "Votre prochain projet", sales: "Vendeur",
    post: "Comptabiliser…", del: "Supprimer", openPosted: "Ouvrir la facture comptabilisée", th: ["Type", "N°", "Description", "Qté", "Unité"], total: "Montant TTC : parlons-en.",
    basedL: "Basé à", based: "Ras Jebel, travaille à Tunis", withBC: "Sur Business Central", counting: "et ça continue", exp: (y, m) => `${y} ${y > 1 ? "ans" : "an"} ${m} mois`,
    envL: "Environnements", env: "Cloud et on-premise", langsL: "Langages",
    confirm: "Voulez-vous comptabiliser la facture ?", yes: "Oui", no: "Non", error: "Erreur",
    delMsg: "Vous ne pouvez pas supprimer ce profil car il est utilisé dans des écritures ouvertes. Essayez plutôt de le comptabiliser.",
    toast: (n) => `Facture vente n° ${n} comptabilisée. Bienvenue dans l’équipe, Ahmed.`, oops: "Le champ Café doit contenir une valeur dans Développeur. Renseignez-le avant de continuer.",
    st1: "ans sur Business Central", st2: "pages API REST développées", st3: "serveurs on-premise installés", st4: "version de Business Central migrée",
    buildH: "Ce que je construis", codeH: "Comment j’écris de l’AL", codeSub: "Exemples illustratifs dans le style de ce que je livre. Pas du code client.", copy: "Copier", copied: "Copié",
    bcH: "Travaux Business Central", bcSub: "Ce que j’ai construit et déployé pour des clients. Les noms restent privés, pas les problèmes.",
    toolH: "Boîte à outils", ledgerH: "Registre d’expérience", ledgerSub: "Chaque écriture comptabilisée dans l’ordre. Ouverte signifie toujours en cours.",
    projH: "Projets web et académiques", all: "Tous", priv: "Privé",
    contactH: "Comptabilisons quelque chose ensemble.", contactSub: "Parlez-moi de votre projet Business Central. Je réponds vite.",
    formT: "Nouvelle demande", fName: "Votre nom", fMail: "Votre e-mail", fMsg: "De quoi avez-vous besoin ?", fSend: "Envoyer la demande", fSending: "Envoi…",
    fSent: "Demande envoyée. Je reviens vers vous très vite.", fErr: "Envoi impossible. Essayez WhatsApp ou LinkedIn ci-dessous.", or: "Ou contactez-moi directement",
    hire: "Me contacter",
    procH: "Ma façon de travailler", procSub: "Six étapes, de la première conversation à la dixième amélioration.",
    proc: [["Écouter", "Comprendre le processus métier et ce que les utilisateurs font vraiment toute la journée."], ["Analyser", "Transformer les besoins fonctionnels en conception technique alignée sur le standard Business Central."], ["Développer", "AL ou C/AL, extensions et événements d’abord, pour que les mises à niveau restent simples."], ["Tester", "Parcourir les vrais scénarios avec les utilisateurs, y compris les plus tordus."], ["Mettre en production", "Déployer en cloud ou on-premise, données contrôlées et serveurs installés."], ["Accompagner", "Former les utilisateurs, puis continuer d’améliorer : corrections, performances et nouveaux besoins."]],
    errH: "Musée des erreurs", errSub: "Messages classiques de Business Central, traduits en langage humain.", errHint: "Cliquez sur une carte pour la retourner.",
    errs: [["L’enregistrement dans la table Article existe déjà.", "Deux articles voulaient être le numéro 1000. Donnez une nouvelle identité à l’un d’eux."], ["Un autre utilisateur a modifié l’enregistrement après que vous l’avez récupéré.", "Quelqu’un a enregistré avant vous. Actualisez la page et réessayez, poliment."], ["La date comptabilisation n’est pas dans votre plage de dates autorisées.", "Les voyages dans le temps sont restreints. Vérifiez la période autorisée."], ["Vous ne pouvez pas supprimer le client car il existe des écritures ouvertes.", "L’argent circule encore. Clôturez d’abord les écritures, puis supprimez."], ["La quantité en stock de l’article est insuffisante.", "L’entrepôt dit non. Vérifiez le stock, ou la traçabilité."], ["Le champ N° doit avoir une valeur. Il ne peut pas être zéro ou vide.", "Renseignez le champ. Il ne peut vraiment pas rester vide. Croyez-moi, il a essayé."]],
    offH: "Hors du bureau", off: [["Jeux vidéo", "Des mondes interactifs. Du débogage, mais avec une barre de vie."], ["Animaux", "Élevage et soin des animaux. De la patience, sans routine de comptabilisation."], ["Veille technologique", "Suivre les nouveaux outils et notes de version pour que vous n’ayez pas à le faire."]], addLine: "Ajouter une ligne", again: "En comptabiliser une autre", stock: "Le stock de CAFE est insuffisant. Réduisez la quantité avant de comptabiliser.",
    cv: "Télécharger mon CV", cvEn: "CV (English)", cvFr: "CV (Français)", cAll: "Toutes", cWork: "Postes", cEdu: "Formations", cProj: "Projets de fin d’études", cInt: "Stages", 
    graphH: "Comment tout se relie", graphSub: "Cliquez sur un nœud pour voir ce qu’il touche.",
    nHome: "Accueil", nWork: "Travaux", nCode: "Code", nProj: "Projets", nContact: "Contact", termHint: "Astuce : appuyez sur ` pour ouvrir le terminal.", mail: "E-mail", psst: "Psst : ↑ ↑ ↓ ↓ ← → ← → B A", cheat: "Code triche accepté. Ahmed gagne +10 000 points de réputation.",
  },
};

const FR_TILES = [
  ["Extensions en AL", "Extensions de tables et de pages, abonnés aux événements et codeunits qui laissent l’application de base intacte."],
  ["Pages API et web services", "Points d’accès REST et SOAP pour que les applications mobiles et web dialoguent avec Business Central."],
  ["États", "RDLC et datasets : champs ajoutés, filtres à sélection multiple, mises en page imprimables."],
  ["C/AL et mises à niveau", "Code NAV 2018 classique et migration vers les versions actuelles de Business Central."],
  ["Cloud et on-premise", "Plus de 5 serveurs on-premise installés avec IIS, SSL et authentification, et des extensions livrées sur le cloud."],
  ["Front-ends web", "Applications React et Node connectées à Business Central, de la commande à la facturation."],
];

const CAT_EN = [
  ["Item", "AL-EXT", "Extensions and event subscribers", "Project"], ["Item", "API-PG", "API pages and web services", "Project"],
  ["Item", "RDLC", "Reports that survive layout changes", "Project"], ["Resource", "REACT", "Front ends that talk to Business Central", "Project"],
  ["Item", "COFFEE", "Tunisian coffee, strong", "Cup"], ["Item", "E-INV", "E-invoicing and XML files", "Project"],
  ["Item", "MIGR", "Navision to Business Central migration", "Project"], ["Item", "EXT-API", "External API integration", "Project"],
  ["Resource", "SERVER", "Server setup: IIS, SSL, PM2", "Server"], ["Resource", "TRAIN", "User training", "Day"],
];
const CAT_FR = [
  ["Article", "AL-EXT", "Extensions et abonnés aux événements", "Projet"], ["Article", "API-PG", "Pages API et web services", "Projet"],
  ["Article", "RDLC", "États qui résistent aux changements de mise en page", "Projet"], ["Ressource", "REACT", "Front-ends qui dialoguent avec Business Central", "Projet"],
  ["Article", "COFFEE", "Café tunisien, bien serré", "Tasse"], ["Article", "E-INV", "E-invoicing et fichiers XML", "Projet"],
  ["Article", "MIGR", "Migration de Navision vers Business Central", "Projet"], ["Article", "EXT-API", "Intégration d’API externe", "Projet"],
  ["Ressource", "SERVER", "Installation serveur : IIS, SSL, PM2", "Serveur"], ["Ressource", "TRAIN", "Formation des utilisateurs", "Jour"],
];

const DATA = {
  en: { TILES, LINES, LEDGER, PROJECTS, BCWORK, TOOLS, COMMANDS, CATALOG: CAT_EN },
  fr: {
    TILES: FR_TILES.map((x, i) => [...x, TILES[i][2]]),
    CATALOG: CAT_FR,
    LINES: [
      ["Article", "AL-EXT", "Extensions et abonnés aux événements", "1", "Projet"],
      ["Article", "API-PG", "Pages API et web services", "1", "Projet"],
      ["Article", "RDLC", "États qui résistent aux changements de mise en page", "1", "Projet"],
      ["Ressource", "REACT", "Front-ends qui dialoguent avec Business Central", "1", "Projet"],
      ["Article", "CAFE", "Café tunisien, bien serré", "3", "Tasse"],
    ],
    LEDGER: mix(LEDGER, [
      { date: "Juil. 2023 à aujourd’hui", type: "Poste", title: "Consultant Business Central", place: "Smart Business Solution, Tunis", more: [
        "Solutions sur mesure pour les achats et les ventes : tarifs, règles de quantités gratuites, lignes de demande et workflows.",
        "Classification et cartographie multi-niveaux des articles pour une navigation simplifiée.",
        "Fonctionnalités flotte et transport : suivi opérationnel, reporting, données véhicules et logique carburant.",
        "Intégrations REST et OData qui consomment des API externes et publient leurs données dans Business Central et NAV, dont les données constructeurs automobiles.",
        "E-invoicing et e-reporting : documents comptables, fichiers XML structurés et plateformes externes.",
        "Migrations de Navision vers Business Central avec adaptation du code et contrôle de l’intégrité des données, en multi-sociétés et multi-environnements.",
        "Interfaces ERP-web en React, Node.js et MongoDB, déployées sur Windows Server avec PM2.",
        "Formation des utilisateurs, maintenance corrective et évolutive."] },
      { date: "2020 à 2023", type: "Formation", title: "Diplôme d’ingénieur, développement web", place: "ESPRIT, Tunis", more: ["Diplômé avec la mention Très Bien.", "Projets en MERN, Symfony, JavaFX et une chaîne DevOps complète."] },
      { date: "Janv. à juin 2023", type: "Projet de fin d’études", title: "Plateforme web connectée à Business Central", place: "Smart Business Solution, Tunis", more: ["Commande et facturation de ventes depuis le web, synchronisées avec l’ERP."] },
      { date: "Juil. à sept. 2022", type: "Stage", title: "Application de gestion des tâches et ressources", place: "Tunisia Smart Technoparks, Tunis", more: ["Réalisée pour la municipalité de Ras Jebel."] },
      { date: "Janv. à juin 2020", type: "Projet de fin d’études", title: "Réalité mixte avec Unreal Engine 4", place: "DigiArt LivingLab, Nabeul", more: ["Solution AR et VR pour les enfants autistes et leurs parents."] },
      { date: "2017 à 2020", type: "Formation", title: "Technicien supérieur en développement logiciel", place: "ISET Nabeul", more: ["Diplômé avec la mention Très Bien."] },
      { date: "Janv. à févr. 2019", type: "Stage", title: "Serious game : Garbage Collector en Java", place: "DigiArt LivingLab, Nabeul", more: ["Apprentissage ludique de la mémoire en Java."] },
      { date: "Janv. 2018", type: "Stage", title: "Stage d’initiation", place: "STB Bank, Ras Jebel", more: [] },
      { date: "2017", type: "Formation", title: "Baccalauréat en sciences techniques", place: "Lycée Mohamed Ali Ennabi, Ras Jebel", more: [] },
    ]),
    PROJECTS: mix(PROJECTS, [
      { name: "Plateforme web pour Business Central", stack: "Web et Business Central", text: "Flux de commande et de facturation connecté à l’ERP. Travail client, donc pas de code public." },
      { name: "Application de la municipalité de Ras Jebel", stack: "MERN", text: "Gestion des tâches et des ressources pour une municipalité." },
      { name: "Site d’e-learning", stack: "MERN", text: "Plateforme d’apprentissage en ligne avec MongoDB, Express, React et Node." },
      { name: "Chaîne DevOps", stack: "Spring Boot, Jenkins, Docker", text: "Maven, JUnit, SonarQube, Jenkins, Docker Compose, Nexus, Prometheus et Grafana autour d’une application Spring Boot." },
      { name: "Application d’e-learning", stack: "JavaFX, Symfony, CodeNameOne", text: "Un produit en trois versions : bureau, web et mobile." },
    ]),
    BCWORK: [
      ["Flotte, pneus et carburant", "Extension AL", ["Historique de montage et de permutation pour chaque pneu", "Suivi d’entretien par véhicule", "Import des cartes carburant directement depuis Excel"], ["AL", "Import Excel", "Flotte"]],
      ["Équipements et GMAO", "Modèle de données", ["Une seule table d’équipements fusionnant le parc de camions", "Pages véhicules et citernes basées sur les ressources, synchronisées avec elle", "Aucune double saisie pour les utilisateurs"], ["Tables", "Pages", "Ressources"]],
      ["Web services d’inventaire PDA", "API", ["26 pages API REST sous un seul éditeur", "Codeunits SOAP pour les transactions des scanners", "Conçu pour une application d’entrepôt sur Business Central cloud"], ["REST", "SOAP", "OData"]],
      ["Migration de la version 17 vers la 25", "Mise à niveau", ["Mise à niveau on-premise vers le Business Central actuel", "Personnalisations reportées vers la nouvelle version"], ["Mise à niveau", "AL", "On-premise"]],
      ["État RDLC multi-sections", "Reporting", ["Conçu sur NAV 2018 en C/AL", "Réceptions fournisseur, factures et écritures non rapprochées dans un seul état"], ["RDLC", "C/AL", "NAV 2018"]],
      ["Installation on-premise et cloud", "Infrastructure", ["Plus de 5 serveurs on-premise installés", "Certificats, authentification, IIS et service tiers", "Extensions livrées aussi sur des tenants cloud"], ["IIS", "SSL", "Cloud", "On-premise"]],
      ["E-invoicing et e-reporting", "Conformité", ["Documents comptables transformés en fichiers XML structurés", "Interfaçage avec des plateformes externes"], ["XML", "AL", "E-invoicing"]],
      ["Intégrations d’API externes", "Intégration", ["Consommation d’API REST externes depuis AL et C/AL", "Publication des données reçues dans Business Central et NAV", "Utilisé en cloud et en on-premise"], ["REST", "AL", "C/AL"]],
      ["Améliorations du module Achats", "Processus", ["Corrections issues d’un rapport d’audit client", "Lignes d’achat générées à partir des quantités gratuites"], ["AL", "Achats"]],
    ],
    TOOLS: [
      ["Business Central", ["AL", "C/AL", "Pages API", "REST et SOAP", "États RDLC", "Extensions et événements", "Mises à niveau", "API externes", "OData", "E-invoicing et XML", "Cloud et on-premise", "IIS, SSL et PM2"]],
      ["Web", ["React", "Node.js", "MongoDB", "JavaScript", "TypeScript", "HTML et CSS", "Angular", "Laravel", "Symfony"]],
      ["Langues", ["Arabe, langue maternelle", "Français, courant", "Anglais, courant", "Allemand, notions", "Espagnol, notions"]],
      ["Aussi à mon actif", ["Java", "Spring Boot", "Python", "SQL", "Docker", "Jenkins", "Unreal Engine", "Office"]],
    ],
    COMMANDS: [
      ["Ce que je construis", "build"], ["Code AL", "code"], ["Exécuter une codeunit", "code"], ["Travaux Business Central", "bcwork"],
      ["Expérience", "ledger"], ["Projets", "projects"], ["Contacter Ahmed", "contact"], ["Embaucher Ahmed", "contact"],
      ["Comptabiliser une facture vente", "top"], ["Boîte à outils", "toolbox"], ["Changer de thème", "@theme"], ["Afficher une erreur", "@error"], ["Ouvrir le terminal", "@term"],
    ],
  },
};

// Formspree form id (formspree.io/f/xnpplbjj). If it is ever empty, the form falls back to WhatsApp.
const FORM_ID = "xnpplbjj";

function ContactForm() {
  const { u } = useContext(Ctx);
  const [st, setSt] = useState("idle");
  const send = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    if (fd.get("_gotcha")) return;
    const body = { name: fd.get("name"), email: fd.get("email"), message: fd.get("message") };
    if (!FORM_ID || FORM_ID === "YOUR_FORM_ID") {
      window.open(LINKS.whatsapp.replace("&text=Hi", "") + "&text=" + encodeURIComponent(`${body.name} (${body.email}): ${body.message}`), "_blank");
      return setSt("sent");
    }
    setSt("sending");
    try {
      const r = await fetch("https://formspree.io/f/" + FORM_ID, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(body) });
      setSt(r.ok ? "sent" : "error");
    } catch (err) { setSt("error"); }
  };
  return (
    <form className="cform rv" onSubmit={send}>
      <div className="page-head"><h3>{u.formT}</h3><span className={"status " + (st === "sent" ? "posted" : "")}>{st === "sent" ? u.posted : u.open}</span></div>
      <input name="name" required placeholder={u.fName} autoComplete="name" />
      <input name="email" type="email" required placeholder={u.fMail} autoComplete="email" />
      <textarea name="message" required rows="4" placeholder={u.fMsg} />
      <input className="hp" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <button className="primary" type="submit" disabled={st === "sending"}>{st === "sending" ? u.fSending : u.fSend}</button>
      {st === "sent" && <p className="toast" role="status">{u.fSent}</p>}
      {st === "error" && <p className="errmsg" role="alert">{u.fErr}</p>}
    </form>
  );
}

function AppInner() {
  const { u, d, lang, setLang } = useContext(Ctx);
  const [tell, setTell] = useState(false);
  const [prog, setProg] = useState(0);
  const [oops, setOops] = useState(false);
  const [f, setF] = useState("All");
  const [term, setTerm] = useState(false);
  const [snd, setSnd] = useState(false);
  useEffect(() => { sfx.on = snd; }, [snd]);
  const [party, setParty] = useState(false);
  useEffect(() => {
    const seq = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let i = 0;
    const k = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      i = key === seq[i] ? i + 1 : key === seq[0] ? 1 : 0;
      if (i === seq.length) { i = 0; setParty(true); setTimeout(() => setParty(false), 4500); }
    };
    const m = (e) => { const st = document.documentElement.style; st.setProperty("--gx", e.clientX + "px"); st.setProperty("--gy", e.clientY + "px"); };
    window.addEventListener("keydown", k);
    window.addEventListener("mousemove", m);
    return () => { window.removeEventListener("keydown", k); window.removeEventListener("mousemove", m); };
  }, []);
  const [theme, setTheme] = useState(() => {
    try { const t = localStorage.getItem("theme"); if (t) return t; } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }, [theme]);
  const flip = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const act = (a) => (a === "@theme" ? flip() : a === "@term" ? setTerm(true) : setOops(true));
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".rv").forEach((n) => io.observe(n));
    const sc = () => { const h = document.documentElement; setProg(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)); h.style.setProperty("--sy", h.scrollTop); };
    const rip = (e) => {
      const el = e.target.closest("button:not(.row):not(.flip):not(.cue),.hire,.clinks a");
      if (!el) return;
      const r = el.getBoundingClientRect(), d = Math.max(r.width, r.height), sp = document.createElement("span");
      sp.className = "ripple";
      sp.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
      el.appendChild(sp); beep(520, .03);
      setTimeout(() => sp.remove(), 700);
    };
    window.addEventListener("scroll", sc, { passive: true });
    window.addEventListener("click", rip);
    return () => { io.disconnect(); window.removeEventListener("scroll", sc); window.removeEventListener("click", rip); };
  }, []);
  useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") { setTell(false); setTerm(false); }
      if (e.key === "`" && !/INPUT|TEXTAREA/.test(e.target.tagName)) { e.preventDefault(); setTerm(true); }
      if (e.altKey && e.key.toLowerCase() === "q") { e.preventDefault(); setTell(true); }
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <>
      <div className="blobs" aria-hidden="true"><i /><i /><i /></div>
      <div className="glow" aria-hidden="true" />
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <filter id="liquid" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="3" result="n" />
          <feGaussianBlur in="n" stdDeviation="2" result="b" />
          <feDisplacementMap in="SourceGraphic" in2="b" scale="18" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="progress" style={{ transform: `scaleX(${prog})` }} />
      <nav className="bar">
        <a href="#top" className="brand">Ahmed Maiez</a>
        <button className="search" onClick={() => setTell(true)}><AiOutlineSearch /> {u.tell} <kbd>Alt+Q</kbd></button>
        <button className="mode snd" onClick={() => setSnd(!snd)} aria-label="Sound" aria-pressed={snd}>{snd ? <FiVolume2 /> : <FiVolumeX />}</button>
        <button className="mode lang" onClick={() => setLang(lang === "en" ? "fr" : "en")} aria-label="Language">{lang === "en" ? "FR" : "EN"}</button>
        <button className="mode" onClick={flip} aria-label="Switch theme">{theme === "dark" ? <FiSun /> : <FiMoon />}</button>
        <a className="hire" href="#contact">{u.hire}</a>
      </nav>
      {tell && <TellMe onClose={() => setTell(false)} onAction={act} />}
      {term && <Terminal onClose={() => setTerm(false)} />}
      {oops && (
        <div className="scrim"><div className="dialog error" role="alertdialog" aria-modal="true">
          <h3>{u.error}</h3>
          <p>{u.oops}</p>
          <div><button className="primary" autoFocus onClick={() => setOops(false)}>OK</button></div>
        </div></div>
      )}
      <main>
        <Hero />
        <section className="sec stats">
          <Count plus to={Math.floor(((new Date().getFullYear() - 2023) * 12 + new Date().getMonth() - 6) / 12)} label={u.st1} />
          <Count plus to={30} label={u.st2} />
          <Count plus to={5} label={u.st3} />
          <Count to={25} label={u.st4} />
        </section>
        <Marquee />
        <section id="build" className="sec">
          <h2 className="rv">{u.buildH}</h2>
          <div className="tiles">
            {d.TILES.map(([t, d, c]) => (<article key={t} className={"tile rv " + c}><h3>{t}</h3><p>{d}</p></article>))}
          </div>
        </section>
        <Process />
        <CodeShow />
        <SkillGraph />
        <ErrMuseum />
        <section id="bcwork" className="sec">
          <h2 className="rv">{u.bcH}</h2>
          <p className="sub rv">{u.bcSub}</p>
          <div className="bcgrid">{d.BCWORK.map((c) => <BCCard key={c[0]} c={c} />)}</div>
        </section>
        <section id="toolbox" className="sec">
          <h2 className="rv">{u.toolH}</h2>
          {d.TOOLS.map(([g, items]) => (
            <div key={g} className="tgroup rv"><h3>{g}</h3><div className="chipset">{items.map((t) => <span key={t} className="chip">{t}</span>)}</div></div>
          ))}
        </section>
        <Ledger />
        <section id="projects" className="sec">
          <h2 className="rv">{u.projH}</h2>
          <div className="chips rv">
            {["All", "Business Central", "Web", "DevOps"].map((c) => <button key={c} className={f === c ? "on" : ""} onClick={() => setF(c)}>{c === "All" ? u.all : c}</button>)}
          </div>
          <ul className="plist rv">
            {d.PROJECTS.filter((p) => f === "All" || p.tag === f).map((p) => (
              <li key={p.name} className="pop">
                <div><h3>{p.name}</h3><p>{p.text}</p></div>
                <span className="stack">{p.stack}, {p.year}</span>
                <span className="plinks">{p.links.length ? p.links.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noreferrer">{l}</a>) : <em>{u.priv}</em>}</span>
              </li>
            ))}
          </ul>
        </section>
        <OffClock />
        <section id="contact" className="sec contact">
          <h2 className="rv">{u.contactH}</h2>
          <p className="sub rv">{u.contactSub}</p>
          <ContactForm />
          <p className="or rv">{u.or}</p>
          <div className="clinks rv">
            <a href={LINKS.email}><FiMail /> {u.mail}</a>
            <a href={process.env.PUBLIC_URL + "/CV-Ahmed-Maiez-EN.pdf"} download><FiDownload /> {u.cvEn}</a>
            <a href={process.env.PUBLIC_URL + "/CV-Ahmed-Maiez-FR.pdf"} download><FiDownload /> {u.cvFr}</a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><AiOutlineLinkedin /> LinkedIn</a>
            <a href={LINKS.whatsapp} target="_blank" rel="noreferrer"><AiOutlineWhatsApp /> WhatsApp</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer"><AiOutlineGithub /> GitHub</a>
            <a href={LINKS.facebook} target="_blank" rel="noreferrer"><AiOutlineFacebook /> Facebook</a>
          </div>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Ahmed Dhia Eddine Maiez, Ras Jebel, Tunisia</p>
        <p className="psst">{u.psst}</p>
        <p className="psst">{u.termHint}</p>
      </footer>
      <nav className="bnav" aria-label="Quick">
        {[["top", FiHome, u.nHome], ["bcwork", FiBriefcase, u.nWork], ["code", FiCode, u.nCode], ["projects", FiFolder, u.nProj], ["contact", FiMail, u.nContact]].map(([id, I, l]) => (<a key={id} href={"#" + id}><I /><span>{l}</span></a>))}
      </nav>
      {prog > 0.15 && <a className="totop" href="#top" aria-label="Back to top"><FiArrowUp /></a>}
      {party && <><Confetti /><p className="toast float" role="status">{u.cheat}</p></>}
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState(() => {
    try { const l = localStorage.getItem("lang"); if (l) return l; } catch (e) {}
    return (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }, [lang]);
  return (
    <Ctx.Provider value={{ lang, setLang, u: UI[lang], d: DATA[lang] }}>
      <AppInner />
    </Ctx.Provider>
  );
}
