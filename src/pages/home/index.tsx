import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { cn } from "../../lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import hero1 from "../../assets/hero1.png";
import classthumbnail1 from "../../assets/class-thumbnail1.png";
import classthumbnail2 from "../../assets/class-thumbnail2.png";
import { useNavigate } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const transition = {
  duration: 0.3,
};
const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={transition}
    >
      <main className="flex-1">
        <HeroCarousel />
        <ProgramsSection />
        {/* <TestimonialsSection />
        <PartnersSection /> */}
      </main>
    </motion.div>
  );
};
export default Home;

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hero1,
      title: "Unlock Your Potential with Quality Education",
      description:
        "Discover our wide range of programs designed to help you succeed in today's competitive world.",
    },
    {
      image: hero1,
      title: "Unlock Your Potential with Quality Education",
      description:
        "Discover our wide range of programs designed to help you succeed in today's competitive world.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative overflow-hidden py-6 container">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              currentSlide === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            )}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="absolute inset-0 h-full object-cover left-1/2 transform -translate-x-1/2"
              style={{ objectFit: "cover" }}
            />
            {/* <div className="absolute inset-0 bg-black/40" /> */}
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <div className="max-w-3xl space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <Button size="lg">Explore Programs</Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function ProgramsSection() {
  const navigate = useNavigate();
  const goTo = (url: string) => {
    navigate(url);
  };
  const programs = [
    {
      title: "Standards of Training, Certification and Watchkeeping (STCW)",
      description:
        "Standard qualifications for captains, officers, and watchkeeping personnel on board merchant ships that are sailing.",
      image: classthumbnail1,
      duration: "4 years",
      level: "Bachelor's Degree",
    },
    {
      title: "Non-STCW",
      description:
        "Activities or training programs that are not included in the STCW standards but still support work competencies in the maritime field.",
      image: classthumbnail2,
      duration: "2 years",
      level: "Master's Degree",
    },
  ];

  return (
    <section id="programs" className="py-16 bg-[#f5f5f5]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our wide range of academic programs designed to prepare you
            for success in your chosen field.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all hover:shadow-lg pt-0 gap-4"
            >
              <div className="aspect-video relative px-6 pt-6">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="leading-normal text-xl">
                  {program.title}
                </CardTitle>
                {/* <CardDescription className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    {program.duration}
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs px-2 py-1 rounded-full">
                    {program.level}
                  </span>
                </CardDescription> */}
              </CardHeader>
              <CardContent>
                <p>{program.description}</p>
              </CardContent>
              {/* <CardFooter>
                <Button
                  variant="default"
                  className="w-full bg-base-blue text-white hover:bg-base-dark-blue cursor-pointer"
                >
                  Learn More
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="text-white bg-base-blue cursor-pointer hover:bg-base-dark-blue"
            onClick={() => goTo("/programs")}
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}

// function TestimonialsSection() {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       program: "Computer Science",
//       image: "https://via.placeholder.com/100",
//       quote:
//         "The professors are incredibly knowledgeable and supportive. I've gained practical skills that have already helped me secure an internship at a top tech company.",
//       year: "3rd Year Student",
//     },
//     {
//       name: "Michael Chen",
//       program: "Business Administration",
//       image: "https://via.placeholder.com/100",
//       quote:
//         "The networking opportunities at EduLearn are unmatched. The curriculum is designed to prepare you for real-world challenges in the business world.",
//       year: "Recent Graduate",
//     },
//     {
//       name: "Priya Patel",
//       program: "Graphic Design",
//       image: "https://via.placeholder.com/100",
//       quote:
//         "The creative environment and industry-standard tools available to students have helped me build an impressive portfolio that stands out to employers.",
//       year: "2nd Year Student",
//     },
//   ];

//   return (
//     <section id="testimonials" className="py-16 bg-white">
//       <div className="container">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
//             Student Testimonials
//           </h2>
//           <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
//             Hear what our students have to say about their educational journey
//             with us.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-slate-50 p-6 rounded-lg shadow-sm relative"
//             >
//               <div className="absolute text-slate-200 -top-4 left-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="64"
//                   height="64"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="opacity-20"
//                 >
//                   <path d="M11.3 3.3c-3.8 0-6.8 3.1-6.8 7v10.3h10.9V10.2H8.5c0-1.3 1-2.4 2.3-2.4h.5V3.3h-.5zm9.1 0c-3.8 0-6.8 3.1-6.8 7v10.3h10.9V10.2h-6.8c0-1.3 1-2.4 2.3-2.4h.5V3.3h-.5z" />
//                 </svg>
//               </div>

//               <div className="flex items-center mb-4">
//                 <img
//                   src={testimonial.image || "/placeholder.svg"}
//                   alt={testimonial.name}
//                   className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary"
//                 />
//                 <div>
//                   <h3 className="font-bold">{testimonial.name}</h3>
//                   <p className="text-sm text-muted-foreground">
//                     {testimonial.program}
//                   </p>
//                   <p className="text-xs text-primary">{testimonial.year}</p>
//                 </div>
//               </div>

//               <p className="italic relative z-10">{testimonial.quote}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <Button variant="outline">Read More Stories</Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function PartnersSection() {
//   const partners = [
//     { name: "Microsoft", logo: "https://via.placeholder.com/160x80" },
//     { name: "Google", logo: "https://via.placeholder.com/160x80" },
//     { name: "Amazon", logo: "https://via.placeholder.com/160x80" },
//     { name: "IBM", logo: "https://via.placeholder.com/160x80" },
//     { name: "Oracle", logo: "https://via.placeholder.com/160x80" },
//     { name: "Meta", logo: "https://via.placeholder.com/160x80" },
//     { name: "Apple", logo: "https://via.placeholder.com/160x80" },
//     { name: "Cisco", logo: "https://via.placeholder.com/160x80" },
//   ];

//   return (
//     <section id="partners" className="py-16">
//       <div className="container">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
//             Our Partners
//           </h2>
//           <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
//             We collaborate with leading companies and institutions to provide
//             our students with the best opportunities.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
//             >
//               <img
//                 src={partner.logo || "/placeholder.svg"}
//                 alt={partner.name}
//                 className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-muted-foreground mb-4">
//             Interested in becoming a partner? Contact us today!
//           </p>
//           <Button variant="outline">Become a Partner</Button>
//         </div>
//       </div>
//     </section>
//   );
// }
