import { FunctionComponent } from 'react'
import Logo from '../header/logo/Logo'

import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { SlSocialVkontakte } from 'react-icons/sl'
import { navData } from '../header/nav/nav.data'

const Footer: FunctionComponent = () => {
  return (
    <section className=" py-16 w-full bg-green ">
      <div className="container mx-auto text-white">
        <div className=" flex flex-col items-center ">
          <Logo />
          <p className=" opacity-40 w-2/5 text-center mt-10">
            Главное, чем мы гордимся – радость наших клиентов от жизни в загородном доме, доме
            HoltsovHouse!
          </p>
          <div className=" flex items-center gap-5 text-2xl mt-5">
            <AiOutlineInstagram />
            <SlSocialVkontakte />
            <AiOutlineYoutube />
          </div>
        </div>
        <div className=" h-[1px] opacity-40 w-full bg-white my-5"></div>
        <ul className=" flex items-center justify-center gap-24 text-xl">
          {navData.map((item) => {
            return <li key={item.title}>{item.title}</li>
          })}
        </ul>
      </div>
    </section>
  )
}

export default Footer
