import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/common/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import CallToAction from '@/components/common/CallToAction';
import NewsCard from '@/components/common/NewsCard';

// Données fictives pour les actualités
const actualites = [
  {
    id: 1,
    title: 'Ouverture des inscriptions 2025-2026',
    excerpt: 'Les inscriptions pour l\'année académique 2025-2026 sont désormais ouvertes. Consultez les modalités...',
    date: '2025-05-15',
    slug: 'ouverture-inscriptions-2025-2026',
    imageUrl: '',
    category: 'Admission'
  },
  {
    id: 2,
    title: 'Nouveau laboratoire de recherche',
    excerpt: 'L\'USS inaugure un nouveau laboratoire de recherche équipé des technologies les plus récentes...',
    date: '2025-05-03',
    slug: 'nouveau-laboratoire-recherche',
    imageUrl: '',
    category: 'Recherche'
  },
  {
    id: 3,
    title: 'Conférence internationale de médecine',
    excerpt: 'L\'USS accueillera la conférence internationale de médecine tropicale du 15 au 18 juin 2025...',
    date: '2025-04-28',
    slug: 'conference-internationale-medecine',
    imageUrl: '',
    category: 'Événement'
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-light to-white">
        <div className="container-page grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-dark">
              Bienvenue à l&apos;<span className="text-primary">Université des Sciences de la Santé</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Une formation d&apos;excellence pour les futurs professionnels de la santé.
              Découvrez nos programmes académiques et rejoignez-nous pour construire votre avenir.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/filieres" variant="primary">Nos formations</Button>
              <Button href="/a-propos" variant="outline">En savoir plus</Button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">500+</span>
                <span className="text-sm">Étudiants</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">25+</span>
                <span className="text-sm">Programmes</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">95%</span>
                <span className="text-sm">Taux d&apos;insertion</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative h-72 lg:h-80">
            <div className="rounded-lg overflow-hidden h-full w-full relative">
              <Image 
                src="/images/replicate-prediction-we0yaf6hrsrmc0cpve0v8ebr1w.jpg" 
                alt="Campus de l'Université des Sciences de la Santé" 
                fill
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
        <h2 className="section-title text-center">Nos Formations</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          L&apos;USS propose des formations de qualité dans différents domaines des sciences de la santé.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Carte Formation 1 */}
          <Card variant="primary">
            <h3 className="text-xl font-semibold mb-3">Médecine Générale</h3>
            <p className="text-gray-700 mb-4">
              Formation complète pour devenir médecin généraliste avec une approche pratique dès la première année.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm bg-primary-light bg-opacity-10 text-primary px-3 py-1 rounded-full">
                6 ans
              </span>
              <Link href="/filieres/medecine" className="text-primary font-medium hover:underline">
                Détails →
              </Link>
            </div>
          </Card>

          {/* Carte Formation 2 */}
          <Card variant="primary">
            <h3 className="text-xl font-semibold mb-3">Sciences Infirmières</h3>
            <p className="text-gray-700 mb-4">
              Devenez infirmier(e) qualifié(e) avec une formation alliant théorie et stages en milieu hospitalier.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm bg-primary-light bg-opacity-10 text-primary px-3 py-1 rounded-full">
                3 ans
              </span>
              <Link href="/filieres/infirmier" className="text-primary font-medium hover:underline">
                Détails →
              </Link>
            </div>
          </Card>

          {/* Carte Formation 3 */}
          <Card variant="primary">
            <h3 className="text-xl font-semibold mb-3">Pharmacie</h3>
            <p className="text-gray-700 mb-4">
              Formation spécialisée en sciences pharmaceutiques avec accès aux laboratoires de recherche modernes.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm bg-primary-light bg-opacity-10 text-primary px-3 py-1 rounded-full">
                5 ans
              </span>
              <Link href="/filieres/pharmacie" className="text-primary font-medium hover:underline">
                Détails →
              </Link>
            </div>
          </Card>
        </div>

        <div className="mt-10 text-center">
          <Button href="/filieres" variant="primary">Toutes nos formations</Button>
        </div>
      </Section>

      {/* Actualités Section */}
      <Section>
        <h2 className="section-title text-center">Actualités</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
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
