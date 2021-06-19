import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

import { db } from '../../firebase';

const IndexPage = () => {
  const [testArray, setTestArray] = useState(null);

  // 書き込み
  const handleAddClick = () => {
    db.collection('users')
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

  // 書き込み２
  const handleAdd2Click = () => {
    db.collection('user')
      .doc()
      .collection('sakana')
      .add({ first: 'abe', line: 'A', content: { test: 'aaaaa' } })
      .then((docRef) => {
        console.log(docRef);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 読み込み
  const handleGetClick = () => {
    db.collection('users')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().born}`);
          // setTestArray(doc);
        });
      });
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <button onClick={handleAddClick}>add-firebase</button>
      <button onClick={handleAdd2Click}>add2-firebase</button>
      <button onClick={handleGetClick}>get-firebase</button>
      <h1>Cてれててれれれれれれ 👋</h1>
      <div>TEST:{testArray}</div>
      <p>
        <Link href="/about">
          <a>あああああああああああああああああああああ</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
