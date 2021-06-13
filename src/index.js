import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import fam from './fam.jpg'
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="fam-img" src={fam} alt="Family" />
          </div>
          <div className="col-md-6">
            <Header />
            <br></br>
            <br></br>
            <br></br>
            <ContactForm />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-6"><h6>Created from scratch with love by: Chris the Coder.</h6></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
