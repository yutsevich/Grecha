// Libs
import {Component} from 'react';
import {HeaderProps, HeaderState} from './header.model';

import './header.css'

export default class Header extends Component<HeaderProps, HeaderState> {

    render() {

        const {children} = this.props;

        return (
            <>
                <header className='header-container'>
                    <p>Grecha</p>
                    <div className='header-children'>
                        {children}
                    </div>
                </header>
                <div className='header-invisible-height'></div>
            </>
        )
    }
}