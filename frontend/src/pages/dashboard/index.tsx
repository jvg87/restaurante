import { canSSrAuth } from "@/utils/canSSRAuth";

function dashboard() {
  return (  
    <h1>Bem vindo ao painel de controle!!</h1>
  );
}

export default dashboard;

export const getServerSideProps = canSSrAuth(async (ctx) => {

  return {
    props: {}
  }
})