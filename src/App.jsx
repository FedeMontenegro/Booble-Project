import { useState } from 'react'

import {
  Header,
  Logo,
  Browser,
  Footer,
  Navbar
} from "./components/"

import {
  sectionOne,
  sectionTwo,
  sectionThree
} from "../mocks/footer.options"

import Styles from "./components/footer/styles/footer.module.css"

function App() {

  return (
    <>
      <Header />
      <Logo />
      <Browser />
      <Footer>
        <Navbar options={sectionOne} />
        <div className={Styles.sectionContainer}>
          <Navbar options={sectionTwo} />
          <Navbar options={sectionThree} />
        </div>
      </Footer>
    </>
  )
}

export default App
