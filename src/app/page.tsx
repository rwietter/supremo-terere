import { MainProducts } from '@/features/main-products'
import { viewProducts } from '@/data/products.view'


export default function Home() {
  return (
    <div >
      <MainProducts products={viewProducts} />
    </div>
  )
}
