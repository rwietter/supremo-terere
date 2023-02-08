import './styles.scss'

const ProductsDescription = () => {
  return (
    <section className="l-description">
      <h2 className='c-description__title'>
        <p>Supremo</p>
        <p>Terere</p>
      </h2>
      <p className='c-description__description'>
        Experimente o melhor terere do mundo, feito com ingredientes selecionados de alta qualidade e com preços acessíveis.
        <p>
          <a href="/all" className='o-description__link'>Veja mais!</a>
        </p>
      </p>
    </section>
  )
}

export { ProductsDescription }