import { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import React from 'react'

import decor from '@/public/bgdecor.png'
import Image from 'next/image'
import Logo from '../../layout/header/logo/Logo'
import { animated, useTransition } from '@react-spring/web'

const LoadPage: FunctionComponent = () => {
  return (
    <section className=" bg-green min-h-screen min-w-full text-white">
      <div className=" container mx-auto h-screen flex items-center justify-center ">
        <div>
          <Logo />
          <h1 className="text-6xl uppercase font-bold w-3/5 ">ALBA MODULES или ваш дом мечты</h1>
        </div>
        <Image
          className=" absolute top-0 right-0"
          src={decor}
          alt="decor"
          width={800}
          height={800}
        />
      </div>
    </section>
  )
}

export default LoadPage
