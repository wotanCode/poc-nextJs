import Layout from "../../components/Layout";
import Link from 'next/link';

export default function index({ data }: any) {
  return (
    <Layout>
      <h1>Lista de blogs</h1>
      {
        data.map(({ id, title, body }: any) => (
          <div key={id}>
            <Link href={`/blog/${id}`}>
              <h3>{id} -  {title}</h3>
            </Link>
            <div>{body}</div>
          </div>
        ))
      }
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
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