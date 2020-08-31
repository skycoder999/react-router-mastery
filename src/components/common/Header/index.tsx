import React from 'react';
import * as SC from './styled';
import Navigation from '../Navigation';

const Footer: React.FC = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
            <SC.Logo>
                Router Mastery
                <div style={{ fontSize: '12px' }}>Designed & Developed By - Amreen Sultan</div>
            </SC.Logo>
            <Navigation />
        </div >
    )
}

export default Footer
