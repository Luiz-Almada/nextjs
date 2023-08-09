export async function getStaticProps() {
  //busca os dados externos
  const coins = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10$page=1&sparkline-false"
    ).then((res) => res.json());

    //dispõe os dados
    return {
      props: {
        coins,
        propTest: "This is a test"
      }
    };
}

const Static = (props: any) => {
  const {coins, propTest} = props;

  console.log(propTest);

  return (
    <ul>
      {coins.map((item: any) => 
        <li key={item.id}>
            {item.name}
        </li>)}
    </ul>
  )
};

export default Static;