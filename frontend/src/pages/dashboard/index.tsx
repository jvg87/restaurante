import { Header } from "@/components/Header";
import { canSSrAuth } from "@/utils/canSSRAuth";
import Head from "next/head";

function dashboard() {
  return (  
    <>
      <Head>
        <title>FoodHouse - Painel</title>
      </Head>
      <div>
        <Header/>
        <h1>Painel</h1>
      </div>
    </>
  );
}

export default dashboard;

export const getServerSideProps = canSSrAuth(async (ctx) => {

  return {
    props: {}
  }
})