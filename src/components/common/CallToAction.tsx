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
    <section className={`py-16 ${backgroundClasses[background]} ${className}`}>
      <div className="container-page text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        
        {description && (
          <p className="text-lg max-w-2xl mx-auto mb-8">
            {description}
          </p>
        )}
        
        <div className="flex flex-wrap justify-center gap-4">
          {primaryButtonText && primaryButtonHref && (
            <Button 
              variant={primaryButtonVariant}
              href={primaryButtonHref}
            >
              {primaryButtonText}
            </Button>
          )}
          
          {secondaryButtonText && secondaryButtonHref && (
            <Button 
              variant={secondaryButtonVariant}
              href={secondaryButtonHref}
              className={background === 'primary' ? 'bg-white hover:bg-gray-100' : ''}
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
