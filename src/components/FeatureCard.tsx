interface FeatureCardProps {
  title: string;
  description: string;
  icon: 'quality' | 'craft' | 'passion';
  index: number;
}

import { Gem, Leaf, Heart } from 'lucide-react';

const icons = {
  quality: <Gem width="32" height="32" strokeWidth={1} />,
  craft: <Leaf width="32" height="32" strokeWidth={1} />,
  passion: <Heart width="32" height="32" strokeWidth={1} />,
};

export default function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  return (
    <article
      className="feature-card group relative bg-white/60 backdrop-blur-sm border border-[rgb(123,123,84)]/10 p-8 lg:p-10 transition-all duration-500 hover:bg-white hover:border-[rgb(123,123,84)]/30 hover:shadow-xl hover:-translate-y-2"
      data-index={index}
    >
      <div className="relative mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 text-[rgb(185,140,75)] transition-transform duration-500 group-hover:scale-110">
          {icons[icon]}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl md:text-3xl font-serif text-[rgb(12,12,12)] mb-4 group-hover:text-[rgb(123,123,84)] transition-colors duration-500">
        {title}
      </h3>
      <p className="text-[rgb(12,12,12)]/70 leading-relaxed">
        {description}
      </p>

      {/* Accent line with green */}
      <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-[rgb(123,123,84)] via-[rgb(185,140,75)] to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
    </article>
  );
}
