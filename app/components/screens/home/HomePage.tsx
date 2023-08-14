import Image from 'next/image'
import { FunctionComponent } from 'react'

import bgDecor from '@/public/bgdecor.png'
import main from '@/public/main.png'
import round from '@/public/round.png'
import AboutUs from './about-us/AboutUs'

const HomePage: FunctionComponent = () => {
  return (
    <section className=" bg-green w-full h-full  text-white">
      <div className=" container mx-auto py-36">
        <Image className=" absolute top-0 right-0" src={bgDecor} alt="" width={800} height={800} />
        <h1 className=" text-8xl font-bold uppercase w-4/5">Дома чтобы жить, а не строить!</h1>
        <p className=" opacity-60 w-2/5 mt-10">
          Мы считаем, что заказчик ни минуты не должен думать о стройке, поэтому включили в
          комплектацию каждой модели фундамент, доставку и монтаж дома
        </p>
        <Image className=" absolute right-5 bottom-0" src={main} alt="" width={800} height={450} />
        <Image className=" mt-10" src={round} alt="" width={150} height={150} />
      </div>
      <AboutUs />
    </section>
  )
}

export default HomePage
