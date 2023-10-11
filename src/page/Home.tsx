import React, {JSX} from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Home(): JSX.Element {
    return (
        <div className='App-header'>
            <div className='App-link'>
                <Link to={'/login'}>
                    <Button type='button' variant='outline-info'>Login</Button>
                </Link>
                <Link to={'/register'}>
                    <Button type='button' variant='outline-primary'>Register</Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;