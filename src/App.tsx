import picture from "@/assets/picture.jpg";
import manxaLogo from "@/assets/ManxaLogo.png";
import ManxaBackend from "@/assets/ManxaBackend.png";
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
  SiJsonwebtokens,
  SiMysql,
  SiPhp,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

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
              Ich habe einen Bachelorabschluss in Informatik und arbeite im
              Bereich Webentwicklung mit modernen Technologien wie TypeScript,
              React, TailwindCSS und Shadcn. Zusätzlich habe ich erste
              praktische Erfahrungen im Backend-Bereich gesammelt, u. a. mit PHP
              und MySQL, sowie Grundkenntnisse in Python und Java, die ich
              während meines Studiums erlernt und angewendet habe.
              <br />
              Mein Ziel ist es, mein Wissen gezielt einzusetzen, kontinuierlich
              zu lernen und in einem professionellen Umfeld aktiv zum Erfolg von
              Projekten beizutragen.
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
        <div className="w-full flex flex-wrap gap-4 sm:gap-25 mt-20 p-5 justify-center">
          <div
            className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[900ms] ${
              inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <svg viewBox="0 0 128 128" className="w-20 h-20 sm:w-25 sm:h-25">
              <path
                fill="#E44D26"
                d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
              ></path>
              <path
                fill="#F16529"
                d="M64 116.8l36.378-10.086 8.559-95.878H64z"
              ></path>
              <path
                fill="#EBEBEB"
                d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
              ></path>
              <path
                fill="#fff"
                d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
              ></path>
            </svg>
            <p className="text-center mt-2 text-lg font-medium">HTML</p>
            <p className="text-muted-foreground">Erfahren</p>
          </div>

          <div
            className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1050ms] ${
              inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <svg viewBox="0 0 128 128" className="w-20 h-20 sm:w-25 sm:h-25">
              <path
                fill="#1572B6"
                d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
              ></path>
              <path
                fill="#33A9DC"
                d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
              ></path>
              <path
                fill="#fff"
                d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
              ></path>
              <path
                fill="#EBEBEB"
                d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
              ></path>
              <path
                fill="#fff"
                d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
              ></path>
              <path
                fill="#EBEBEB"
                d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
              ></path>
            </svg>
            <p className="text-center mt-2 text-lg font-medium">CSS</p>
            <p className="text-muted-foreground">Erfahren</p>
          </div>

          <div
            className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1200ms] ${
              inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <svg viewBox="0 0 128 128" className="w-20 h-20 sm:w-25 sm:h-25">
              <path
                fill="#F0DB4F"
                d="M1.408 1.408h125.184v125.185H1.408z"
              ></path>
              <path
                fill="#323330"
                d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
              ></path>
            </svg>
            <p className="text-center mt-2 text-lg font-medium">JavaScript</p>
            <p className="text-muted-foreground">Erfahren</p>
          </div>

          <div
            className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1350ms] ${
              inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <svg viewBox="0 0 128 128" className="w-20 h-20 sm:w-25 sm:h-25">
              <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
              <path
                data-name="original"
                fill="#007acc"
                d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
              ></path>
            </svg>
            <p className="text-center mt-2 text-lg font-medium">TypeScript</p>
            <p className="text-muted-foreground">Erfahren</p>
          </div>

          <div
            className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1500ms] ${
              inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <svg viewBox="0 0 128 128" className="w-20 h-20 sm:w-25 sm:h-25">
              <g fill="#61DAFB">
                <circle cx="64" cy="64" r="11.4"></circle>
                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
              </g>
            </svg>
            <p className="text-center mt-2 text-lg font-medium">React</p>
            <p className="text-muted-foreground">Erfahren</p>
          </div>

          <div
            className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1650ms] ${
              inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <svg viewBox="0 0 128 128" className="w-20 h-20 sm:w-25 sm:h-25">
              <path
                d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                fill="#38bdf8"
              ></path>
            </svg>
            <p className="text-center mt-2 text-lg font-medium">Tailwind CSS</p>
            <p className="text-muted-foreground">Erfahren</p>
          </div>

          <div
            className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1800ms] ${
              inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-background">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="w-20 h-20 sm:w-25 sm:h-25"
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
            <p className="text-muted-foreground">Erfahren</p>
          </div>

          <div
            className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[1950ms] ${
              inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <svg viewBox="0 0 128 128" className="w-20 h-20 sm:w-25 sm:h-25">
              <defs>
                <linearGradient
                  id="a"
                  x1="6"
                  x2="235"
                  y1="33"
                  y2="344"
                  gradientTransform="translate(0 .937) scale(.3122)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#41d1ff"></stop>
                  <stop offset="1" stopColor="#bd34fe"></stop>
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="194.651"
                  x2="236.076"
                  y1="8.818"
                  y2="292.989"
                  gradientTransform="translate(0 .937) scale(.3122)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ffea83"></stop>
                  <stop offset=".083" stopColor="#ffdd35"></stop>
                  <stop offset="1" stopColor="#ffa800"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#a)"
                d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"
              ></path>
              <path
                fill="url(#b)"
                d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"
              ></path>
            </svg>
            <p className="text-center mt-2 text-lg font-medium">Vite</p>
            <p className="text-muted-foreground">Grundkenntnisse</p>
          </div>

          <div
            className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[2100ms] ${
              inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <svg viewBox="0 0 128 128" className="w-20 h-20 sm:w-25 sm:h-25">
              <path
                fill="url(#a)"
                d="M0 64c0 18.593 28.654 33.667 64 33.667 35.346 0 64-15.074 64-33.667 0-18.593-28.655-33.667-64-33.667C28.654 30.333 0 45.407 0 64Z"
              ></path>
              <path
                fill="#777bb3"
                d="M64 95.167c33.965 0 61.5-13.955 61.5-31.167 0-17.214-27.535-31.167-61.5-31.167S2.5 46.786 2.5 64c0 17.212 27.535 31.167 61.5 31.167Z"
              ></path>
              <path d="M34.772 67.864c2.793 0 4.877-.515 6.196-1.53 1.306-1.006 2.207-2.747 2.68-5.175.44-2.27.272-3.854-.5-4.71-.788-.874-2.493-1.317-5.067-1.317h-4.464l-2.473 12.732zM20.173 83.547a.694.694 0 0 1-.68-.828l6.557-33.738a.695.695 0 0 1 .68-.561h14.134c4.442 0 7.748 1.206 9.827 3.585 2.088 2.39 2.734 5.734 1.917 9.935-.333 1.711-.905 3.3-1.7 4.724a15.818 15.818 0 0 1-3.128 3.92c-1.531 1.432-3.264 2.472-5.147 3.083-1.852.604-4.232.91-7.07.91h-5.724l-1.634 8.408a.695.695 0 0 1-.682.562z"></path>
              <path
                fill="#fff"
                d="M34.19 55.826h3.891c3.107 0 4.186.682 4.553 1.089.607.674.723 2.097.331 4.112-.439 2.257-1.253 3.858-2.42 4.756-1.194.92-3.138 1.386-5.773 1.386h-2.786l2.205-11.342zm6.674-8.1H26.731a1.39 1.39 0 0 0-1.364 1.123L18.81 82.588a1.39 1.39 0 0 0 1.363 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.151c2.912 0 5.364-.318 7.287-.944 1.977-.642 3.796-1.731 5.406-3.237a16.522 16.522 0 0 0 3.259-4.087c.831-1.487 1.429-3.147 1.775-4.931.86-4.423.161-7.964-2.076-10.524-2.216-2.537-5.698-3.823-10.349-3.823zM30.301 68.557h4.471c2.963 0 5.17-.557 6.62-1.675 1.451-1.116 2.428-2.98 2.938-5.591.485-2.508.264-4.277-.665-5.308-.931-1.03-2.791-1.546-5.584-1.546h-5.036l-2.743 14.12m10.563-19.445c4.252 0 7.353 1.117 9.303 3.348 1.95 2.232 2.536 5.347 1.76 9.346-.322 1.648-.863 3.154-1.625 4.518-.764 1.366-1.76 2.614-2.991 3.747-1.468 1.373-3.097 2.352-4.892 2.935-1.794.584-4.08.875-6.857.875h-6.296l-1.743 8.97h-7.35l6.558-33.739h14.133"
              ></path>
              <path d="M69.459 74.577a.694.694 0 0 1-.682-.827l2.9-14.928c.277-1.42.209-2.438-.19-2.87-.245-.263-.979-.704-3.15-.704h-5.256l-3.646 18.768a.695.695 0 0 1-.683.56h-7.29a.695.695 0 0 1-.683-.826l6.558-33.739a.695.695 0 0 1 .682-.561h7.29a.695.695 0 0 1 .683.826L64.41 48.42h5.653c4.307 0 7.227.758 8.928 2.321 1.733 1.593 2.275 4.14 1.608 7.573l-3.051 15.702a.695.695 0 0 1-.682.56h-7.407z"></path>
              <path
                fill="#fff"
                d="M65.31 38.755h-7.291a1.39 1.39 0 0 0-1.364 1.124l-6.557 33.738a1.39 1.39 0 0 0 1.363 1.654h7.291a1.39 1.39 0 0 0 1.364-1.124l3.537-18.205h4.682c2.168 0 2.624.463 2.641.484.132.14.305.795.019 2.264l-2.9 14.927a1.39 1.39 0 0 0 1.364 1.654h7.408a1.39 1.39 0 0 0 1.363-1.124l3.051-15.7c.715-3.686.103-6.45-1.82-8.217-1.836-1.686-4.91-2.505-9.398-2.505h-4.81l1.421-7.315a1.39 1.39 0 0 0-1.364-1.655zm0 1.39-1.743 8.968h6.496c4.087 0 6.907.714 8.457 2.14 1.553 1.426 2.017 3.735 1.398 6.93l-3.052 15.699h-7.407l2.901-14.928c.33-1.698.208-2.856-.365-3.474-.573-.617-1.793-.926-3.658-.926h-5.829l-3.756 19.327H51.46l6.558-33.739h7.292z"
              ></path>
              <path d="M92.136 67.864c2.793 0 4.878-.515 6.198-1.53 1.304-1.006 2.206-2.747 2.679-5.175.44-2.27.273-3.854-.5-4.71-.788-.874-2.493-1.317-5.067-1.317h-4.463l-2.475 12.732zM77.54 83.547a.694.694 0 0 1-.682-.828l6.557-33.738a.695.695 0 0 1 .682-.561H98.23c4.442 0 7.748 1.206 9.826 3.585 2.089 2.39 2.734 5.734 1.917 9.935a15.878 15.878 0 0 1-1.699 4.724 15.838 15.838 0 0 1-3.128 3.92c-1.53 1.432-3.265 2.472-5.147 3.083-1.852.604-4.232.91-7.071.91h-5.723l-1.633 8.408a.695.695 0 0 1-.683.562z"></path>
              <path
                fill="#fff"
                d="M91.555 55.826h3.891c3.107 0 4.186.682 4.552 1.089.61.674.724 2.097.333 4.112-.44 2.257-1.254 3.858-2.421 4.756-1.195.92-3.139 1.386-5.773 1.386h-2.786l2.204-11.342zm6.674-8.1H84.096a1.39 1.39 0 0 0-1.363 1.123l-6.558 33.739a1.39 1.39 0 0 0 1.364 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.15c2.911 0 5.364-.318 7.286-.944 1.978-.642 3.797-1.731 5.408-3.238a16.52 16.52 0 0 0 3.258-4.086c.832-1.487 1.428-3.147 1.775-4.931.86-4.423.162-7.964-2.076-10.524-2.216-2.537-5.697-3.823-10.35-3.823zM87.666 68.557h4.47c2.964 0 5.17-.557 6.622-1.675 1.45-1.116 2.428-2.98 2.936-5.591.487-2.508.266-4.277-.665-5.308-.93-1.03-2.791-1.546-5.583-1.546h-5.035Zm10.563-19.445c4.251 0 7.354 1.117 9.303 3.348 1.95 2.232 2.537 5.347 1.759 9.346-.32 1.648-.862 3.154-1.624 4.518-.763 1.366-1.76 2.614-2.992 3.747-1.467 1.373-3.097 2.352-4.892 2.935-1.793.584-4.078.875-6.856.875h-6.295l-1.745 8.97h-7.35l6.558-33.739h14.133"
              ></path>
              <defs>
                <radialGradient
                  id="a"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(84.04136 0 0 84.04136 38.426 42.169)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#AEB2D5"></stop>
                  <stop offset=".3" stopColor="#AEB2D5"></stop>
                  <stop offset=".75" stopColor="#484C89"></stop>
                  <stop offset="1" stopColor="#484C89"></stop>
                </radialGradient>
              </defs>
            </svg>
            <p className="text-center mt-2 text-lg font-medium">PHP</p>
            <p className="text-muted-foreground">Grundkenntnisse</p>
          </div>

          <div
            className={`w-28 sm:w-32 mt-5 sm:mt-0 flex flex-col items-center justify-center delay-[2250ms] ${
              inViewSkills ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <svg viewBox="0 0 128 128" className="w-20 h-20 sm:w-25 sm:h-25">
              <path
                fill="#00618A"
                d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0"
              ></path>
            </svg>
            <p className="text-center mt-2 text-lg font-medium">MySQL</p>
            <p className="text-muted-foreground">Grundkenntnisse</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div
            className={`text-xl font-medium mt-20 delay-[2500ms] ${
              inViewSkills ? "animate-fade-right opacity-100" : "opacity-0"
            }`}
          >
            Weitere
          </div>
          <div
            className={`w-full flex flex-wrap gap-5 sm:gap-20 mt-5 p-5 items-center justify-center delay-[2500ms] ${
              inViewSkills ? "animate-fade-right opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center justify-center">
              <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20">
                <path
                  fill="#0074BD"
                  d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
                ></path>
                <path
                  fill="#EA2D2E"
                  d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
                ></path>
                <path
                  fill="#0074BD"
                  d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
                ></path>
                <path
                  fill="#EA2D2E"
                  d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
                ></path>
                <path
                  fill="#0074BD"
                  d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
                ></path>
              </svg>
              <p className="text-center mt-2 font-medium">Java</p>
              <p className="text-sm text-muted-foreground">Grundkenntnisse</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20">
                <linearGradient
                  id="python-original-a"
                  gradientUnits="userSpaceOnUse"
                  x1="70.252"
                  y1="1237.476"
                  x2="170.659"
                  y2="1151.089"
                  gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                >
                  <stop offset="0" stopColor="#5A9FD4"></stop>
                  <stop offset="1" stopColor="#306998"></stop>
                </linearGradient>
                <linearGradient
                  id="python-original-b"
                  gradientUnits="userSpaceOnUse"
                  x1="209.474"
                  y1="1098.811"
                  x2="173.62"
                  y2="1149.537"
                  gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                >
                  <stop offset="0" stopColor="#FFD43B"></stop>
                  <stop offset="1" stopColor="#FFE873"></stop>
                </linearGradient>
                <path
                  fill="url(#python-original-a)"
                  d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                  transform="translate(0 10.26)"
                ></path>
                <path
                  fill="url(#python-original-b)"
                  d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                  transform="translate(0 10.26)"
                ></path>
                <radialGradient
                  id="python-original-c"
                  cx="1825.678"
                  cy="444.45"
                  r="26.743"
                  gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0"
                    stopColor="#B8B8B8"
                    stopOpacity=".498"
                  ></stop>
                  <stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop>
                </radialGradient>
                <path
                  opacity=".444"
                  fill="url(#python-original-c)"
                  d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
                ></path>
              </svg>
              <p className="text-center mt-2 font-medium">Python</p>
              <p className="text-sm text-muted-foreground">Grundkenntnisse</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20">
                <path
                  fill="#252f3e"
                  d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Zm-17.094 6.403c1.387 0 2.82-.254 4.336-.758 1.516-.508 2.863-1.433 4-2.695.672-.8 1.18-1.684 1.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401 34.401 0 0 0-3.871-.719 31.816 31.816 0 0 0-3.961-.25c-2.82 0-4.883.547-6.274 1.684-1.387 1.136-2.062 2.734-2.062 4.84 0 1.98.504 3.453 1.558 4.464 1.012 1.051 2.485 1.559 4.422 1.559Zm33.809 4.547c-.758 0-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715 29.98c-.25-.843-.38-1.39-.38-1.687 0-.672.337-1.05 1.013-1.05h4.125c.8 0 1.347.124 1.644.421.336.25.59.84.84 1.64l7.074 27.876 6.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423 1.688-.423h3.367c.8 0 1.348.125 1.684.422.336.25.633.84.8 1.64l6.653 28.212 7.285-28.211c.25-.84.547-1.39.84-1.64.336-.255.887-.423 1.644-.423h3.914c.676 0 1.055.336 1.055 1.051 0 .21-.043.422-.086.676-.043.254-.125.59-.293 1.05L80.801 62.57c-.254.84-.547 1.387-.887 1.64-.336.255-.883.423-1.598.423h-3.62c-.801 0-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485 27.117c-.21.844-.46 1.391-.8 1.684-.337.297-.926.422-1.684.422Zm54.105 1.137c-2.187 0-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919 2.919 0 0 1-.254-1.18v-2.148c0-.882.336-1.304.97-1.304.25 0 .503.043.757.129.25.082.629.25 1.05.418a23.102 23.102 0 0 0 4.634 1.476c1.683.336 3.324.504 5.011.504 2.653 0 4.715-.465 6.145-1.39 1.433-.926 2.191-2.274 2.191-4 0-1.18-.379-2.145-1.136-2.946-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293-1.39-1.855-2.106-3.918-2.106-6.105 0-1.77.38-3.328 1.137-4.676a10.829 10.829 0 0 1 3.031-3.453c1.262-.965 2.696-1.684 4.38-2.188 1.683-.504 3.452-.715 5.304-.715.926 0 1.894.043 2.82.168.969.125 1.852.293 2.738.461.84.211 1.641.422 2.399.676.758.254 1.348.504 1.77.758.59.336 1.011.672 1.261 1.05.254.34.379.802.379 1.391v1.98c0 .884-.336 1.348-.969 1.348-.336 0-.883-.171-1.597-.507-2.403-1.094-5.098-1.641-8.086-1.641-2.399 0-4.293.379-5.598 1.18-1.309.797-1.98 2.02-1.98 3.746 0 1.18.421 2.191 1.261 2.988.844.8 2.403 1.602 4.633 2.316l5.98 1.895c3.032.969 5.22 2.316 6.524 4.043 1.305 1.727 1.938 3.707 1.938 5.895 0 1.812-.38 3.453-1.094 4.882-.758 1.434-1.77 2.696-3.074 3.707-1.305 1.051-2.864 1.809-4.672 2.36-1.895.586-3.875.883-6.024.883Zm0 0"
                ></path>
                <path
                  fill="#f90"
                  d="M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z"
                ></path>
              </svg>
              <p className="text-center mt-2 font-medium">AWS</p>
              <p className="text-sm text-muted-foreground">Grundkenntnisse</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20">
                <defs>
                  <linearGradient
                    id="a"
                    x1="76.079"
                    x2="523.48"
                    y1="10.798"
                    y2="365.95"
                    gradientTransform="translate(1.11 14.613) scale(.24566)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#9013fe"></stop>
                    <stop offset="1" stopColor="#6610f2"></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="193.51"
                    x2="293.51"
                    y1="109.74"
                    y2="278.87"
                    gradientTransform="translate(0 52)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#f1e5fc"></stop>
                  </linearGradient>
                  <filter
                    id="c"
                    width="197"
                    height="249"
                    x="161.9"
                    y="135.46"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
                <path
                  fill="url(#a)"
                  d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"
                ></path>
                <path
                  fill="url(#b)"
                  d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z"
                  filter="url(#c)"
                  transform="translate(1.494 2.203) scale(.24566)"
                ></path>
              </svg>
              <p className="text-center mt-2 font-medium">Bootstrap</p>
              <p className="text-sm text-muted-foreground">Grundkenntnisse</p>
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
            className={`p-5 items-center delay-[800ms] max-w-96 justify-between ${
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
                  GitHub
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
            className={`p-5 items-center delay-[950ms] max-w-96 justify-between ${
              inViewProjects ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-48 w-60 sm:w-70 flex items-center justify-center">
              <img src={ManxaBackend} alt="" />
            </div>
            <CardTitle>Manxa Backend</CardTitle>
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
                  GitHub
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
