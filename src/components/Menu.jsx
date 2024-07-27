import papmenu from "../assets/Menuboard.png"
//import react router dom
import { useNavigate } from "react-router-dom";
import SoundEffect from "../utils/Soundeffect";

function Menu() {

    
//navigate
const navigate = useNavigate();


const HandleToGame = () => {
    navigate('/game'); // navigate to /admin/login
};

const HandleToHelp= () => {
    navigate('/help'); // navigate to /admin/login
};

const Effecbutton = () => {
    SoundEffect();
  };

    return (
        <div>

            <div className="buttons-container">

                <img onClick={() => { HandleToGame(); Effecbutton(); }}src="/btn_startGame.png" alt="" />
                <img src="/btn_Setting.png" alt="" />
                <img onClick={HandleToHelp} src="/btn_Help.png" alt="" />

                {/* <button onClick={HandleToGame}>Start Game</button>
                <button>Setting</button>
                <button>Help</button> */}
            </div>
            <div className="menu">
                <img src={papmenu} alt="" />
            </div>
        </div>
    )
}

export default Menu;