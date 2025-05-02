import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import hero from "../../assets/about-hero.png";
import about1 from "../../assets/about-1.png";
import { useNavigate } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const transition = {
  duration: 0.3,
};

function AboutUs() {
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
          <MissionSection />
          {/* <HistorySection />
          <ValuesSection />
          <TeamSection />
          <StatsSection />
          <CampusSection /> */}
          <ValuesSection />
          <CTASection />
        </main>
      </div>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-8 bg-white">
      <div className="container">
        <div className="relative">
          <img
            src={hero}
            alt="about"
            className="rounded-lg h-[200px] lg:h-auto md:h-auto sm:h-auto object-cover"
          />
          <p className="absolute text-3xl lg:text-8xl md:text-7xl sm:text-6xl w-full text-center text-base-blue font-semibold left-0 top-1/2 transform -translate-y-1/2">
            Get to Know Us!
          </p>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Our Mission & Vision
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            We train and develop our shipping crew
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            We are committed to providing accessible, innovative education that
            prepares crew for success in a rapidly changing world.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          <div className="">
            <img
              src={about1}
              alt="vision-mission"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="grid gap-8 items-center ">
            <div className="bg-base-blue/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="mb-6">
                A professional maritime training center focused on safety,
                technical expertise, leadership, environmental preservation, and
                workforce readiness to positively contribute to the maritime
                industry.
              </p>
            </div>

            <div className="bg-base-blue/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full text-primary mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    To deliver <strong>high-quality</strong>,{" "}
                    <strong>comprehensive training</strong> programs that equip
                    maritime community with the knowledge, practical skills, and
                    ethical grounding needed for a successful maritime career.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full text-primary mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    To facilitate <strong>dedicated</strong>,{" "}
                    <strong>responsible and committed</strong> trainers and
                    trainees.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full text-primary mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    To establish a future-ready maritime training platform and
                    community.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full text-primary mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    To cultivate a thriving ecosystem that ensures mutual growth
                    and optimal returns for all stakeholders.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: "P",
      title: "Profesional",
      description:
        "Always carry out duties and obligations in accordance with the expertise and skills possessed.",
    },
    {
      icon: "E",
      title: "Efektif",
      description:
        "Achieve work targets on time and on target by utilizing all available resources.",
    },
    {
      icon: "D",
      title: "Disiplin",
      description:
        "Follow and comply with all regulations and procedures that apply in every work activity carried out.",
    },
    {
      icon: "U",
      title: "Upaya",
      description:
        "Always strive and be enthusiastic to achieve and reach work targets.",
    },
    {
      icon: "L",
      title: "Loyalitas",
      description:
        "Have high dedication in building the company and achieving shared prosperity.",
    },
    {
      icon: "I",
      title: "Inovatif",
      description:
        "Creating something new and different, both in action and ideas, in every work activity to advance the company.",
    },
  ];

  return (
    <section className="py-8">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            What We Stand For
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our Core Values
          </h2>
          {/* <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            These principles guide our decisions, shape our culture, and define
            our approach to education.
          </p> */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-slate-100 p-3 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex text-base-gold items-center justify-center w-10 h-10 bg-white border-2 font-bold border-base-gold rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const navigate = useNavigate();
  const goTo = (url: string) => {
    navigate(url);
  };
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Join Our Educational Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're a prospective student, parent, or community member,
            we invite you to connect with us and discover what makes Temas
            Training Hub special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="gap-2">
              Apply Now{" "}
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
                className="h-4 w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Visit
            </Button> */}
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer"
              onClick={() => goTo("/contact-us")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
