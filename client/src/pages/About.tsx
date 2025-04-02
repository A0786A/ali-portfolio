import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Briefcase,
  Code
} from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { 
  biography, 
  education, 
  certifications, 
  services
} from "@/data/about";

export default function About() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="py-20 bg-muted/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up")}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
            About Me
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My journey as an AI developer and machine learning specialist.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Profile Image & Details */}
          <motion.div
            variants={fadeIn("right")}
            className="lg:col-span-2 flex flex-col items-center lg:items-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-teal-500/20 rounded-full transform -rotate-6 scale-105"></div>
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
                alt="Alex Chen"
                className="relative w-56 h-56 object-cover rounded-full border-4 border-background shadow-md"
              />
            </div>
            
            <div className="mt-8 text-center lg:text-left">
              <h3 className="font-sans text-2xl font-bold">Alex Chen</h3>
              <p className="text-primary font-medium">AI Developer & ML Specialist</p>
              
              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center text-sm">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  <span>alex.chen@example.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center text-sm">
                  <Briefcase className="h-5 w-5 mr-2 text-primary" />
                  <span>Available for freelance</span>
                </div>
              </div>
              
              <Button className="mt-8" size="lg" asChild>
                <a href="#" download>Download Resume</a>
              </Button>
            </div>
          </motion.div>
          
          {/* About Content */}
          <motion.div
            variants={fadeIn("left")}
            className="lg:col-span-3 space-y-8"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans text-xl font-bold mb-4">Biography</h3>
                <div className="space-y-4 text-muted-foreground">
                  {biography.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-sans text-xl font-bold mb-4">Education</h3>
                  <div className="space-y-4">
                    {education.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-medium">{item.institution}</h4>
                        <p className="text-primary text-sm">{item.degree}</p>
                        <p className="text-sm text-muted-foreground">{item.period}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-sans text-xl font-bold mb-4">Certifications</h3>
                  <div className="space-y-4">
                    {certifications.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-primary text-sm">{item.issuer}</p>
                        <p className="text-sm text-muted-foreground">{item.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans text-xl font-bold mb-4">What I Do</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          {service.icon === 'monitor' && <Monitor className="h-6 w-6 text-primary" />}
                          {service.icon === 'code' && <Code className="h-6 w-6 text-primary" />}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">{service.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
