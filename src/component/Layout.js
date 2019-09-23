import React from 'react';
import NavBar from '../component/NavBar';

function  Layout(props)
{
    // const Children = props.Children;
    return(
        <React.Fragment>
            <NavBar/>
            {props.children}
        </React.Fragment>
    );
}

export default Layout;