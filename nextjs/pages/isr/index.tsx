//ISR - Incremental Static Regeneration

export async function getStaticProps() {
  //busca os dados externos
  const coins = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=20$page=1&sparkline-false"
    ).then((res) => res.json());

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
  
  if (!coins) {
    return <div>The coins was not found</div>
  }

  return (
    <div>
      <div>
        { lastRender } 
      </div>
      <ul>
        {coins.map((item: any) => 
          <li key={item.id}>
              {item.name}
          </li>)}
      </ul>
    </div>
      
  )
};

export default Isr;