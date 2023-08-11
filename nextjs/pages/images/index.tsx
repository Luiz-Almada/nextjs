import { useEffect, useState } from 'react';
import Image from 'next/image';

const ImagesExample = () => {
  // const [data, setData] = useState<{data: any[]}>({ data: [] });
  // useEffect(() => {
  //   fetch(
  //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10$page=1&sparkline-false"
  //   )
  //   .then((res) => res.json())
  //   .then(setData);
  // }, []);

  // console.log(data);

  return (
    <div>
      {/* <div>{locale === "pt" ? "Português" : "English"}</div> */}
      <Image src={"/vercel.svg"} priority={true} width={100} height={100} alt='vercel'/>
    </div>
  )
}

export default ImagesExample;




