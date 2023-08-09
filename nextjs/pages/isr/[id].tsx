//ISR - Incremental Static Regeneration

export async function getStaticPaths() {
  //busca os dados externos
  const coins = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10$page=1&sparkline-false"
  ).then((res) => res.json());

  const paths = coins.map((item: any) => ({
    params: {
      id: item.id,
    }
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  //busca os dados externos
  const coin = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.id}`
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
        {coin.name} {coin.block_time_in_minutes}
      </span>
    </div>
  );
};

export default StaticPaths;
