"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Types pour le contenu
type ContentPage = {
  id: number;
  title: string;
  slug: string;
  lastUpdated: string;
  section: string;
  status: string;
  updatedBy: string;
};

export default function AdminContenu() {
  // Données fictives pour les pages de contenu
  const [pages, setPages] = useState<ContentPage[]>([
    {
      id: 1,
      title: 'Page d\'accueil',
      slug: 'home',
      lastUpdated: '2025-06-25',
      section: 'Principale',
      status: 'publié',
      updatedBy: 'Admin Système'
    },
    {
      id: 2,
      title: 'À propos de l\'USS',
      slug: 'a-propos',
      lastUpdated: '2025-06-20',
      section: 'Principale',
      status: 'publié',
      updatedBy: 'Dr. Jean Dupont'
    },
    {
      id: 3,
      title: 'Notre histoire',
      slug: 'histoire',
      lastUpdated: '2025-06-15',
      section: 'À propos',
      status: 'publié',
      updatedBy: 'Marie Leclerc'
    },
    {
      id: 4,
      title: 'Équipe dirigeante',
      slug: 'equipe',
      lastUpdated: '2025-06-18',
      section: 'À propos',
      status: 'publié',
      updatedBy: 'Admin Système'
    },
    {
      id: 5,
      title: 'Politique de confidentialité',
      slug: 'confidentialite',
      lastUpdated: '2025-06-10',
      section: 'Légal',
      status: 'publié',
      updatedBy: 'Admin Système'
    },
    {
      id: 6,
      title: 'Conditions d\'utilisation',
      slug: 'conditions-utilisation',
      lastUpdated: '2025-06-10',
      section: 'Légal',
      status: 'publié',
      updatedBy: 'Admin Système'
    },
    {
      id: 7,
      title: 'Partenaires internationaux',
      slug: 'partenaires',
      lastUpdated: '2025-06-22',
      section: 'À propos',
      status: 'brouillon',
      updatedBy: 'Dr. Jean Dupont'
    }
  ]);

  // État pour la recherche et le filtrage
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSection, setFilterSection] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  
  // Filtrer les pages en fonction des critères
  const filteredPages = pages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         page.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSection = filterSection === '' || page.section === filterSection;
    const matchesStatus = filterStatus === '' || page.status === filterStatus;
    
    return matchesSearch && matchesSection && matchesStatus;
  });

  // Fonction pour supprimer une page
  const handleDelete = (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette page ?')) {
      setPages(pages.filter(page => page.id !== id));
    }
  };

  // Fonction pour changer le statut d'une page
  const toggleStatus = (id: number) => {
    setPages(pages.map(page => 
      page.id === id 
        ? { ...page, status: page.status === 'publié' ? 'brouillon' : 'publié' } 
        : page
    ));
  };

  // Sections disponibles (extraites des données)
  const sections = Array.from(new Set(pages.map(page => page.section)));
  const statuses = ['publié', 'brouillon'];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Gestion du contenu</h1>
          <p className="text-gray-600">Gérez les pages et le contenu du site</p>
        </div>
        <Link href="/admin/contenu/ajouter" className="btn btn-primary py-2 px-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Ajouter une page
        </Link>
      </div>

      {/* Filtres et recherche */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="search" 
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary" 
              placeholder="Rechercher une page..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-primary"
              value={filterSection}
              onChange={(e) => setFilterSection(e.target.value)}
            >
              <option value="">Toutes les sections</option>
              {sections.map(section => (
                <option key={section} value={section}>{section}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-primary"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">Tous les statuts</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Liste des pages */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Titre
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Section
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dernière mise à jour
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPages.length > 0 ? (
                filteredPages.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">{page.title}</div>
                      </div>
                      <div className="text-xs text-gray-500">/{page.slug}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {page.section}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{page.lastUpdated}</div>
                      <div className="text-xs text-gray-500">par {page.updatedBy}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span 
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          page.status === 'publié' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {page.status.charAt(0).toUpperCase() + page.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Link 
                          href={`/${page.slug}`}
                          target="_blank"
                          className="p-1 text-blue-600 hover:text-blue-900 hover:bg-blue-100 rounded-md"
                          title="Voir"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </Link>
                        <button 
                          onClick={() => toggleStatus(page.id)} 
                          className={`p-1 rounded-md ${
                            page.status === 'publié' 
                              ? 'text-yellow-600 hover:text-yellow-900 hover:bg-yellow-100' 
                              : 'text-green-600 hover:text-green-900 hover:bg-green-100'
                          }`}
                          title={page.status === 'publié' ? "Dépublier" : "Publier"}
                        >
                          {page.status === 'publié' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          )}
                        </button>
                        <Link 
                          href={`/admin/contenu/modifier/${page.id}`}
                          className="p-1 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-100 rounded-md"
                          title="Modifier"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21h-9.5A2.25 2.25 0 014 18.75V8.25A2.25 2.25 0 016.25 6H8" />
                          </svg>
                        </Link>
                        <button 
                          onClick={() => handleDelete(page.id)} 
                          className={`p-1 text-red-600 hover:text-red-900 hover:bg-red-100 rounded-md ${page.slug === 'home' ? 'opacity-30 cursor-not-allowed' : ''}`}
                          title="Supprimer"
                          disabled={page.slug === 'home'}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                    Aucune page trouvée
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
