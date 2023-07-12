import { NextAuthProvider } from '@/providers/auth';
import './globals.css';
import { Poppins } from 'next/font/google';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import NotificationProvider from '@/providers/notification';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Trips',
  description: 'Get Your Next Trip',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <NotificationProvider>
            <Header />
            {children}
            <Footer />
          </NotificationProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
