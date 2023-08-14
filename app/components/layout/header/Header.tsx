import { FunctionComponent } from 'react'
import Logo from './logo/Logo'
import Nav from './nav/Nav'
import { navData, subNavData } from './nav/nav.data'
import { useVisible } from '@/app/hooks/useVisible'
import classNames from 'classnames'

const Header: FunctionComponent = () => {
  const { visible } = useVisible()
  return (
    <header
      className={classNames(
        visible && ' bg-white bg-opacity-10 backdrop-blur ',
        '  w-full fixed top-0 right-0 left-0 z-20'
      )}
    >
      <section className="w-full flex  items-center py-10 justify-between text-white container mx-auto ">
        <Logo />
        <Nav data={navData} />
        <Nav data={subNavData} />
      </section>
    </header>
  )
}

export default Header
