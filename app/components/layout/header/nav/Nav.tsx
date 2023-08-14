import { FunctionComponent } from 'react'
import NavItem from './NavItem'
import { Menu } from './nav.data'

const Nav: FunctionComponent<{ data: Menu[] }> = ({ data }) => {
  return (
    <ul className="h-[50px] gap-5 flex items-center justify-between p-2 bg-white rounded-3xl text-black">
      {data.map((item) => {
        return <NavItem key={item.title} {...item} />
      })}
    </ul>
  )
}

export default Nav
