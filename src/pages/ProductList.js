import { Image, Stack } from '@chakra-ui/react';
import React from 'react';
import Product from '../components/Product';

const products = [
  {
    imageUrl:
      'https://images.samsung.com/is/image/samsung/assets/ph/2108/home/HOME_T_O_KV_Merchandising_Violet_Pink_264X264.png?$264_264_PNG$',
    productName: 'Samsung S20',
    price: 1100,
    id: '1',
  },
  {
    imageUrl:
      'https://i01.appmifile.com/webfile/globalimg/yawen/POCO-F3-800/K11Abaisezhengmian800.png',
    productName: 'Xiaomi Poco F3',
    price: 600,
    id: '2',
  },
  {
    imageUrl:
      'https://www.otmsale.com/wp-content/uploads/2020/10/iphone-12-pro-silver-hero.png',
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
        src="https://cdn.vox-cdn.com/thumbor/AtXeJkcpOFIvJkkoJ9WG8hV9stk=/0x0:2040x1360/1400x933/filters:focal(877x755:1203x1081):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67732463/vpavic_200805_4131_0086_1.0.jpg"
      />
      <Stack spacing={8} direction="row">
        {products.map((product, index) => {
          return <Product {...product} key={index} />;
        })}
      </Stack>
    </>
  );
}
