import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "@/lib/animations";

export default function Home() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn("right")} className="space-y-6 md:space-y-8">
            <Badge variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/20">
              AI Developer & ML Specialist
            </Badge>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Building <span className="text-primary">Intelligent</span> Solutions with AI
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I craft AI-powered applications that solve real-world problems. From machine learning models to neural networks, I bring intelligence to web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div variants={slideIn("left")} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-teal-500/20 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-card shadow-xl rounded-2xl overflow-hidden border border-border">
              <div className="p-4 bg-muted border-b border-border flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-sm text-muted-foreground font-mono">ai-model-training.py</div>
              </div>
              <div className="p-5 font-mono text-sm overflow-hidden">
                <div><span className="text-purple-600 dark:text-purple-400">import</span> <span className="text-blue-600 dark:text-blue-400">tensorflow</span> <span className="text-purple-600 dark:text-purple-400">as</span> <span className="text-blue-600 dark:text-blue-400">tf</span></div>
                <div><span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-blue-600 dark:text-blue-400">tensorflow.keras.models</span> <span className="text-purple-600 dark:text-purple-400">import</span> Sequential</div>
                <div><span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-blue-600 dark:text-blue-400">tensorflow.keras.layers</span> <span className="text-purple-600 dark:text-purple-400">import</span> Dense, LSTM</div>
                <div className="mt-2"><span className="text-green-600 dark:text-green-400"># Create a neural network model</span></div>
                <div><span className="text-blue-600 dark:text-blue-400">model</span> = Sequential([</div>
                <div className="pl-4">LSTM(<span className="text-amber-600 dark:text-amber-400">128</span>, <span className="text-purple-600 dark:text-purple-400">return_sequences</span>=<span className="text-blue-600 dark:text-blue-400">True</span>, <span className="text-purple-600 dark:text-purple-400">input_shape</span>=(samples, time_steps, features)),</div>
                <div className="pl-4">LSTM(<span className="text-amber-600 dark:text-amber-400">64</span>),</div>
                <div className="pl-4">Dense(<span className="text-amber-600 dark:text-amber-400">32</span>, <span className="text-purple-600 dark:text-purple-400">activation</span>=<span className="text-blue-600 dark:text-blue-400">'relu'</span>),</div>
                <div className="pl-4">Dense(<span className="text-amber-600 dark:text-amber-400">1</span>, <span className="text-purple-600 dark:text-purple-400">activation</span>=<span className="text-blue-600 dark:text-blue-400">'sigmoid'</span>)</div>
                <div>])</div>
                <div className="mt-2"><span className="text-blue-600 dark:text-blue-400">model</span>.compile(</div>
                <div className="pl-4"><span className="text-purple-600 dark:text-purple-400">optimizer</span>=<span className="text-blue-600 dark:text-blue-400">'adam'</span>,</div>
                <div className="pl-4"><span className="text-purple-600 dark:text-purple-400">loss</span>=<span className="text-blue-600 dark:text-blue-400">'binary_crossentropy'</span>,</div>
                <div className="pl-4"><span className="text-purple-600 dark:text-purple-400">metrics</span>=[<span className="text-blue-600 dark:text-blue-400">'accuracy'</span>]</div>
                <div>)</div>
                <div className="mt-2 text-pink-600 dark:text-pink-400 animate-pulse">▮</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl"></div>
    </motion.section>
  );
}
