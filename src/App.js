import { BrowserRouter as Router } from 'react-router-dom'
import FormContainer from './containers/FormContainer'

import Header from './pages/Header'

function App() {
  return (
    <div className="App">
      <Router>
        < Header/>
        <FormContainer />
      </Router>
    </div>
  )
}

export default App
