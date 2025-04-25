import './Board.css';
import Button from './Button/Button'

const spaces = [1,2,3,4,5,6,7,8,9]
const buttons = spaces.map(space => 
    <Button spaceNumber={space} />
);

function Board() {
  return (
    <div className="Board">
        {buttons}
    </div>
  );
}

export default Board;