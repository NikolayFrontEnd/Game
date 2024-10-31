import { Link } from "react-router-dom";
 import '../App.css';

function Main(){
    return(
<>
<div className="container">
            <h2>Добро пожаловать в игру!</h2>
            <div>Выберите уровень сложности:</div>
            <div className="buttons">
                <Link to='/level1'>
                    <button className="game-button">Уровень 1</button>
                </Link>
                <Link to='/level2'>
                    <button className="game-button">Уровень 2</button>
                </Link>
                <Link to='/level3'>
                    <button className="game-button">Уровень 3</button>
                </Link>
                <Link to='/level4'>
                    <button className="game-button">Уровень 4</button>
                </Link>
                <Link to='/level5'>
                    <button className="game-button">Уровень 5</button>
                </Link>
                <Link to='/levelown'>
                    <button className="game-button">Создай   уровень!</button>
                </Link>
            </div>
        </div>
</>

    )
}
export default Main;