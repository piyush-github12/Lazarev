
import React from 'react'
import Heropage from './pages/Heropage'
import Nav from './components/Nav'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Digitalproductpage from './pages/Digitalproductpage'
import DP_page6 from './pages/DP_page6'
import Page7 from './pages/Page7'

const App = () => {
  return (
    <div className='bg-[#101011] overflow-hidden'>
      <Nav/>
      <Heropage/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Digitalproductpage/>
      <DP_page6/>
      <Page7/>
    </div>
  )
}

export default App