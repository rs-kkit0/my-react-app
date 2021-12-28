import ReactDOM from 'react-dom';
import { Game } from './game/game';
import Button from '@mui/material/Button';

ReactDOM.render(
    <div>
        <Button>Hello World</Button>
        <Game />
    </div>,
    document.getElementById('root')
);
