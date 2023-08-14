import Link from 'next/link'
import { FunctionComponent } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const NavItem: FunctionComponent<{ title: string; link: string; styles?: string }> = ({
  title,
  link,
  styles,
}) => {
  const { asPath } = useRouter()
  return (
    <Link
      href={link}
      className={classNames(
        asPath === link ? 'border-black' : 'border-white',
        ' border hover:border-black duration-300 rounded-2xl py-1 px-2 ',
        styles
      )}
    >
      {title}
    </Link>
  )
}

export default NavItem
