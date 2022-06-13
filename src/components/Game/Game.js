import React from 'react';
import {useLocation} from 'react-router-dom';
import winnerLogo from '../../assets/winner.gif';
import { useNavigate } from 'react-router-dom';
import './GameStyle.css';


function Game() {
    const location = useLocation();

    const nbre1 = location.state.nbre1;
    const nbre2 = location.state.nbre2;

    const [nbre, setNbre] = React.useState();
    // const [calculateN, setCalculateN] = React.useState();
    // const [calculateNB, setCalculateNB] = React.useState();

    const [listJoueur1, setListJoueur1] = React.useState([
                                                // {"Nbre":"123", "N": 1, "NB": 2},
                                                // {"Nbre":"345", "N": 1, "NB": 2},
                                            ]);
    const [listJoueur2, setListJoueur2] = React.useState([
                                                // {"Nbre":"123", "N": 1, "NB": 2},
                                                // {"Nbre":"345", "N": 1, "NB": 2},
                                            ]);

    const [gagnant, setGagnant] = React.useState(false);
    const [joueurGagnant, setJoueurGagnant] = React.useState("");

    // const add_nbre_to_list = (nbre_entred) => {

    // }

    const [player1Turn, setPlayer1Turn] = React.useState(true);

    const n = (nbr1, nbr2) => {
        if (nbr1 === nbr2) {
            return 3;
        } else {
            let count = 0;
            if (nbr1[0] == nbr2[0]) {
                count++;
            }
            if (nbr1[1] == nbr2[1]) {
                count++;
            }
            if (nbr1[2] == nbr2[2]) {
                count++;
            }
            return count;
        }
    }

    const nb = (nbr1, nbr2) => {
        
        let count = 0;
        if (nbr1[0] == nbr2[1]) {
            count++;
        }
        if (nbr1[0] == nbr2[2]) {
            count++;
        }
        if (nbr1[1] == nbr2[0]) {
            count++;
        }
        if (nbr1[1] == nbr2[2]) {
            count++;
        }
        if (nbr1[2] == nbr2[0]) {
            count++;
        }
        if (nbr1[2] == nbr2[1]) {
            count++;
        }
        return count;
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // reste à ajouter le nombre dans la liste
        if (player1Turn) {
            // Calculer N : 

            // Calculer NB : 
            setListJoueur1([...listJoueur1, {"Nbre": nbre, "N": n(nbre, nbre2), "NB": nb(nbre, nbre2)}]);
            if (n(nbre, nbre2) == 3) {
                setGagnant(true);
                setJoueurGagnant(location.state.nomJoueur1);
            }
        } else {
            if (n(nbre, nbre1) == 3) {
                setGagnant(true);
                setJoueurGagnant(location.state.nomJoueur2);
            }
            setListJoueur2([...listJoueur2, {"Nbre": nbre, "N": n(nbre, nbre1), "NB": nb(nbre, nbre1)}]);
        }
        setPlayer1Turn(!player1Turn);
        setNbre("");
    };

    const history = useNavigate();
    const handleSubmit1 = (event) => {
        event.preventDefault();
        history('/');
    }

    return (
        <div>
            {
                gagnant ? (
                    <div class="container1">
                        <div class="left-side">
                            <div class="title2">
                                Le joueur {joueurGagnant} a gagné !
                            </div>
                        </div>
                        <div class="pg">
                            <img class='labo' style={{width:400}} src={winnerLogo} alt= "winner" onClick={handleSubmit1}/>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div style={mainStyle}>
                            <div style = {divStyle}>
                                
                                <table style={tableStyle}>
                                    <tbody>
                                        <tr>
                                            <th></th>
                                            <th> {location.state.nomJoueur1} </th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                        <th style={thStyle}>Nbre</th>
                                        <th style={thStyle}>N</th>
                                        <th style={thStyle}>NB</th>
                                        </tr>
                                        {listJoueur1.map(({ Nbre, N, NB }) => (
                                            <tr key={Nbre}>
                                                <td style={tdStyle}>{Nbre}</td>
                                                <td style={tdStyle}>{N}</td>
                                                <td style={tdStyle}>{NB}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div style = {divStyle}>
                                <table style={tableStyle}>
                                    <tbody>
                                        <tr>
                                            <th></th>
                                            <th> {location.state.nomJoueur2} </th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th style={thStyle}>Nbre</th>
                                            <th style={thStyle}>N</th>
                                            <th style={thStyle}>NB</th>
                                        </tr>
                                        {listJoueur2.map(({ Nbre, N, NB }) => (
                                            <tr key={Nbre}>
                                                <td style={tdStyle}>{Nbre}</td>
                                                <td style={tdStyle}>{N}</td>
                                                <td style={tdStyle}>{NB}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='form-container'>
                            {player1Turn ? (
                                <form className='form' onSubmit={handleSubmit}>
                                    <h3 className='title'> 1st player : </h3>
                                    <label className='label' >
                                        {location.state.nomJoueur1}'s turn
                                    </label>
                                    <input
                                        placeholder='Enter your number ...'
                                        className='input-container'
                                        name="nbre1"
                                        type="text"
                                        maxLength={3}
                                        value={nbre}
                                        onChange={e => setNbre(e.target.value)}
                                        required />
                                    <button className='submit'>Submit</button>
                                </form>
                            ) : (
                                <form className='form' onSubmit={handleSubmit}>
                                    <h3 className='title'> 2nd player : </h3>
                                    <label className='label' >
                                        {location.state.nomJoueur2}'s turn
                                    </label>
                                    <input
                                        placeholder='Enter your number ...'
                                        className='input-container'
                                        name="nbre1"
                                        type="text"
                                        maxLength={3}
                                        value={nbre}
                                        onChange={e => setNbre(e.target.value)}
                                        required />
                                    <button className='submit'>Submit</button>
                                </form>
                            )}
                            
                        </div>
                    </div>
            )}
        </div>
        
    );
}

export default Game;

const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
}
const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center',
    width: '100%'
}

const divStyle = {
    margin: 20
}

const tdStyle = {
  	border: '1px solid #85C1E9',
    background: 'white',
    padding: '5px'
};

const thStyle = {
  	border: '1px solid black',
    background: '#3498DB',
  	color: 'white',
    padding: '5px'
};
