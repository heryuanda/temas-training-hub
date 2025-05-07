import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../../components/ui/dialog";
// import { Mail, Phone } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";

type Program = {
  title: string;
  brief: string;
  goals: string;
  syllabus: string[];
  portion: string;
  duration: string;
  assessment: string;
  prerequisite: string;
  participants: string;
  certificate: string;
  materials: string;
  level: string;
  price: string;
};

type programTypeWrapper = {
  [slug: string]: Program;
};

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const transition = {
  duration: 0.3,
};

function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();

  const programData: programTypeWrapper = {
    "igf-code-basic": {
      title:
        "Basic International Code of Safety for Ships using Gases or other Low-flashpoint Fuels (Basic IGF Code)",
      brief:
        "This course introduces the fundamentals of gas fuels, including LNG, LPG, and alternative fuels, focusing on safety, regulations, and operational practices. Participants will learn about international standards, fuel types, and the environmental impact of gas fuels.",
      goals:
        "To equip participants with a basic understanding of gas fuels, safety protocols, and industry standards, enabling them to apply this knowledge in real-world settings and contribute to safe and sustainable gas fuel operations.",
      syllabus: [
        "Knowledge and understanding of safety requirement and safety management on board ship subject to the IGF code.",
        "Take precautions to prevent hazards on a ship subject to the IGF code.",
        "Apply occupational health and safety precautions and measures.",
        "Carry out fire-fighting operations on a ship subject to the IGF code.",
        "Respond to emergencies.",
        "Take precautions to prevent pollution of the environment from the release of fuels found on ships subject to the IGF code.",
      ],
      portion: "80% Theory, 20% Practical",
      duration: "30 Hours",
      assessment: "Pre-test & Post-test (passing score: 70%)",
      prerequisite:
        "Basic Safety Training (BST) & Advanced Fire Fighting (AFF) Certificates",
      participants:
        "This course is intended for vessel crew working on ships using gases or other low-flashpoint fuels",
      certificate:
        "Basic International Code of Safety for Ships using Gases or other Low-flashpoint Fuels Certificate (Basic IGF Code)",
      materials: "Books, Handouts, Tools, Equipment",
      level: "Basic",
      price: "To Be Confirmed",
    },
    "igf-code-advanced": {
      title:
        "Advanced International Code of Safety for Ships Using Gases or Other Low-flashpoint Fuels (Advanced IGF Code)",
      brief:
        "This advanced course explores the technical, regulatory, and operational complexities of gas fuel systems, including LNG, LPG, and fuel management strategies. Participants will gain in-depth knowledge of safety, emissions control, and advanced industry standards.",
      goals:
        "To equip participants with advanced skills in gas fuel system design, risk management, regulatory compliance, and emerging technologies, preparing them to tackle complex challenges in the gas fuel industry.",
      syllabus: [
        "IGF code introduction & preparation.",
        "Familiarity with properties of gas fuels.",
        "Operate controls, engineering systems & safety.",
        "Safely perform & monitor all operations.",
        "Plan & monitor safe bunkering.",
        "Preventing pollution to the environment.",
        "Compliance with legislative requirements.",
        "Precautions to prevent hazards.",
        "Occupational health & safety precautions.",
        "Prevention, control, & fire-fighting systems.",
      ],
      portion: "60% Theory, 40% Practical",
      duration: "32 Hours",
      assessment: "Pre-test & Post-test (passing score: 70%)",
      prerequisite:
        "Basic Safety Training (BST), Advanced Fire Fighting (AFF), & Basic International Code of Safety for Ships using Gases or other Low-flashpoint Fuels (Basic IGF Code) Certificates",
      participants:
        "This course is specifically intended for vessel crew at the level of Officers, Engineers, or Electricians who are working on ships that use gases or other low-flashpoint fuels.",
      certificate:
        "Advanced International Code of Safety for Ships using Gases or other Low-flashpoint Fuels (Advanced IGF Code) Certificate",
      materials: "Books, Handouts, Tools, Equipment",
      level: "Advance",
      price: "To Be Confirmed",
    },
  };

  if (!slug || !(slug in programData)) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Program Not Found</h2>
        <p>Please check the URL or go back to the homepage.</p>
      </div>
    );
  }

  const program = programData[slug];
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={transition}
    >
      <main className="flex-1">
        <HeroSection data={program} />
        <ProgramOverview data={program} />
        {/* <ProgramTabs />
        <FacultySection />
        <EnrollCTA /> */}
      </main>
    </motion.div>
  );
}

type DataProps = {
  data: Program;
};

function HeroSection({ data }: DataProps) {
  return (
    <section className="relative bg-slate-50">
      <div className="container pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/programs">Programs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{data.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                {data.level}
              </Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-none">
                Enrolling Now
              </Badge>
            </div>
            <h1 className="text-3xl leading-tight md:text-4xl lg:text-5xl font-bold tracking-tight text-base-blue">
              {data.title}
            </h1>
            <p className="text-lg text-muted-foreground">{data.brief}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://forms.office.com/r/vyyxPmdawQ"
                target="_blank"
                className="bg-base-blue py-2 px-4 font-medium rounded text-white inline-block hover:bg-base-dark-blue cursor-pointer"
              >
                Enroll Now
              </a>
              {/* <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-base-blue hover:bg-base-dark-blue cursor-pointer"
                  >
                    Enroll Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Enrollment</DialogTitle>
                    <DialogDescription>
                      <p className="text-left">
                        We are preparing the seemless process of program
                        enrollment. In the meantime please do reach out our
                        administration team through:
                      </p>
                      <ul className="mt-4">
                        <li className="mb-2">
                          <a
                            href="tel:+62214302388"
                            className=" transition-colors flex items-center gap-x-2 text-sm"
                          >
                            <Phone size={16} /> (+62)21-430 2388. Ext: 638.
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:admin@temastraininghub.com"
                            className=" transition-colors flex items-center gap-x-2 text-sm"
                          >
                            <Mail size={16} /> admin@temastraininghub.com
                          </a>
                        </li>
                      </ul>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit">OK</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog> */}
              {/* <Button variant="outline" size="lg" className="cursor-pointer">
                Download Brochure
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramOverview({ data }: DataProps) {
  const keyDetails = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-percent-icon lucide-percent"
        >
          <line x1="19" x2="5" y1="5" y2="19" />
          <circle cx="6.5" cy="6.5" r="2.5" />
          <circle cx="17.5" cy="17.5" r="2.5" />
        </svg>
      ),
      label: "Proportion",
      value: data.portion,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
          <line x1="16" x2="16" y1="2" y2="6"></line>
          <line x1="8" x2="8" y1="2" y2="6"></line>
          <line x1="3" x2="21" y1="10" y2="10"></line>
        </svg>
      ),
      label: "Duration",
      value: data.duration,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-book-open-check-icon lucide-book-open-check"
        >
          <path d="M12 21V7" />
          <path d="m16 12 2 2 4-4" />
          <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
        </svg>
      ),
      label: "Assessment",
      value: data.assessment,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-receipt-text-icon lucide-receipt-text"
        >
          <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
          <path d="M14 8H8" />
          <path d="M16 12H8" />
          <path d="M13 16H8" />
        </svg>
      ),
      label: "Prerequisite",
      value: data.prerequisite,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-user-round-check-icon lucide-user-round-check"
        >
          <path d="M2 21a8 8 0 0 1 13.292-6" />
          <circle cx="10" cy="8" r="5" />
          <path d="m16 19 2 2 4-4" />
        </svg>
      ),
      label: "Participants",
      value: data.participants,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-award-icon lucide-award"
        >
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
        </svg>
      ),
      label: "Certificate",
      value: data.certificate,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-library-big-icon lucide-library-big"
        >
          <rect width="8" height="18" x="3" y="3" rx="1" />
          <path d="M7 3v18" />
          <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />
        </svg>
      ),
      label: "Materials",
      value: data.materials,
    },
  ];

  const navigate = useNavigate();
  const goTo = (url: string) => {
    navigate(url);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container">
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
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Goals</h2>
              <p>{data.goals}</p>
              <div className="pt-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Content</h2>
                <ul className="grid gap-3 bg-slate-50 border rounded-md p-6">
                  {data.syllabus.map((syllabus, index) => (
                    <li className="flex items-start">
                      <p className="whitespace-nowrap w-28 shrink-0">
                        <strong>Chapter {index + 1}</strong>:
                      </p>
                      <p>{syllabus}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Key Details</h3>
                <div className="space-y-4">
                  {keyDetails.map((detail, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-primary">{detail.icon}</div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {detail.label}
                        </div>
                        <div className="font-medium">{detail.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h3 className="text-xl font-semibold mb-4">Have Questions?</h3>
                <p className="mb-4">
                  Our admissions team is here to help you with any questions
                  about the program, application process, or financial aid
                  options.
                </p>
                <Button className="w-full" onClick={() => goTo("/contact-us")}>
                  Contact Us Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProgramDetail;
