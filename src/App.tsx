import { JSX, ReactNode, useLayoutEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import logo from "./assets/logo.png";
import temas from "./assets/temasgroup.png";

import Home from "./pages/home";
import About from "./pages/about";
import ProgramDetail from "./pages/program-detail";
import Programs from "./pages/programs";
import Contact from "./pages/contact";
import { Mail, Menu, Phone, X } from "lucide-react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return <>{children}</>;
};

function App() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AnimatePresence mode="wait">
        <Wrapper>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="programs" element={<Programs />} />
            <Route path="program/:slug" element={<ProgramDetail />} />
            <Route path="contact-us" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </Wrapper>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 py-2 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" width={220} height={32} />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="about-us"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            to="programs"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Programs
          </Link>
          <Link
            to="contact-us"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="border-base-blue border-2 cursor-pointer text-xs"
          >
            Log In
          </Button>
          <Button
            size="sm"
            className="bg-base-blue text-white cursor-pointer text-xs hover:bg-base-dark-blue"
          >
            Register
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white fixed inset-0 top-16 z-50 animate-in slide-in-from-top-5 w-full">
          <nav className="flex flex-col gap-6 bg-white p-6">
            <Link
              to="/"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/programs"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              to="/contact-us"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col gap-4 mt-4">
              <Button
                variant="outline"
                className="w-full border-2 border-base-blue"
              >
                Log In
              </Button>
              <Button className="w-full bg-base-blue hover:bg-base-dark-blue text-white">
                Register
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-base-blue text-slate-200">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <img
                src="https://via.placeholder.com/32"
                alt="Logo"
                width={32}
                height={32}
                className="invert"
              /> */}
              <span className="text-xl font-bold text-white">
                Temas Training Hub
              </span>
            </div>
            <p className="text-white mb-4 flex items-center gap-x-4 text-sm">
              Part of
              <img src={temas} alt="temas" width={120} />
            </p>
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-white hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-white hover:text-white transition-colors text-sm"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-white hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Visit Us</h3>
            <address className="not-italic text-white space-y-2">
              <p className="text-sm">
                Jl. Yos Sudarso Kav. 33, Sunter Jaya, Jakarta Utara 14350,
                Indonesia
              </p>
              <p className="pt-2">
                <a
                  href="tel:+62214302388"
                  className="hover:text-white transition-colors flex items-center gap-x-2 text-sm"
                >
                  <Phone size={16} /> (+62)21-430 2388. Ext: 638.
                </a>
              </p>
              <p>
                <a
                  href="mailto:admin@temastraininghub.com"
                  className="hover:text-white transition-colors flex items-center gap-x-2 text-sm"
                >
                  <Mail size={16} /> admin@temastraininghub.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="bg-base-dark-blue py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="container">
          <p className="text-white text-xs">
            &copy; {new Date().getFullYear()} PT Temas Training Hub. All rights
            reserved.
          </p>
          {/* <div className="flex gap-6 text-sm">
          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Cookie Policy
          </a>
        </div> */}
        </div>
      </div>
    </footer>
  );
}

export default App;
