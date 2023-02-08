/* eslint-disable @next/next/no-img-element */
'use client';
import { Carousel as CarouselComponent } from 'antd';
import './styles.scss';
import { Products } from '../types';
import { FC } from 'react';
import Link from 'next/link';

type CarouselProps = {
  products: Products['products']['slider1' | 'slider2']
}

const Carousel: FC<CarouselProps> = ({ products }) => {

  if (!products) return <div />

  return (
    <section className="l-products__slider">
      <CarouselComponent autoplay className="c-carousel" autoplaySpeed={2000}>
        {products?.products.length > 0 && products.products.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.title} className='c-carousel__item'>
            <img
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="o-carousel__image"
            />
            <div className='c-products__content__textwrap'>
              <p className='o-carousel__title'>{product.title}</p>
              <p className='o-products__content__price'>R$ {product.price}</p>
            </div>
          </Link>
        ))}
      </CarouselComponent>
    </section>
  )
}

export { Carousel }