"use client"

import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'primary' | 'accent' | 'none';
  spacing?: 'small' | 'medium' | 'large' | 'none';
  container?: boolean;
  id?: string;
};

const Section = ({
  children,
  className = '',
  background = 'none',
  spacing = 'medium',
  container = true,
  id,
}: SectionProps) => {
  // Classes de fond
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-light',
    primary: 'bg-primary text-white',
    accent: 'bg-accent',
    none: '',
  };
  
  // Classes d'espacement
  const spacingClasses = {
    small: 'py-6 sm:py-7 md:py-8',
    medium: 'py-10 sm:py-12 md:py-16',
    large: 'py-12 sm:py-16 md:py-24',
    none: '',
  };
  
  // Classes de base
  const baseClasses = `${backgroundClasses[background]} ${spacingClasses[spacing]} ${className}`;
  
  return (
    <section className={baseClasses} id={id}>
      {container ? (
        <div className="container-page">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
