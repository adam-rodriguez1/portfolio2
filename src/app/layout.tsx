import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rodriguez Adam - Développeur Web à Bordeaux',
  description: 'Portfolio de Rodriguez Adam, développeur web basé à Bordeaux, France.',
  icons: '/favicon.ico',
  openGraph: {
    title: 'Rodriguez Adam - Développeur Web à Bordeaux',
    description: 'Portfolio et projets de Rodriguez Adam, développeur web.',
    url: 'https://portfolio1-sable-alpha.vercel.app/',
    
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="fr">
        <body className={montserrat.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <div className="text-text dark:text-darkText mx-auto w-[750px] max-w-full px-5 pb-10 pt-28">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
