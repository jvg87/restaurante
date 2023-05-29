import { Header } from "@/components/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
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

export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props: {}
  }
})