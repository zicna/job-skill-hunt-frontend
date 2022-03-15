import { BrowserRouter as Router } from 'react-router-dom'
import FormContainer from './containers/FormContainer'

import Header from './pages/Header'
import Footer from './pages/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        < Header/>
        <FormContainer />
        <Footer />
      </Router>
    </div>
  )
}

export default App
