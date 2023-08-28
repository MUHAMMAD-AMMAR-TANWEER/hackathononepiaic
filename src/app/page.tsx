import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'
import Promotions from '@/views/Promotions'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <Promotions />
      <ProductList />
    </div>
  )
}
