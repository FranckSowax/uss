import React from 'react';
import Hero from '@/components/common/Hero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function AdmissionsPage() {
  return (
    <>
      <Hero
        title="Admissions"
        subtitle="Découvrez nos procédures d'admission et rejoignez l'USS pour une formation d'excellence"
        background="primary"
      />
      
      {/* Section d'introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="section-title mb-4">Processus d'admission</h2>
          <p className="text-lg text-gray-700">
            L'admission à l'Université des Sciences de la Santé (USS) est un processus sélectif 
            visant à identifier les candidats ayant le potentiel de réussir dans nos programmes de formation 
            et de contribuer au domaine de la santé. Nous recherchons des étudiants motivés, passionnés 
            et déterminés à faire une différence dans le secteur de la santé.            
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Étape 1 */}
          <Card className="text-center">
            <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Pré-inscription</h3>
            <p className="text-gray-700">
              Remplissez le formulaire de pré-inscription en ligne et soumettez les documents requis avant la date limite.
            </p>
          </Card>
          
          {/* Étape 2 */}
          <Card className="text-center">
            <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Sélection</h3>
            <p className="text-gray-700">
              Votre dossier sera examiné par notre comité d'admission. Les candidats pré-sélectionnés seront invités à passer des tests et entretiens.
            </p>
          </Card>
          
          {/* Étape 3 */}
          <Card className="text-center">
            <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Inscription finale</h3>
            <p className="text-gray-700">
              Les candidats retenus seront notifiés et devront finaliser leur inscription en payant les frais d'inscription et en fournissant les documents originaux.
            </p>
          </Card>
        </div>
        
        <div className="text-center">
          <Button variant="primary" size="large" href="#apply">
            Commencer ma candidature
          </Button>
        </div>
      </Section>
      
      {/* Section Critères d'éligibilité */}
      <Section background="light">
        <h2 className="section-title text-center mb-8">Critères d'éligibilité</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Conditions générales</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Détenir un baccalauréat scientifique (Séries C, D ou leur équivalent) avec mention</li>
              <li>Avoir au maximum 23 ans pour les programmes de premier cycle</li>
              <li>Avoir obtenu d'excellentes notes dans les matières scientifiques (mathématiques, physique, chimie et biologie)</li>
              <li>Faire preuve d'une bonne maîtrise du français et des connaissances en anglais</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Pour les candidats gabonais</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Diplôme de baccalauréat national ou équivalent</li>
                <li>Participation aux tests de sélection organisés par l'université</li>
                <li>Entretien de motivation avec le comité d'admission</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Pour les candidats internationaux</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Diplômes et relevés de notes traduits en français</li>
                <li>Attestation de comparabilité des diplômes (ENIC-NARIC)</li>
                <li>Preuve de maîtrise du français (niveau B2 minimum)</li>
                <li>Entretien à distance possible pour les candidats à l'étranger</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Section Documents requis */}
      <Section>
        <h2 className="section-title text-center mb-8">Documents requis</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Pour la pré-inscription
            </h3>
            
            <ul className="space-y-4">
              <li className="flex">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Formulaire de pré-inscription en ligne dûment rempli
              </li>
              <li className="flex">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Copie du baccalauréat ou attestation de réussite
              </li>
              <li className="flex">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Relevés de notes des deux dernières années de lycée
              </li>
              <li className="flex">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Copie de la carte d'identité ou du passeport
              </li>
              <li className="flex">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Photo d'identité récente (format numérique)
              </li>
              <li className="flex">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Lettre de motivation
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Pour l'inscription finale
            </h3>
            
            <ul className="space-y-4">
              <li className="flex">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Originaux de tous les documents fournis lors de la pré-inscription
              </li>
              <li className="flex">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Certificat médical d'aptitude physique
              </li>
              <li className="flex">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Carnet de vaccination à jour
              </li>
              <li className="flex">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Reçu de paiement des frais d'inscription
              </li>
              <li className="flex">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Attestation d'assurance responsabilité civile
              </li>
              <li className="flex">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Quatre photos d'identité récentes
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Section Calendrier des admissions */}
      <Section background="light">
        <h2 className="section-title text-center mb-10">Calendrier des admissions</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-x-auto rounded-lg shadow">
            <table className="w-full text-left">
              <thead className="text-white bg-primary">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">Étape</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Date de début</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Date de fin</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium">Ouverture des pré-inscriptions</td>
                  <td className="px-6 py-4">15 janvier 2026</td>
                  <td className="px-6 py-4">-</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-6 py-4 font-medium">Date limite de dépôt des dossiers</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">31 mai 2026</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium">Tests d'admission</td>
                  <td className="px-6 py-4">15 juin 2026</td>
                  <td className="px-6 py-4">25 juin 2026</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-6 py-4 font-medium">Entretiens</td>
                  <td className="px-6 py-4">1 juillet 2026</td>
                  <td className="px-6 py-4">10 juillet 2026</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium">Publication des résultats</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">20 juillet 2026</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-6 py-4 font-medium">Période d'inscription</td>
                  <td className="px-6 py-4">25 juillet 2026</td>
                  <td className="px-6 py-4">31 août 2026</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium">Rentrée universitaire</td>
                  <td className="px-6 py-4">15 septembre 2026</td>
                  <td className="px-6 py-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-white p-4 rounded-lg border border-gray-medium">
            <p className="text-sm italic">
              <strong>Note :</strong> Les dates sont susceptibles d'être modifiées. Veuillez consulter régulièrement cette page 
              pour vous tenir informé des éventuels changements.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Section Formulaire de candidature */}
      <Section id="apply">
        <h2 className="section-title text-center mb-8">Commencer ma candidature</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="mb-6 p-4 bg-primary/10 rounded-lg">
            <p className="text-primary">
              <strong>Information :</strong> Le formulaire ci-dessous vous permet de débuter votre processus de candidature. 
              Après soumission, vous recevrez un email avec les instructions pour compléter votre dossier.
            </p>
          </div>
          
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 rounded-lg border border-gray-medium focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 rounded-lg border border-gray-medium focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-medium focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 rounded-lg border border-gray-medium focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Date de naissance <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  className="w-full px-4 py-2 rounded-lg border border-gray-medium focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">
                  Nationalité <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  className="w-full px-4 py-2 rounded-lg border border-gray-medium focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                Programme d'études souhaité <span className="text-red-500">*</span>
              </label>
              <select
                id="program"
                name="program"
                className="w-full px-4 py-2 rounded-lg border border-gray-medium focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Sélectionnez un programme</option>
                <option value="medicine">Médecine</option>
                <option value="pharmacy">Pharmacie</option>
                <option value="dentistry">Odontologie</option>
                <option value="nursing">Sciences Infirmières</option>
                <option value="physio">Kinésithérapie</option>
                <option value="lab">Technologie de Laboratoire</option>
                <option value="nutrition">Nutrition et Diététique</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">
                Diplôme obtenu ou en cours <span className="text-red-500">*</span>
              </label>
              <select
                id="degree"
                name="degree"
                className="w-full px-4 py-2 rounded-lg border border-gray-medium focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Sélectionnez votre diplôme</option>
                <option value="bac">Baccalauréat</option>
                <option value="bac+1">Bac+1</option>
                <option value="bac+2">Bac+2</option>
                <option value="bac+3">Bac+3</option>
                <option value="bac+4">Bac+4</option>
                <option value="bac+5">Bac+5 ou plus</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message ou informations complémentaires
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-medium focus:ring-primary focus:border-primary"
              ></textarea>
            </div>
            
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                className="h-4 w-4 text-primary border-gray-medium rounded"
                required
              />
              <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                J'accepte que mes données personnelles soient traitées conformément à la 
                <a href="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</a> de l'USS.
              </label>
            </div>
            
            <div className="text-center">
              <Button type="submit" variant="primary" size="large">
                Soumettre ma candidature
              </Button>
            </div>
          </form>
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section background="primary">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Des questions sur le processus d'admission ?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Notre équipe d'admission est disponible pour répondre à toutes vos questions et vous accompagner 
            dans votre démarche de candidature à l'USS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="accent" size="large" href="/contact">
              Nous contacter
            </Button>
            <Button variant="outline" size="large" href="/faq">
              Consulter la FAQ
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
