import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

type Props = {
    text: string,
}

const RedirectToContact = ({text} : Props) => {
    return (
        <div className='redirect'>
            <Container>
                <Link to="/contact" className='btn btn--primary'>
                    {text}
                </Link>
            </Container>
            
        </div>
    );
};

export default RedirectToContact;