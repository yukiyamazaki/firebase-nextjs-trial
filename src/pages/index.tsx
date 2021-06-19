import Link from 'next/link';
import Layout from '../components/Layout';

import { db } from '../../firebase';

const IndexPage = () => {
  const handleClick = () => {
    console.log('クリック');
    db.collection('posts')
      .add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <button onClick={handleClick}>テストfireStore</button>
      <h1>Cてれててれれれれれれ 👋</h1>
      <p>
        <Link href="/about">
          <a>あああああああああああああああああああああ</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
