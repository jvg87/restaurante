import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

import { FaSpinner } from 'react-icons/fa';

import { Laila } from 'next/font/google';
const laila = Laila({ weight:['600'], subsets: ['latin'] });

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  loading?: boolean,
  children: ReactNode
}

export function Button({loading, children, ...props} :ButtonProps){
  return (
    <button
      className={`${styles.button} ${laila.className}`}
      disabled={loading}
      {...props}
    >
      { loading ? (
        <FaSpinner color='#13181d' size={16}/>
      ) : (
        <a className={styles.button_text}>
          {children}
        </a>
      )}

      
    </button>
  )
}