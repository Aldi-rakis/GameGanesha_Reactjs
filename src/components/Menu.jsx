import papmenu from "../assets/Menuboard.png"
//import react router dom
import { useNavigate } from "react-router-dom";


function Menu() {

    
//navigate
const navigate = useNavigate();


const HandleToGame = () => {
    navigate('/game'); // navigate to /admin/login
};


    return (
        <div>

            <div className="buttons-container">

                <button onClick={HandleToGame}>Start Game</button>
                <button>Setting</button>
                <button>Help</button>
            </div>
            <div className="menu">
                <img src={papmenu} alt="" />
            </div>
        </div>
    )
}

export default Menu;