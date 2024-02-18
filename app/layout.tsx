import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const IBMPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: 'ImaginoAI',
  description: 'AI-powered image manipulation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang='en'>
        <body className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
