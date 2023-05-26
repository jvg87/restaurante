"use client"

import { FormEvent, useContext, useState } from 'react';

import styles from '../styles/page.module.scss';
import { laila } from './fonts';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Butotn';
import Link from 'next/link';

import { AuthContext } from '@/contexts/AuthContext';

export default function Home() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(e:FormEvent) {
    e.preventDefault();

    let data = {
      email,
      password
    }

    await signIn(data);
  }

  return (
    <main className={styles.container_center}>
      <h1 className={laila.className}>
        <span>Food</span>
        House
      </h1>
      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input 
            placeholder='Digite seu email'
            type='text'  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder='Sua senha'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type='submit'
            loading={false}
          >
            Acessar
          </Button>
        </form>
        <Link href='/signup' className={styles.text}>
          Não possui uma conta? Cadastre-se
        </Link>

      </div>
    </main>
  )
}
