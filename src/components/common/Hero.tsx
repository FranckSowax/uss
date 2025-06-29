"use client"

import React from 'react';

type HeroProps = {
  title: string;
  subtitle?: string;
  background?: 'primary' | 'light' | 'white' | 'accent';
  alignment?: 'left' | 'center';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  children?: React.ReactNode;
};

const Hero = ({
  title,
  subtitle,
  background = 'primary',
  alignment = 'left',
  size = 'medium',
  className = '',
  children,
}: HeroProps) => {
  // Classes de fond
  const backgroundClasses = {
    primary: 'bg-primary text-white',
    light: 'bg-light text-dark',
    white: 'bg-white text-dark',
    accent: 'bg-accent text-dark',
  };
  
  // Classes d'alignement de texte
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
  };
  
  // Classes de taille/espacement
  const sizeClasses = {
    small: 'py-8 md:py-10',
    medium: 'py-12 md:py-16',
    large: 'py-16 md:py-24',
  };
  
  // Taille du titre selon la taille du hero
  const titleSizeClasses = {
    small: 'text-2xl sm:text-3xl md:text-4xl',
    medium: 'text-3xl sm:text-4xl md:text-5xl',
    large: 'text-4xl sm:text-5xl md:text-6xl',
  };
  
  return (
    <section className={`${backgroundClasses[background]} ${sizeClasses[size]} ${className}`}>
      <div className="container-page">
        <div className={`max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''} ${alignmentClasses[alignment]}`}>
          <h1 className={`${titleSizeClasses[size]} font-bold mb-6 font-montserrat`}>
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          
          {children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
