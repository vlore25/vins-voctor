import Link from 'next/link'; // Assurez-vous d'importer vos styles globaux si vous en avez (ex: Mantine css si possible, sinon du CSS simple)
// Note: Importer Mantine ici est complexe sans le Provider. Pour une 404 globale, on fait souvent du HTML/CSS simple.

export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body>
        <div style={{ 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#f8f9fa',
          fontFamily: 'sans-serif',
          color: '#333'
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#c44f43' }}>404</h1>
          <h2 style={{ marginBottom: '1.5rem' }}>Page introuvable</h2>
          <p style={{ marginBottom: '2rem', maxWidth: '500px', textAlign: 'center' }}>
            La page que vous recherchez n&apos;existe pas. Il est possible que l&apos;adresse soit incorrecte.
          </p>
          
          <Link 
            href="/" 
            style={{ 
              padding: '10px 20px', 
              backgroundColor: 'black', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </body>
    </html>
  );
}