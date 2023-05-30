import { useState, FormEvent } from 'react';
import Head from 'next/head';
import styles from './styles.module.scss';
import { Header } from '../../components/Header';

import { canSSRAuth } from '@/utils/canSSRAuth';
import { setupAPIClient } from '@/services/api';

import { toast } from 'react-toastify';

import { Laila } from 'next/font/google';

const laila = Laila({ weight:['300', '400', '500', '600', '700'], subsets: ['latin'] });


export default function Category(){
  const [name, setName] = useState('');

  async function handleRegister(e: FormEvent){
    e.preventDefault();

    if (name === ''){
      return
    }

    const apiClient = setupAPIClient();
    await apiClient.post('/category', {
      name: name
    })

    toast.success('Categoria cadastrada com sucesso!');
    setName('');

  }

  return (
    <>
      <Head>
        <title>FoodHouse - Categoria</title>
      </Head>
      <div>
        <Header/>
        <main className={`${styles.container} ${laila.className}`}>
          <h1>Cadastrar Categorias</h1>

          <form className={styles.form} onSubmit={handleRegister}>
            <input 
              type="text" 
              placeholder='Digite o nome da categoria'
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type='submit' className={styles.btn_add}>
              Cadastrar
            </button>
          </form>

        </main>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})