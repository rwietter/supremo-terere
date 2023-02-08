import { products } from '@/data/products';
import './styles.scss';

interface IProductProps {
  params: {
    slug: string;
  };
}

const Product = async ({ params }: IProductProps) => {
  const [dataProducs] = getData(params.slug);

  return (
    <div className='l-product'>
      <h1>Product {dataProducs.title}</h1>
      <p>Description {dataProducs.text}</p>
      <span>Price {dataProducs.price}</span>
    </div>
  )
}

function getData(slug: string) {
  const data = products.filter((product: any) => product.slug === slug);
  if (!data) {
    throw new Error('Failed to fetch data');
  }

  return data;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export const revalidate = 3600;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = products.map((post: any) => ({
//     params: { slug: post.slug },
//   }))

//   if (!paths) return { paths: [], fallback: true };

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export async function getStaticProps({ params }: any) {
//   const product = products.find((post: any) => post.slug === params.slug)

//   return {
//     props: {
//       products: product,
//       slug: params.slug,
//     },
//     revalidate: 60,
//   }
// }

export default Product