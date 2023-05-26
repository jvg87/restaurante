"use client"

import { FormEvent, useContext } from 'react';

import styles from '../styles/page.module.scss';
import { laila } from './fonts';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Butotn';
import Link from 'next/link';

import { AuthContext } from '@/contexts/AuthContext';

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(e:FormEvent) {
    e.preventDefault();

    let data = {
      email: 'algum@teste.com',
      password: '123123'
    }

    await signIn(data)
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
          />
          <Input
            placeholder='Sua senha'
            type='password'
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
