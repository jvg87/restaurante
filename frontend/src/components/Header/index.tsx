import { useContext } from 'react';

import styles from './styles.module.scss';
import Link from 'next/link';

import { FiLogOut } from 'react-icons/fi';

import { AuthContext } from '@/contexts/AuthContext';

import { Laila } from 'next/font/google';
const laila = Laila({ weight:['600'], subsets: ['latin'] });

export function Header() {
  const { signOut } = useContext(AuthContext);

  return (  
    <header className={styles.header_container}>
      <div className={styles.header_content}>
        <Link href='/dashboard'>
          <h1 className={laila.className}>
            <span>Food</span>
            House
          </h1>
        </Link>

        <nav className={styles.nav_links}>
          <Link href='/category'>
            <span>Categoria</span>
          </Link>

          <Link href='/product'>
            <span>Cardapio</span>
          </Link>

          <button onClick={signOut}>
            <FiLogOut color='#d8c79f' size={24}/>
          </button>
        </nav>

      </div>
    </header>
  );
}
