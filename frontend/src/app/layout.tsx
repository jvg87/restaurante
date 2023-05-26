import '../styles/global.scss';
import { lato } from './fonts';

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
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
