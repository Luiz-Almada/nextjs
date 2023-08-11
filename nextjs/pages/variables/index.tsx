export async function getServerSideProps() {
  console.log(process.env.NEXT_PUBLIC_TESTE);

  return {props: {}};
}

const Variables = () => {
  console.log(process.env.NEXT_PUBLIC_TESTE);

  return <div>Variables</div>
}

export default Variables;