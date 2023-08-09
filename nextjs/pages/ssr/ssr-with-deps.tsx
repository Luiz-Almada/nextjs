export async function getServerSideProps() {
  //busca os dados externos
  const coins = await fetch(
    // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10$page=1&sparkline-false"
    // "https://dummyjson.com/products?limit=10"
    "https://fakestoreapi.com/products?limit=10"
    ).then((res) => res.json());

    //dispõe os dados
    return {
      props: {
        coins
      }
    };
}

const Ssr = (props: any) => {
  const {coins, propTest} = props;

  return (
    <ul>
      {coins.map((item: any) => 
        <li key={item.id}>
            {item.name}
        </li>)}
    </ul>
  )
};

export default Ssr;