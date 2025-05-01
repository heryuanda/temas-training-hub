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
          <img src={hero} alt="about" />
          <p className="absolute text-8xl w-full text-center text-base-blue font-semibold left-0 top-1/2 transform -translate-y-1/2">
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
        <div className="grid grid-cols-2 gap-12">
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

function HistorySection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Our Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our History
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            From humble beginnings to a leading educational institution, our
            journey has been defined by growth, innovation, and commitment to
            excellence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {/* 2005 */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-12">
                <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-primary transform translate-x-2"></div>
                <div className="md:hidden absolute left-4 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                <h3 className="text-2xl font-bold mb-2">2005</h3>
                <h4 className="text-xl font-semibold mb-2">Foundation</h4>
                <p>
                  EduLearn was founded with a vision to provide quality
                  education accessible to all. Starting with just two programs
                  and 50 students in a small building.
                </p>
              </div>
              <div className="md:pl-12">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt="EduLearn foundation in 2005"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* 2010 */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 md:text-left md:pl-12">
                <div className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-2"></div>
                <div className="md:hidden absolute left-4 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                <h3 className="text-2xl font-bold mb-2">2010</h3>
                <h4 className="text-xl font-semibold mb-2">Campus Expansion</h4>
                <p>
                  We expanded our campus, adding new facilities including a
                  state-of-the-art library, technology labs, and student
                  recreation center.
                </p>
              </div>
              <div className="md:order-1 md:pr-12">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt="Campus expansion in 2010"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* 2015 */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-12">
                <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-primary transform translate-x-2"></div>
                <div className="md:hidden absolute left-4 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                <h3 className="text-2xl font-bold mb-2">2015</h3>
                <h4 className="text-xl font-semibold mb-2">
                  Digital Transformation
                </h4>
                <p>
                  Launched our online learning platform, making education
                  accessible to students worldwide and pioneering hybrid
                  learning models.
                </p>
              </div>
              <div className="md:pl-12">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt="Digital transformation in 2015"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 md:text-left md:pl-12">
                <div className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-2"></div>
                <div className="md:hidden absolute left-4 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                <h3 className="text-2xl font-bold mb-2">2023</h3>
                <h4 className="text-xl font-semibold mb-2">
                  Global Recognition
                </h4>
                <p>
                  Achieved international accreditation and ranked among the top
                  educational institutions for innovation and student
                  satisfaction.
                </p>
              </div>
              <div className="md:order-1 md:pr-12">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt="Global recognition in 2023"
                    className="w-full h-auto"
                  />
                </div>
              </div>
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

function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "President",
      image: "https://via.placeholder.com/300",
      bio: "Dr. Johnson has over 20 years of experience in education leadership and is committed to innovation in teaching.",
    },
    {
      name: "Prof. Michael Chen",
      role: "Academic Dean",
      image: "https://via.placeholder.com/300",
      bio: "Prof. Chen oversees academic programs and has published extensively on educational methodologies.",
    },
    {
      name: "Dr. Priya Patel",
      role: "Director of Research",
      image: "https://via.placeholder.com/300",
      bio: "Dr. Patel leads our research initiatives and has secured numerous grants for educational studies.",
    },
    {
      name: "James Wilson",
      role: "Student Affairs Director",
      image: "https://via.placeholder.com/300",
      bio: "James ensures that student support services meet the diverse needs of our growing student body.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Our Leadership
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Our dedicated faculty and staff are committed to providing the best
            educational experience for our students.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">View All Faculty & Staff</Button>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
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
          className="h-8 w-8"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      value: "5,000+",
      label: "Students",
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
          className="h-8 w-8"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      value: "200+",
      label: "Courses",
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
          className="h-8 w-8"
        >
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      ),
      value: "98%",
      label: "Graduate Employment",
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
          className="h-8 w-8"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      value: "18",
      label: "Years of Excellence",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm text-white mb-4">
            Our Impact
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            EduLearn by the Numbers
          </h2>
          <p className="mx-auto max-w-[700px] text-lg opacity-90">
            Our achievements reflect our commitment to educational excellence
            and student success.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CampusSection() {
  const facilities = [
    {
      image: "https://via.placeholder.com/600x400",
      title: "Modern Classrooms",
      description:
        "Equipped with the latest technology to enhance the learning experience.",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Research Labs",
      description:
        "State-of-the-art facilities for hands-on learning and research projects.",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Student Center",
      description:
        "A hub for student activities, collaboration, and community building.",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Library",
      description:
        "Extensive physical and digital resources to support academic pursuits.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Our Campus
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Campus Facilities
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Our campus provides a conducive environment for learning, research,
            and personal growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={facility.image || "/placeholder.svg"}
                alt={facility.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                <p className="text-white/90">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button>Schedule a Campus Tour</Button>
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
            we invite you to connect with us and discover what makes EduLearn
            special.
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
