"use client"

import React from 'react';
import Button from '../ui/Button';

type CallToActionProps = {
  title: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  background?: 'primary' | 'light' | 'white' | 'accent';
  className?: string;
};

const CallToAction = ({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  background = 'primary',
  className = '',
}: CallToActionProps) => {
  // Classes de fond
  const backgroundClasses = {
    primary: 'bg-primary text-white',
    light: 'bg-light text-dark',
    white: 'bg-white text-dark',
    accent: 'bg-accent text-dark',
  };
  
  // Classes pour les boutons selon le fond
  const primaryButtonVariant = background === 'primary' ? 'accent' : 'primary';
  const secondaryButtonVariant = background === 'primary' ? 'outline' : 'outline';
  
  return (
    <section className={`py-16 md:py-24 ${backgroundClasses[background]} ${className} relative overflow-hidden`}>
      {/* Éléments décoratifs */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white opacity-5"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
      
      <div className="container-page relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 rounded-2xl bg-opacity-90">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">{title}</h2>
          
          {description && (
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed opacity-90">
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8">
            {primaryButtonText && primaryButtonHref && (
              <Button 
                variant={primaryButtonVariant}
                href={primaryButtonHref}
                className="w-full sm:w-auto px-6 py-3 text-base font-medium transition-transform hover:scale-105"
              >
                {primaryButtonText}
              </Button>
            )}
            
            {secondaryButtonText && secondaryButtonHref && (
              <Button 
                variant={secondaryButtonVariant}
                href={secondaryButtonHref}
                className={`w-full sm:w-auto px-6 py-3 text-base font-medium transition-transform hover:scale-105 ${background === 'primary' ? 'bg-white/90 hover:bg-white backdrop-blur-sm' : ''}`}
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
