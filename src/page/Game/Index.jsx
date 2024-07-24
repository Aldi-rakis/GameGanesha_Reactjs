import Backgorund from "../../components/Background";
import { useNavigate } from "react-router-dom";


function Game() {
    //navigate
//navigate
const navigate = useNavigate();

const HandleToback = () => {
    navigate('/'); // navigate to /admin/login  
};

const Gamebalungan = () => {
    navigate('/game/balungan'); // navigate to /admin/login

}

const Gameblimbingan = () => {
    navigate('/game/blimbingan'); // navigate to /admin/login

}

const Gamepencon = () => {
    navigate('/game/pencon'); // navigate to /admin/login

}



    return (

        <div className="background">
            <img id="title-game" src="/titlegame.png" alt="" />
            <img onClick={HandleToback} id="prev-btn" src="/prev_btn.png" alt="" />
          
            <div className="list-game">
                <img onClick={Gamebalungan} src="/balungan_btn.png" alt="" />
                <img onClick={Gameblimbingan} src="/blimbingan_btn.png" alt="" />
                <img onClick={Gamepencon} src="/pencon_btn.png" alt="" />

            </div>
            
        </div>
       
      
    )
}

export default Game;