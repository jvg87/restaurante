import { Header } from "@/components/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";

import styles from './styles.module.scss';
import { FiRefreshCcw } from 'react-icons/fi';

import { Laila } from 'next/font/google';

const laila = Laila({ weight:['300', '400', '500', '600', '700'], subsets: ['latin'] });

function dashboard() {
  return (  
    <>
      <Head>
        <title>FoodHouse - Painel</title>
      </Head>
      <div>
        <Header/>

        <main className={`${styles.container} ${laila.className}`}>
          <div className={styles.container_header}>
            <h1>Últimos Pedidos</h1>
            <button>
              <FiRefreshCcw color="#d8c79f" size={25}/>
            </button>
          </div>

          <article className={styles.list_orders}>
            <section className={styles.order_item}>
              <button>
                <div className={styles.tag}>
                </div>
                <span>Mesa 30</span>
              </button>
            </section>
          </article>
          <article className={styles.list_orders}>
            <section className={styles.order_item}>
              <button>
                <div className={styles.tag}>
                </div>
                <span>Mesa 30</span>
              </button>
            </section>
          </article>

        </main>

      </div>
    </>
  );
}

export default dashboard;

export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props: {}
  }
})