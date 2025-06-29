"use client"

import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
};

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
}: ButtonProps) => {
  // Classes de base pour tous les boutons
  const baseClasses = 'font-montserrat font-semibold rounded-button transition-all duration-300 inline-flex items-center justify-center';
  
  // Classes selon la variante
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    secondary: 'bg-accent text-dark hover:bg-opacity-90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    accent: 'bg-accent text-dark hover:bg-opacity-90',
  };
  
  // Classes selon la taille
  const sizeClasses = {
    small: 'text-sm py-1 px-3',
    medium: 'py-2 px-4',
    large: 'text-lg py-3 px-6',
  };
  
  // Classes pour le bouton désactivé
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Classes pour la largeur complète
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Combinaison de toutes les classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses} ${className}`;
  
  // Si un href est fourni, rendre un lien
  if (href) {
    return (
      <Link href={href} className={buttonClasses} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }
  
  // Sinon, rendre un bouton
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;
