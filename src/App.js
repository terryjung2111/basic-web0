import React from 'react'
import Header from './screens/header/Header';
import Body from './screens/body/Body';
import Footer from './screens/footer/Footer';

const App = () => {
  return (
    <div>
      {/*Header*/}
      <div style={{ border: '2px solid red' }}>
        <Header />
      </div>
      {/*Body*/}
      <div style={{ border: '2px solid blue' }}>
        <Body />
      </div>
      {/*Footer*/}
      <div style={{ border: '2px solid green' }}>
        <Footer />
      </div>
    </div>
  )
}

export default App;