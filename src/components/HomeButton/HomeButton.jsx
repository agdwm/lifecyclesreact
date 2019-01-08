import React, { useState, useEffect } from 'react'; // useEffect es un "substitutivo" de los componentDidXxx

function HomeButton(props) {
    // inicializa una variable (count) y una funcion que va a setear esa variable (setCount)
    // esto seria lo equivalente que hacer un this.state = { count } y this.setState({ count: var}) en un componente clase
    const [buttonName, setName] = useState('Enter god mode');

    useEffect(()=>{ // una vez updateado el componente comprobamos si estamos en Home y seteamos con el hook el nombre segun el caso
      var name = 'Enter god mode';
      if (!props.isHome) {
        name = 'Kill this person';
      } 
      setName(name);
    });

    return (
        <div>
            <button className='home-button' onClick={props.onClickIsHome}> {buttonName} </button>
        </div>
    );
}

export default HomeButton;