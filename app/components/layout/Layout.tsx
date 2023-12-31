import { FunctionComponent, ReactNode } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  )
}

export default Layout
