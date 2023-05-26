import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

import { FaSpinner } from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  loading?: boolean,
  children: ReactNode
}

export function Button({loading, children, ...props} :ButtonProps){
  return (
    <button
      className={styles.button}
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