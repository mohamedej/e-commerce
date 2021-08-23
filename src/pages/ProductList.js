import { Image, Stack } from '@chakra-ui/react';
import React from 'react';
import Product from '../components/Product';

const products = [
  {
    imageUrl: process.env.PUBLIC_URL + '/assets/samsung.webp',
    productName: 'Samsung S20',
    price: 1100,
    id: '1',
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/assets/xiaomi.png',
    productName: 'Xiaomi Poco F3',
    price: 600,
    id: '2',
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/assets/iphone.png',
    productName: 'Iphone 12 Black',
    price: 1200,
    id: '3',
  },
];

export default function ProductList() {
  return (
    <>
      <Image
        mb={4}
        w="full"
        h={270}
        fit="cover"
        src={process.env.PUBLIC_URL + '/assets/hero.jpg'}
      />
      <Stack spacing={8} direction="row">
        {products.map((product, index) => {
          return <Product {...product} key={index} />;
        })}
      </Stack>
    </>
  );
}
