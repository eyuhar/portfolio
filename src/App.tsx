import picture from "@/assets/picture.jpg";
import { Button } from "./components/ui/button";
import { Card, CardDescription, CardTitle } from "./components/ui/card";
import { GraduationCap } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col w-full font-sans items-center">
      <div className="h-screen w-full flex flex-col">
        {/* Header/Nav */}
        <div className="flex w-full justify-between p-10 text-xl font-medium">
          <div>Eyyüp Harputlu</div>
          <div className="flex gap-5">
            <div className="hover:underline hover:text-muted-foreground hover:cursor-pointer">
              Über mich
            </div>
            <div className="hover:underline hover:text-muted-foreground hover:cursor-pointer">
              Kenntnisse
            </div>
            <div className="hover:underline hover:text-muted-foreground hover:cursor-pointer">
              Projekte
            </div>
            <div className="hover:underline hover:text-muted-foreground hover:cursor-pointer">
              Kontakt
            </div>
          </div>
        </div>

        {/* Start/Home */}
        <div className="flex flex-col items-center mt-40 gap-3 font-medium">
          <div className="h-70 w-70 rounded-[100%] overflow-hidden">
            <img src={picture} alt="" className="object-cover" />
          </div>
          <p className="text-md text-muted-foreground">Hallo, Ich bin</p>
          <p className="text-5xl">Eyyüp Harputlu</p>
          <p className="text-3xl text-muted-foreground">Web Entwickler</p>
          <div className="flex gap-3">
            <Button className="rounded-4xl p-5" variant={"outline"}>
              Lebenslauf herunterladen
            </Button>
            <Button className="rounded-4xl p-5">Kontakt</Button>
          </div>
        </div>
      </div>

      {/* About me section */}
      <div className="h-screen flex flex-col items-center max-w-7xl w-full p-10">
        <div className="text-5xl font-medium mt-20">Über mich</div>
        <div className="w-full grid grid-cols-[auto_1fr] h-[70%] gap-15 items-center">
          <img src={picture} alt="" className="h-100 w-auto rounded-4xl " />
          <div>
            <Card className="p-5 items-center">
              <CardTitle className="text-2xl flex items-center gap-2">
                <GraduationCap size={32} />
                <p>Abschluss</p>
              </CardTitle>
              <CardDescription className="text-md">
                B. Sc. Informatik
              </CardDescription>
            </Card>
            <div className="p-5 text-muted-foreground">
              Ich habe einen Bachelorabschluss in Informatik und arbeite im
              Bereich Webentwicklung mit modernen Technologien wie TypeScript,
              React, TailwindCSS und shadcn/ui. Zusätzlich habe ich erste
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
      <div className="h-screen flex flex-col items-center max-w-7xl w-full p-10">
        <div className="text-5xl font-medium mt-20">Kenntnisse</div>
      </div>
    </div>
  );
}

export default App;
