import { FunctionComponent } from 'react'
import Image from 'next/image'
import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'

import about from '@/public/aboutUsDecor.png'
import video from '@/public/video.png'
import videoDecor from '@/public/videoDecor.png'
import play from '@/public/play.png'

const AboutUs: FunctionComponent = () => {
  return (
    <section className=" bg-black py-32">
      <div className=" container mx-auto ">
        <div className="flex">
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
        <div className=" relative mt-20">
          <Image className=" mx-auto" src={video} alt="about us" height={500} width={1000} />
          <Image
            className=" absolute z-10 top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] cursor-pointer hover:scale-110 transition-transform"
            src={play}
            alt="play"
            height={100}
            width={100}
          />

          <p className=" text-6xl  uppercase text-center font-bold -mt-10">Ваш дом мечты</p>
          <Image
            className=" absolute -bottom-10 left-[50%] -translate-x-[50%]"
            src={videoDecor}
            alt="videoDecor"
            height={100}
            width={900}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
