import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Owais Mirakar - Odoo Developer & Problem Solver',
  description: 'Full-stack Odoo developer with expertise in Python, ERP systems, and innovative solutions. Experience with Odoo 18, PostgreSQL, and real-world project implementations.',
  keywords: 'Odoo, Developer, Python, ERP, Backend, Full-Stack',
  authors: [{ name: 'Owais Mirakar' }],
  creator: 'Owais Mirakar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://owais-portfolio.vercel.app',
    title: 'Owais Mirakar - Odoo Developer',
    description: 'Full-stack Odoo developer with expertise in Python, ERP systems, and innovative solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}
