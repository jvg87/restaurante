import { FormEvent, useState, useContext } from 'react';

import Head from 'next/head';
import Link from 'next/link'

import styles from '@/styles/home.module.scss';

import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

import { AuthContext } from '@/contexts/AuthContext';
import { toast } from 'react-toastify';

import { Laila } from 'next/font/google';

const laila = Laila({ weight:['300', '400', '500', '600', '700'], subsets: ['latin'] });


export default function SignUp() {
  const  { signUp } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();

    if (name === '' || email === '' || password === ''){
      toast.error('Preencha todos os campos');
      return;
    }

    setLoading(true);

    let data = {
      name,
      email,
      password
    }

    await signUp(data);

    setLoading(false);

  }

  return (
    <>
      <Head>
        <title>FoodHouse - Faça seu cadastro agora!</title>
        <meta name="description" content='Restaurant WebPage' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.container_center} ${laila.className}`}>
        <h1 className={laila.className}>
          <span>Food</span>
          House
        </h1>
        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form onSubmit={handleSignUp}>
            <Input
              placeholder='Digite seu nome'
              type='text'  
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              Cadastrar
            </Button>
          </form>

          <Link href='/' className={styles.text}>
          Já possui uma conta? Faça login!
          </Link>

        </div>
      </main>
    </>
  )
}
