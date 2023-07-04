import bcrypt from 'bcryptjs';



const data = {

  users: [
    {
      name: 'Anis',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Oday',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  
    products: [
        {
            // _id: '1',
            name: 'Fashion-Casual-Busines',
            slug: 'fashion-casual-busines',
            category: 'Men Watch',
            image: '/images/p5.webp', // 679px × 829px
            price: 120,
            countInStock: 10,
            brand: 'CURREN',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt',
          },
          {
            // _id: '2',
            name: 'Leather-Sports-Watch-Me',
            slug: 'leather-sports-watch-me',
            category: 'Men Watch',
            image: '/images/p6.webp',
            price: 250,
            countInStock: 0,
            brand: 'CURREN',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
          },
          {
            // _id: '3',
            name: 'Watches-Stainless',
            slug: 'watches-stainless',
            category: 'Men Watch',
            image: '/images/p7.webp',
            price: 25,
            countInStock: 15,
            brand: 'CURREN',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
          },
          {
            // _id: '4',
            name: 'Casual-Stainles',
            slug: 'casual-stainles',
            category: 'Men Watch',
            image: '/images/p8.webp',
            price: 65,
            countInStock: 5,
            brand: 'CURREN',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
          },
          {
            // _id: '5',
            name: 'Top-Brand-Lu',
            slug: 'top-brand-lu',
            category: 'Men Watch',
            image: '/images/p9.webp',
            price: 65,
            countInStock: 5,
            brand: 'CURREN',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
          },
          {
            // _id: '6',
            name: 'Creative-Fashion-Lum',
            slug: 'creative-fashion-lum',
            category: 'Men Watch',
            image: '/images/p10.webp',
            price: 65,
            countInStock: 5,
            brand: 'CURREN',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
          },
          {
            // _id: '7',
            name: 'Wristwatch-Casual-Q',
            slug: 'wristwatch-casual-q',
            category: 'Men Watch',
            image: '/images/p11.webp',
            price: 65,
            countInStock: 5,
            brand: 'CURREN',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
          },
    ]
}
export default data;