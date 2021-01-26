// Libs
import {Component} from 'react';
import {SearchBoxProps} from './search-box.model';

import './search-box.css'
import Search from '../../../images/search.svg'

export default class PropertyBox extends Component<SearchBoxProps> {
    
    render() {
        const {value} = this.props;
        return (
        <>
            <div className='search-box-container'>
                <img src={Search} alt=''/>
                <input className='search-box-field' type='text' value={value} placeholder='Найти'/>
                <button className='search-box-button'>Поиск</button>
            </div>
        </>
        );
    }
}