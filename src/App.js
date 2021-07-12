import React  from 'react';
import Index from './components/partiels/index'
import './styles/style.css'
import './styles/responsive.css'

const App = () => {
  return(
    <div className="App">
      <div className="row">
        <div className="col-md-12">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <Index />
        </div>
      </div>
    </div>
  )}
export default App;


