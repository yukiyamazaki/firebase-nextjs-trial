import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Cてれててれれれれれれ 👋</h1>
    <p>
      <Link href="/about">
        <a>あああああああああああああああああああああ</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
