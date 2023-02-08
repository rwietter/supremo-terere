"use client";

import { FC, useEffect } from 'react'
import { ProductsDescription } from './products-description';
import { Carousel } from './products-slider'
import './styles.scss'

type ProducsProps = {
  products: {
    principal: {
      products: {
        id: number,
        slug: string,
        title: string,
        price: number,
        image: string,
        text: string,
      }[],
    }
  }
}

const MainProducts: FC<ProducsProps> = ({ products }) => {
  const principal = products.principal.products;

  console.log(principal)

  return (
    <div className="l-products">

      <div className="l-products__important">
        <a className="c-products__content" href={`/products/${principal[0].slug}`}>
          <div className='c-products__content__textwrap'>
            <h1 className='o-products__content__title'>{principal[0].title}</h1>
            <h2 className='o-products__content__price'>R$ {principal[0].price}</h2>
          </div>
          <img width="100%" height="100%" src={principal[0].image} alt={principal[0].text} />
        </a>

        <a className="c-products__content" href={`/products/${principal[1].slug}`}>
          <div className='c-products__content__textwrap'>
            <h1 className='o-products__content__title'>{principal[1].title}</h1>
            <h2 className='o-products__content__price'>R$ {principal[1].price}</h2>
          </div>
          <img width="100%" height="100%" src={principal[1].image} alt={principal[1].text} />
        </a>

        <a className="c-products__content" href={`/products/${principal[2].slug}`}>
          <div className='c-products__content__textwrap'>
            <h1 className='o-products__content__title'>{principal[2].title}</h1>
            <h2 className='o-products__content__price'>R$ {principal[2].price}</h2>
          </div>
          <img width="100%" height="100%" src={principal[2].image} alt={principal[2].text} />
        </a>
      </div>

      <section className="l-products__slider">
        <Carousel />
      </section>

      <ProductsDescription />

      <section className="l-products__slider">
        <Carousel />
      </section>

    </div>
  )
}

export { MainProducts }