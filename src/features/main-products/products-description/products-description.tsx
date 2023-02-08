import Link from 'next/link'
import { data } from './data'
import './styles.scss'

const ProductsDescription = () => {
  return (
    <section className="l-description">
      <h2 className='c-description__title'>
        <p>{data.title}</p>
        <p>{data.subtitle}</p>
      </h2>
      <span className='c-description__description'>{data.description}<p>
        <Link href="/products" className='o-description__link'>Veja mais!</Link>
      </p>
      </span>
    </section>
  )
}

export { ProductsDescription }