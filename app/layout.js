import './globals.css';
import { Cabin } from "next/font/google";

const cabin = Cabin({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Commerce App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 w-full max-h-full h-screen ${cabin.className}`}>{children}</body>
    </html>
  )
}
