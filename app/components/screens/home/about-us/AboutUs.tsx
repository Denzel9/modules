import { FunctionComponent } from 'react'
import Image from 'next/image'

import about from '@/public/aboutUsDecor.png'
import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'

const AboutUs: FunctionComponent = () => {
  return (
    <section className=" bg-black py-32">
      <div className=" container mx-auto flex">
        <div className=" w-2/5">
          <div className=" flex items-center gap-5">
            <Image src={about} alt="about us" height={100} width={100} />
            <h2 className=" text-3xl">О компании</h2>
          </div>
          <p className=" opacity-40 mt-12">
            Предлагаем полный комплекс решений под ключ. Выберите изделия из каталога или закажите
            разработку уникального дизайна. Все остальное мы возьмем на себя
          </p>
          <button className=" mt-10 bg-orange py-4 px-8 rounded-full text-black hover:scale-110 transition-transform">
            Заказать
          </button>
        </div>
        <div className=" w-3/5">
          <p className=" text-5xl uppercase font-bold ">
            Производим и монтируем модульные конструкции.
          </p>
          <p className=" opacity-40 mt-11">
            ALBA MODULES — это строительно-монтажная компания по производству быстровозводимых
            модульных конструкций. Мы радуем ваши города беседками, киосками, остановками,
            ресторанами быстрого питания, туалетными модулями, строительными штабами, торговыми и
            офисными помещениями.
          </p>
          <div className=" flex items-center gap-10 mt-10">
            <div>
              <div className=" flex items-center gap-1">
                <p className=" text-5xl font-black">450</p>
                <MaterialIcon styles=" text-orange text-5xl font-black" name="MdAdd" />
              </div>
              <p className=" opacity-40">Ежегодных заказов</p>
            </div>
            <div>
              <div className=" flex items-center gap-1">
                <p className=" text-5xl font-black">150</p>
                <MaterialIcon styles=" text-orange text-5xl font-black" name="MdAdd" />
              </div>
              <p className=" opacity-40">Наименовай товаров</p>
            </div>
            <div>
              <div className=" flex items-center gap-1">
                <p className=" text-5xl font-black">23</p>
                <MaterialIcon styles=" text-orange text-5xl font-black" name="MdAdd" />
              </div>
              <p className=" opacity-40">Действиующих партнеров</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
