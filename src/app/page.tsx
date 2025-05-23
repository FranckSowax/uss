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

      {/* Section Vie étudiante */}
      <Section background="light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title relative inline-block">
              <span className="relative z-10">Vie étudiante</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent opacity-20 rounded"></span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mt-4 px-4 sm:px-0 text-base sm:text-lg">
              Découvrez une expérience campus enrichissante au-delà des salles de cours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Colonne gauche avec image */}
            <div className="relative rounded-xl overflow-hidden h-full min-h-[300px] md:min-h-[400px] shadow-lg">
              <div className="absolute inset-0 bg-cover bg-center" 
                style={{ 
                  backgroundImage: "url('/images/vieetudiante.webp')"
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Une communauté dynamique</h3>
                  <p className="text-white/90 text-sm">
                    Rejoignez une communauté vibrante d’étudiants passionnés par les sciences de la santé.  
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne droite avec les activités */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Carte Associations étudiantes */}
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex items-start mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors">Associations étudiantes</h4>
                      <p className="text-gray-600 text-sm mt-1">Plus de 15 associations actives sur le campus.</p>
                    </div>
                  </div>
                </div>

                {/* Carte Installations sportives */}
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex items-start mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors">Installations sportives</h4>
                      <p className="text-gray-600 text-sm mt-1">Accès à une salle de sport et terrain multisport.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Carte Événements culturels */}
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex items-start mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors">Événements culturels</h4>
                      <p className="text-gray-600 text-sm mt-1">Conférences, expositions et événements annuels.</p>
                    </div>
                  </div>
                </div>

                {/* Carte Logement étudiant */}
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex items-start mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors">Logement étudiant</h4>
                      <p className="text-gray-600 text-sm mt-1">Résidences universitaires à proximité du campus.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <Link 
                  href="/vie-etudiante" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Découvrir toute la vie étudiante
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Partenariats et collaborations */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title relative inline-block">
              <span className="relative z-10">Partenariats et collaborations</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary opacity-20 rounded"></span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mt-4 px-4 sm:px-0 text-base sm:text-lg">
              L'USS collabore avec les meilleures institutions du secteur de la santé pour offrir des opportunités uniques à ses étudiants.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Partie supérieure avec image et texte */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative min-h-[250px] md:min-h-[300px]">
                <div className="absolute inset-0 bg-cover bg-center" 
                  style={{ 
                    backgroundImage: "url('/images/partena.webp')" 
                  }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r md:from-primary/70 from-primary/90 md:to-transparent to-primary/30 flex items-center p-4 sm:p-6 md:p-8 text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Un réseau étendu</h3>
                    <p className="max-w-md text-white/90">
                      Nos partenariats stratégiques avec des hôpitaux, laboratoires et entreprises pharmaceutiques ouvrent des portes aux étudiants pour des stages, des projets de recherche et des opportunités d'emploi.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4 text-dark">Nos principaux partenaires</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">Hôpitaux universitaires</h4>
                      <p className="text-sm text-gray-600">Collaboration étroite pour la formation clinique</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">Laboratoires de recherche</h4>
                      <p className="text-sm text-gray-600">Projets innovants en sciences médicales</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">Entreprises pharmaceutiques</h4>
                      <p className="text-sm text-gray-600">Opportunités de stages et d'emploi post-diplôme</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partie inférieure avec logos des partenaires */}
            <div className="border-t border-gray-100 p-6 md:p-8">
              <h4 className="text-center text-base font-semibold text-primary mb-8 relative inline-flex mx-auto after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-primary/30 after:rounded-full">
                ILS NOUS FONT CONFIANCE
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
                <div className="bg-white shadow-sm hover:shadow rounded-xl border border-gray-100 p-3 h-24 flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <div className="text-gray-700 font-medium text-center text-sm">Partenaire 1</div>
                </div>
                <div className="bg-white shadow-sm hover:shadow rounded-xl border border-gray-100 p-3 h-24 flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <div className="text-gray-700 font-medium text-center text-sm">Partenaire 2</div>
                </div>
                <div className="bg-white shadow-sm hover:shadow rounded-xl border border-gray-100 p-3 h-24 flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <div className="text-gray-700 font-medium text-center text-sm">Partenaire 3</div>
                </div>
                <div className="bg-white shadow-sm hover:shadow rounded-xl border border-gray-100 p-3 h-24 flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <div className="text-gray-700 font-medium text-center text-sm">Partenaire 4</div>
                </div>
                <div className="bg-white shadow-sm hover:shadow rounded-xl border border-gray-100 p-3 h-24 flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <div className="text-gray-700 font-medium text-center text-sm">Partenaire 5</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <Link 
              href="/partenariats" 
              className="inline-flex items-center bg-white px-5 py-2.5 rounded-full shadow-sm text-primary font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Tous nos partenariats
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
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
