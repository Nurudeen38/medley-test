import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Providers } from '@/redux/providers';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Payout Dashboard',
  description: 'Dashboard Details',
};


const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#004CCC" height={4} showSpinner={false} />
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}
