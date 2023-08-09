//ISR - Incremental Static Regeneration

import Card from '@/components/Card';
import Link from 'next/link';

export async function getStaticProps() {
  //busca os dados externos
  // const coins = await fetch(
  const allCoins = await fetch(
    // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=20$page=1&sparkline-false"
    // "https://dummyjson.com/products?limit=10"
    "https://fakestoreapi.com/products?limit=10"
    ).then((res) => res.json());

    const coins = allCoins.sort((a: any, b: any) => b.rating.rate - a.rating.rate);

    //dispõe os dados
    const date = new Date();

    return {
      props: {
        coins,
        lastRender: date.getSeconds(),
      },
      //O Next.js irá tentar gerar novamente
      //a página quando um novo request chegar,
      //porém apenas se o tempo desde o último
      //request for superior a 10 segundos
      revalidate: 5      
    };
}

const Isr = (props: any) => {
  const {coins, lastRender} = props;

  console.log("teste",coins)

  if (!coins) {
    return <div>The products was not found</div>
  }

  return (
    <div>
      <div>
        { lastRender } 
      </div>
      <ul>
        {coins.map((item: any) => 
          <li key={item.id}>
              {/* {item.name} */}
              
              <Link href={`isr/${item.id}`}><Card title={item.title} description={item.description} /></Link>
          </li>)}
      </ul>
    </div>
  )
};

export default Isr;