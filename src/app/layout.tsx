import './globals.css'
import 'antd/dist/reset.css';

import { Header } from '../components/Header'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin', 'greek'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
