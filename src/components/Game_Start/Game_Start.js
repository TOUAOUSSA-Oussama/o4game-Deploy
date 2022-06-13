import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Axios from 'axios'
import './Game_Start_Style.css';
import startGame from '../../assets/presstar3.gif';
import { useNavigate } from 'react-router-dom';

function Game_Start() {
    const history = useNavigate();

    const [nomJoueur1, setNomJoueur1] = React.useState("");
    const [nomJoueur2, setNomJoueur2] = React.useState("");
    const [nbre1, setNbre1] = React.useState("");
    const [nbre2, setNbre2] = React.useState("");

    const [validation1, setValidation1] = React.useState(false);
    const [validation2, setValidation2] = React.useState(false);

    const [listSansZero, setListSansZero] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [listAvecZero, setListAvecZero] = React.useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const [msgErreur, setMsgErreur] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        history('/Game',
            {state:
                {
                    nomJoueur1: nomJoueur1,
                    nomJoueur2: nomJoueur2,
                    nbre1: nbre1,
                    nbre2: nbre2
                }
            });
    }

    const handleSubmit1 = (event) => {
        event.preventDefault();
        if ( ((nbre1[0] in listSansZero) && (nbre1[1] in listAvecZero) && (nbre1[2] in listAvecZero)) && ((nbre1[0] != 0) && (nbre1[0] !== nbre1[1]) && (nbre1[0] !== nbre1[2]) && (nbre1[1] !== nbre1[2]) ) ) {
            console.log(nbre1[0])
            setValidation1(true);
            setMsgErreur(false);
        } else {
            setMsgErreur(true);
        }
    };

    const handleSubmit2 = (event) => {
        if ( ((nbre2[0] in listSansZero) && (nbre2[1] in listAvecZero) && (nbre2[2] in listAvecZero)) && ((nbre2[0] != 0) && (nbre2[0] !== nbre2[1]) && (nbre2[0] !== nbre2[2]) && (nbre2[1] !== nbre2[2]) ) ) {
            setValidation2(true);
            setMsgErreur(false);
        } else {
            setMsgErreur(true);
        }
    };

    return (
        <div>
            {
                validation1 && validation2 ? (
                    <div class="pg">
                        <img class="labo" src={startGame} alt= "let's go" onClick={handleSubmit}/>
                    </div>
                ) : (
                    <div className='form-container'>
                        {
                            validation1 ? (
                                <div className='form'>
                                    <a href="/Game_Start" class="close-button">&#10006;</a>
                                    <h3 className='title'> 1st player :  </h3>
                                    <label className='label' >
                                        Player name : {nomJoueur1}
                                    </label>
                                </div>
                            ) : (
                                <form className='form' onSubmit={handleSubmit1}>
                                    <a href="/Game_Start" class="close-button">&#10006;</a>
                                    <h3 className='title'> 1st player : </h3>
                                    <label className='label' >
                                        Player name :
                                    </label>
                                    <input
                                        placeholder='Enter player name'
                                        className='input-container'
                                        name="nomJoueur1"
                                        value={nomJoueur1}
                                        type="text"
                                        onChange={e => setNomJoueur1(e.target.value)}
                                        required />

                                    <label className='label' >
                                        Game number
                                    </label>
                                    <input
                                        placeholder='Enter 3 different digits from 0 to 9'
                                        className='input-container'
                                        name="nbre1"
                                        type="password"
                                        maxLength={3}
                                        value={nbre1}
                                        onChange={e => setNbre1(e.target.value)}
                                        required />
                                    <button className='submit'>Submit</button>
                                </form>
                            )
                        }

                        {
                            validation2 ? (
                                <div className='form'>
                                    <a href="/Game_Start" class="close-button">&#10006;</a>
                                    <h3 className='title'> 2nd player :  </h3>
                                    <label className='label' >
                                        Player name : {nomJoueur2}
                                    </label>
                                </div>
                            ) : (
                                <form className='form' onSubmit={handleSubmit2}>
                                    <a href="/Game_Start" class="close-button">&#10006;</a>
                                    <h3 className='title'> 2nd player :  </h3>
                                    <label className='label' >
                                        Player name
                                    </label>
                                    <input
                                        placeholder='Enter player name'
                                        className='input-container'
                                            name="nomJoueur2"
                                            type="text"
                                            value={nomJoueur2}
                                            onChange={e => setNomJoueur2(e.target.value)}
                                            required />

                                        <label className='label' >
                                            Game number
                                        </label>
                                        <input
                                            placeholder='Enter 3 different digits from 0 to 9'
                                            className='input-container'
                                            name="nbre2"
                                            type="password"
                                            maxLength={3}
                                            value={nbre2}
                                            onChange={e => setNbre2(e.target.value)}
                                            required />
                                        
                                        <button className='submit'>Submit</button>
                                </form>
                            )
                        }
                    </div>
                )
            }

            {
                msgErreur ? (
                    <div style={{color:"red",display:'flex', justifyContent:'center'}}>
                        <h3>   
                            Le premier chiffre doit être différent de zéro. Les trois chiffres doivent être différents.
                        </h3>
                    </div>
                ) : (
                    <div>
                    </div>
                )
            }
        </div>
    );
}

export default Game_Start;