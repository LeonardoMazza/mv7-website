import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const InterSans = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '700'],
})

const InterMono = Inter({
    subsets: ['latin'],
    variable: '--font-mono',
    weight: ['400', '700'],
})

export const metadata: Metadata = {
    title: 'MV7 - Marketing Inteligente',
    description: 'Impulsando seu negócio com marketing inteligente',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${InterSans.variable} ${InterMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    )
}
