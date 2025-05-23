"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/common/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import CallToAction from '@/components/common/CallToAction';
import NewsCard from '@/components/common/NewsCard';
import { useCountAnimation } from '@/hooks/useCountAnimation';

// Données fictives pour les actualités
const actualites = [
  {
    id: 1,
    title: 'Ouverture des inscriptions 2025-2026',
    excerpt: 'Les inscriptions pour l\'année académique 2025-2026 sont désormais ouvertes. Consultez les modalités...',
    date: '2025-05-15',
    slug: 'ouverture-inscriptions-2025-2026',
    imageUrl: '/images/actualites/inscription.jpg',
    category: 'Admission'
  },
  {
    id: 2,
    title: 'Nouveau laboratoire de recherche',
    excerpt: 'L\'USS inaugure un nouveau laboratoire de recherche équipé des technologies les plus récentes...',
    date: '2025-05-03',
    slug: 'nouveau-laboratoire-recherche',
    imageUrl: '/images/actualites/laboratoire.jpg',
    category: 'Recherche'
  },
  {
    id: 3,
    title: 'Conférence internationale de médecine',
    excerpt: 'L\'USS accueillera la conférence internationale de médecine tropicale du 15 au 18 juin 2025...',
    date: '2025-04-28',
    slug: 'conference-internationale-medecine',
    imageUrl: '/images/actualites/conference.jpg',
    category: 'Événement'
  }
];

export default function HomePage() {
  // Hooks pour les animations de compteurs
  const studentsCount = useCountAnimation({ end: 500, suffix: '+' });
  const programsCount = useCountAnimation({ end: 25, suffix: '+', delay: 300 });
  const employmentRate = useCountAnimation({ end: 95, suffix: '%', delay: 600 });
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-light to-white">
        <div className="container-page grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-dark">
              Bienvenue à l&apos;<span className="text-primary">Université des Sciences de la Santé</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              Une formation d&apos;excellence pour les futurs professionnels de la santé.
              Découvrez nos programmes académiques et rejoignez-nous pour construire votre avenir.
            </p>
            
            {/* Boutons avec espacement amélioré */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/filieres" variant="primary" className="py-3 px-6 text-base">
                <span className="flex items-center">
                  <span>Nos formations</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              <Button href="/a-propos" variant="outline" className="py-3 px-6 text-base">
                En savoir plus
              </Button>
            </div>
            
            {/* Statistiques avec animation */}
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-4 py-6 px-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
              <div ref={studentsCount.ref} className="flex flex-row sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center p-2 transition-all duration-300 hover:transform hover:scale-105">
                <span className="text-sm sm:order-2 sm:mt-1 text-gray-700">Étudiants</span>
                <span className="text-2xl sm:text-3xl md:text-4xl sm:order-1 font-bold text-primary">{studentsCount.displayValue}</span>
              </div>
              
              <div ref={programsCount.ref} className="flex flex-row sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center p-2 sm:border-x border-gray-100 transition-all duration-300 hover:transform hover:scale-105">
                <span className="text-sm sm:order-2 sm:mt-1 text-gray-700">Programmes</span>
                <span className="text-2xl sm:text-3xl md:text-4xl sm:order-1 font-bold text-primary">{programsCount.displayValue}</span>
              </div>
              
              <div ref={employmentRate.ref} className="flex flex-row sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center p-2 transition-all duration-300 hover:transform hover:scale-105">
                <span className="text-sm sm:order-2 sm:mt-1 text-gray-700">Taux d&apos;insertion</span>
                <span className="text-2xl sm:text-3xl md:text-4xl sm:order-1 font-bold text-primary">{employmentRate.displayValue}</span>
              </div>
            </div>
          </div>
          <div className="relative h-60 sm:h-64 md:h-72 lg:h-80">
            <div className="rounded-lg overflow-hidden h-full w-full relative">
              <Image 
                src="/images/replicate-prediction-we0yaf6hrsrmc0cpve0v8ebr1w.jpg" 
                alt="Campus de l'Université des Sciences de la Santé" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title relative inline-block">
              <span className="relative z-10">Nos Formations</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary opacity-20 rounded"></span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mt-4 px-4 sm:px-0 text-base sm:text-lg">
              L&apos;USS propose des formations d&apos;excellence dans divers domaines des sciences de la santé, 
              adaptées aux besoins du secteur médical moderne.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Carte Formation 1 - Médecine Générale */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('/images/formations/medecine generale.jpg')" }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute top-4 left-4 bg-white/90 text-primary font-medium px-3 py-1 rounded-full text-sm">
                  6 ans
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-dark group-hover:text-primary transition-colors">
                  Médecine Générale
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Formation complète pour devenir médecin généraliste avec une approche pratique dès la première année.
                </p>
                <Link 
                  href="/filieres/medecine" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Découvrir le programme
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Carte Formation 2 - Sciences Infirmières */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('/images/formations/soins infirmiere.jpg')" }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute top-4 left-4 bg-white/90 text-primary font-medium px-3 py-1 rounded-full text-sm">
                  3 ans
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-dark group-hover:text-primary transition-colors">
                  Sciences Infirmières
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Devenez infirmier(e) qualifié(e) avec une formation alliant théorie et stages en milieu hospitalier.
                </p>
                <Link 
                  href="/filieres/infirmier" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Découvrir le programme
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Carte Formation 3 - Pharmacie */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('/images/formations/pharmacie.jpg')" }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute top-4 left-4 bg-white/90 text-primary font-medium px-3 py-1 rounded-full text-sm">
                  5 ans
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-dark group-hover:text-primary transition-colors">
                  Pharmacie
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Formation spécialisée en sciences pharmaceutiques avec accès aux laboratoires de recherche modernes.
                </p>
                <Link 
                  href="/filieres/pharmacie" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Découvrir le programme
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button 
              href="/filieres" 
              variant="primary" 
              className="px-6 py-3 font-medium transition-transform hover:scale-105"
            >
              Découvrir toutes nos formations
            </Button>
          </div>
        </div>
      </Section>

      {/* Actualités Section */}
      <Section>
        <h2 className="section-title text-center mb-3">Actualités</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
          Restez informé des derniers événements et annonces de l'université.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-6 sm:mt-10">
          {actualites.map((actualite) => (
            <NewsCard
              key={actualite.id}
              title={actualite.title}
              excerpt={actualite.excerpt}
              date={actualite.date}
              slug={actualite.slug}
              imageUrl={actualite.imageUrl}
              category={actualite.category}
            />
          ))}
        </div>
      </Section>

      {/* Call to Action Section */}
      <CallToAction
        title="Prêt à lancer votre carrière dans la santé ?"
        description="Rejoignez l'USS et bénéficiez d'une formation de qualité qui vous préparera aux défis du secteur de la santé."
        primaryButtonText="Déposer ma candidature"
        primaryButtonHref="/admissions/candidature"
        secondaryButtonText="Nous contacter"
        secondaryButtonHref="/contact"
        background="primary"
      />
    </>
  )
}
