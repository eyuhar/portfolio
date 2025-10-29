import picture from "@/assets/picture.jpg";
import manxaLogo from "@/assets/ManxaLogo.png";
import ManxaBackend from "@/assets/ManxaBackend.png";
import portfolio from "@/assets/portfolio-site-screenshot.png";
import { Button } from "./components/ui/button";
import { Card, CardDescription, CardTitle } from "./components/ui/card";
import { GraduationCap, Mail, Info } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import ScrollToTopButton from "./components/ScrollToTopButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Badge } from "./components/ui/badge";
import {
  SiAmazonwebservices,
  SiGithub,
  SiJsonwebtokens,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const { ref: refAbout, inView: inViewAbout } = useInView({
    rootMargin: "0px 0px -40%",
    once: true,
  });

  const { ref: refSkills, inView: inViewSkills } = useInView({
    rootMargin: "0px 0px -40%",
    once: true,
  });

  const { ref: refProjects, inView: inViewProjects } = useInView({
    rootMargin: "0px 0px -40%",
    once: true,
  });

  const { ref: refContact, inView: inViewContact } = useInView({
    rootMargin: "0px 0px -40%",
    once: true,
  });

  return (
    <div className="flex flex-col w-full font-sans items-center">
      <div className="min-h-screen w-full flex flex-col">
        {/* Header/Nav */}
        <div
          className={`flex w-full justify-between items-center p-10 text-xl font-medium ${
            mounted ? "animate-fade-down delay-[1600ms]" : "opacity-0"
          }`}
        >
          <div>Eyyüp Harputlu</div>
          <div className="hidden md:flex gap-5 ">
            <div
              className="hover:underline hover:text-muted-foreground hover:cursor-pointer"
              onClick={() => {
                refAbout.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Über mich
            </div>
            <div
              className="hover:underline hover:text-muted-foreground hover:cursor-pointer"
              onClick={() => {
                refSkills.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Kenntnisse
            </div>
            <div
              className="hover:underline hover:text-muted-foreground hover:cursor-pointer"
              onClick={() => {
                refProjects.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projekte
            </div>
            <div
              className="hover:underline hover:text-muted-foreground hover:cursor-pointer"
              onClick={() => {
                refContact.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Kontakt
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="md:hidden focus-visible:ring-0 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-foreground"
                >
                  <title>menu</title>
                  <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
                Menü
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-medium">
              <DropdownMenuItem asChild>
                <div
                  className="hover:underline hover:text-muted-foreground hover:cursor-pointer"
                  onClick={() => {
                    setTimeout(() => {
                      refAbout.current?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  Über mich
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <div
                  className="hover:underline hover:text-muted-foreground hover:cursor-pointer"
                  onClick={() => {
                    setTimeout(() => {
                      refSkills.current?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  Kenntnisse
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <div
                  className="hover:underline hover:text-muted-foreground hover:cursor-pointer"
                  onClick={() => {
                    setTimeout(() => {
                      refProjects.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }, 100);
                  }}
                >
                  Projekte
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <div
                  className="hover:underline hover:text-muted-foreground hover:cursor-pointer"
                  onClick={() => {
                    setTimeout(() => {
                      refContact.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }, 100);
                  }}
                >
                  Kontakt
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Start/Home */}
        <div className="flex flex-col items-center mt-15 sm:mt-40 gap-3 font-medium">
          <div
            className={`h-60 w-60 md:h-70 md:w-70 rounded-[100%] overflow-hidden ${
              mounted ? "animate-pop-in" : "opacity-0"
            }`}
          >
            <img src={picture} alt="" className="object-cover" />
          </div>
          <p
            className={`text-md text-muted-foreground ${
              mounted ? "animate-fade-up delay-[1000ms]" : "opacity-0"
            }`}
          >
            Hallo, Ich bin
          </p>
          <p
            className={`text-4xl md:text-5xl ${
              mounted ? "animate-fade-up delay-[1200ms]" : "opacity-0"
            }`}
          >
            Eyyüp Harputlu
          </p>
          <p
            className={`text-2xl md:text-3xl text-muted-foreground ${
              mounted ? "animate-fade-up delay-[1400ms]" : "opacity-0"
            }`}
          >
            Web Entwickler
          </p>
          <div
            className={`flex gap-3 ${
              mounted ? "animate-fade-up delay-[1600ms]" : "opacity-0"
            }`}
          >
            <Button
              variant={"outline"}
              className="rounded-4xl p-5 hover:cursor-pointer"
              onClick={() => {
                refContact.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Kontakt
            </Button>
          </div>
        </div>
      </div>

      {/* About me section */}
      <div
        ref={refAbout}
        className="min-h-screen md:h-screen flex flex-col items-center max-w-7xl w-full p-10"
      >
        <p
          className={`text-lg text-muted-foreground mt-20 mb-2 delay-100 ${
            inViewAbout ? "animate-fade-left opacity-100" : "opacity-0"
          }`}
        >
          Erfahren Sie mehr
        </p>
        <p
          className={`text-5xl font-bold delay-[500ms] ${
            inViewAbout ? "animate-fade-right opacity-100" : "opacity-0"
          }`}
        >
          Über mich
        </p>
        <div className="w-full grid md:grid-cols-[auto_1fr] h-[70%] gap-15 items-center mt-20">
          <img
            src={picture}
            alt=""
            className={`h-100 w-auto rounded-4xl delay-[900ms] place-self-center ${
              inViewAbout ? "animate-fade-right opacity-100" : "opacity-0"
            }`}
          />
          <div>
            <Card
              className={`p-5 items-center delay-[900ms] ${
                inViewAbout ? "animate-fade-left opacity-100" : "opacity-0"
              }`}
            >
              <CardTitle className="text-2xl flex flex-col items-center gap-1">
                <GraduationCap size={32} />
                <p>Abschluss</p>
              </CardTitle>
              <CardDescription className="text-md">
                B. Sc. Informatik
              </CardDescription>
            </Card>
            <div
              className={`p-5 text-muted-foreground delay-[900ms] ${
                inViewAbout ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              Ich bin Web Entwickler mit Fokus auf modernen
              Frontend-Technologien wie TypeScript, React, Next.js, Tailwind CSS
              und shadcn/ui.
              <br />
              Meine Projekte beinhalten auch Backend-Arbeit mit PHP, MySQL,
              PostgreSQL, Supabase und Prisma ORM, sodass ich vollständige
              Webanwendungen umsetzen kann.
              <br />
              Ich strebe danach, mein Wissen gezielt einzusetzen, kontinuierlich
              zu lernen und Projekte effizient voranzubringen.
              <br />
              Abseits der Arbeit halte ich mich mit Sport fit, beschäftige mich
              mit Musik, oder unternehme etwas mit Freunden.
            </div>
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div
        ref={refSkills}
        className="min-h-screen flex flex-col items-center max-w-7xl w-full p-10"
      >
        <p
          className={`text-lg text-muted-foreground mt-10 mb-2 delay-100 ${
            inViewSkills ? "animate-fade-left opacity-100" : "opacity-0"
          }`}
        >
          Erkunden Sie
        </p>
        <p
          className={`text-5xl font-bold delay-[500ms] text-center ${
            inViewSkills ? "animate-fade-right opacity-100" : "opacity-0"
          }`}
        >
          meine Kenntnisse
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-5 mt-20 p-5">
          <p
            className={`text-4xl font-black text-muted-foreground min-w-54 text-center md:text-start mb-4 md:mb-0 delay-[900ms] ${
              inViewSkills ? "animate-fade-right opacity-100" : "opacity-0"
            }`}
          >
            Frontend
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[900ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">HTML</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1000ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">CSS</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1100ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">JavaScript</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1200ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">TypeScript</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1300ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">React</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1400ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                className="w-15 h-15"
              />
              <p className="text-center mt-2 text-lg font-medium">Next.js</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1500ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">
                Tailwind CSS
              </p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1600ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-background">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="w-15 h-15"
                >
                  <path
                    stroke="#111"
                    strokeLinecap="round"
                    strokeWidth="4.48"
                    d="m27.76 16.56l-11.2 11.2m8.96-23.52L4.24 25.52"
                  />
                </svg>
              </div>
              <p className="text-center mt-2 text-lg font-medium">Shadcn</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1700ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-plain.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">Zustand</p>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-5 mt-4 md:mt-12 p-5">
          <p
            className={`text-4xl font-black text-muted-foreground min-w-54 text-center md:text-start mb-4 md:mb-0  delay-[1800ms] ${
              inViewSkills ? "animate-fade-right opacity-100" : "opacity-0"
            }`}
          >
            Backend
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1800ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">PHP</p>
            </div>
            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1900ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">MySQL</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[2000ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">PostgreSQL</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[2100ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">Supabase</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[2200ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">Prisma ORM</p>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-5 mt-4 md:mt-12 p-5">
          <p
            className={`text-4xl font-black text-muted-foreground min-w-54 text-center md:text-start mb-4 md:mb-0  delay-[2300ms] ${
              inViewSkills ? "animate-fade-right opacity-100" : "opacity-0"
            }`}
          >
            Tools & Deployment
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[2300ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                className="w-15 h-15"
              />
              <p className="text-center mt-2 text-lg font-medium">VSCode</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[2400ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">Vite</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[2500ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                className="w-15 h-15"
              />
              <p className="text-center mt-2 text-lg font-medium">Git</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[2600ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
                className="w-15 h-15"
              />
              <p className="text-center mt-2 text-lg font-medium">Vercel</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[2700ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">AWS</p>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-5 mt-4 md:mt-12 p-5">
          <p
            className={`text-4xl font-black text-muted-foreground min-w-54 text-center md:text-start mb-4 md:mb-0 delay-[2800ms] ${
              inViewSkills ? "animate-fade-right opacity-100" : "opacity-0"
            }`}
          >
            Weitere
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[2800ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">Python</p>
            </div>

            <div
              className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[2900ms] ${
                inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                className="w-15 h-15"
              />

              <p className="text-center mt-2 text-lg font-medium">Java</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects section */}
      <div
        ref={refProjects}
        className="min-h-screen flex flex-col items-center max-w-7xl w-full p-5 sm:p-10"
      >
        <p
          className={`text-lg text-muted-foreground mt-10 mb-2 delay-100 ${
            inViewProjects ? "animate-fade-left opacity-100" : "opacity-0"
          }`}
        >
          Meine aktuellen
        </p>
        <p
          className={`text-5xl font-bold delay-[500ms] ${
            inViewProjects ? "animate-fade-right opacity-100" : "opacity-0"
          }`}
        >
          Projekte
        </p>

        <div className="flex flex-wrap gap-10 sm:gap-20 mt-30 justify-center">
          <Card
            className={`p-5 items-center delay-[800ms] max-w-96 justify-between overflow-hidden ${
              inViewProjects ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative h-48 w-60 sm:w-70 flex items-center justify-center">
              <div className="absolute h-12 -rotate-[15deg] left-[-35%] top-[45%] w-[180%] bg-[repeating-linear-gradient(-45deg,#facc15_0,#facc15_22px,#000_23px,#000_46px,#facc15_47px)] py-3 text-center shadow-xl">
                <div className="absolute inset-0 rounded-md pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 rounded-t-md"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-md"></div>
                </div>
              </div>
            </div>
            <CardTitle className="flex flex-col items-center gap-1">
              <p>TaleSynth</p>
              <p className="text-sm text-muted-foreground font-medium">
                (in Entwicklung)
              </p>
            </CardTitle>
            <div className="flex flex-wrap gap-1 justify-center">
              <Badge className="bg-[#3178C6] ">
                <SiTypescript /> TypeScript
              </Badge>
              <Badge className="bg-black">
                <RiNextjsFill className="w-4! h-4!" /> Next.js
              </Badge>
              <Badge className="bg-[#38BDF8]">
                <SiTailwindcss /> Tailwind CSS
              </Badge>
              <Badge className="bg-black">
                <SiShadcnui /> shadcn/ui
              </Badge>
              <Badge className="bg-gray-400">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-plain.svg"
                  className="w-4 h-4"
                />
                <p>Zustand</p>
              </Badge>
              <Badge className="bg-[#336791]">
                <SiPostgresql className="w-4! h-4!" /> PostgreSQL
              </Badge>
              <Badge className="bg-[#34B27B]">
                <SiSupabase /> Supabase
              </Badge>
              <Badge className="bg-[#5A67D8]">
                <SiPrisma className="w-4! h-4!" /> Prisma ORM
              </Badge>
            </div>
            <p className="text-center text-muted-foreground text-sm">
              TaleSynth ist ein interaktives, KI-gestütztes Rollenspiel, das in
              Next.js entwickelt wird. Die Anwendung kombiniert moderne
              Webtechnologien mit einer KI-Storyengine, um eine immersive,
              dynamische Spielerfahrung zu schaffen.
            </p>
            <div className="flex items-center gap-1">
              <p className="text-muted-foreground text-sm"></p>
            </div>
            <div className="flex gap-5"></div>
          </Card>

          <Card
            className={`p-5 items-center delay-[1000ms] max-w-96 justify-between ${
              inViewProjects ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-48 w-60 sm:w-70 flex items-center justify-center">
              <img src={manxaLogo} alt="" className="" />
            </div>
            <CardTitle>Manxa</CardTitle>
            <div className="flex flex-wrap gap-1 justify-center">
              <Badge className="bg-[#3178C6] ">
                <SiTypescript /> TypeScript
              </Badge>
              <Badge className="bg-[#61DAFB] text-foreground">
                <SiReact /> React
              </Badge>
              <Badge className="bg-[#38BDF8]">
                <SiTailwindcss /> Tailwind CSS
              </Badge>
              <Badge className="bg-black">
                <SiShadcnui /> shadcn/ui
              </Badge>
              <Badge className="bg-[#CA4245]">
                <SiReactrouter /> React Router
              </Badge>
              <Badge className="bg-[#FF4154]">
                <SiReactquery /> React Query
              </Badge>
              <Badge>
                <SiJsonwebtokens /> Auth | JWT
              </Badge>
              <Badge className="bg-[#646CFF]">
                <SiVite /> Vite
              </Badge>
            </div>
            <p className="text-center text-muted-foreground text-sm">
              Manxa ist eine Webanwendung zum Suchen, Lesen und Verwalten von
              Manxa. Nutzer können persönliche Bibliotheken anlegen,
              Lesefortschritte speichern und Statistiken zu ihrem Leseverhalten
              einsehen, alles in einer modernen, übersichtlichen Oberfläche.
            </p>
            <div className="flex items-center gap-1">
              <p className="text-muted-foreground text-sm">Deployment: </p>
              <Badge>
                <SiVercel /> Vercel
              </Badge>
            </div>
            <div className="flex gap-5">
              <Button variant={"outline"} asChild>
                <a href="https://github.com/eyuhar/manxa" target="_blank">
                  <SiGithub /> GitHub
                </a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={"outline"} className="cursor-pointer">
                    Live Demo
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="items-center">
                    <DialogTitle className="flex gap-1 items-center">
                      <Info size={20} />
                      <p>Info</p>
                    </DialogTitle>
                    <DialogDescription>
                      Um die WebApp besser testen zu können, nutze bitte die
                      folgenden Testzugangsdaten:
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center mt-5">
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">
                      test@example.com
                    </p>
                  </div>
                  <div className="flex flex-col items-center mb-5">
                    <p className="font-medium">Passwort</p>
                    <p className="text-muted-foreground text-sm">test</p>
                  </div>
                  <DialogFooter>
                    <Button variant={"outline"} asChild>
                      <a href="https://manxa.vercel.app/" target="_blank">
                        Weiter
                      </a>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          <Card
            className={`p-5 items-center delay-[1200ms] max-w-96 justify-between ${
              inViewProjects ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-48 w-60 sm:w-70 flex items-center justify-center">
              <img src={ManxaBackend} alt="" />
            </div>
            <CardTitle>Manxa Scraper</CardTitle>
            <div className="flex flex-wrap gap-1 justify-center">
              <Badge className="bg-[#777BB4]">
                <SiPhp className="w-4! h-4!" /> PHP
              </Badge>
              <Badge className="bg-[#4479A1]">
                <GrMysql className="w-4! h-4!" /> MySQL
              </Badge>
              <Badge>
                <SiJsonwebtokens /> Auth | JWT
              </Badge>
            </div>
            <p className="text-center text-muted-foreground text-sm">
              Das Manxa Backend stellt eine RESTful API für die Verwaltung und
              das Lesen von Manxa bereit. Es bietet Benutzerkonten mit
              JWT-Authentifizierung, individuelle Listen, Favoritenverwaltung,
              Lesefortschritt-Tracking und eine Scraping-Funktion für Inhalte.
            </p>
            <div className="flex items-center gap-1">
              <p className="text-muted-foreground text-sm">Deployment: </p>
              <Badge className="bg-[#FF9900]">
                <SiAmazonwebservices className="w-4! h-4!" /> AWS
              </Badge>
            </div>
            <div className="flex gap-5">
              <Button variant={"outline"} asChild>
                <a
                  href="https://github.com/eyuhar/manxa-backend"
                  target="_blank"
                >
                  <SiGithub /> GitHub
                </a>
              </Button>
            </div>
          </Card>

          <Card
            className={`p-5 items-center delay-[1400ms] max-w-96 justify-between ${
              inViewProjects ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-48 w-60 sm:w-70 flex items-center justify-center">
              <img src={portfolio} alt="" className="" />
            </div>
            <CardTitle>Portfolio</CardTitle>
            <div className="flex flex-wrap gap-1 justify-center">
              <Badge className="bg-[#3178C6] ">
                <SiTypescript /> TypeScript
              </Badge>
              <Badge className="bg-[#61DAFB] text-foreground">
                <SiReact /> React
              </Badge>
              <Badge className="bg-[#38BDF8]">
                <SiTailwindcss /> Tailwind CSS
              </Badge>
              <Badge className="bg-black">
                <SiShadcnui /> shadcn/ui
              </Badge>
              <Badge className="bg-[#646CFF]">
                <SiVite /> Vite
              </Badge>
            </div>
            <p className="text-center text-muted-foreground text-sm">
              Diese Webseite dient als mein persönliches Portfolio, entwickelt
              mit modernen Webtechnologien wie React, TypeScript, Tailwind CSS
              und shadcn/UI. Ziel war es, eine klare, performante und responsive
              Oberfläche zu gestalten, um meine Projekte und Skills ansprechend
              zu präsentieren.
            </p>
            <div className="flex items-center gap-1">
              <p className="text-muted-foreground text-sm">Deployment: </p>
              <Badge>
                <SiVercel /> Vercel
              </Badge>
            </div>
            <div className="flex gap-5">
              <Button variant={"outline"} asChild>
                <a href="https://github.com/eyuhar/portfolio" target="_blank">
                  <SiGithub /> GitHub
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Contact section */}
      <div
        ref={refContact}
        className="h-screen flex flex-col items-center max-w-7xl w-full p-10"
      >
        <div className="h-[70%] flex flex-col items-center justify-center">
          <p
            className={`text-lg text-muted-foreground mt-10 mb-2 delay-100 ${
              inViewContact ? "animate-fade-left opacity-100" : "opacity-0"
            }`}
          >
            Treten Sie mit mir in
          </p>
          <p
            className={`text-5xl font-bold delay-[500ms] ${
              inViewContact ? "animate-fade-right opacity-100" : "opacity-0"
            }`}
          >
            Kontakt
          </p>
          <Card
            className={`flex flex-row items-center gap-2 p-8 mt-10 delay-[800ms] ${
              inViewContact ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <Mail size={28} />
            <a
              href="mailto:eyuep.harputlu@gmail.com"
              className="text-lg hover:underline hover:text-muted-foreground"
            >
              eyuep.harputlu@gmail.com
            </a>
          </Card>
        </div>
        {/* Contact section */}
        <div className="mt-auto text-muted-foreground">
          <p>Copyright &copy; 2025 Eyyüp Harputlu. All Rights Reserved.</p>
        </div>
      </div>
      <ScrollToTopButton className="fixed bottom-5 right-5 md:bottom-10 md:right-10" />
    </div>
  );
}

export default App;
