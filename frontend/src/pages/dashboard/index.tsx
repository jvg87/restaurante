import { useState } from 'react';
import { Header } from "@/components/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";

import styles from './styles.module.scss';
import { FiRefreshCcw } from 'react-icons/fi';

import { setupAPIClient } from "@/services/api";

import Modal from 'react-modal';

import { Laila } from 'next/font/google';
import { ModalOrder } from '@/components/ModalOrder';

const laila = Laila({ weight:['300', '400', '500', '600', '700'], subsets: ['latin'] });

type OrderProps = {
  id: string;
  table: number | string;
  status: boolean;
  draft: boolean;
  name: string | null;
}

interface HomeProps{
  orders: OrderProps[];
}

export type OrderItemProps = {
  id: string;
  amount: number;
  order_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    banner: string;
  }
  order:{
    id: string;
    table:string | number;
    status: boolean;
    name: string | null;
  }
}

function dashboard({ orders }: HomeProps) {
  const [orderList, setOrderList] = useState(orders || []);

  const [modalItem, setModalItem] = useState<OrderItemProps[]>();
  const [modalVisible, setModalVisible] = useState(false);

  function handleCloseModal(){
    setModalVisible(false);
  }

  async function handleOpenModalView(id: string){

    const apiClient = setupAPIClient();

    const response = await apiClient.get('/order/detail', {
      params: {
        order_id: id
      }
    })

    setModalItem(response.data);
    setModalVisible(true);

  }

  Modal.setAppElement('#__next');
  
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

            {orderList.map((item)=> (
              <section key={item.id} className={styles.order_item}>
                <button onClick={ () => handleOpenModalView(item.id)}>
                  <div className={styles.tag}>
                  </div>
                  <span>Mesa {item.table}</span>
                </button>
              </section>
            ))}
            
          </article>
        </main>

        { modalVisible && (
          <ModalOrder/>
        )}

      </div>
    </>
  );
}

export default dashboard;

export const getServerSideProps = canSSRAuth(async (ctx) => {

  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get('/orders');

  return {
    props: {
      orders: response.data
    }
  }
})