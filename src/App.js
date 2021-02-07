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
//componente Todo creato come funzione non come classe
//gli passo un elemento della lista che scorro con la map()
const Todo = (props) => {
  return(
    <div>      
      {props.todo.name}
      {props.todo.surname}
    </div>
  )
}

class Prova extends React.Component {
  state = {
    todos: [
      {name: 'primo', completato: true, surname:'ds'},
      {name: 'secondo', completato: false,surname:'ds'},
      {name: 'terzo', completato: true,surname:'ds'}
    ]
  }
  /*
    nello state metto un array todos[] che poi scorro con la map()
    leggendo l'elem fatto di name+completato e l'indice
  */
  render(){
    return(
      <div>
        {this.state.todos.map((elem, index) => (
          //ritorno un componente Todo per ogni elemento del todos[]
          <Todo key={index} todo={elem} />
        ))}
      </div>
    )
  }
}

class Form extends React.Component{
  state = {
    value:''
  }
  handleSubmit = () => {
    this.props.submit(this.state.value)
  }
  onChangeText = (e) =>{
    //e è l'evento che prendo sull' onChange cioe mentre scrivo
    //voglio che il e.target.value che è cio che scrivo 
    //vada a essere il value props di Form
    this.setState({
      value: e.target.value
    })
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} placeholder="aggiungi" onChange={this.onChangeText}></input>
      </form>
    )
  }
}

function App() {
  const [dataoggi, setdata] = useState({
    data: new Date()
  });

  function Riga() {
    //const newtodo = [...]
    alert("orco zio")
  }
  return (
    <div className="App">
      <Header/>
      <p>usando la useState() {dataoggi.data.toLocaleTimeString()}</p>
      <Tabella/>
      <Prova/>
      <Form submit={Riga}/>
    </div>
    
  );
}

export default App;
 


