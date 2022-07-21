import React, {Component} from 'react';
import './App.css';
import Minun from './img/312.png'
import Plusle from './img/311.png'

class App extends Component {
  state = {
    number: 0
  };

  add = () => {
    if(this.state.number < 10){
      this.setState({
        number: this.state.number + 1
      });
    }
  };

  del = () => {
    if(this.state.number > 0){
      this.setState({
        number: this.state.number - 1
      });
    }
  };
  render(){
    return(
      <section>
        <h1>Contador</h1>

        <p>Clique no botão <span>+</span> para adicionar ou no botão <span>-</span> para reduzir um valor.</p>
        <p>Limite: 0-10</p>
        <div className='container'>
          <figure>
            <img src={Minun} alt='Minun' title='Minun' className='pkm minun'/>
          </figure>
          <div className='counter'>
            <div className='light'>
              <div className='light1'></div>
            </div>
            <div className='line'></div>
            <h2>{this.state.number}</h2>
            <div className='btnBox'>
              <button onClick={this.del}>-</button>
              <button onClick={this.add}>+</button>
            </div>
          </div>
          <figure>
            <img src={Plusle} alt='Plusle' title='Plusle' className='pkm plusle'/>
          </figure>
        </div>
        <p id='footer'>&copy;Produzido por Wanderson Henrique Oliveira - Vai na Web - 2022.</p>
      </section>
    )
  }
}

export default App;