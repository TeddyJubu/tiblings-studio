'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
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
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">About Tiblings Studio</h2>
            <p className="text-lg font-body text-foreground/80 mb-6">
              We're Teddy and Tyeba, siblings who combined our complementary skills to create a unique creative and development studio. Teddy brings technical expertise in AI integration and development, while Tyeba contributes creative vision through design and branding.
            </p>
            <p className="text-lg font-body text-foreground/80">
              We believe in the power of human creativity enhanced by AI. Our sibling dynamic brings a unique blend of technical and creative thinking to every project, resulting in solutions that are both innovative and practical. Together, we leverage the power of AI to enhance (not replace) human creativity, delivering exceptional digital experiences that help businesses thrive in the digital age.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-card-foreground/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2">Teddy</h3>
                  <p className="font-body text-foreground/80 mb-4">Technical Lead</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>AI Integration</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Full-Stack Development</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>System Architecture</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full bg-card-foreground/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2">Tyeba</h3>
                  <p className="font-body text-foreground/80 mb-4">Creative Lead</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>UI/UX Design</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Brand Strategy</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Content Creation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>


          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}