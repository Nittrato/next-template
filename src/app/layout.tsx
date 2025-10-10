import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'App template',
    description: 'Este es un template para next',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.className} font-regular`}>
                {children}
                <Navbar />
            </body>
        </html>
    );
}
