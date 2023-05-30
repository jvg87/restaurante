import { FormEvent, useContext, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link'
import { GetServerSideProps } from 'next';

import styles from '@/styles/home.module.scss';

import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

import { AuthContext } from '@/contexts/AuthContext';
import { toast } from 'react-toastify';

import { canSSRGuest } from '@/utils/canSSRGuest';

import { Laila } from 'next/font/google';

const laila = Laila({ weight:['300', '400', '500', '600', '700'], subsets: ['latin'] });


export default function Home() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(e:FormEvent) {
    e.preventDefault();

    if (email === '' || password === ''){
      toast.error('Preencha todos os campos!');      
      return;
    }

    setLoading(true);

    let data = {
      email,
      password
    }

    await signIn(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>FoodHouse - Faça Seu login</title>
        <meta name="description" content='Restaurant WebPage' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.container_center} ${laila.className}`}>
        <h1>
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
              loading={loading}
            >
              Acessar
            </Button>
          </form>

          <Link href='/signup' className={styles.text}>
            Não possui uma conta? Cadastre-se
          </Link>

        </div>
      </main>
    </>
  )
}


export const getServerSideProps = canSSRGuest(async (ctx) => {
  
  return {
    props: {}
  }
})


