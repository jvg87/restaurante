import styles from '../styles/page.module.scss';
import { laila } from './fonts';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Butotn';

export default function Home() {
  return (
    <main className={styles.container_center}>
      <h1 className={laila.className}>
        <span>Food</span>
        House
      </h1>
      <div className={styles.login}>
        <form>
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

        <a className={styles.text}>Não possui uma conta? Cadastre-se</a>

      </div>
    </main>
  )
}
