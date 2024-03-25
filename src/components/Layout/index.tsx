import { Fragment, ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface Children {
  children: ReactNode[]
}
const Layout = ({ children }: Children) => {
  return (
    <>
      <Header />
      {children?.map((child: ReactNode, index: number) => (
        <Fragment key={index}> {child}</Fragment>
      ))}
      <Footer />
    </>
  )
}

export default Layout
