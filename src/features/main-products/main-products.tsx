"use client";

import { FC, useEffect } from 'react'
import { ProductsDescription } from './products-description';
import { ProductsImportant } from './products-important';
import { Carousel } from './products-slider'
import './styles.scss'
import { Products } from './types'

const MainProducts: FC<Products> = ({ products }) => {
  return (
    <div className="l-products">
      <ProductsImportant products={products.principal} />
      <Carousel products={products.slider1} />
      <ProductsDescription />
      <ProductsImportant products={products.secondary} />
      <Carousel products={products.slider2} />
    </div>
  )
}

export { MainProducts }