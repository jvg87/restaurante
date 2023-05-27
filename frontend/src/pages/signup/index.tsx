import Head from 'next/head';
import Link from 'next/link'

import styles from '@/styles/home.module.scss';

import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

import { Laila, Lato } from 'next/font/google';

const laila = Laila({ weight:['300', '400', '500', '600', '700'], subsets: ['latin'] });
const lato = Lato({ weight:['100','300','400', '700', '900'], subsets: ['latin'] });


export default function Home() {
  return (
    <>
      <Head>
        <title>FoodHouse - Faça seu cadastro agora!</title>
        <meta name="description" content='Restaurant WebPage' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.container_center} ${lato.className}`}>
        <h1 className={laila.className}>
          <span>Food</span>
          House
        </h1>
        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form>
            <Input
              placeholder='Digite seu nome'
              type='text'  
            />
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
