import { Space_Grotesk } from 'next/font/google';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import GeometricMeshLoader from '@/components/background/GeometricMeshLoader';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: {
    default: 'nijae.dev',
    template: '%s | nijae.dev',
  },
  description: 'Portfolio of Nijae Ray King — Software Engineer building fast, reliable solutions.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans">
        <GeometricMeshLoader />
        <div className="relative z-10 flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
