import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { projects } from "@/data/projects";

export default function Projects() {
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
            AI Projects
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore some of my latest work in artificial intelligence and machine learning.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up", index * 0.1)}
              className="group transition-all duration-300 hover:-translate-y-2"
            >
              <Card className="h-full overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-sans text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-muted">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.demoUrl}
                      className="text-primary hover:underline font-medium inline-flex items-center"
                    >
                      View Project
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          variants={fadeIn("up")}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-input rounded-lg hover:border-primary font-medium transition-colors"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
