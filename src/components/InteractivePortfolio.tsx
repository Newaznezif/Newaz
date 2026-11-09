"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  Award, Bot, CheckCircle2, Copy, ExternalLink, Github, LockKeyhole, Network,
  Radio, Shield, Terminal, UserRound, Volume2, VolumeX, Zap
} from "lucide-react";
import { AWARDS, CERTIFICATIONS, PERSONAL_INFO, PROJECTS } from "@/constants";

type CveItem = { cveID: string; vulnerabilityName: string; dateAdded: string; vendorProject: string; shortDescription: string };
type GithubEvent = { id: string; type: string; repo: { name: string }; created_at: string };

const terminalHelp: Record<string, string> = {
  help: "Available commands: whoami, about, skills, projects, security, contact, clear",
  whoami: "NEWAZ NEZIF ABAGERO — Cybersecurity Analyst / AI-focused builder — Addis Ababa, Ethiopia.",
  about: PERSONAL_INFO.bio,
  skills: "Security operations • Threat monitoring • Incident response • Python • Java • SQL • Full-stack development • Machine learning • Data analysis.",
  projects: "Opening project mission files below. Featured work: Nexus AgriRise, Irshaye, OmoNetTab, and Tsegure.",
  security: "Focus areas: SOC operations, threat monitoring, vulnerability assessment, SIEM, network security, and security log analysis.",
  contact: "Email: " + PERSONAL_INFO.email + " | LinkedIn: " + PERSONAL_INFO.linkedin,
};

const assistantAnswers = [
  { keys: ["experience", "work", "insa", "job"], answer: "Newaz works as a Cybersecurity Analyst with FDRE INSA (April 2025–present), supporting security monitoring, threat investigation, incident response, and vulnerability assessment. Previously, he worked as a NID (Fayda) Officer at Ethio telecom." },
  { keys: ["project", "build", "portfolio"], answer: "Selected projects include Nexus AgriRise (agricultural intelligence), Irshaye (AI-assisted climate-smart agriculture), OmoNetTab (South Omo digital marketplace), and Tsegure (AI-assisted computer vision concept). Open the Project Mission Files below for repositories and live demos." },
  { keys: ["skill", "technology", "program", "language"], answer: "Technical areas include Python, Java, SQL, full-stack development, MySQL, MongoDB, Oracle, SIEM, Wazuh, Splunk, Wireshark, Kali Linux, machine learning, PyTorch, and TensorFlow." },
  { keys: ["certificate", "certification", "isc2", "google"], answer: "Selected credentials and training include ISC2 Certified in Cybersecurity (CC), Google SIEM & SOAR Analyst, HCIA-Datacom, CCEP, TryHackMe SOC Analysis, and APIsec Fundamentals." },
  { keys: ["education", "university", "degree"], answer: "Newaz holds a BSc in Information Systems from Wolkite University (September 2021–June 2024), with a GPA of 3.35/4.00." },
  { keys: ["contact", "email", "hire", "connect"], answer: "For professional opportunities and collaboration, email " + PERSONAL_INFO.email + " or connect through LinkedIn: " + PERSONAL_INFO.linkedin },
];

const commandCards = [
  { icon: Shield, title: "Security operations", text: "Threat monitoring, investigation, incident response, and vulnerability assessment." },
  { icon: Terminal, title: "Software engineering", text: "Python, Java, SQL, full-stack development, and practical application delivery." },
  { icon: Zap, title: "Applied AI & data", text: "Machine learning, anomaly detection, data analysis, and AI-enabled decision support." },
];

export function InteractivePortfolio() {
  const [bootVisible, setBootVisible] = useState(false);
  const [hackerMode, setHackerMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLines, setTerminalLines] = useState<string[]>(["NEWAZ@ROOT:~$ help", terminalHelp.help]);
  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState<{ role: "user" | "assistant"; text: string }[]>([
    { role: "assistant", text: "I'm the Newaz portfolio guide. Ask about professional experience, projects, skills, education, certifications, or contact details. Answers are drawn from this portfolio." }
  ]);
  const [cves, setCves] = useState<CveItem[]>([]);
  const [cveStatus, setCveStatus] = useState("Connecting to CISA Known Exploited Vulnerabilities feed…");
  const [events, setEvents] = useState<GithubEvent[]>([]);
  const [githubStatus, setGithubStatus] = useState("Loading public GitHub activity…");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem("newaz-boot-seen")) setBootVisible(true);
    } catch { /* storage may be unavailable */ }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setBootVisible(false);
      try { sessionStorage.setItem("newaz-boot-seen", "1"); } catch { /* storage may be unavailable */ }
    }, 2600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json", { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error("Feed unavailable"); return response.json(); })
      .then((data) => {
        const list = (data.vulnerabilities || []).slice(0, 5) as CveItem[];
        setCves(list);
        setCveStatus("Live public CISA KEV catalog • " + (data.count ?? list.length) + " catalog entries");
      })
      .catch(() => setCveStatus("CISA feed could not be reached. The live feed is not being simulated."));
    fetch("https://api.github.com/users/NewazNezif/events/public?per_page=8", { signal: controller.signal, headers: { Accept: "application/vnd.github+json" } })
      .then((response) => { if (!response.ok) throw new Error("GitHub API unavailable"); return response.json(); })
      .then((data) => { setEvents(Array.isArray(data) ? data : []); setGithubStatus("Public GitHub events • fetched from GitHub API"); })
      .catch(() => setGithubStatus("GitHub activity is temporarily unavailable."));
    return () => controller.abort();
  }, []);

  const qrUrl = useMemo(() => "https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=" + encodeURIComponent("https://newaznezif.netlify.app"), []);

  function playUiSound() {
    if (!soundEnabled) return;
    try {
      const context = new AudioContext();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(620, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(360, context.currentTime + 0.07);
      gain.gain.setValueAtTime(0.025, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.08);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.09);
      oscillator.onended = () => void context.close();
    } catch { /* Audio may be unavailable or blocked */ }
  }

  function runCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = terminalInput.trim().toLowerCase();
    if (!command) return;
    playUiSound();
    if (command === "clear") setTerminalLines([]);
    else setTerminalLines((lines) => [...lines, "NEWAZ@ROOT:~$ " + command, terminalHelp[command] || "Command not found: " + command + ". Type help to see available commands."]);
    setTerminalInput("");
  }

  function askAssistant(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const prompt = question.trim();
    if (!prompt) return;
    playUiSound();
    const normalized = prompt.toLowerCase();
    const match = assistantAnswers.find((item) => item.keys.some((key) => normalized.includes(key)));
    const answer = match?.answer || "I can answer questions about Newaz's experience, projects, skills, education, certifications, and contact information. Try asking about one of those topics. This guide uses verified portfolio content and does not invent details.";
    setChat((messages) => [...messages, { role: "user", text: prompt }, { role: "assistant", text: answer }]);
    setQuestion("");
  }

  function copyEmail() {
    void navigator.clipboard?.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }).catch(() => setCopied(false));
  }

  function dismissBoot() {
    setBootVisible(false);
    try { sessionStorage.setItem("newaz-boot-seen", "1"); } catch { /* storage may be unavailable */ }
  }

  return (
    <div id="system-hub" className={hackerMode ? "relative scroll-mt-24 font-mono" : "relative scroll-mt-24"}>
      {bootVisible && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-[#020608] px-6" role="dialog" aria-modal="true" aria-label="System startup sequence">
          <div className="w-full max-w-xl rounded-xl border border-primary/30 bg-black/90 p-6 shadow-[0_0_70px_rgba(0,242,234,0.12)]">
            <div className="mb-5 flex items-center justify-between font-mono text-xs text-primary"><span>NEWAZ SYSTEM BIOS v2.6</span><span className="animate-pulse">INITIALIZING</span></div>
            <div className="space-y-2 font-mono text-xs text-emerald-300 sm:text-sm">
              <p>[ OK ] Loading identity profile…</p><p>[ OK ] Mounting cybersecurity modules…</p><p>[ OK ] Initializing project index…</p><p>[ OK ] Establishing secure portfolio session…</p>
            </div>
            <div className="mt-6 h-1.5 overflow-hidden rounded bg-white/10"><div className="h-full w-full origin-left animate-pulse bg-primary" /></div>
            <button onClick={dismissBoot} className="mt-6 text-xs text-white/50 underline underline-offset-4 hover:text-primary">Skip startup sequence</button>
          </div>
        </div>
      )}

      <section className="container-mega py-16 sm:py-24">
        <div className="mb-10 flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary">INTERACTIVE PORTFOLIO / SYSTEM HUB</p><h2 className="mb-3 text-3xl font-bold sm:text-4xl">Explore the command center.</h2><p className="max-w-2xl text-sm leading-relaxed text-text-secondary">A hands-on view of my work across cybersecurity, software engineering, and applied AI.</p></div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => { setHackerMode(false); playUiSound(); }} className={"rounded border px-3 py-2 text-xs " + (!hackerMode ? "border-primary bg-primary/10 text-primary" : "border-white/10 text-text-secondary")}>Professional</button>
            <button onClick={() => { setHackerMode(true); playUiSound(); }} className={"rounded border px-3 py-2 text-xs " + (hackerMode ? "border-primary bg-primary/10 text-primary" : "border-white/10 text-text-secondary")}>Hacker mode</button>
            <button onClick={() => { setSoundEnabled((value) => !value); }} aria-label={soundEnabled ? "Disable interface sound" : "Enable interface sound"} className="rounded border border-white/10 px-3 py-2 text-xs text-text-secondary hover:border-primary/40 hover:text-primary">{soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}</button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {commandCards.map(({ icon: Icon, title, text }) => <article key={title} className="glass-panel p-5"><Icon className="mb-4 text-primary" size={22} /><h3 className="mb-2 text-lg font-semibold">{title}</h3><p className="text-sm leading-relaxed text-text-secondary">{text}</p></article>)}
        </div>
      </section>

      <section id="terminal" className="container-mega scroll-mt-24 pb-16">
        <div className="mb-5 flex items-center gap-3"><Terminal className="text-primary" /><div><p className="font-mono text-[10px] tracking-[0.18em] text-primary">01 / INTERACTIVE TERMINAL</p><h3 className="text-2xl font-bold">Root access: portfolio edition</h3></div></div>
        <div className="overflow-hidden rounded-xl border border-primary/25 bg-[#020807] shadow-[0_15px_60px_rgba(0,0,0,0.28)]">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3"><div className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-red-400" /><i className="h-2.5 w-2.5 rounded-full bg-yellow-400" /><i className="h-2.5 w-2.5 rounded-full bg-green-400" /><span className="ml-2 font-mono text-[10px] text-white/45">newaz@root:~</span></div><span className="font-mono text-[10px] text-emerald-400">SESSION ACTIVE</span></div>
          <div className="h-56 space-y-2 overflow-y-auto p-4 font-mono text-xs leading-relaxed sm:text-sm" aria-live="polite">{terminalLines.map((line, index) => <p key={index} className={line.startsWith("NEWAZ@") ? "text-primary" : "whitespace-pre-wrap text-emerald-100/80"}>{line}</p>)}</div>
          <form onSubmit={runCommand} className="flex items-center gap-2 border-t border-white/10 px-4 py-3"><span className="font-mono text-primary">➜</span><input value={terminalInput} onChange={(event) => setTerminalInput(event.target.value)} aria-label="Terminal command" placeholder="Type help and press Enter…" className="min-w-0 flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-white/30" /><button className="text-xs font-mono text-primary hover:text-white">EXECUTE</button></form>
        </div>
      </section>

      <section id="assistant" className="container-mega scroll-mt-24 pb-16">
        <div className="mb-5 flex items-center gap-3"><Bot className="text-primary" /><div><p className="font-mono text-[10px] tracking-[0.18em] text-primary">02 / PORTFOLIO ASSISTANT</p><h3 className="text-2xl font-bold">Ask Newaz</h3></div></div>
        <div className="glass-panel overflow-hidden rounded-xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-text-secondary"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Portfolio knowledge base • source-grounded responses</div>
          <div className="max-h-72 space-y-3 overflow-y-auto p-4">{chat.map((message, index) => <div key={index} className={"max-w-3xl rounded-lg p-3 text-sm leading-relaxed " + (message.role === "user" ? "ml-auto bg-primary/10 text-white" : "border border-white/10 bg-black/20 text-text-secondary")}><span className="mb-1 block font-mono text-[9px] uppercase tracking-widest text-primary">{message.role === "user" ? "VISITOR" : "NEWAZ PORTFOLIO GUIDE"}</span>{message.text}</div>)}</div>
          <form onSubmit={askAssistant} className="flex gap-2 border-t border-white/10 p-3"><input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about experience, projects, skills…" aria-label="Ask the portfolio assistant" className="min-w-0 flex-1 rounded border border-white/10 bg-black/30 px-3 py-3 text-sm outline-none focus:border-primary/50" /><button className="rounded bg-primary px-4 text-xs font-bold text-black">ASK</button></form>
          <p className="px-4 pb-3 text-[10px] text-text-secondary">This version uses a curated local knowledge base, not a live generative AI model. No unsupported claims are generated.</p>
        </div>
      </section>

      <section id="security-center" className="container-mega scroll-mt-24 pb-16">
        <div className="mb-5 flex items-center gap-3"><Shield className="text-primary" /><div><p className="font-mono text-[10px] tracking-[0.18em] text-primary">03 / CYBERSECURITY COMMAND CENTER</p><h3 className="text-2xl font-bold">Threat intelligence feed</h3></div></div>
        <div className="glass-panel rounded-xl p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-2 text-xs text-emerald-300"><Radio size={15} /> {cveStatus}</div><span className="text-[10px] text-text-secondary">Source: CISA KEV public catalog</span></div>
          {cves.length ? <div className="divide-y divide-white/10">{cves.map((cve) => <article key={cve.cveID} className="grid gap-2 py-3 sm:grid-cols-[145px_1fr_auto] sm:items-center"><span className="font-mono text-xs text-primary">{cve.cveID}</span><div><h4 className="text-sm font-semibold text-white">{cve.vulnerabilityName}</h4><p className="mt-1 line-clamp-2 text-xs text-text-secondary">{cve.shortDescription}</p><p className="mt-1 text-[10px] text-text-secondary">{cve.vendorProject} • Added {cve.dateAdded}</p></div><a href={"https://www.cisa.gov/known-exploited-vulnerabilities-catalog?search_api_fulltext=" + encodeURIComponent(cve.cveID)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary">Details <ExternalLink size={12} /></a></article>)}</div> : <p className="py-8 text-sm text-text-secondary">{cveStatus}</p>}
          <p className="mt-3 border-t border-white/10 pt-3 text-[10px] leading-relaxed text-text-secondary">This panel displays entries from CISA’s Known Exploited Vulnerabilities catalog. It is not a live attack monitor and does not represent activity on any network.</p>
        </div>
      </section>

      <section id="network-lab" className="container-mega scroll-mt-24 pb-16">
        <div className="mb-5 flex items-center gap-3"><Network className="text-primary" /><div><p className="font-mono text-[10px] tracking-[0.18em] text-primary">04 / NETWORK VISUALIZATION LAB</p><h3 className="text-2xl font-bold">How a secured network is layered</h3></div></div>
        <div className="glass-panel rounded-xl p-4 sm:p-7">
          <svg viewBox="0 0 820 300" role="img" aria-label="Illustrative network diagram showing internet, firewall, monitoring, application server, and protected database" className="w-full">
            <defs><marker id="network-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#00f2ea" /></marker></defs>
            <g fill="none" stroke="#00f2ea" strokeWidth="2" strokeDasharray="6 7" markerEnd="url(#network-arrow)" opacity=".8"><path d="M115 150 H245" /><path d="M345 150 H470" /><path d="M565 150 H690" /><path d="M520 185 V235 H320 V185" /></g>
            {[{x:25,t:"INTERNET",s:"External traffic"},{x:245,t:"FIREWALL",s:"Traffic filtering"},{x:470,t:"APP SERVER",s:"Protected service"},{x:690,t:"DATABASE",s:"Restricted access"}].map((n) => <g key={n.t}><rect x={n.x} y="112" width="105" height="76" rx="9" fill="#07171a" stroke="#00f2ea" strokeOpacity=".7" /><text x={n.x+52} y="145" fill="#e5ffff" fontSize="10" textAnchor="middle" fontFamily="monospace">{n.t}</text><text x={n.x+52} y="163" fill="#8aa" fontSize="8" textAnchor="middle">{n.s}</text></g>)}
            <rect x="455" y="225" width="130" height="48" rx="7" fill="#07171a" stroke="#22c55e" strokeOpacity=".8" /><text x="520" y="245" fill="#86efac" fontSize="10" textAnchor="middle" fontFamily="monospace">SIEM / SOC</text><text x="520" y="260" fill="#8aa" fontSize="8" textAnchor="middle">Logs • Alerts • Analysis</text>
            <circle r="4" fill="#00f2ea"><animateMotion dur="5s" repeatCount="indefinite" path="M115 150 H245 H350 H470 H565 H690" /></circle>
          </svg>
          <p className="mt-3 text-xs text-text-secondary">Illustrative architecture for learning purposes. The traffic animation is simulated; this is not a scan or map of a real network.</p>
        </div>
      </section>

      <section id="mission-files" className="container-mega scroll-mt-24 pb-16">
        <div className="mb-5 flex items-center gap-3"><LockKeyhole className="text-primary" /><div><p className="font-mono text-[10px] tracking-[0.18em] text-primary">05 / PROJECT MISSION FILES</p><h3 className="text-2xl font-bold">Selected builds</h3></div></div>
        <div className="grid gap-4 md:grid-cols-2">{PROJECTS.map((project, index) => <article key={project.title} className="glass-panel flex flex-col rounded-xl p-5 transition hover:border-primary/30"><div className="mb-4 flex items-center justify-between"><span className="font-mono text-[10px] tracking-widest text-primary">MISSION FILE / 0{index+1}</span><span className="text-[10px] text-text-secondary">{project.category}</span></div><h4 className="mb-2 text-xl font-bold">{project.title}</h4><p className="mb-5 flex-1 text-sm leading-relaxed text-text-secondary">{project.description}</p><div className="mb-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded border border-white/10 px-2 py-1 text-[10px] text-white/70">{tech}</span>)}</div><div className="flex items-center gap-4 border-t border-white/10 pt-4 text-xs"><a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-text-secondary hover:text-primary"><Github size={14}/> Repository</a><a href={project.link} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-1.5 text-primary">Open project <ExternalLink size={13}/></a></div></article>)}</div>
      </section>

      <section id="achievement-wall" className="container-mega scroll-mt-24 pb-16">
        <div className="mb-5 flex items-center gap-3"><Award className="text-primary" /><div><p className="font-mono text-[10px] tracking-[0.18em] text-primary">06 / ACHIEVEMENT WALL</p><h3 className="text-2xl font-bold">Credentials & milestones</h3></div></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{CERTIFICATIONS.slice(0, 9).map((cert) => <article key={cert.name} className="glass-panel rounded-xl p-4"><div className="mb-3 flex items-center justify-between"><Award size={18} className="text-primary"/><span className="font-mono text-[10px] text-text-secondary">{cert.year}</span></div><h4 className="text-sm font-semibold">{cert.name}</h4><p className="mt-1 text-xs text-text-secondary">{cert.issuer}</p></article>)}</div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">{AWARDS.map((award) => <article key={award.title} className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4"><CheckCircle2 size={18} className="mb-3 text-primary"/><h4 className="text-sm font-semibold">{award.title}</h4><p className="mt-1 text-xs text-text-secondary">{award.organization} • {award.year}</p><p className="mt-3 text-xs leading-relaxed text-text-secondary">{award.description}</p></article>)}</div>
      </section>

      <section id="github-activity" className="container-mega scroll-mt-24 pb-16">
        <div className="mb-5 flex items-center gap-3"><Github className="text-primary" /><div><p className="font-mono text-[10px] tracking-[0.18em] text-primary">07 / DEVELOPER ACTIVITY</p><h3 className="text-2xl font-bold">GitHub public activity</h3></div></div>
        <div className="glass-panel rounded-xl p-5"><div className="mb-4 flex flex-wrap items-center justify-between gap-3"><p className="text-xs text-emerald-300">{githubStatus}</p><a href="https://github.com/NewazNezif" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary">View GitHub <ExternalLink size={12}/></a></div>{events.length ? <div className="divide-y divide-white/10">{events.map((item) => <div key={item.id} className="flex flex-wrap items-center gap-3 py-3 text-xs"><span className="rounded bg-primary/10 px-2 py-1 font-mono text-primary">{item.type.replace("Event", "")}</span><span className="min-w-0 flex-1 truncate text-white">{item.repo.name}</span><span className="text-text-secondary">{new Date(item.created_at).toLocaleDateString()}</span></div>)}</div> : <p className="py-5 text-sm text-text-secondary">{githubStatus}</p>}</div>
      </section>

      <section id="identity-card" className="container-mega scroll-mt-24 pb-20">
        <div className="mb-5 flex items-center gap-3"><UserRound className="text-primary" /><div><p className="font-mono text-[10px] tracking-[0.18em] text-primary">08 / DIGITAL IDENTITY CARD</p><h3 className="text-2xl font-bold">Connect with Newaz</h3></div></div>
        <div className="glass-panel grid gap-6 rounded-xl p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
          <div><p className="mb-2 font-mono text-xs tracking-widest text-primary">DIGITAL PROFILE / VERIFIED LINKS</p><h4 className="text-2xl font-bold">{PERSONAL_INFO.name}</h4><p className="mt-1 text-sm text-text-secondary">{PERSONAL_INFO.title} • {PERSONAL_INFO.location}</p><div className="mt-5 flex flex-wrap gap-3"><a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="rounded border border-white/15 px-3 py-2 text-xs hover:border-primary/50 hover:text-primary">LinkedIn</a><a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="rounded border border-white/15 px-3 py-2 text-xs hover:border-primary/50 hover:text-primary">GitHub</a><a href={"mailto:" + PERSONAL_INFO.email} className="rounded border border-white/15 px-3 py-2 text-xs hover:border-primary/50 hover:text-primary">Email</a><button onClick={copyEmail} className="inline-flex items-center gap-1 rounded border border-white/15 px-3 py-2 text-xs hover:border-primary/50 hover:text-primary"><Copy size={12}/>{copied ? "Copied" : "Copy email"}</button></div></div>
          <div className="w-fit rounded-lg bg-white p-3"><img src={qrUrl} alt="QR code linking to Newaz Nezif's portfolio" width="150" height="150" loading="lazy"/><p className="mt-2 text-center text-[9px] font-mono text-black">SCAN PORTFOLIO</p></div>
        </div>
      </section>
    </div>
  );
}
