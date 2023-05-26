import '../styles/global.scss';
import { lato } from './fonts';
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata = {
  title: 'FoodHouse - Faça Seu login',
  description: 'Restaurant WebPage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={lato.className}>{children}</body>
      </html>
    </AuthProvider>
    
  )
}
