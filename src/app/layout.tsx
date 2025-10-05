import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import AntdProvider from '@/providers/AntdProvider'
import './globals.css'

import { BookingProvider } from '@/context/BookingContext'

const openSans = Open_Sans({
    variable: '--font-open-sans',
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'HomeGlobe',
    description: 'Find places to stay anywhere',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${openSans.variable} antialiased`}>
                <AntdRegistry>
                    <AntdProvider>
                        <BookingProvider>{children}</BookingProvider>
                    </AntdProvider>
                </AntdRegistry>
            </body>
        </html>
    )
}
