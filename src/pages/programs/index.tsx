import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { TabsContent } from "@radix-ui/react-tabs";
import Certificate from "../../assets/certificate.png";
import { motion } from "framer-motion";
import { Badge } from "../../components/ui/badge";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const transition = {
  duration: 0.3,
};

function ProgramsPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={transition}
    >
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <HeroSection />
          <WaveSeparator color="#ffffff" />
          <ProgramsSection />
        </main>
      </div>
    </motion.div>
  );
}

interface WaveSeparatorProps {
  color: string;
}

const WaveSeparator = ({ color }: WaveSeparatorProps) => {
  return (
    <div className="relative w-full overflow-hidden leading-none bg-slate-100">
      <svg
        className="block w-full h-16 "
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill={color} // background color of next section
          d="M0,160 C180,200 360,120 540,160 C720,200 900,280 1080,240 C1260,200 1440,120 1440,120 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
};

function HeroSection() {
  return (
    <section className="relative pb-1 pt-12 bg-slate-100">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Our Programs
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Discover our wide range of academic programs designed to prepare you
            for success in your chosen field. Explore the options below and find
            the perfect fit for your educational journey.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const navigate = useNavigate();
  const goToDetail = (slug: string) => {
    navigate(`/program/${slug}`);
  };
  const programsStcw = [
    {
      title: [
        "Basic International Code of Safety for Ships using Gases or other Low-flashpoint Fuels",
        "(Basic IGF Code)",
      ],
      description:
        "This course introduces the fundamentals of gas fuels, including LNG, LPG, and alternative fuels, focusing on safety, regulations, and operational practices. Participants will learn about international standards, fuel types, and the environmental impact of gas fuels.",
      slug: "igf-code-basic",
      level: "Basic",
    },
    {
      title: [
        "Advanced International Code of Safety for Ships using Gases or other Low-flashpoint Fuels",
        "(Advanced IGF Code)",
      ],
      description:
        "This advanced course explores the technical, regulatory, and operational complexities of gas fuel systems, including LNG, LPG, and fuel management strategies. Participants will gain in-depth knowledge of safety, emissions control, and advanced industry standards.",
      slug: "igf-code-advanced",
      level: "Advance",
    },
  ];

  const programsNonStcw = [
    {
      title: "Maritime English",
      description:
        "Specialized form of the English language used in the maritime industry to ensure clear and effective communication among seafarers, officers, and shore-based personnel, especially in international settings.",
      slug: "",
      level: "",
    },
    {
      title: "Introduction to Vessel 488",
      description: "",
      slug: "",
      level: "",
    },
  ];

  return (
    <section id="programs" className="pt-10 pb-20 bg-white">
      <div className="container">
        <Tabs defaultValue="stcw" className="max-w-[800px] mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-base-blue/30 h-12 p-1">
            <TabsTrigger value="stcw" className="cursor-pointer">
              STCW
            </TabsTrigger>
            <TabsTrigger value="nonstcw" className="cursor-pointer">
              Non-STCW
            </TabsTrigger>
          </TabsList>
          <TabsContent value="stcw">
            <p className="mt-4 font-bold text-center text-xl">
              Standards of Training, Certification and Watchkeeping
            </p>
            <p className="text-muted-foreground text-center mt-2 mb-10">
              Standard qualifications for captains, officers, and watchkeeping
              personnel on board merchant ships that are sailing.
            </p>
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[800px] mx-auto">
                {programsStcw.map((program, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden transition-all hover:shadow-lg gap-4 relative"
                  >
                    <CardHeader>
                      <CardTitle className="leading-normal text-2xl">
                        {program.title.map((caption) => (
                          <p>{caption}</p>
                        ))}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="z-10">
                      <p
                        className={`text-sm mb-2 text-muted-foreground ${
                          !program.description ? "h-[100px]" : "h-auto"
                        }`}
                      >
                        {program.description}
                      </p>
                      {program.level && (
                        <Badge className="bg-slate-200 text-slate-800 hover:bg-slate-300 border-none">
                          {program.level}
                        </Badge>
                      )}
                    </CardContent>
                    <CardFooter className="z-10">
                      <Button
                        variant="default"
                        onClick={() => goToDetail(program.slug)}
                        disabled={!program.slug}
                        className="w-full bg-base-blue text-white hover:bg-base-dark-blue cursor-pointer"
                      >
                        {program.slug ? "Learn More" : "Coming Soon"}
                      </Button>
                    </CardFooter>
                    <img
                      src={Certificate}
                      alt="certificate"
                      width={80}
                      className="absolute right-2 top-2 -z-0 opacity-10"
                    />
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent value="nonstcw">
            <p className="mt-4 font-bold text-center text-xl">
              Non Standards of Training, Certification and Watchkeeping
            </p>
            <p className="text-muted-foreground text-center mt-2 mb-10">
              Activities or training programs that are not included in the STCW
              standards but still support work competencies in the maritime
              field.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[800px] mx-auto">
              {programsNonStcw.map((program, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all hover:shadow-lg gap-4 relative"
                >
                  <CardHeader>
                    <CardTitle className="leading-normal text-2xl">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="z-10">
                    <p
                      className={`text-sm mb-2 text-muted-foreground ${
                        !program.description ? "h-[100px]" : "h-auto"
                      }`}
                    >
                      {program.description}
                    </p>
                    {program.level && (
                      <Badge className="bg-slate-200 text-slate-800 hover:bg-slate-300 border-none">
                        {program.level}
                      </Badge>
                    )}
                  </CardContent>
                  <CardFooter className="z-10">
                    <Button
                      variant="default"
                      onClick={() => goToDetail(program.slug)}
                      disabled={!program.slug}
                      className="w-full bg-base-blue text-white hover:bg-base-dark-blue cursor-pointer"
                    >
                      {program.slug ? "Learn More" : "Coming Soon"}
                    </Button>
                  </CardFooter>
                  <img
                    src={Certificate}
                    alt="certificate"
                    width={80}
                    className="absolute right-2 top-2 -z-0 opacity-10"
                  />
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default ProgramsPage;
