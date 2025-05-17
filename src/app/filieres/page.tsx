import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Données fictives pour les formations
const formations = [
  {
    id: 'medecine',
    titre: 'Médecine générale',
    description: 'Formation complète pour devenir médecin généraliste avec une approche pratique dès la première année.',
    duree: '6 ans',
    image: '/images/formations/medecine generale.jpg',
    niveau: 'Doctorat',
    domaine: 'Médecine'
  },
  {
    id: 'infirmier',
    titre: 'Sciences infirmières',
    description: 'Devenez infirmier(e) qualifié(e) avec une formation alliant théorie et stages en milieu hospitalier.',
    duree: '3 ans',
    image: '/images/formations/soins infirmiere.jpg',
    niveau: 'Licence',
    domaine: 'Soins infirmiers'
  },
  {
    id: 'pharmacie',
    titre: 'Pharmacie',
    description: 'Formation spécialisée en sciences pharmaceutiques avec accès aux laboratoires de recherche modernes.',
    duree: '5 ans',
    image: '/images/formations/pharmacie.jpg',
    niveau: 'Doctorat',
    domaine: 'Pharmacie'
  },
  {
    id: 'sage-femme',
    titre: 'Sage-femme',
    description: 'Formation professionnelle pour l\'accompagnement des femmes pendant la grossesse, l\'accouchement et le suivi post-natal.',
    duree: '4 ans',
    image: '/images/formations/sage femme .jpg',
    niveau: 'Master',
    domaine: 'Soins obstétriques'
  },
  {
    id: 'kinesitherapie',
    titre: 'Kinésithérapie',
    description: 'Formez-vous aux techniques de rééducation et réadaptation fonctionnelle à travers une approche théorique et pratique.',
    duree: '4 ans',
    image: '/images/formations/kinesitherapie.jpg',
    niveau: 'Master',
    domaine: 'Rééducation'
  },
  {
    id: 'biologie-medicale',
    titre: 'Biologie médicale',
    description: 'Spécialisez-vous dans les analyses biologiques et les techniques de laboratoire médical.',
    duree: '3 ans',
    image: '/images/formations/biologie medicale.jpg',
    niveau: 'Licence',
    domaine: 'Analyses et laboratoire'
  },
  {
    id: 'dentaire',
    titre: 'Sciences dentaires',
    description: 'Devenez dentiste avec une formation complète en soins, prévention et chirurgie bucco-dentaire.',
    duree: '5 ans',
    image: '/images/formations/science dentaire .jpg',
    niveau: 'Doctorat',
    domaine: 'Dentisterie'
  },
  {
    id: 'sante-publique',
    titre: 'Santé publique',
    description: 'Formation interdisciplinaire préparant aux enjeux de santé collective, prévention et politiques sanitaires.',
    duree: '2 ans',
    image: '/images/formations/santé publique.jpg',
    niveau: 'Master',
    domaine: 'Santé publique'
  },
  {
    id: 'nutrition',
    titre: 'Nutrition et diététique',
    description: 'Devenez expert en alimentation et nutrition avec une formation alliant sciences et pratique clinique.',
    duree: '3 ans',
    image: '/images/formations/nutrition.jpg',
    niveau: 'Licence',
    domaine: 'Nutrition'
  }
];

// Domaines pour les filtres
const domaines = ['Tous', 'Médecine', 'Soins infirmiers', 'Pharmacie', 'Soins obstétriques', 'Rééducation', 'Analyses et laboratoire', 'Dentisterie', 'Santé publique', 'Nutrition'];

// Niveaux d'études pour les filtres
const niveaux = ['Tous', 'Licence', 'Master', 'Doctorat'];

export default function FilieresPage() {
  return (
    <div className="bg-light">
      {/* Hero section */}
      <section className="bg-primary text-white py-16">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos formations</h1>
            <p className="text-lg">
              L'USS propose un large éventail de formations dans le domaine des sciences de la santé, 
              dispensées par des professionnels reconnus et soutenus par des infrastructures modernes.
            </p>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label htmlFor="domaine-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Domaine
                </label>
                <select 
                  id="domaine-filter" 
                  className="rounded-lg border border-gray-300 py-2 px-4 w-full"
                >
                  {domaines.map((domaine) => (
                    <option key={domaine} value={domaine.toLowerCase()}>
                      {domaine}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="niveau-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Niveau d'études
                </label>
                <select 
                  id="niveau-filter" 
                  className="rounded-lg border border-gray-300 py-2 px-4 w-full"
                >
                  {niveaux.map((niveau) => (
                    <option key={niveau} value={niveau.toLowerCase()}>
                      {niveau}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="duree-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Durée
                </label>
                <select 
                  id="duree-filter" 
                  className="rounded-lg border border-gray-300 py-2 px-4 w-full"
                >
                  <option value="tous">Toutes les durées</option>
                  <option value="1-2">1-2 ans</option>
                  <option value="3-4">3-4 ans</option>
                  <option value="5+">5 ans et plus</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Recherche
              </label>
              <input 
                type="text" 
                id="search" 
                placeholder="Rechercher une formation..." 
                className="rounded-lg border border-gray-300 py-2 px-4 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Liste des formations */}
      <section className="py-12">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation) => (
              <div key={formation.id} className="card card-accent-primary h-full flex flex-col">
                {/* Image de la formation */}
                <div className="relative w-full rounded-t-lg overflow-hidden aspect-[16/9]">
                  <Image 
                    src={formation.image}
                    alt={`Formation en ${formation.titre}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{formation.titre}</h3>
                  <p className="text-gray-700 mb-4">
                    {formation.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm bg-primary-light bg-opacity-10 text-primary px-3 py-1 rounded-full">
                      {formation.duree}
                    </span>
                    <span className="text-sm bg-primary-light bg-opacity-10 text-primary px-3 py-1 rounded-full">
                      {formation.niveau}
                    </span>
                    <span className="text-sm bg-primary-light bg-opacity-10 text-primary px-3 py-1 rounded-full">
                      {formation.domaine}
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-6 mt-auto">
                  <Link 
                    href={`/filieres/${formation.id}`} 
                    className="text-primary font-medium hover:underline flex items-center"
                  >
                    Détails de la formation
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme d'échange */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-subtitle mb-4">Programmes d'échange internationaux</h2>
              <p className="text-gray-700 mb-4">
                L'USS a développé des partenariats avec des universités prestigieuses à travers le monde, 
                offrant aux étudiants la possibilité de participer à des programmes d'échange pour enrichir 
                leur formation académique.
              </p>
              <p className="text-gray-700 mb-6">
                Ces collaborations permettent aux étudiants d'acquérir une expérience internationale, 
                de découvrir différentes approches dans le domaine de la santé, et de développer 
                un réseau professionnel global.
              </p>
              <Link 
                href="/international" 
                className="btn btn-primary"
              >
                Découvrir nos programmes internationaux
              </Link>
            </div>
            {/* Placeholder pour une image */}
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <div className="text-gray-400">Image: Étudiants internationaux</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container-page">
          <h2 className="section-title text-center mb-12">Questions fréquentes</h2>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-medium">
            <div className="py-5">
              <h3 className="text-xl font-semibold mb-2">Comment choisir ma formation ?</h3>
              <p className="text-gray-700">
                Nous vous recommandons de choisir en fonction de vos centres d'intérêt, 
                compétences et aspirations professionnelles. Nos conseillers d'orientation 
                sont disponibles pour vous aider dans votre choix.
              </p>
            </div>
            
            <div className="py-5">
              <h3 className="text-xl font-semibold mb-2">Quels sont les critères d'admission ?</h3>
              <p className="text-gray-700">
                Les critères d'admission varient selon les formations, mais incluent généralement 
                un niveau académique minimum, une lettre de motivation et parfois un entretien. 
                Consultez les pages spécifiques des formations pour plus de détails.
              </p>
            </div>
            
            <div className="py-5">
              <h3 className="text-xl font-semibold mb-2">Les formations sont-elles reconnues à l'international ?</h3>
              <p className="text-gray-700">
                Oui, nos programmes sont accrédités par des organismes nationaux et internationaux, 
                garantissant la reconnaissance de nos diplômes à l'étranger et l'accès à des 
                opportunités professionnelles internationales.
              </p>
            </div>
            
            <div className="py-5">
              <h3 className="text-xl font-semibold mb-2">Existe-t-il des bourses d'études ?</h3>
              <p className="text-gray-700">
                L'USS propose plusieurs programmes de bourses basés sur le mérite académique 
                et les besoins financiers. Des aides gouvernementales et des partenariats avec 
                des entreprises offrent également des possibilités de financement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à lancer votre carrière dans la santé ?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Rejoignez l'USS et bénéficiez d'une formation de qualité qui vous préparera 
            aux défis du secteur de la santé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/admissions/candidature" 
              className="btn bg-accent text-dark hover:bg-opacity-90"
            >
              Déposer ma candidature
            </Link>
            <Link 
              href="/contact" 
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Contacter un conseiller
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
