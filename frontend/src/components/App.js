import React from 'react'
import Footer from './Footer'
import FormContainer from '../containers/FormContainer'
import VisibleMessageList from '../containers/VisibleMessageList'

const App = () => (
  <div>
    <FormContainer />
    <VisibleMessageList />
    <Footer />
  </div>
)

export default App
