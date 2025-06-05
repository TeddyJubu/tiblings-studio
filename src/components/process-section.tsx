'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { processSteps } from '@/lib/constants';

export function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="process" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Process</h2>
          <p className="text-lg font-body text-foreground/80 max-w-3xl mx-auto">
            We follow a structured approach to ensure every project is delivered with excellence.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-5 gap-6"
        >
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full relative overflow-hidden group hover:shadow-md transition-shadow bg-card-foreground/5">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <CardContent className="p-6 pt-10 relative z-10">
                  <div className="text-4xl font-bold text-primary/50 mb-4">{step.number}</div>
                  <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                  <p className="font-body text-foreground/80">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-body text-foreground/80 max-w-3xl mx-auto">
            Throughout each step, our sibling duo works collaboratively, combining technical expertise and creative vision to deliver exceptional results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}