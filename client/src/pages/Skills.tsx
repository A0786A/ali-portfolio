import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Code, Server } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { skills, timelineItems } from "@/data/skills";

export default function Skills() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up")}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
            Technical Skills
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My expertise in AI development and related technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Skills Categories */}
          <motion.div variants={fadeIn("right")} className="space-y-8">
            {/* AI & Machine Learning */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-sans text-xl font-bold">AI & Machine Learning</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.ai.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted rounded-lg text-sm font-medium transition-transform hover:-translate-y-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Frontend Development */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-teal-500/10 rounded-lg">
                    <Code className="h-6 w-6 text-teal-500" />
                  </div>
                  <h3 className="font-sans text-xl font-bold">Frontend Development</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted rounded-lg text-sm font-medium transition-transform hover:-translate-y-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Backend & Infrastructure */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-amber-500/10 rounded-lg">
                    <Server className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="font-sans text-xl font-bold">Backend & Infrastructure</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted rounded-lg text-sm font-medium transition-transform hover:-translate-y-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Skills Meter & Experience */}
          <motion.div variants={fadeIn("left")}>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans text-xl font-bold mb-6">Experience Level</h3>
                
                {/* Skill Meters */}
                <div className="space-y-6">
                  {skills.proficiency.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
                
                {/* Experience Timeline */}
                <div className="mt-10">
                  <h3 className="font-sans text-xl font-bold mb-6">Work Timeline</h3>
                  
                  <div className="space-y-6">
                    {timelineItems.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                          <div className={`w-0.5 h-full ${index === timelineItems.length - 1 ? 'bg-transparent' : 'bg-muted'}`}></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">{item.title}</h4>
                          <p className="text-primary">{item.company} • {item.period}</p>
                          <p className="mt-1 text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
