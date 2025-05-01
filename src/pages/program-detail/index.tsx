import { Button } from "../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import { Mail, Phone } from "lucide-react";

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
      title: "IGF Code Basic",
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
      prerequisite: "BST, AFF, MEFA, SCRB certificates",
      participants: "All LNG Crews",
      certificate: "STCW Certificates",
      materials: "Books, Handouts, Tools, Equipments",
      level: "Basic",
    },
    "igf-code-advanced": {
      title: "IGF Code Advanced",
      brief:
        "This course introduces the fundamentals of gas fuels, including LNG, LPG, and alternative fuels, focusing on safety, regulations, and operational practices. Participants will learn about international standards, fuel types, and the environmental impact of gas fuels.",
      goals:
        "To equip participants with advanced skills in gas fuel system design, risk management, regulatory compliance, and emerging technologies, preparing them to tackle complex challenges in the gas fuel industry.",
      syllabus: [
        "IGF code introduction & preparation.",
        "Familiarity with properties of gas fuels.",
        "Operate controls, engineering systems & safety.",
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
      prerequisite: "IGF Basic Certificate",
      participants:
        "Senior Officers, Junior Officers, Chief Engineer, Masinis 2, Masinis 3, Electrician",
      certificate: "STCW certificate",
      materials: "Books, Handouts, Tools, Equipments",
      level: "Advance",
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
    <section className="relative py-12 md:py-16 bg-slate-50">
      <div className="container">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-base-blue">
              {data.title}
            </h1>
            <p className="text-lg text-muted-foreground">{data.brief}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-base-blue hover:bg-base-dark-blue cursor-pointer"
                  >
                    Apply Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Enrollment</DialogTitle>
                    <DialogDescription>
                      <p>
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
                            <Phone size={16} /> (+62)214302388
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:pttemastraininghub@gmail.com"
                            className=" transition-colors flex items-center gap-x-2 text-sm"
                          >
                            <Mail size={16} /> pttemastraininghub@gmail.com
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
              </Dialog>

              <Button variant="outline" size="lg" className="cursor-pointer">
                Download Brochure
              </Button>
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
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Program Goals</h2>
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
                Our admissions team is here to help you with any questions about
                the program, application process, or financial aid options.
              </p>
              <Button className="w-full" onClick={() => goTo("/contact-us")}>
                Contact Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramTabs() {
  const curriculumYears = [
    {
      year: "Year 1",
      courses: [
        {
          code: "CS101",
          title: "Introduction to Computer Science",
          credits: 3,
          description:
            "Fundamental concepts of computer science, including problem-solving, algorithms, and programming basics.",
        },
        {
          code: "CS102",
          title: "Programming Fundamentals",
          credits: 4,
          description:
            "Introduction to programming using a high-level language, covering data types, control structures, functions, and basic algorithms.",
        },
        {
          code: "MATH201",
          title: "Discrete Mathematics",
          credits: 3,
          description:
            "Mathematical foundations for computer science, including logic, sets, relations, functions, and combinatorics.",
        },
        {
          code: "CS110",
          title: "Computer Systems Architecture",
          credits: 3,
          description:
            "Introduction to computer organization and architecture, including digital logic, assembly language, and memory systems.",
        },
        {
          code: "ENG101",
          title: "Academic Writing",
          credits: 3,
          description:
            "Development of critical thinking and effective written communication skills.",
        },
        {
          code: "MATH210",
          title: "Calculus I",
          credits: 4,
          description:
            "Limits, derivatives, and integrals of algebraic and transcendental functions of one variable.",
        },
      ],
    },
    {
      year: "Year 2",
      courses: [
        {
          code: "CS201",
          title: "Data Structures and Algorithms",
          credits: 4,
          description:
            "Implementation and analysis of fundamental data structures and algorithms, including lists, stacks, queues, trees, and graphs.",
        },
        {
          code: "CS210",
          title: "Object-Oriented Programming",
          credits: 3,
          description:
            "Principles of object-oriented design and programming, including classes, inheritance, polymorphism, and encapsulation.",
        },
        {
          code: "CS220",
          title: "Database Systems",
          credits: 3,
          description:
            "Fundamentals of database design, implementation, and management, including relational models and SQL.",
        },
        {
          code: "MATH310",
          title: "Linear Algebra",
          credits: 3,
          description:
            "Vector spaces, linear transformations, matrices, determinants, eigenvalues, and eigenvectors.",
        },
        {
          code: "CS230",
          title: "Web Development",
          credits: 3,
          description:
            "Client-side and server-side web development, including HTML, CSS, JavaScript, and web frameworks.",
        },
        {
          code: "STAT200",
          title: "Probability and Statistics",
          credits: 3,
          description:
            "Introduction to probability theory, random variables, statistical inference, and data analysis.",
        },
      ],
    },
    {
      year: "Year 3",
      courses: [
        {
          code: "CS301",
          title: "Software Engineering",
          credits: 4,
          description:
            "Principles and practices of software development, including requirements, design, testing, and project management.",
        },
        {
          code: "CS310",
          title: "Operating Systems",
          credits: 3,
          description:
            "Design and implementation of operating systems, including process management, memory management, and file systems.",
        },
        {
          code: "CS320",
          title: "Computer Networks",
          credits: 3,
          description:
            "Fundamentals of computer networking, including protocols, architecture, and network programming.",
        },
        {
          code: "CS330",
          title: "Artificial Intelligence",
          credits: 3,
          description:
            "Introduction to AI concepts and techniques, including search algorithms, knowledge representation, and machine learning.",
        },
        {
          code: "CS340",
          title: "Cybersecurity",
          credits: 3,
          description:
            "Principles of information security, including cryptography, authentication, and network security.",
        },
        {
          code: "CS350",
          title: "Mobile Application Development",
          credits: 3,
          description:
            "Design and development of applications for mobile platforms.",
        },
      ],
    },
    {
      year: "Year 4",
      courses: [
        {
          code: "CS401",
          title: "Capstone Project I",
          credits: 3,
          description:
            "First part of a year-long project where students apply their knowledge to solve a real-world problem.",
        },
        {
          code: "CS402",
          title: "Capstone Project II",
          credits: 3,
          description: "Continuation and completion of the capstone project.",
        },
        {
          code: "CS410",
          title: "Cloud Computing",
          credits: 3,
          description:
            "Concepts and technologies of cloud computing, including virtualization, service models, and deployment.",
        },
        {
          code: "CS420",
          title: "Machine Learning",
          credits: 3,
          description:
            "Algorithms and techniques for machine learning, including supervised and unsupervised learning methods.",
        },
        {
          code: "CS430",
          title: "Big Data Analytics",
          credits: 3,
          description:
            "Processing and analyzing large-scale data sets using distributed computing frameworks.",
        },
        {
          code: "CS440",
          title: "Ethics in Computing",
          credits: 2,
          description:
            "Ethical issues in computing, including privacy, intellectual property, and professional responsibility.",
        },
      ],
    },
  ];

  const careerPaths = [
    {
      title: "Software Engineer",
      description:
        "Design, develop, and maintain software applications for various platforms and industries. Software engineers apply engineering principles to the entire software development lifecycle.",
      salary: "$105,000 - $150,000",
      growth: "22% (Much faster than average)",
      companies: ["Google", "Microsoft", "Amazon", "Apple", "Meta"],
    },
    {
      title: "Data Scientist",
      description:
        "Analyze and interpret complex data to help organizations make better decisions. Data scientists use statistical methods, machine learning, and programming to extract insights from data.",
      salary: "$100,000 - $140,000",
      growth: "36% (Much faster than average)",
      companies: ["IBM", "Netflix", "Uber", "Twitter", "Airbnb"],
    },
    {
      title: "Cybersecurity Analyst",
      description:
        "Protect computer systems and networks from cyber threats. Cybersecurity analysts monitor systems for breaches, implement security measures, and respond to incidents.",
      salary: "$95,000 - $135,000",
      growth: "33% (Much faster than average)",
      companies: [
        "Cisco",
        "Palo Alto Networks",
        "CrowdStrike",
        "FireEye",
        "Symantec",
      ],
    },
    {
      title: "AI/Machine Learning Engineer",
      description:
        "Design and implement artificial intelligence and machine learning systems. ML engineers develop algorithms and models that enable computers to learn from and make predictions based on data.",
      salary: "$110,000 - $160,000",
      growth: "40% (Much faster than average)",
      companies: ["NVIDIA", "OpenAI", "DeepMind", "Tesla", "Intel"],
    },
    {
      title: "Full-Stack Developer",
      description:
        "Build both client-side and server-side components of web applications. Full-stack developers have expertise in front-end technologies, back-end programming, and databases.",
      salary: "$90,000 - $130,000",
      growth: "25% (Much faster than average)",
      companies: ["Shopify", "Stripe", "Square", "Slack", "Atlassian"],
    },
    {
      title: "DevOps Engineer",
      description:
        "Combine software development and IT operations to shorten the development lifecycle. DevOps engineers automate and optimize deployment pipelines and infrastructure management.",
      salary: "$100,000 - $145,000",
      growth: "22% (Much faster than average)",
      companies: ["AWS", "GitHub", "GitLab", "Docker", "HashiCorp"],
    },
  ];

  const admissionRequirements = [
    {
      title: "Academic Requirements",
      items: [
        "High school diploma or equivalent",
        "Minimum GPA of 3.0 on a 4.0 scale",
        "Completion of prerequisite courses: Algebra II, Pre-Calculus, and Physics",
        "SAT score of at least 1200 or ACT score of at least 25",
      ],
    },
    {
      title: "Application Materials",
      items: [
        "Completed online application form",
        "Official high school transcripts",
        "SAT or ACT scores",
        "Two letters of recommendation (preferably from math or science teachers)",
        "Personal statement (500-750 words)",
        "Application fee of $50 (waiver available for eligible students)",
      ],
    },
    {
      title: "Transfer Students",
      items: [
        "Minimum college GPA of 3.0 on a 4.0 scale",
        "Official transcripts from all colleges attended",
        "Maximum of 60 transferable credits accepted",
        "Completion of equivalent prerequisite courses with grade C or better",
      ],
    },
    {
      title: "International Students",
      items: [
        "All academic requirements listed above",
        "TOEFL score of at least 90 (iBT) or IELTS score of at least 6.5",
        "Financial documentation showing ability to cover tuition and living expenses",
        "Copy of passport",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container">
        <Tabs defaultValue="curriculum" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="careers">Career Paths</TabsTrigger>
            <TabsTrigger value="admission">Admission</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="curriculum" className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Program Curriculum
              </h2>
              <p className="mb-4">
                Our comprehensive curriculum is designed to provide you with a
                strong foundation in computer science principles while allowing
                you to specialize in areas that align with your interests and
                career principles while allowing you to specialize in areas that
                align with your interests and career goals. The program is
                structured to build your knowledge progressively over four
                years, culminating in a capstone project that demonstrates your
                technical expertise and problem-solving abilities.
              </p>
              <p className="mb-6">
                Each course combines theoretical knowledge with practical,
                hands-on experience through labs, projects, and collaborative
                work. Our faculty members are experts in their fields and are
                committed to providing you with a high-quality education that
                prepares you for success in the technology industry.
              </p>
            </div>

            <div className="space-y-6">
              {curriculumYears.map((yearData, yearIndex) => (
                <Accordion
                  key={yearIndex}
                  type="single"
                  collapsible
                  className="bg-white rounded-lg border"
                >
                  <AccordionItem
                    value={`year-${yearIndex}`}
                    className="border-b-0"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-lg font-semibold">
                        {yearData.year}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        {yearData.courses.map((course, courseIndex) => (
                          <Card key={courseIndex} className="overflow-hidden">
                            <CardContent className="p-0">
                              <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h4 className="font-semibold">
                                      {course.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                      {course.code}
                                    </p>
                                  </div>
                                  <Badge>{course.credits} Credits</Badge>
                                </div>
                                <p className="text-sm">{course.description}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="careers" className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Career Opportunities
              </h2>
              <p className="mb-6">
                Graduates of our Computer Science program are highly sought
                after by employers across various industries. The technical
                skills, problem-solving abilities, and analytical thinking
                developed throughout this program prepare you for a wide range
                of career paths in the rapidly evolving technology sector.
              </p>
              <p className="mb-6">
                Our Career Services team works closely with students to provide
                internship opportunities, job placement assistance, resume
                building workshops, and networking events with industry
                professionals. Many of our students secure internships with
                leading tech companies during their studies, which often lead to
                full-time employment offers upon graduation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {careerPaths.map((career, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {career.title}
                    </h3>
                    <p className="mb-4">{career.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Average Salary:
                        </span>
                        <span className="font-medium">{career.salary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Job Growth:
                        </span>
                        <span className="font-medium">{career.growth}</span>
                      </div>
                      <div className="pt-2">
                        <span className="text-muted-foreground block mb-1">
                          Top Employers:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {career.companies.map((company, companyIndex) => (
                            <Badge
                              key={companyIndex}
                              variant="outline"
                              className="bg-slate-50"
                            >
                              {company}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="admission" className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Admission Requirements
              </h2>
              <p className="mb-6">
                Admission to our Computer Science program is competitive. We
                seek motivated students with strong academic backgrounds,
                particularly in mathematics and science, who demonstrate a
                passion for technology and problem-solving. The following
                requirements and materials are necessary for a complete
                application.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {admissionRequirements.map((section, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
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
                            className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold mb-4">
                Application Deadlines
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Fall Semester</h4>
                  <p className="text-sm">Early Decision: November 1</p>
                  <p className="text-sm">Regular Decision: February 1</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Spring Semester</h4>
                  <p className="text-sm">Regular Decision: October 15</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Transfer Students</h4>
                  <p className="text-sm">Fall: March 15</p>
                  <p className="text-sm">Spring: November 1</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="mb-6">
                Find answers to common questions about our Computer Science
                program. If you don't see your question here, please contact our
                admissions team for more information.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Do I need prior programming experience to apply?
                </AccordionTrigger>
                <AccordionContent>
                  No, prior programming experience is not required for
                  admission. Our curriculum is designed to accommodate students
                  with varying levels of experience, including complete
                  beginners. The first-year courses will provide you with a
                  solid foundation in programming concepts and skills. However,
                  having some basic exposure to programming can be helpful.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I specialize in a specific area of computer science?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, our program offers specialization tracks in several areas
                  including Artificial Intelligence, Cybersecurity, Data
                  Science, and Software Engineering. Students typically begin
                  specializing in their third year after completing the core
                  curriculum. Each track includes specific elective courses
                  designed to develop expertise in that area.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Are there opportunities for internships during the program?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we strongly encourage students to complete internships
                  during their studies. Our Career Services office and faculty
                  maintain strong relationships with local and national
                  companies to help students secure internships. Many students
                  complete internships during the summer between their junior
                  and senior years, and some participate in co-op programs that
                  alternate between academic semesters and paid work
                  experiences.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What kind of support is available for students?
                </AccordionTrigger>
                <AccordionContent>
                  We offer comprehensive support services including academic
                  advising, tutoring, career counseling, and technical
                  assistance. Our computer science department hosts regular
                  study groups, coding workshops, and hackathons. Additionally,
                  students have access to mental health services, disability
                  support services, and financial aid counseling to ensure their
                  overall wellbeing and success.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Is financial aid available for this program?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, financial aid is available for eligible students. This
                  includes scholarships, grants, loans, and work-study
                  opportunities. We also offer several department-specific
                  scholarships for computer science students based on academic
                  merit, financial need, and other criteria. We encourage all
                  applicants to complete the FAFSA and explore all financial aid
                  options through our Financial Aid Office.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Can I take courses online or is the program entirely
                  on-campus?
                </AccordionTrigger>
                <AccordionContent>
                  Our program offers a flexible approach with both on-campus and
                  online options for many courses. Some laboratory courses and
                  advanced seminars require in-person attendance, but many
                  lecture-based courses are available in hybrid or fully online
                  formats. This flexibility allows students to create a schedule
                  that accommodates their personal and professional commitments
                  while still receiving a high-quality education.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function FacultySection() {
  const faculty = [
    {
      name: "Dr. James Wilson",
      title: "Program Director & Professor",
      image: "https://via.placeholder.com/300",
      specialization: "Artificial Intelligence, Machine Learning",
      bio: "Dr. Wilson has over 15 years of experience in AI research and has published numerous papers in top-tier conferences. He previously worked as a research scientist at Google AI.",
    },
    {
      name: "Dr. Sarah Chen",
      title: "Associate Professor",
      image: "https://via.placeholder.com/300",
      specialization: "Cybersecurity, Network Systems",
      bio: "Dr. Chen's research focuses on developing secure systems and networks. She has received multiple grants from the National Science Foundation for her work in cybersecurity.",
    },
    {
      name: "Prof. Michael Rodriguez",
      title: "Assistant Professor",
      image: "https://via.placeholder.com/300",
      specialization: "Software Engineering, Programming Languages",
      bio: "Prof. Rodriguez brings industry experience from his time as a senior software engineer at Microsoft. He specializes in software design patterns and agile methodologies.",
    },
    {
      name: "Dr. Aisha Patel",
      title: "Associate Professor",
      image: "https://via.placeholder.com/300",
      specialization: "Data Science, Big Data Analytics",
      bio: "Dr. Patel's research explores innovative approaches to analyzing large-scale data sets. She collaborates with healthcare organizations to apply data science to medical research.",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Meet Our Faculty
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Our program is led by distinguished faculty members who are experts
            in their fields. They bring a wealth of academic knowledge and
            industry experience to the classroom, ensuring that our curriculum
            remains cutting-edge and relevant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary text-sm mb-1">{member.title}</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Specialization: {member.specialization}
                </p>
                <p className="text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline">View All Faculty</Button>
        </div>
      </div>
    </section>
  );
}

function EnrollCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Journey in Computer Science?
          </h2>
          <p className="text-lg text-white/90">
            Take the first step toward a rewarding career in technology. Apply
            now to join our Computer Science program and become part of a
            community dedicated to innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Apply Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Request Information
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramDetail;
