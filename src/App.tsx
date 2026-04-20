import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  Briefcase,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  User,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const ROLES = [
  "Frontend Developer",
  "React Developer",
  "Next JS Developer",
  "UI/UX Developer",
];

const SKILLS = {
  "Programming Languages": ["C", "Java", "JavaScript (ES6+)", "TypeScript"],
  "Web Technologies": [
    "HTML5",
    "CSS3",
    "SCSS / SASS",
    "Responsive Design",
    "Cross-Browser Compatibility",
    "Web Accessibility (ARIA)",
  ],
  "Frameworks & Libraries": [
    "React.js",
    "Next.js",
    "Redux / Redux Toolkit",
    "Bootstrap",
    "Tailwind CSS",
    "ShadCN UI",
    "Material UI (MUI)",
  ],
  "State Management & Data Fetching": [
    "Redux Toolkit",
    "Context API",
    "React Query (TanStack Query)",
    "Axios / Fetch API",
  ],
  "Backend & Database": [
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "REST API Integration",
    "JWT Authentication",
  ],
  "Tools & Platforms": [
    "VS Code",
    "Postman",
    "Sublime",
    "Android Studio",
    "Cursor",
    "GitHub Actions (CI/CD)",
    "Vercel / Netlify",
    "Firebase",
    "Figma",
  ],
  "Version Control": ["Git", "GitHub", "Bitbucket"],
  "Testing & Performance": ["Jest", "React Testing Library", "Lighthouse"],
  "Other Skills": [
    "SEO Optimization (Next.js)",
    "Code Splitting & Lazy Loading",
    "Web Performance Optimization",
    "Agile / Scrum Methodology",
  ],
};

const SKILL_CATEGORY_CONFIG: Record<
  string,
  { dotColor: string; borderColor: string }
> = {
  "Programming Languages": {
    dotColor: "bg-violet-500",
    borderColor: "border-l-violet-500",
  },
  "Web Technologies": {
    dotColor: "bg-indigo-500",
    borderColor: "border-l-indigo-500",
  },
  "Frameworks & Libraries": {
    dotColor: "bg-blue-500",
    borderColor: "border-l-blue-500",
  },
  "State Management & Data Fetching": {
    dotColor: "bg-cyan-500",
    borderColor: "border-l-cyan-500",
  },
  "Backend & Database": {
    dotColor: "bg-teal-500",
    borderColor: "border-l-teal-500",
  },
  "Tools & Platforms": {
    dotColor: "bg-emerald-500",
    borderColor: "border-l-emerald-500",
  },
  "Version Control": {
    dotColor: "bg-amber-500",
    borderColor: "border-l-amber-500",
  },
  "Testing & Performance": {
    dotColor: "bg-rose-500",
    borderColor: "border-l-rose-500",
  },
  "Other Skills": {
    dotColor: "bg-slate-500",
    borderColor: "border-l-slate-500",
  },
};

const EXPERIENCE = [
  {
    company: "Agreem Technologies",
    role: "Jr. ReactJs Developer",
    location: "Ahmedabad, Gujarat",
    period: "Apr 2025 – Present",
    points: [
      "Built and enhanced web and mobile applications using React.js and React Native, focusing on responsive and scalable UI components.",
      "Improved performance, usability, and cross-platform compatibility through clean code practices and optimization techniques.",
    ],
  },
  {
    company: "Codage Habitation",
    role: "Jr. ReactJs Developer",
    location: "Ahmedabad, Gujarat",
    period: "Sept 2023 – March 2025",
    points: [
      "Designed and maintained responsive, user-focused web interfaces with React.js, improving usability, interaction flow, and cross-device compatibility.",
      "Supported frontend–backend integration, debugging, and feature updates for live projects.",
    ],
  },
  {
    company: "Brainy Beam Pvt. Ltd.",
    role: "Frontend Developer Intern",
    location: "Ahmedabad, Gujarat",
    period: "Jul 2023 – Aug 2023",
    points: [
      "Built and optimized Rentify's frontend using React.js, ensuring device compatibility, browser consistency, and scalable UI components.",
    ],
  },
];

const PROJECTS = [
  {
    name: "X-Beat",
    subtitle: "Audio Store Website",
    description:
      "Built a responsive audio e-commerce platform using React.js with Redux for state management and React Router for seamless navigation. Implemented cart management, dynamic pricing, and discount calculations.",
    tags: ["HTML5", "CSS3", "React.js", "Redux", "React Router"],
    github: "https://github.com/hanipatel08/X-beat",
    live: "https://x-beat-lovat.vercel.app/",
    hasLive: true,
    gradient: "from-violet-900 to-purple-700",
  },
  
  {
    name: "Apex",
    subtitle: "Finance Dashboard",
    description:
      "Built personal finance dashboard tracking income, expenses, multi-year health; advanced transactions with search, filters, sorting, export, and role-based data visualizations.",
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Vite",
      "localStorage API",
    ],
    github: "https://github.com/hanipatel08/Apex",
    live: "https://apex-frontend-liart-tau.vercel.app/",
    hasLive: true,
    gradient: "from-emerald-500 to-teal-600",
  },
];

const EDUCATION = [
  {
    institution: "Ahmedabad Institute Of Technology",
    degree: "Bachelor's in Information Technology",
    period: "Aug 2020 – June 2024",
    location: "Ahmedabad, Gujarat",
  },
  {
    institution: "Adarsh Vidhyalaya",
    degree: "12th Standard",
    period: "June 2018 – March 2020",
    location: "Ahmedabad, Gujarat",
  },
  {
    institution: "S.B Vidhyalaya",
    degree: "10th Standard",
    period: "June 2017 – March 2018",
    location: "Ahmedabad, Gujarat",
  },
];

const CERTIFICATIONS = [
  { name: "Web Development Bootcamp", issuer: "Udemy", date: "May 2023" },
  { name: "Java Programming", issuer: "", date: "May 2022" },
];

const ABOUT_HIGHLIGHTS = [
  {
    icon: <Code2 size={22} />,
    title: "React.js Expert",
    tagline: "Building modern, scalable UIs",
    topBorder: "linear-gradient(90deg, #3B0764, #7C3AED)",
  },
  {
    icon: <Briefcase size={22} />,
    title: "3+ Years Experience",
    tagline: "Professional frontend development",
    topBorder: "linear-gradient(90deg, #4C1D95, #7C3AED)",
  },
  {
    icon: <Zap size={22} />,
    title: "Next.js & TypeScript",
    tagline: "Full-stack ready, type-safe code",
    topBorder: "linear-gradient(90deg, #5B21B6, #7C3AED)",
  },
  {
    icon: <Award size={22} />,
    title: "Performance Optimizer",
    tagline: "Fast, accessible, lightweight apps",
    topBorder: "linear-gradient(90deg, #F59E0B, #EF4444)",
  },
  {
    icon: <Heart size={22} />,
    title: "Open to Work",
    tagline: "Available for new opportunities",
    topBorder: "linear-gradient(90deg, #EC4899, #8B5CF6)",
  },
  {
    icon: <MapPin size={22} />,
    title: "Ahmedabad, India",
    tagline: "Remote & on-site roles welcome",
    topBorder: "linear-gradient(90deg, #4C1D95, #5B21B6)",
  },
];

const TECH_PILLS = [
  { label: "React.js", bg: "#F5F3FF", text: "#5B21B6", border: "#ddd6fe" },
  { label: "Next.js", bg: "#F1F5F9", text: "#1e293b", border: "#cbd5e1" },
  { label: "TypeScript", bg: "#EFF6FF", text: "#2563EB", border: "#bfdbfe" },
  {
    label: "Tailwind CSS",
    bg: "#F0FDFA",
    text: "#0D9488",
    border: "#99f6e4",
  },
  { label: "Node.js", bg: "#F0FDF4", text: "#16A34A", border: "#bbf7d0" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// Typewriter hook
function useTypewriter(
  words: string[],
  typeSpeed = 80,
  deleteSpeed = 50,
  pauseMs = 1500,
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayed((d) => d.slice(0, -1)),
        deleteSpeed,
      );
    } else {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        typeSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIdx, words, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}

// Counter animation hook
function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// Section Heading component
function SectionHeading({
  icon,
  label,
}: { icon: React.ReactNode; label: string }) {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.35 0.22 300) 0%, oklch(0.45 0.20 290) 100%)",
          }}
        >
          {icon}
        </div>
        <h2 className="section-heading font-display">{label}</h2>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-1 rounded-full origin-left"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.35 0.22 300) 0%, oklch(0.45 0.20 290) 60%, transparent 100%)",
          width: "180px",
        }}
      />
    </div>
  );
}

const RESUME_PATH = "/assets/Resume.pdf";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const typedRole = useTypewriter(ROLES);

  const { count: yearsCount, ref: yearsRef } = useCountUp(3);
  const { count: projectsCount, ref: projectsRef } = useCountUp(10);
  const { count: companiesCount, ref: companiesRef } = useCountUp(3);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0,
      );
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ── SCROLL PROGRESS BAR ── */}
      <div
        className="fixed top-0 left-0 z-[60] h-1 transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #3B0764 0%, #7C3AED 100%)",
        }}
      />

      {/* ── NAV ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
        style={{ marginTop: "4px" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* HP Monogram Logo */}
          <a
            href="#home"
            data-ocid="nav.link"
            className="flex items-center gap-2 group"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md transition-transform group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #3B0764 0%, #7C3AED 100%)",
              }}
            >
              HP
            </div>
            <span className="font-display font-bold text-lg hidden sm:block">
              Hani Patel
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-800 to-purple-900 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
            <a
              href="#contact"
              data-ocid="nav.primary_button"
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 animate-glow-pulse"
              style={{
                background: "linear-gradient(135deg, #3B0764 0%, #7C3AED 100%)",
              }}
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            data-ocid="nav.toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden border-t border-border bg-background/95 backdrop-blur-md overflow-hidden"
            >
              <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-ocid="nav.link"
                    className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  data-ocid="nav.primary_button"
                  className="mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #3B0764 0%, #7C3AED 100%)",
                  }}
                  onClick={() => {
                    setMobileOpen(false);
                    window.location.hash = "#contact";
                  }}
                >
                  Hire Me
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── HERO ── */}
        <section
          id="home"
          className="relative overflow-hidden min-h-screen flex items-center"
          style={{ background: "#f8fafc" }}
        >
          {/* Background mesh glows */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 20% 30%, oklch(0.92 0.04 255 / 0.5) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, oklch(0.94 0.03 195 / 0.4) 0%, transparent 55%)",
            }}
          />

          {/* Decorative floating circles */}
          <div
            className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full opacity-5 -z-10"
            style={{
              background: "linear-gradient(135deg, #3B0764, #7C3AED)",
              animation: "float 8s ease-in-out infinite",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/6 w-32 h-32 rounded-full opacity-8 -z-10"
            style={{
              background: "linear-gradient(135deg, #4C1D95, #7C3AED)",
              animation: "float 6s ease-in-out infinite",
              animationDelay: "2s",
              filter: "blur(30px)",
            }}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16"
          >
            {/* ── Text side (left) ── */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              {/* Available pill */}
              <motion.div variants={fadeUp} className="mb-5">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium border"
                  style={{
                    background: "rgba(16, 185, 129, 0.1)",
                    borderColor: "rgba(16, 185, 129, 0.3)",
                    color: "#059669",
                  }}
                >
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Available for Work
                </span>
              </motion.div>

              {/* Headline — NO opacity/fade animation, solid #5B21B6 always visible */}
              <h1
                className="text-xl md:text-2xl font-normal font-display mb-1 leading-tight"
                style={{ color: "#1e293b" }}
              >
                Hello, I'm{" "}
                <span
                  className="block text-6xl md:text-7xl lg:text-8xl font-extrabold font-display"
                  style={{
                    color: "#5B21B6",
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
                  }}
                >
                  Hani Patel
                </span>
              </h1>

              {/* Typewriter role — solid #5B21B6, no opacity animation */}
              <div
                className="mb-6"
                style={{
                  minHeight: "2.5rem",
                  height: "2.5rem",
                  maxWidth: "480px",
                  width: "100%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                <span
                  className="text-xl md:text-2xl font-semibold mr-2"
                  style={{ color: "#475569" }}
                >
                  Passionate
                </span>
                <span
                  className="text-xl md:text-2xl font-semibold"
                  style={{
                    color: "#5B21B6",
                    WebkitTextFillColor: "#5B21B6",
                    background: "none",
                    WebkitBackgroundClip: "unset",
                    backgroundClip: "unset",
                  }}
                >
                  {typedRole}
                </span>
                <span className="typewriter-cursor" />
              </div>

              {/* Title divider */}
              <div
                style={{
                  height: "2px",
                  background:
                    "linear-gradient(90deg, #3B0764 0%, #7C3AED 60%, transparent 100%)",
                  borderRadius: "2px",
                  marginBottom: "1.5rem",
                  maxWidth: "340px",
                }}
              />

              {/* Tech Stack Pills */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start"
              >
                {TECH_PILLS.map((pill) => (
                  <span
                    key={pill.label}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border"
                    style={{
                      background: pill.bg,
                      color: pill.text,
                      borderColor: pill.border,
                    }}
                  >
                    {pill.label}
                  </span>
                ))}
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-3 gap-4 mb-8 w-full max-w-sm mx-auto lg:mx-0"
              >
                <div className="text-center min-w-0">
                  <p
                    className="text-3xl font-bold"
                    style={{ color: "#4C1D95" }}
                  >
                    <span ref={yearsRef}>{yearsCount}</span>+
                  </p>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Years Experience
                  </p>
                </div>
                <div className="text-center min-w-0">
                  <p
                    className="text-3xl font-bold"
                    style={{ color: "#4C1D95" }}
                  >
                    <span ref={projectsRef}>{projectsCount}</span>+
                  </p>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Projects Built
                  </p>
                </div>
                <div className="text-center min-w-0">
                  <p
                    className="text-3xl font-bold"
                    style={{ color: "#4C1D95" }}
                  >
                    <span ref={companiesRef}>{companiesCount}</span>
                  </p>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Companies
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              >
                <Button
                  size="lg"
                  asChild
                  data-ocid="hero.primary_button"
                  className="glow-btn animate-glow-pulse"
                  style={{
                    background:
                      "linear-gradient(135deg, #3B0764 0%, #7C3AED 100%)",
                    border: "none",
                  }}
                >
                  <a href="#projects">View My Work</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  data-ocid="hero.secondary_button"
                  style={{
                    borderColor: "rgba(79,70,229,0.4)",
                    color: "#3B0764",
                    background: "rgba(79,70,229,0.05)",
                  }}
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
              </motion.div>

              {/* Social row */}
              <motion.div
                variants={fadeUp}
                className="flex gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://www.linkedin.com/in/hani-patel-970aa024a/"
                  target="_blank"
                  rel="noreferrer"
                  data-ocid="hero.link"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(79,70,229,0.08)",
                    color: "#3B0764",
                    border: "1px solid rgba(79,70,229,0.2)",
                  }}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/hanipatel08"
                  target="_blank"
                  rel="noreferrer"
                  data-ocid="hero.link"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(79,70,229,0.08)",
                    color: "#3B0764",
                    border: "1px solid rgba(79,70,229,0.2)",
                  }}
                >
                  <Github size={18} />
                </a>
                <a
                  href="mailto:hanipatel2002@gmail.com"
                  data-ocid="hero.link"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(79,70,229,0.08)",
                    color: "#3B0764",
                    border: "1px solid rgba(79,70,229,0.2)",
                  }}
                >
                  <Mail size={18} />
                </a>
              </motion.div>
            </div>

            {/* ── Photo side (right) — NO floating on the photo itself ── */}
            <motion.div
              variants={fadeUp}
              className="flex-shrink-0 relative order-1 lg:order-2"
            >
              {/* Glow ring — static, no floating animation on outer wrapper */}
              <div
                style={{
                  filter:
                    "drop-shadow(0 0 32px rgba(91,33,182,0.45)) drop-shadow(0 0 64px rgba(91,33,182,0.2))",
                }}
              >
                {/* Gradient ring border */}
                <div
                  className="rounded-full p-[3px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #7C3AED 0%, #4C1D95 50%, #a5b4fc 100%)",
                  }}
                >
                  {/* Inner white gap ring */}
                  <div
                    className="rounded-full p-[3px]"
                    style={{ background: "#ffffff" }}
                  >
                    {/* Photo — fixed size, NO floating animation */}
                    <div
                      className="rounded-full overflow-hidden"
                      style={{
                        width: "clamp(240px, 24vw, 340px)",
                        height: "clamp(240px, 24vw, 340px)",
                      }}
                    >
                      <img
                        src="/assets/uploads/hani-new-1.jpg"
                        alt="Hani Patel"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating React.js badge — only this floats */}
              <div
                className="absolute -left-6 top-8 bg-white rounded-xl px-3 py-2 shadow-xl flex items-center gap-2"
                style={{ animation: "float 4s ease-in-out infinite" }}
              >
                <span className="text-lg">⚡</span>
                <span className="text-xs font-bold text-slate-700">
                  React.js
                </span>
              </div>

              {/* Floating Next.js badge — only this floats, different speed */}
              <div
                className="absolute -right-6 bottom-8 bg-white rounded-xl px-3 py-2 shadow-xl flex items-center gap-2"
                style={{ animation: "float-slow 5.5s ease-in-out infinite" }}
              >
                <span className="text-lg">🚀</span>
                <span className="text-xs font-bold text-slate-700">
                  Next.js
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs text-slate-500 tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-5 h-8 border border-slate-600 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-slate-500 animate-scroll-bounce" />
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section
          id="about"
          className="py-28 section-divider"
          style={{ background: "var(--section-alt)" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <SectionHeading icon={<User size={20} />} label="About Me" />

              {/* Left: ~60%, Right: ~40% */}
              <div className="mt-10 flex flex-col lg:flex-row gap-12 items-start">
                {/* Left column: Bio + contact + certifications + resume */}
                <motion.div variants={fadeUp} className="flex-1 min-w-0">
                  <div
                    className="rounded-2xl p-6 mb-6 relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(79,70,229,0.06) 0%, rgba(6,182,212,0.04) 100%)",
                      border: "1px solid rgba(79,70,229,0.12)",
                    }}
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                      style={{
                        background: "linear-gradient(180deg, #3B0764, #7C3AED)",
                      }}
                    />
                    <p className="text-black leading-relaxed pl-4">
                      I'm a passionate Frontend Developer with 3+ years of
                      experience building modern, high-performance web
                      applications. I specialize in React.js, Next.js, and
                      TypeScript — crafting user interfaces that are not only
                      beautiful but also fast, accessible, and scalable.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        icon: <Mail size={16} />,
                        label: "hanipatel2002@gmail.com",
                        href: "mailto:hanipatel2002@gmail.com",
                      },
                      {
                        icon: <Phone size={16} />,
                        label: "+91 8734820191",
                        href: "tel:+918734820191",
                      },
                      {
                        icon: <MapPin size={16} />,
                        label: "Ahmedabad, Gujarat, India",
                        href: "#",
                      },
                      {
                        icon: <Linkedin size={16} />,
                        label: "linkedin.com/in/hani-patel-970aa024a",
                        href: "https://www.linkedin.com/in/hani-patel-970aa024a/",
                      },
                      {
                        icon: <Github size={16} />,
                        label: "github.com/hanipatel08",
                        href: "https://github.com/hanipatel08",
                      },
                    ].map((item) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noreferrer"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl group transition-all duration-200 hover:shadow-md"
                        style={{ border: "1px solid transparent" }}
                        whileHover={{
                          x: 4,
                          backgroundColor: "rgba(79,70,229,0.04)",
                          borderColor: "rgba(79,70,229,0.15)",
                        }}
                      >
                        <span className="text-primary">{item.icon}</span>
                        <span className="text-sm text-black font-medium">
                          {item.label}
                        </span>
                      </motion.a>
                    ))}
                  </div>

                  {/* Certifications */}
                  <div className="mt-8">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Award size={16} className="text-primary" />
                      Certifications
                    </h3>
                    <div className="space-y-3">
                      {CERTIFICATIONS.map((c, i) => (
                        <motion.div
                          key={c.name}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.15 }}
                          className="flex items-start gap-3 pl-4 py-3 rounded-xl relative overflow-hidden"
                          style={{
                            background: "rgba(79,70,229,0.04)",
                            border: "1px solid rgba(79,70,229,0.1)",
                          }}
                        >
                          <div
                            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                            style={{
                              background:
                                "linear-gradient(180deg, oklch(0.35 0.22 300), oklch(0.60 0.15 195))",
                            }}
                          />
                          <Award
                            size={16}
                            className="text-primary mt-0.5 flex-shrink-0 ml-2"
                          />
                          <div>
                            <p className="font-medium text-foreground">
                              {c.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {c.issuer && `${c.issuer} · `}
                              {c.date}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Download Resume */}
                  <div className="mt-4">
                    <a
                      href={RESUME_PATH}
                      download="Resume.pdf"
                      data-ocid="about.primary_button"
                      className="inline-flex items-center justify-start gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white glow-btn transition-all duration-200"
                      style={{
                        background:
                          "linear-gradient(135deg, #3B0764 0%, #7C3AED 100%)",
                      }}
                    >
                      <Download size={14} />
                      Download Resume
                    </a>
                  </div>
                </motion.div>

                {/* Right column: Highlight Cards grid */}
                <motion.div
                  variants={fadeUp}
                  className="w-full lg:w-[42%] grid grid-cols-2 gap-4 content-start flex-shrink-0"
                >
                  {ABOUT_HIGHLIGHTS.map((h, i) => (
                    <motion.div
                      key={h.title}
                      variants={fadeUp}
                      whileHover={{
                        y: -6,
                        boxShadow: "0 12px 40px oklch(0.52 0.14 222 / 0.18)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 18,
                      }}
                      className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 cursor-default"
                      data-ocid={`about.card.${i + 1}`}
                    >
                      {/* Colored top border */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                        style={{ background: h.topBorder }}
                      />
                      {/* Shimmer on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.52 0.14 222 / 0.06) 0%, oklch(0.60 0.15 195 / 0.04) 50%, transparent 100%)",
                        }}
                      />
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-primary mb-4 mt-2 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.93 0.05 222) 0%, oklch(0.88 0.07 210) 100%)",
                        }}
                      >
                        {h.icon}
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {h.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {h.tagline}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section
          id="skills"
          className="py-28 section-divider"
          style={{ background: "var(--section-base)" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <SectionHeading
                icon={<Code2 size={20} />}
                label="Technical Skills"
              />
              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(SKILLS).map(([category, items], ci) => {
                  const cfg = SKILL_CATEGORY_CONFIG[category] ?? {
                    dotColor: "bg-slate-500",
                    borderColor: "border-l-slate-500",
                  };
                  return (
                    <motion.div key={category} variants={fadeUp}>
                      {/* Card: hover lifts + purple shadow. BG stays white — no bg change on hover */}
                      <Card
                        className={`h-full border border-slate-200 shadow-sm rounded-xl bg-white border-l-4 ${cfg.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(91,33,182,0.18)]`}
                      >
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full ${cfg.dotColor} flex-shrink-0`}
                            />
                            {category}
                          </h3>
                          <div className="flex flex-wrap gap-1.5">
                            {items.map((skill) => (
                              <span
                                key={skill}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 transition-all duration-200 hover:scale-105 hover:bg-[#ede9fe] hover:border-purple-300 hover:text-purple-800 cursor-default"
                                data-ocid={`skills.item.${ci + 1}`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section
          id="experience"
          className="py-28 section-divider"
          style={{ background: "var(--section-alt)" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <SectionHeading
                icon={<Briefcase size={20} />}
                label="Work Experience"
              />

              {/* Timeline — dot centered exactly on the line using left-[calc(1.25rem-0.625rem)] = left-[10px] offset */}
              <div className="mt-10 relative">
                {/* Vertical line — absolute at left-5 (20px), width 2px, centered = center at 21px */}
                <div
                  className="absolute top-0 bottom-0 w-0.5"
                  style={{
                    left: "20px",
                    background:
                      "linear-gradient(180deg, #3B0764 0%, #7C3AED 50%, transparent 100%)",
                  }}
                />

                <div className="space-y-8">
                  {EXPERIENCE.map((exp, i) => (
                    <motion.div
                      key={exp.company}
                      variants={fadeUp}
                      data-ocid={`experience.item.${i + 1}`}
                      className="pl-14 relative"
                    >
                      {/* Timeline dot — centered on the line: line at left=20px (center=21px), dot w=20px → left=11px so center=21px */}
                      <div
                        className="absolute top-6 w-5 h-5 rounded-full border-2 border-white shadow-md"
                        style={{
                          left: "11px",
                          background:
                            "linear-gradient(135deg, #3B0764 0%, #7C3AED 100%)",
                        }}
                      />

                      <Card className="border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                        <CardContent className="p-6">
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-foreground font-display">
                                {exp.company}
                              </h3>
                              <p className="text-primary font-semibold">
                                {exp.role}
                              </p>
                            </div>
                            <div className="text-right flex flex-col items-end gap-1">
                              <span
                                className="px-3 py-1 rounded-full text-xs font-semibold"
                                style={{
                                  background:
                                    "linear-gradient(135deg, rgba(79,70,229,0.1), rgba(6,182,212,0.1))",
                                  color: "oklch(0.35 0.22 300)",
                                  border: "1px solid rgba(79,70,229,0.2)",
                                }}
                              >
                                {exp.period}
                              </span>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <MapPin size={11} />
                                {exp.location}
                              </p>
                            </div>
                          </div>
                          <Separator className="mb-4" />
                          <ul className="space-y-2">
                            {exp.points.map((pt) => (
                              <li
                                key={pt.slice(0, 20)}
                                className="flex gap-2 text-muted-foreground text-sm leading-relaxed"
                              >
                                <ChevronRight
                                  size={14}
                                  className="text-primary mt-1 flex-shrink-0"
                                />
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PROJECTS — 3 cards horizontal on lg, 2 on md, 1 on mobile. NO gradient divider ── */}
        <section
          id="projects"
          className="py-28 section-divider"
          style={{ background: "var(--section-base)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <SectionHeading icon={<Code2 size={20} />} label="Projects" />
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-stretch">
                {PROJECTS.map((proj, i) => (
                  <motion.div
                    key={proj.name}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 280, damping: 20 }}
                    data-ocid={`projects.item.${i + 1}`}
                    className="w-full"
                  >
                    <Card className="h-full border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
                      <CardContent className="p-7 flex flex-col h-full">
                        <div className="mb-4">
                          <h3 className="text-2xl font-extrabold text-foreground font-display">
                            {proj.name}
                          </h3>
                          <p className="text-primary text-sm font-medium">
                            {proj.subtitle}
                          </p>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {proj.tags.map((t) => (
                            <Badge
                              key={t}
                              variant="outline"
                              className="text-xs"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            data-ocid={`projects.secondary_button.${i + 1}`}
                          >
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Github size={14} className="mr-1" /> GitHub
                            </a>
                          </Button>
                          {proj.hasLive && (
                            <Button
                              size="sm"
                              asChild
                              data-ocid={`projects.primary_button.${i + 1}`}
                            >
                              <a
                                href={proj.live}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <ExternalLink size={14} className="mr-1" /> Live
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section
          id="education"
          className="py-28 section-divider"
          style={{ background: "var(--section-alt)" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <SectionHeading
                icon={<GraduationCap size={20} />}
                label="Education"
              />
              <div className="mt-10 space-y-4">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={edu.institution}
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.015,
                      boxShadow: "0 8px 30px oklch(0.52 0.14 222 / 0.12)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    data-ocid={`education.item.${i + 1}`}
                  >
                    <Card className="border-border bg-card hover:border-primary/40 transition-colors duration-300">
                      <CardContent className="p-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <GraduationCap size={18} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground">
                              {edu.institution}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {edu.degree}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            {edu.period}
                          </p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                            <MapPin size={11} />
                            {edu.location}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          id="contact"
          className="py-28 section-divider"
          style={{ background: "var(--section-base)" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Big tagline */}
              <motion.p
                variants={fadeUp}
                className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl mb-3"
                style={{ color: "#4C1D95" }}
              >
                Let's Build Something Great
              </motion.p>

              <SectionHeading icon={<Mail size={20} />} label="Contact" />

              <div className="mt-10 grid md:grid-cols-2 gap-12 items-start">
                <motion.div variants={fadeUp}>
                  <p className="text-black leading-relaxed mb-8">
                    I'm actively looking for new frontend opportunities. Whether
                    you have a project in mind, want to discuss tech, or just
                    say hi — my inbox is always open!
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Mail size={18} />,
                        label: "hanipatel2002@gmail.com",
                        href: "mailto:hanipatel2002@gmail.com",
                      },
                      {
                        icon: <Phone size={18} />,
                        label: "+91 8734820191",
                        href: "tel:+918734820191",
                      },
                      {
                        icon: <MapPin size={18} />,
                        label: "Ahmedabad, Gujarat, India",
                        href: "#",
                      },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        data-ocid="contact.link"
                        className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200 hover:shadow-md"
                        style={{
                          border: "1px solid rgba(79,70,229,0.15)",
                          background: "rgba(79,70,229,0.02)",
                        }}
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium text-black">
                          {item.label}
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/hani-patel-970aa024a/"
                      target="_blank"
                      rel="noreferrer"
                      data-ocid="contact.link"
                      className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://github.com/hanipatel08"
                      target="_blank"
                      rel="noreferrer"
                      data-ocid="contact.link"
                      className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-4">
                  <a
                    href={RESUME_PATH}
                    download="Resume.pdf"
                    data-ocid="contact.primary_button"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 glow-btn"
                    style={{
                      background:
                        "linear-gradient(135deg, #3B0764 0%, #7C3AED 100%)",
                    }}
                  >
                    <Download size={18} />
                    Download Resume
                  </a>

                  <a
                    href="mailto:hanipatel2002@gmail.com"
                    data-ocid="contact.secondary_button"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold border transition-all duration-200 hover:bg-primary/5"
                    style={{
                      borderColor: "rgba(79,70,229,0.3)",
                      color: "oklch(0.35 0.22 300)",
                    }}
                  >
                    <Mail size={18} />
                    Send an Email
                  </a>

                  <div
                    className="rounded-xl p-5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(79,70,229,0.06), rgba(6,182,212,0.04))",
                      border: "1px solid rgba(79,70,229,0.12)",
                    }}
                  >
                    <p className="text-sm text-muted-foreground text-center mb-2">
                      🟢 Currently available
                    </p>
                    <p className="font-bold text-foreground text-center">
                      Open to Opportunities
                    </p>
                    <p className="text-xs text-muted-foreground text-center mt-1">
                      Full-time · Remote · On-site
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#f1f5f9", borderTop: "1px solid #e2e8f0" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #3B0764 0%, #7C3AED 100%)",
                  }}
                >
                  HP
                </div>
                <span className="font-display font-bold text-lg text-slate-900">
                  Hani Patel
                </span>
              </div>
              {/* Footer tagline — dark color for contrast */}
              <p className="text-slate-800 text-sm leading-relaxed font-medium">
                Frontend Developer passionate about building exceptional web
                experiences.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.linkedin.com/in/hani-patel-970aa024a/"
                  target="_blank"
                  rel="noreferrer"
                  data-ocid="footer.link"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:text-violet-700 transition-colors"
                  style={{
                    background: "rgba(79,70,229,0.06)",
                    border: "1px solid rgba(79,70,229,0.15)",
                  }}
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://github.com/hanipatel08"
                  target="_blank"
                  rel="noreferrer"
                  data-ocid="footer.link"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:text-violet-700 transition-colors"
                  style={{
                    background: "rgba(79,70,229,0.06)",
                    border: "1px solid rgba(79,70,229,0.15)",
                  }}
                >
                  <Github size={16} />
                </a>
                <a
                  href="mailto:hanipatel2002@gmail.com"
                  data-ocid="footer.link"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:text-violet-700 transition-colors"
                  style={{
                    background: "rgba(79,70,229,0.06)",
                    border: "1px solid rgba(79,70,229,0.15)",
                  }}
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-bold text-slate-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-ocid="footer.link"
                      className="text-slate-700 hover:text-violet-700 text-sm transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h3 className="font-display font-bold text-slate-900 mb-4">
                Let's Connect
              </h3>
              <p className="text-slate-800 text-sm mb-4 font-medium">
                Ready to start a project together?
              </p>
              <a
                href={RESUME_PATH}
                download="Resume.pdf"
                data-ocid="footer.primary_button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white glow-btn transition-all duration-200 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #3B0764 0%, #7C3AED 100%)",
                }}
              >
                <Download size={15} />
                Download Resume
              </a>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-slate-800 font-medium">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>

          <div
            className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500"
            style={{ borderTop: "1px solid #e2e8f0" }}
          >
            <p>© {new Date().getFullYear()} Hani Patel. All rights reserved.</p>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
