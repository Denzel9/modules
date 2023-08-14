import Image from 'next/image'
import { FunctionComponent } from 'react'

import logo from '@/public/logo.png'

const Logo: FunctionComponent = () => {
  return (
    <div className=" flex items-center gap-3">
      <Image src={logo} alt="logo" width={40} height={40} />
      <p className=" font-bold">ALBA Modules</p>
    </div>
  )
}

export default Logo
