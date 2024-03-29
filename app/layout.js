'use client';
import './globals.css'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ProgressBar height = "10px" color= "#fffd00" options = {{showSpinner: false}} shallowRouting />
      </body>
    </html>
  )
}
