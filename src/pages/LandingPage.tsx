import React from 'react'
import {Link} from 'react-router-dom'
const LandingPage: React.FC = () => {
        return (
            <div className='flex' > 
                <Link to='/browse' className='m-4'>Browse</Link>
                <Link to='/game' className='m-4'>Play</Link>
            </div>
        );
}


export default LandingPage