import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CRM4ALL',
  description: 'Crm the way it should be',
};
import { IsEditingProvider } from '@/hooks/isEditingContext';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <IsEditingProvider>{children}</IsEditingProvider>
      </body>
    </html>
  );
};

export default RootLayout;
