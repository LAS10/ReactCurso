import React from 'react';
import md5 from 'md5';

function Gravatar(props)
{
    const correo = props.email;
    const hash = md5(correo);

    return(
        <img className={props.className} src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="Foto Perfil"/>
    )
}

export default Gravatar;