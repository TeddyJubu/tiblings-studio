'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ColorSwatchProps {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
  className?: string;
}

const ColorSwatch = ({ name, hex, rgb, usage, className }: ColorSwatchProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div 
        className={`h-24 w-full rounded-md ${className}`} 
        style={{ backgroundColor: hex }}
      />
      <div>
        <h3 className="font-heading text-lg">{name}</h3>
        <p className="text-xs text-muted-foreground">{hex}</p>
        <p className="text-xs text-muted-foreground">{rgb}</p>
        <p className="text-sm mt-1">{usage}</p>
      </div>
    </div>
  );
};

export function ColorPaletteShowcase() {
  const primaryColors = [
    {
      name: 'Sage Green',
      hex: '#5A8B7A',
      rgb: 'rgb(90, 139, 122)',
      usage: 'Primary brand color, headers',
      className: 'bg-sage-green text-white'
    },
    {
      name: 'Coral Pink',
      hex: '#D4857A',
      rgb: 'rgb(212, 133, 122)',
      usage: 'Accent color, CTAs',
      className: 'bg-coral-pink text-white'
    },
    {
      name: 'Warm Beige',
      hex: '#E6C896',
      rgb: 'rgb(230, 200, 150)',
      usage: 'Secondary accent, backgrounds',
      className: 'bg-warm-beige text-deep-forest'
    },
    {
      name: 'Soft Blush',
      hex: '#E8C4C4',
      rgb: 'rgb(232, 196, 196)',
      usage: 'Subtle highlights, cards',
      className: 'bg-soft-blush text-deep-forest'
    },
    {
      name: 'Pure White',
      hex: '#FFFFFF',
      rgb: 'rgb(255, 255, 255)',
      usage: 'Main background, text areas',
      className: 'bg-white text-deep-forest border border-light-gray'
    },
  ];

  const extendedColors = [
    {
      name: 'Deep Forest',
      hex: '#3D5A4F',
      rgb: 'rgb(61, 90, 79)',
      usage: 'Dark text, navigation',
      className: 'bg-deep-forest text-white'
    },
    {
      name: 'Dusty Rose',
      hex: '#C19A9A',
      rgb: 'rgb(193, 154, 154)',
      usage: 'Muted accents',
      className: 'bg-dusty-rose text-deep-forest'
    },
    {
      name: 'Warm Sand',
      hex: '#F2E6D3',
      rgb: 'rgb(242, 230, 211)',
      usage: 'Light backgrounds',
      className: 'bg-warm-sand text-deep-forest'
    },
    {
      name: 'Terracotta',
      hex: '#B8695A',
      rgb: 'rgb(184, 105, 90)',
      usage: 'Strong accents',
      className: 'bg-terracotta text-white'
    },
    {
      name: 'Mint Whisper',
      hex: '#A8C4B8',
      rgb: 'rgb(168, 196, 184)',
      usage: 'Soft highlights',
      className: 'bg-mint-whisper text-deep-forest'
    },
  ];

  const neutralColors = [
    {
      name: 'Warm Gray',
      hex: '#B8AFA7',
      rgb: 'rgb(184, 175, 167)',
      usage: 'Body text, borders',
      className: 'bg-warm-gray text-white'
    },
    {
      name: 'Light Gray',
      hex: '#F5F3F1',
      rgb: 'rgb(245, 243, 241)',
      usage: 'Section backgrounds',
      className: 'bg-light-gray text-deep-forest'
    },
    {
      name: 'Charcoal',
      hex: '#2C3E37',
      rgb: 'rgb(44, 62, 55)',
      usage: 'Headlines, important text',
      className: 'bg-charcoal text-white'
    },
  ];

  return (
    <div className="space-y-8 py-10">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-2xl">Primary Color Palette</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {primaryColors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-2xl">Extended Palette</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {extendedColors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-2xl">Neutral Support Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {neutralColors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}