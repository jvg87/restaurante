import { useState, ChangeEvent } from 'react';
import Head from 'next/head';
import styles from './styles.module.scss';

import { canSSrAuth } from '@/utils/canSSRAuth';
import { Header } from '@/components/Header';

import { FiUpload } from 'react-icons/fi';

export default function Product(){

  const [avatarUrl, setAvatarUrl] = useState('');
  const [imageAvatar, setImageAvatar] = useState(null);

  function handleFile(e: ChangeEvent<HTMLInputElement>){

    if (!e.target.files){
      return;
    }

    const image = e.target.files[0];

    if (!image){
      return;
    }

    if (image.type === 'image/jpeg' || image.type === 'image/png'){

      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]))

    }

  }

  return (
    <>
      <Head>
        <title>FoodHouse - Novo Produto</title>
      </Head>
      <div>
        <Header/>
        <main className={styles.container}>
          <h1>Novo Produto</h1>

          <form className={styles.form}>

            <label className={styles.label_avatar}>
              <span>
                <FiUpload size={30} color='#d8c79f'/>
              </span>
              <input 
                type="file" 
                accept='image/png, image/jpeg'
                onChange={handleFile}
              />

              {avatarUrl &&  (
                <img 
                  className={styles.preview}
                  src={avatarUrl} 
                  alt="Foto do produto"
                  width={250}
                  height={250}
                />
              )}

            </label>

            <select name="" id="">
              <option value="">Bebida</option>
              <option value="">Sobremesa</option>
            </select>

            <input 
              type="text"
              placeholder='Digite o nome do produto'
              className={styles.input}
            />

            <input 
              type="text"
              placeholder='Preço do produto'
              className={styles.input}
            />

            <textarea 
              placeholder='Descreva seu produto...'
              className={styles.input}
            />

            <button type="submit" className={styles.btn_add}>
              Cadastrar
            </button>

          </form>
        </main>
      </div>
    </>
  )
}

export const getServeSideProps = canSSrAuth(async (ctx) => {
  return {
    props: {}
  }
})