import './globals.css'
import { Inter } from 'next/font/google'



export const metadata = {
  title: 'Proyecto',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-100'>{children}</body>
    </html>
  )
}
