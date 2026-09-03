import React from 'react'
import { default as Header} from './components/Header'
import { default as Allroutes} from './routes/Allroutes'
import { default as Footer} from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Allroutes />
      <Footer />
    </>
  )
}

export default App
