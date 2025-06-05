'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { services } from '@/lib/constants';
import { BrainCircuit, Code, Server, Palette, Brush, FileText } from 'lucide-react';

const iconMap = {
  BrainCircuit,
  Code,
  Server,
  Palette,
  Brush,
  FileText,
};

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="h-10 w-10 text-primary" /> : null;
  };

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Services</h2>
          <p className="text-lg font-body text-foreground/80 max-w-3xl mx-auto">
            We combine technical expertise and creative vision to deliver comprehensive solutions
            for your digital needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {/* Teddy's Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-heading font-bold mb-8 text-center md:text-left"
            >
              Teddy's Technical Services
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.teddy.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-md transition-shadow bg-card-foreground/5">
                    <CardContent className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="mb-4 mt-2">
                        {renderIcon(service.icon)}
                      </div>
                      <h4 className="text-xl font-heading font-bold mb-2">{service.title}</h4>
                      <p className="font-body text-foreground/80">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tyeba's Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-heading font-bold mb-8 text-center md:text-left"
            >
              Tyeba's Creative Services
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.tyeba.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-md transition-shadow bg-card-foreground/5">
                    <CardContent className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="mb-4 mt-2">
                        {renderIcon(service.icon)}
                      </div>
                      <h4 className="text-xl font-heading font-bold mb-2">{service.title}</h4>
                      <p className="font-body text-foreground/80">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}