import './App.css';
import './Board/Board'
import Board from './Board/Board';


const centeredBoxStyle = {
  display: 'flex',
  justifyContent: 'center', // Horizontal centering
  alignItems: 'center', // Vertical centering
  height: '100vh', // Make sure it takes up the full viewport height
  width: '100vw', // Make sure it takes up the full viewport width
};

function App() {
  return (
    <div className="App">
      <div style={centeredBoxStyle}>
        <Board />
      </div>
    </div>
  );
}

export default App;
