//import react router dom
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home/Index.jsx";
import Game from "../page/Game/Index.jsx";
import Balungan from "../page/Game/balungan.jsx";
import Blimingan from "../page/Game/blimbingan.jsx";
import Pencon from "../page/Game/pencon.jsx"

function RoutesIndex() {
    return (
        <Routes>

            {/* route home */}
            <Route path="/" element={
                <Home />
              } />

               {/* route home */}
            <Route path="/game" element={
                <Game />
              } />

                 {/* route home */}
            <Route path="/game/balungan" element={
                <Balungan />
              } /> 

              
                 {/* route home */}
            <Route path="/game/blimbingan" element={
                <Blimingan />
              } />

                {/* route home */}
            <Route path="/game/pencon" element={
                <Pencon />
              } />



        </Routes>
    )
}

export default RoutesIndex