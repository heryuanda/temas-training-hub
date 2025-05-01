import React from "react";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Card, CardContent } from "../../components/ui/card";
import { CheckCircle2, MapPin, Phone, Mail, AlertCircle } from "lucide-react";
import { Toaster } from "../../components/ui/sonner";
import { toast } from "sonner";
import { motion } from "framer-motion";
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const transition = {
  duration: 0.3,
};

function ContactUs() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={transition}
    >
      <main className="flex-1">
        <HeroSection />
        <ContactInfoSection />
        <ContactFormSection />
        {/* <FAQSection /> */}
        <MapSection />
      </main>
      <Toaster />
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative py-12 md:py-16 bg-slate-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            We're here to help! Reach out to us with any questions, feedback, or
            inquiries you may have about our programs, admissions, or schedules.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+62214302388"
              className="bg-base-blue px-3 py-2 rounded-md text-white hover:bg-base-dark-blue cursor-pointer flex items-center gap-x-2 text-sm"
            >
              <Phone size={16} /> Call Us
            </a>
            <a
              href="mailto:pttemastraininghub@gmail.com"
              className="bg-white hover:bg-slate-100 transition-colors flex items-center gap-x-2 text-sm border rounded-md px-3 py-2"
            >
              <Mail size={16} /> Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoSection() {
  const contactCards = [
    {
      title: "Address",
      icon: <MapPin className="h-6 w-6" />,
      details: [
        "Jl. Yos Sudarso Kav. 33, Sunter Jaya",
        "Jakarta Utara 14350",
        "Indonesia",
      ],
    },
    {
      title: "Phone",
      icon: <Phone className="h-6 w-6" />,
      details: ["(+62)214302388"],
    },
    {
      title: "Email",
      icon: <Mail className="h-6 w-6" />,
      details: ["pttemastraininghub@gmail.com"],
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid gap-8 grid-cols-3">
          {contactCards.map((card, index) => (
            <Card key={index} className="overflow-hidden py-0">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                  <ul className="">
                    {card.details.map((detail, i) => (
                      <li key={i} className="text-muted-foreground">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  //   const [formType, setFormType] = useState("feedback");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    department: "",
    feedbackType: "",
    anonymous: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, feedbackType: value }));
  };

  const handleAnonymousChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, anonymous: e.target.checked }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, department: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast("Form submitted successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        department: "",
        feedbackType: "",
        anonymous: false,
      });
    }, 1500);
  };

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below to provide feedback.
              <br />
              We value your input and will respond promptly.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Thank You for Your Feedback!
              </h3>
              <p className="text-muted-foreground mb-4">
                We appreciate your input. Your feedback helps us improve our
                services.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Provide More Feedback
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white p-4 rounded-md"
            >
              <div className="space-y-3 bg-slate-100 border p-4 rounded-lg mb-4">
                <Label className="text-base font-medium">
                  Type of Feedback
                </Label>
                <RadioGroup
                  value={formData.feedbackType}
                  onValueChange={handleRadioChange}
                  className="grid gap-2"
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="suggestion"
                      id="suggestion"
                      className="border-base-blue"
                    />
                    <Label htmlFor="suggestion" className="font-normal">
                      Suggestion for Improvement
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="complaint"
                      id="complaint"
                      className="border-base-blue"
                    />
                    <Label htmlFor="complaint" className="font-normal">
                      Complaint or Criticism
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="compliment"
                      id="compliment"
                      className="border-base-blue"
                    />
                    <Label htmlFor="compliment" className="font-normal">
                      Compliment
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="other"
                      id="other-feedback"
                      className="border-base-blue"
                    />
                    <Label htmlFor="other-feedback" className="font-normal">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="feedback-name">Your Name</Label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="anonymous"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                      checked={formData.anonymous}
                      onChange={handleAnonymousChange}
                    />
                    <Label htmlFor="anonymous" className="text-sm font-normal">
                      Submit Anonymously
                    </Label>
                  </div>
                </div>
                <Input
                  id="feedback-name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.anonymous ? "" : formData.name}
                  onChange={handleInputChange}
                  disabled={formData.anonymous}
                  required={!formData.anonymous}
                />
              </div>

              {!formData.anonymous && (
                <div className="space-y-2">
                  <Label htmlFor="feedback-email">Email Address</Label>
                  <Input
                    id="feedback-email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required={!formData.anonymous}
                  />
                  <p className="text-xs text-muted-foreground">
                    We'll only use this to follow up on your feedback if
                    necessary.
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="feedback-department">
                  Regarding Department/Service
                </Label>
                <Select
                  value={formData.department}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger id="feedback-department">
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admissions">Admissions</SelectItem>
                    <SelectItem value="financial-aid">Financial Aid</SelectItem>
                    <SelectItem value="academic-affairs">
                      Academic Affairs
                    </SelectItem>
                    <SelectItem value="student-services">
                      Student Services
                    </SelectItem>
                    <SelectItem value="facilities">
                      Campus Facilities
                    </SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="curriculum">Curriculum</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback-subject">Subject</Label>
                <Input
                  id="feedback-subject"
                  name="subject"
                  placeholder="Brief description of your feedback"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback-message">Your Feedback</Label>
                <Textarea
                  id="feedback-message"
                  name="message"
                  placeholder="Please provide detailed feedback, including specific examples if applicable..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-yellow-800">
                    We value your honest feedback. All submissions are reviewed
                    by our team to help improve our services and address any
                    concerns.
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Us</h2>
          <p className="text-muted-foreground">
            Visit our location to experience our facilities and meet our team in
            person.
          </p>
        </div>

        <div className="aspect-video w-full h-[400px] rounded-lg overflow-hidden">
          {/* Replace with actual Google Maps embed code */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.901235891221!2d106.88765807316602!3d-6.143966660224797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1fe622f8b057%3A0x25f61fc10da318c5!2sPT%20TEMAS%20Tbk!5e0!3m2!1sen!2sid!4v1746109532072!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
