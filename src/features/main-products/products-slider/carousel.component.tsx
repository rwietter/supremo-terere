/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { Carousel as CarouselComponent } from 'antd';
import './styles.scss';


const Carousel = () => {
  return (
    <CarouselComponent autoplay className="c-carousel">
      <div className='c-carousel__item'>
        <img
          src="https://cdn.dooca.store/1603/products/mkp-terere-tradicional.png?v=1643974945&webp=0"
          alt="Tereré Tradicional"
          width={400}
          height={400}
          className="o-carousel__image"
        />
        <p className='o-carousel__title'>Tereré Tradicional</p>
      </div>
      <div className='c-carousel__item'>
        <img
          src="https://cdn.dooca.store/1603/products/mkp-terere-abacaxi.png?v=1643975005&webp=0"
          alt="Tereré Abacaxi"
          width={400}
          height={400}
          className="o-carousel__image"
        />
        <p className='o-carousel__title'>Tereré Abacaxi</p>
      </div>
    </CarouselComponent>
  )
}

export { Carousel }