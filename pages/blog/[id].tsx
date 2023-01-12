import Layout from "../../components/Layout";

export default function ArticuloUno({ data }: any) {
  return (
    <Layout>
      {data && (
        <>
          <h1>{data.id} - {data.title}</h1>
          <p>{data.body}</p>
        </>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    const paths = data.map(({ id }: any) => ({ params: { id: `${id}` } }))

    return { paths, fallback: false }
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }: any) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id)
    const data = await res.json()
    return {
      props: {
        data,
      },
    }
  } catch (err) {
    console.log(err);
  }
}