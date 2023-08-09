//ISR - Incremental Static Regeneration

import Card from '@/components/Card';

export async function getStaticPaths() {
  //busca os dados externos
  // const coins = await fetch(
  const allCoins = await fetch(
    // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10$page=1&sparkline-false"
    // "https://dummyjson.com/products?limit=10"
    "https://fakestoreapi.com/products?limit=10"   
  ).then((res) => res.json());

  const coins = allCoins.sort((a: any, b: any) => b.rating.rate - a.rating.rate);

  const paths = coins.map((item: any) => ({
    params: {
      id: item.id.toString(),
    }
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  //busca os dados externos
  const coin = await fetch(
    // `https://api.coingecko.com/api/v3/coins/${params.id}`
    // `https://dummyjson.com/products/${params.id}`
    `https://fakestoreapi.com/products/${params.id}`
  ).then((res) => res.json());

  //dispõe os dados

  const date = new Date();

  return {
    props: {
      coin,
      lastRender: date.getSeconds(),
    },

    //O Next.js irá tentar gerar novamente
    //a página quando um novo request chegar,
    //porém apenas se o tempo desde o último
    //request for superior a 5 segundos
     revalidate: 5,
  };
}

const StaticPaths = (props: any) => {
  const { coin, lastRender } = props;

  if (!coin) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>{lastRender}</div>
      <span>
        {/* {coin.name} {coin.block_time_in_minutes} */}
        <Card title={coin.title} description={coin.price}/>
      </span>
    </div>
  );
};

export default StaticPaths;
