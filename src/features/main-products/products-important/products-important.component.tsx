import Link from 'next/link';
import { FC } from 'react';
import { Products } from '../types';
import './styles.scss';

type ProductsProps = {
  products: Products['products']['principal' | 'secondary']
}

const ProductsImportant: FC<ProductsProps> = ({ products }) => {

  if (!products?.products || products?.products.length === 0) return <div />;

  const [firstProduct, secondProduct, thirdProduct] = products!.products;

  return (
    <div className="l-products__important">
      <Link className="c-products__content" href={`/products/${firstProduct.slug}`}>
        <div className='c-products__content__textwrap'>
          <h1 className='o-products__content__title'>{firstProduct.title}</h1>
          <h2 className='o-products__content__price'>R$ {firstProduct.price}</h2>
        </div>
        <img width="100%" height="100%" src={firstProduct.image} alt={firstProduct.text} />
      </Link>

      <Link className="c-products__content" href={`/products/${secondProduct.slug}`}>
        <div className='c-products__content__textwrap'>
          <h1 className='o-products__content__title'>{secondProduct.title}</h1>
          <h2 className='o-products__content__price'>R$ {secondProduct.price}</h2>
        </div>
        <img width="100%" height="100%" src={secondProduct.image} alt={secondProduct.text} />
      </Link>

      <Link className="c-products__content" href={`/products/${thirdProduct.slug}`}>
        <div className='c-products__content__textwrap'>
          <h1 className='o-products__content__title'>{thirdProduct.title}</h1>
          <h2 className='o-products__content__price'>R$ {thirdProduct.price}</h2>
        </div>
        <img width="100%" height="100%" src={thirdProduct.image} alt={thirdProduct.text} />
      </Link>
    </div>
  )
}

export { ProductsImportant }