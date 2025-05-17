"use client"

import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'accent';
  padding?: 'small' | 'medium' | 'large' | 'none';
  elevated?: boolean;
};

const Card = ({
  children,
  className = '',
  variant = 'default',
  padding = 'medium',
  elevated = true,
}: CardProps) => {
  // Classes de base pour toutes les cartes
  const baseClasses = 'bg-white rounded-card';
  
  // Classes selon la variante
  const variantClasses = {
    default: '',
    primary: 'border-t-4 border-primary',
    accent: 'border-t-4 border-accent',
  };
  
  // Classes de padding
  const paddingClasses = {
    small: 'p-2 sm:p-3 md:p-4',
    medium: 'p-4 sm:p-5 md:p-6',
    large: 'p-6 sm:p-7 md:p-8',
    none: '',
  };
  
  // Classes d'élévation
  const elevationClasses = elevated ? 'shadow-card' : '';
  
  // Combinaison de toutes les classes
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${elevationClasses} ${className}`;
  
  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
