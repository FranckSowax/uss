"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Type pour les candidatures
type Candidature = {
  id: number;
  candidateName: string;
  email: string;
  phone: string;
  formation: string;
  status: string;
  dateSubmission: string;
  documents: string[];
  score?: number;
};

export default function AdminAdmissions() {
  // Données fictives pour les candidatures
  const [candidatures, setCandidatures] = useState<Candidature[]>([
    {
      id: 1,
      candidateName: 'Alice Mbongo',
      email: 'alice.mbongo@email.com',
      phone: '+241 06 12 34 56',
      formation: 'Médecine Générale',
      status: 'en_attente',
      dateSubmission: '2025-06-15',
      documents: ['CV', 'Diplôme', 'Relevé de notes', 'Lettre de motivation'],
      score: 85
    },
    {
      id: 2,
      candidateName: 'Jean-Baptiste Nzé',
      email: 'jb.nze@email.com',
      phone: '+241 07 23 45 67',
      formation: 'Sciences Infirmières',
      status: 'accepte',
      dateSubmission: '2025-06-10',
      documents: ['CV', 'Diplôme', 'Relevé de notes'],
      score: 92
    },
    {
      id: 3,
      candidateName: 'Marie Obame',
      email: 'm.obame@email.com',
      phone: '+241 05 34 56 78',
      formation: 'Pharmacie',
      status: 'refuse',
      dateSubmission: '2025-06-08',
      documents: ['CV', 'Diplôme'],
      score: 65
    },
    {
      id: 4,
      candidateName: 'Paul Ekomy',
      email: 'p.ekomy@email.com',
      phone: '+241 06 45 67 89',
      formation: 'Kinésithérapie',
      status: 'en_attente',
      dateSubmission: '2025-06-20',
      documents: ['CV', 'Diplôme', 'Relevé de notes', 'Lettre de motivation', 'Certificat médical']
    },
    {
      id: 5,
      candidateName: 'Sophie Mintsa',
      email: 's.mintsa@email.com',
      phone: '+241 07 56 78 90',
      formation: 'Santé Publique',
      status: 'en_attente',
      dateSubmission: '2025-06-25',
      documents: ['CV', 'Diplôme', 'Relevé de notes', 'Lettre de motivation'],
      score: 78
    }
  ]);

  // État pour la recherche et le filtrage
  const [searchTerm, setSearchTerm] = useState('');
  const [filterFormation, setFilterFormation] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  
  // Filtrer les candidatures
  const filteredCandidatures = candidatures.filter(candidature => {
    const matchesSearch = candidature.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidature.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFormation = filterFormation === '' || candidature.formation === filterFormation;
    const matchesStatus = filterStatus === '' || candidature.status === filterStatus;
    
    return matchesSearch && matchesFormation && matchesStatus;
  });

  // Fonction pour changer le statut d'une candidature
  const updateStatus = (id: number, newStatus: string) => {
    setCandidatures(candidatures.map(candidature => 
      candidature.id === id 
        ? { ...candidature, status: newStatus } 
        : candidature
    ));
  };

  // Fonction pour supprimer une candidature
  const handleDelete = (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette candidature ?')) {
      setCandidatures(candidatures.filter(candidature => candidature.id !== id));
    }
  };

  // Formations disponibles (extraites des données)
  const formations = Array.from(new Set(candidatures.map(c => c.formation)));
  const statuses = [
    { value: 'en_attente', label: 'En attente' },
    { value: 'accepte', label: 'Accepté' },
    { value: 'refuse', label: 'Refusé' }
  ];

  // Fonction pour obtenir la couleur du statut
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepte': return 'bg-green-100 text-green-800';
      case 'refuse': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Gestion des admissions</h1>
          <p className="text-gray-600">Gérez les candidatures et admissions</p>
        </div>
        <div className="flex space-x-2">
          <Link href="/admin/admissions/export" className="btn btn-secondary py-2 px-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Exporter
          </Link>
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h4.125M8.25 8.25V6.108" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total candidatures</p>
              <p className="text-2xl font-bold text-gray-900">{candidatures.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">En attente</p>
              <p className="text-2xl font-bold text-gray-900">{candidatures.filter(c => c.status === 'en_attente').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Acceptées</p>
              <p className="text-2xl font-bold text-gray-900">{candidatures.filter(c => c.status === 'accepte').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Refusées</p>
              <p className="text-2xl font-bold text-gray-900">{candidatures.filter(c => c.status === 'refuse').length}</p>
            </div>
          </div>
        </div>
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
              placeholder="Rechercher un candidat..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-primary"
              value={filterFormation}
              onChange={(e) => setFilterFormation(e.target.value)}
            >
              <option value="">Toutes les formations</option>
              {formations.map(formation => (
                <option key={formation} value={formation}>{formation}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-primary"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">Tous les statuts</option>
              {statuses.map(status => (
                <option key={status.value} value={status.value}>{status.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Liste des candidatures */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Candidat
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Formation
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date soumission
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
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
              {filteredCandidatures.length > 0 ? (
                filteredCandidatures.map((candidature) => (
                  <tr key={candidature.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-700">
                              {candidature.candidateName.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{candidature.candidateName}</div>
                          <div className="text-sm text-gray-500">{candidature.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {candidature.formation}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {candidature.dateSubmission}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {candidature.score ? `${candidature.score}/100` : 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(candidature.status)}`}>
                        {statuses.find(s => s.value === candidature.status)?.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Link 
                          href={`/admin/admissions/details/${candidature.id}`}
                          className="p-1 text-blue-600 hover:text-blue-900 hover:bg-blue-100 rounded-md"
                          title="Voir détails"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </Link>
                        {candidature.status === 'en_attente' && (
                          <>
                            <button 
                              onClick={() => updateStatus(candidature.id, 'accepte')} 
                              className="p-1 text-green-600 hover:text-green-900 hover:bg-green-100 rounded-md"
                              title="Accepter"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </button>
                            <button 
                              onClick={() => updateStatus(candidature.id, 'refuse')} 
                              className="p-1 text-red-600 hover:text-red-900 hover:bg-red-100 rounded-md"
                              title="Refuser"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </button>
                          </>
                        )}
                        <button 
                          onClick={() => handleDelete(candidature.id)} 
                          className="p-1 text-red-600 hover:text-red-900 hover:bg-red-100 rounded-md"
                          title="Supprimer"
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
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    Aucune candidature trouvée
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
