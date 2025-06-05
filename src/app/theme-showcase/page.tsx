'use client';

import { ColorPaletteShowcase } from '@/components/theme-showcase/color-palette';
import { TypographyShowcase } from '@/components/theme-showcase/typography';

export default function ThemeShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-4xl text-sage-green mb-8">Theme Showcase</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="font-heading text-3xl text-deep-forest mb-6">Color Palette</h2>
          <ColorPaletteShowcase />
        </section>
        
        <section>
          <h2 className="font-heading text-3xl text-deep-forest mb-6">Typography</h2>
          <TypographyShowcase />
        </section>
        
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-deep-forest mb-6">Image Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={`/images/${num}.png`} 
                  alt={`Watercolor image ${num}`} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-warm-sand">
                  <h3 className="font-heading text-xl text-deep-forest">Watercolor Image {num}</h3>
                  <p className="text-warm-gray mt-2">Beautiful watercolor texture for your design projects.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}