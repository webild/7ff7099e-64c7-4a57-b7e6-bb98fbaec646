import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'YourBrand One-Page Corporate Site',
  description: 'Provide a concise, informative single-page presence.'
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased`}>
        <SiteThemeProvider theme={{
          styleVariant: 'funAndTrendy',
          colorTemplate: 1,
          textAnimation: 'slide'
        }}>
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}
