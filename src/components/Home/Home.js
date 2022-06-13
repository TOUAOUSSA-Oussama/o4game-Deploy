import React from 'react';
import './HomeStyle.css';
import letsgo from '../../assets/letsgo-2.gif';
import { useNavigate } from 'react-router-dom';

function Home(){
    const history = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        history('/Game_Start');
    }

    return (
        <div>
            <div class="container1" >
                <div class="left-side">
                    <div class="title2">
                        WELCOME TO THE GAME
                    </div>
                </div>
                <div class="pg">
                    <img class="labo" src={letsgo} alt= "let's go" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
    );
};

export default Home;

