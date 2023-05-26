import Link from 'next/link';
import styles from '../../styles/page.module.scss';
import { laila } from '../fonts';

import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Butotn';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faça seu cadastro agora!'
}

function SignUp() {
  return ( 
    <main className={styles.container_center}>
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
  );
}

export default SignUp;