import logo from './logo.svg';
import './App.css';
import Header from './component/component.js';
import Users from './users.json';
import React, { useState } from 'react';
 

class Tabella extends React.Component {
  state = {
    data: new Date()
  }
  showdate = () => {
    console.log(
      this.state.data.toLocaleTimeString()
    )
  }
  render(){
    return(
      <div>
        <button onClick={this.showdate}>data</button>
        
        <div className="user_table">
          <p>usando la state nelle classi</p>
          <p>oggi è: {this.state.data.toLocaleTimeString()} </p>
          {
            Users.map(user => {
              return (
                <div key={user.id} className="tabrow">
                  <p>{ user.name } { user.surname}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

function App() {
  const [dataoggi, setdata] = useState({
    data: new Date()
  });
  return (
    <div className="App">
      <Header/>
      <p>usando la useState() {dataoggi.data.toLocaleTimeString()}</p>
      <Tabella/>
    </div>
  );
}

export default App;
 


