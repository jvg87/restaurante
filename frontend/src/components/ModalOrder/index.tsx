import Modal from 'react-modal';
import styles from './styles.module.scss';

import { FiX } from 'react-icons/fi';
import { OrderItemProps } from '@/pages/dashboard';

import { Laila } from 'next/font/google';
const laila = Laila({ weight:['600'], subsets: ['latin'] });

interface ModalOrderProps{
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderItemProps[]
}

export function ModalOrder({ isOpen, onRequestClose, order }: ModalOrderProps){

  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      padding: '30px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#13181d',
      borderRadius: '.5rem',
      // border: '1px solid #d8c79f'

    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >

      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
        style={{ background: 'transparent', border: 0 }}
      >
        <FiX size={30} color='#d8c79f'/>
      </button>

      <div className={`${styles.container} ${laila.className}`}>
        <h2>Detalhes do pedido</h2>
        <span className={styles.table}>
          Mesa: <strong>{order[0].order.table}</strong>
        </span>

        {order.map( item => (
          <section key={item.id} className={styles.container_item}>
            <span>{item.amount} - <strong>{item.product.name}</strong></span>
            <span className={styles.description}>{item.product.description}</span>
          </section>
        ))}

        <button className={styles.btn_order} onClick={ () => {}}>
          Concluir Pedido
        </button>

      </div>

    </Modal>
  )
}