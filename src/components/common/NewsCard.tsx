"use client"

import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';

type NewsCardProps = {
  title: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  slug: string;
  category?: string;
  className?: string;
};

const NewsCard = ({
  title,
  excerpt,
  date,
  imageUrl,
  slug,
  category,
  className = '',
}: NewsCardProps) => {
  // Formater la date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <Card className={`h-full flex flex-col ${className}`} padding="none">
      <div className="h-48 relative">
        {imageUrl ? (
          <div 
            className="w-full h-full bg-cover bg-center rounded-t-lg" 
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-t-lg">
            <div className="text-gray-500">Image non disponible</div>
          </div>
        )}
        
        {category && (
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-sm rounded-full">
            {category}
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="text-sm text-gray-500 mb-2">{formatDate(date)}</div>
        
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        
        <p className="text-gray-700 mb-4 flex-grow">
          {excerpt}
        </p>
        
        <Link 
          href={`/actualites/${slug}`} 
          className="text-primary font-medium hover:underline inline-flex items-center mt-auto"
        >
          Lire plus
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Card>
  );
};

export default NewsCard;
