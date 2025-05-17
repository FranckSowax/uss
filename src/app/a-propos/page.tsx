import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-light">
      {/* Hero section */}
      <section className="bg-primary text-white py-16">
        <div className="container-page">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de l&apos;USS</h1>
          <p className="text-lg max-w-3xl">
            L&apos;Université des Sciences de la Santé (USS) est une institution d&apos;excellence 
            dédiée à la formation des professionnels de santé au Gabon et en Afrique Centrale.
          </p>
        </div>
      </section>

      {/* Mission et vision */}
      <section className="py-16">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card card-accent-primary h-full">
              <h2 className="section-subtitle">Notre mission</h2>
              <p className="text-gray-700 mb-4">
                Former des professionnels de santé compétents, éthiques et adaptables, 
                capables de répondre aux besoins sanitaires locaux et internationaux à travers 
                une éducation de qualité, la recherche et l&apos;innovation.
              </p>
              <p className="text-gray-700">
                Nous nous engageons à développer des programmes académiques qui combinent 
                l&apos;excellence théorique, la pratique clinique et la recherche scientifique, tout 
                en maintenant notre engagement envers l&apos;accessibilité et l&apos;inclusion.
              </p>
            </div>

            <div className="card card-accent-accent h-full">
              <h2 className="section-subtitle">Notre vision</h2>
              <p className="text-gray-700 mb-4">
                Être reconnue comme l&apos;institution de référence dans la formation en sciences 
                de la santé en Afrique Centrale, en combinant tradition académique et 
                innovation pédagogique.
              </p>
              <p className="text-gray-700">
                Nous aspirons à créer un environnement où l&apos;excellence académique, la 
                recherche de pointe et l&apos;engagement communautaire convergent pour former 
                les leaders de demain dans le domaine de la santé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire timeline */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <h2 className="section-title text-center mb-12">Notre histoire</h2>
          
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>
            
            {/* Événement 1 */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary rounded-full text-white font-bold h-12 w-32 flex items-center justify-center z-10">
                  2010
                </div>
              </div>
              <div className="card max-w-xl mx-auto">
                <h3 className="text-xl font-semibold mb-2">Fondation de l&apos;USS</h3>
                <p className="text-gray-700">
                  Création de l&apos;université suite à une initiative gouvernementale visant à 
                  développer la formation médicale au Gabon. Lancement des premiers 
                  programmes en médecine et sciences infirmières.
                </p>
              </div>
            </div>
            
            {/* Événement 2 */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary rounded-full text-white font-bold h-12 w-32 flex items-center justify-center z-10">
                  2015
                </div>
              </div>
              <div className="card max-w-xl mx-auto">
                <h3 className="text-xl font-semibold mb-2">Expansion des programmes</h3>
                <p className="text-gray-700">
                  Ajout de nouveaux programmes incluant la pharmacie, la dentisterie et les 
                  sciences biomédicales. Construction de nouveaux laboratoires et modernisation 
                  des infrastructures.
                </p>
              </div>
            </div>
            
            {/* Événement 3 */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary rounded-full text-white font-bold h-12 w-32 flex items-center justify-center z-10">
                  2019
                </div>
              </div>
              <div className="card max-w-xl mx-auto">
                <h3 className="text-xl font-semibold mb-2">Accréditations internationales</h3>
                <p className="text-gray-700">
                  Obtention des accréditations internationales pour les programmes de médecine 
                  et pharmacie. Début des partenariats avec des universités étrangères et des 
                  programmes d&apos;échange.
                </p>
              </div>
            </div>
            
            {/* Événement 4 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary rounded-full text-white font-bold h-12 w-32 flex items-center justify-center z-10">
                  2023
                </div>
              </div>
              <div className="card max-w-xl mx-auto">
                <h3 className="text-xl font-semibold mb-2">Centre d&apos;excellence régional</h3>
                <p className="text-gray-700">
                  Reconnaissance comme centre d&apos;excellence pour la recherche en santé tropicale 
                  par l&apos;OMS. Lancement du programme de doctorat en sciences médicales et 
                  création du centre de recherche biomédicale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe dirigeante */}
      <section className="py-16">
        <div className="container-page">
          <h2 className="section-title text-center mb-12">Notre équipe dirigeante</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Membre 1 */}
            <div className="card text-center">
              <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                {/* Placeholder pour photo - à remplacer par une image réelle */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <h3 className="text-xl font-semibold">Dr. Jean Ndong</h3>
              <p className="text-primary font-medium">Recteur</p>
              <p className="text-gray-700 mt-3">
                Professeur en médecine avec plus de 25 ans d&apos;expérience. Spécialiste en 
                santé publique et politique sanitaire.
              </p>
            </div>
            
            {/* Membre 2 */}
            <div className="card text-center">
              <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <h3 className="text-xl font-semibold">Dr. Marie Obame</h3>
              <p className="text-primary font-medium">Vice-recteur académique</p>
              <p className="text-gray-700 mt-3">
                Professeur en sciences pharmaceutiques et ancienne directrice de recherche 
                au CNRS. Experte en développement de programmes.
              </p>
            </div>
            
            {/* Membre 3 */}
            <div className="card text-center">
              <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <h3 className="text-xl font-semibold">Dr. Robert Mengue</h3>
              <p className="text-primary font-medium">Directeur de la recherche</p>
              <p className="text-gray-700 mt-3">
                Chercheur renommé en maladies infectieuses avec plus de 50 publications 
                internationales. Titulaire de nombreuses distinctions scientifiques.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partenariats */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <h2 className="section-title text-center mb-12">Nos partenariats</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logos des partenaires - à remplacer par de vraies images */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-light rounded-lg h-24 flex items-center justify-center">
                <div className="text-gray-400">Logo Partenaire {item}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 max-w-3xl mx-auto">
              L&apos;USS collabore avec des institutions médicales et académiques de premier plan 
              à travers le monde pour offrir des opportunités d&apos;échange, des programmes de 
              recherche conjoints et des formations spécialisées.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez l&apos;USS</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Découvrez nos programmes académiques et devenez un professionnel de la santé 
            hautement qualifié avec une formation d&apos;excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/filieres" className="btn bg-white text-primary hover:bg-gray-100">
              Nos formations
            </a>
            <a href="/admissions" className="btn bg-accent text-dark hover:bg-opacity-90">
              Candidature
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
