import React from 'react';
import Hero from '@/components/common/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <>
      <Hero 
        title="Contactez-nous"
        subtitle="Nous sommes à votre écoute pour répondre à vos questions et vous accompagner dans vos démarches."
        background="primary"
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Formulaire de contact */}
          <div className="md:col-span-2">
            <h2 className="section-subtitle mb-6">Envoyez-nous un message</h2>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
              
              <div className="mb-4">
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
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 rounded-lg border border-gray-medium focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 rounded-lg border border-gray-medium focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="admission">Admission et candidature</option>
                  <option value="information">Renseignements sur les formations</option>
                  <option value="partnership">Partenariats</option>
                  <option value="other">Autre demande</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-medium focus:ring-primary focus:border-primary"
                  required
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
                  J&apos;accepte que mes données soient traitées pour le traitement de ma demande. Pour en savoir plus sur la gestion de vos données et vos droits, consultez notre <a href="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</a>.
                </label>
              </div>
              
              <Button type="submit" variant="primary" size="large">
                Envoyer le message
              </Button>
            </form>
          </div>
          
          {/* Informations de contact */}
          <div>
            <h2 className="section-subtitle mb-6">Nos coordonnées</h2>
            
            <Card className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Adresse</h3>
              <p className="text-gray-700">
                Campus Universitaire<br />
                BP XXXX Libreville<br />
                Gabon
              </p>
            </Card>
            
            <Card className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> contact@uss-gabon.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Téléphone:</strong> +241 XX XX XX XX
              </p>
              <p className="text-gray-700">
                <strong>Fax:</strong> +241 XX XX XX XX
              </p>
            </Card>
            
            <Card>
              <h3 className="text-lg font-semibold mb-2">Horaires d&apos;ouverture</h3>
              <p className="text-gray-700 mb-1">
                <strong>Lundi - Vendredi:</strong> 8h - 17h
              </p>
              <p className="text-gray-700">
                <strong>Samedi:</strong> 9h - 12h (Service d&apos;admission uniquement)
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Carte et localisation */}
      <Section background="light">
        <h2 className="section-title text-center mb-8">Notre localisation</h2>
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          {/* Ici, vous pourriez intégrer une carte Google Maps ou OpenStreetMap */}
          <div className="bg-gray-200 h-full w-full flex items-center justify-center text-gray-500">
            <p>Carte interactive - Google Maps ou OpenStreetMap à intégrer ici</p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center"
          >
            Ouvrir dans Google Maps
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="section-title text-center mb-10">Questions fréquentes</h2>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-medium">
          <div className="py-5">
            <h3 className="text-xl font-semibold mb-2">Quel est le délai de réponse à mes demandes ?</h3>
            <p className="text-gray-700">
              Nous nous efforçons de répondre à toutes les demandes dans un délai de 48 heures ouvrées. 
              Pendant les périodes d&apos;admission, ce délai peut être légèrement plus long.
            </p>
          </div>
          
          <div className="py-5">
            <h3 className="text-xl font-semibold mb-2">Comment puis-je prendre rendez-vous pour une visite du campus ?</h3>
            <p className="text-gray-700">
              Vous pouvez demander une visite du campus en utilisant notre formulaire de contact ou en appelant 
              directement notre service d&apos;accueil. Les visites sont organisées tous les mardis et jeudis.
            </p>
          </div>
          
          <div className="py-5">
            <h3 className="text-xl font-semibold mb-2">Comment puis-je contacter un professeur spécifique ?</h3>
            <p className="text-gray-700">
              Pour contacter un membre du corps professoral, veuillez adresser votre demande par email 
              en précisant le nom du professeur concerné. Nous transmettrons votre message.
            </p>
          </div>
        </div>
      </Section>

      {/* Appel à l'action */}
      <Section background="primary">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Besoin d&apos;une réponse rapide ?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Notre équipe d&apos;admission est disponible par téléphone pendant les heures d&apos;ouverture 
            pour répondre à vos questions urgentes.
          </p>
          <Button variant="accent" size="large">
            +241 XX XX XX XX
          </Button>
        </div>
      </Section>
    </>
  );
}
