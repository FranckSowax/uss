import { createClient } from '@supabase/supabase-js';

// Ces variables d'environnement doivent être définies dans le fichier .env.local
// En utilisant des valeurs par défaut pour le développement local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Création du client Supabase pour une utilisation côté client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Vérifie si nous sommes côté client
const isClient = typeof window !== 'undefined';

// Exporte la vérification de l'environnement client
export const isClientSide = isClient;

// Fonction pour vérifier rapidement si un utilisateur est connecté
export const isUserLoggedIn = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    return !!user;
  } catch (error) {
    console.error('Error checking user login status:', error);
    return false;
  }
};

// Fonction utilitaire pour récupérer l'utilisateur actuel avec son profil
export const getCurrentUser = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) return null;
    
    // Récupérer les informations de profil
    try {
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single();
        
      return {
        ...user,
        profile
      };
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return user;
    }
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// Fonctions d'authentification
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
};

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const resetPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });
  
  if (error) throw error;
};

export default supabase;
