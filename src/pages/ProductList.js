import { Stack } from '@chakra-ui/react';
import React from 'react';
import Product from '../components/Product';

const products = [
  {
    imageUrl:
      'https://images.samsung.com/is/image/samsung/assets/ph/2108/home/HOME_T_O_KV_Merchandising_Violet_Pink_264X264.png?$264_264_PNG$',
    productName: 'Samsung S20',
    price: '1100$',
  },
  {
    imageUrl:
      'https://i01.appmifile.com/webfile/globalimg/yawen/POCO-F3-800/K11Abaisezhengmian800.png',
    productName: 'Xiaomi Poco F3',
    price: '600$',
  },
  {
    imageUrl:
      'https://www.otmsale.com/wp-content/uploads/2020/10/iphone-12-pro-silver-hero.png',
    productName: 'Iphone 12 Black',
    price: '$1200.00',
  },
];

export default function ProductList() {
  return (
    <Stack spacing={8} direction="row">
      {products.map(product => {
        return (
          <Product
            imageUrl={product.imageUrl}
            productName={product.productName}
            price={product.price}
          />
        );
      })}
    </Stack>
  );
}
