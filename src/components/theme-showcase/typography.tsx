'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function TypographyShowcase() {
  return (
    <div className="space-y-8 py-10">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-2xl">Typography</CardTitle>
        </CardHeader>
        <CardContent className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Heading Font: Bagel Fat One</h2>
            <div className="space-y-2">
              <div className="font-heading text-4xl">Heading 1 - 2.5rem (40px)</div>
              <div className="font-heading text-3xl">Heading 2 - 1.875rem (30px)</div>
              <div className="font-heading text-2xl">Heading 3 - 1.5rem (24px)</div>
              <div className="font-heading text-xl">Heading 4 - 1.25rem (20px)</div>
              <div className="font-heading text-lg">Heading 5 - 1.125rem (18px)</div>
              <div className="font-heading text-base">Heading 6 - 1rem (16px)</div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Body Font: Helvetica Neue</h2>
            <div className="space-y-6">
              <div>
                <div className="text-2xl font-body mb-2">Body Large - 1.5rem (24px)</div>
                <p className="text-2xl font-body">The quick brown fox jumps over the lazy dog.</p>
              </div>
              
              <div>
                <div className="text-xl font-body mb-2">Body Medium - 1.25rem (20px)</div>
                <p className="text-xl font-body">The quick brown fox jumps over the lazy dog.</p>
              </div>
              
              <div>
                <div className="text-base font-body mb-2">Body Regular - 1rem (16px)</div>
                <p className="text-base font-body">The quick brown fox jumps over the lazy dog. This is the standard body text size used for most content. It provides good readability on both desktop and mobile devices.</p>
              </div>
              
              <div>
                <div className="text-sm font-body mb-2">Body Small - 0.875rem (14px)</div>
                <p className="text-sm font-body">The quick brown fox jumps over the lazy dog. This smaller text size is ideal for secondary information, captions, or when space is limited.</p>
              </div>
              
              <div>
                <div className="text-xs font-body mb-2">Body Extra Small - 0.75rem (12px)</div>
                <p className="text-xs font-body">The quick brown fox jumps over the lazy dog. This is the smallest recommended text size for legibility.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Font Combinations</h2>
            <div className="space-y-6 border-l-4 border-sage-green pl-4">
              <div>
                <h3 className="font-heading text-2xl text-sage-green">Watercolor Artistry</h3>
                <p className="font-body mt-2">Explore the delicate balance of pigment and water in our curated collection of watercolor techniques. Each stroke tells a story of patience and precision.</p>
              </div>
              
              <div>
                <h3 className="font-heading text-2xl text-coral-pink">Creative Expression</h3>
                <p className="font-body mt-2">Unleash your imagination through the fluid medium of watercolors. Our workshops provide the perfect environment for both beginners and experienced artists.</p>
              </div>
              
              <div>
                <h3 className="font-heading text-2xl text-deep-forest">Natural Inspiration</h3>
                <p className="font-body mt-2">From botanical illustrations to landscape vistas, find your muse in the natural world. Our community celebrates the beauty found in organic forms and earthy palettes.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}