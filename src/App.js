import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Game">
          <Game />
        </div>
      </div>
    );
  }
}

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}
/*
class Card {
  constructor( videoId, voiceActor, character, start ){
     this.videoId = videoId;
     this.voiceActor = voiceActor;
     this.character = character;
     this.start = start;
  }
}*/
function Card ( videoId, voiceActor, character, start, flipped ){
     flipped = (typeof flipped === 'undefined') ? false : flipped
     return { videoId: videoId,
              voiceActor : voiceActor,
              character : character,
              start : start,
              flipped: flipped }
}
function getDemoBoard() {
  return [
    Card('8aGhZQkoFbQ','David Nathan', 'Piccolo', 10),Card('8aGhZQkoFbQ','David Nathan', 'Piccolo', 10),Card('8aGhZQkoFbQ','David Nathan', 'Piccolo', 10),Card('8aGhZQkoFbQ','David Nathan', 'Piccolo', 10),
    Card('8aGhZQkoFbQ','Peter Nathan', 'Piccolo', 10),Card('8aGhZQkoFbQ','David Nathan', 'Piccolo', 10),Card('8aGhZQkoFbQ','David Nathan', 'Piccolo', 10),Card('8aGhZQkoFbQ','David Nathan', 'Piccolo', 10),
    Card('8aGhZQkoFbQ','Peter Nathan', 'Piccolo', 10),Card('8aGhZQkoFbQ','David Nathan', 'Piccolo', 10),Card('8aGhZQkoFbQ','David Nathan', 'Piccolo', 10),Card('8aGhZQkoFbQ','David Nathan', 'Piccolo', 10)
  ]
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      points: 0,
      flipped: [],
      squares: getDemoBoard() 
    };
  }
  handleNext() {
    var points = this.state.points;
    var flipped = this.state.flipped.slice();
    
    //hit
    if ( flipped[0].voiceActor === flipped[1].voiceActor ){
      points ++;
    //miss
    } else {
      flipped[0].flipped = false; 
      flipped[1].flipped = false; 
    }
    this.setState({ points: points, flipped: [], squares: this.state.squares });
  }
  handleClick(i) {
    var squares = this.state.squares.slice();
    var flipped = this.state.flipped.slice();

    squares[i].flipped = true;
    flipped.push(squares[i]);

    this.setState({ points: this.state.points, flipped: flipped, squares: squares });
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i].flipped ? this.state.squares[i].voiceActor : null} onClick={(this.state.flipped.length === 2) ? '':  () => this.handleClick(i)} />;
  }
  render() {
    //const winner = calculateWinner(this.state.squares);
    return (
      <div>
        <div className="status">Punkte: {(this.state.flipped.length === 2 ) && <button onClick={ () => this.handleNext()}>Weiter</button> }</div>
        <div className="status">Punkte: {this.state.points}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
/*
ReactDOM.render(
  <Game />,
  document.getElementById('container')
);
*/
function calculateWinner(squares) {
  return null;
}

export default App;
