import { Roboto } from 'next/font/google';
const roboto = Roboto(
    {
        weight: ['400', '700'],
        subsets: ["latin"]
    }
)
export const metadata = {
    title: 'Newsletter sign-up form with success message'
}

import './global.scss'
export default function RootLayout({ children }) {
    return (
        <html lang="en" className={roboto.className}>
        <body>{children}</body>
        </html>
    )
}