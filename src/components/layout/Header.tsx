"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Récupère le chemin actuel

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container-page py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            USS
          </div>
          <span className="font-montserrat font-semibold text-xl hidden sm:inline">Université des Sciences de la Santé</span>
          <span className="font-montserrat font-semibold text-xl sm:hidden">USS</span>
        </div>
        
        {/* Navigation desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link 
            href="/" 
            className={`font-medium ${pathname === '/' ? 'text-primary border-b-2 border-primary' : 'text-dark hover:text-primary'}`}
          >
            Accueil
          </Link>
          <Link 
            href="/a-propos" 
            className={`font-medium ${pathname === '/a-propos' ? 'text-primary border-b-2 border-primary' : 'text-dark hover:text-primary'}`}
          >
            À propos
          </Link>
          <Link 
            href="/filieres" 
            className={`font-medium ${pathname === '/filieres' ? 'text-primary border-b-2 border-primary' : 'text-dark hover:text-primary'}`}
          >
            Formations
          </Link>
          <Link 
            href="/admissions" 
            className={`font-medium ${pathname === '/admissions' ? 'text-primary border-b-2 border-primary' : 'text-dark hover:text-primary'}`}
          >
            Admission
          </Link>
          <Link 
            href="/contact" 
            className={`font-medium ${pathname === '/contact' ? 'text-primary border-b-2 border-primary' : 'text-dark hover:text-primary'}`}
          >
            Contact
          </Link>
        </nav>
        
        <div className="md:flex space-x-4 hidden">
          <Link href="/connexion" className="btn btn-outline py-2 px-4">
            Connexion
          </Link>
          <Link href="/admissions/candidature" className="btn btn-primary py-2 px-4">
            Candidature
          </Link>
        </div>
        
        {/* Menu mobile toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-page py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`font-medium py-2 ${pathname === '/' ? 'text-primary' : 'text-dark hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/a-propos" 
                className={`font-medium py-2 ${pathname === '/a-propos' ? 'text-primary' : 'text-dark hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="/filieres" 
                className={`font-medium py-2 ${pathname === '/filieres' ? 'text-primary' : 'text-dark hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Formations
              </Link>
              <Link 
                href="/admissions" 
                className={`font-medium py-2 ${pathname === '/admissions' ? 'text-primary' : 'text-dark hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Admission
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium py-2 ${pathname === '/contact' ? 'text-primary' : 'text-dark hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link 
                  href="/connexion" 
                  className="btn btn-outline py-2 px-4 w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connexion
                </Link>
                <Link 
                  href="/admissions/candidature" 
                  className="btn btn-primary py-2 px-4 w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Candidature
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
