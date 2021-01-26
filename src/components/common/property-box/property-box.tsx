// Libs
import {Component} from 'react';
import {PropertyBoxProps} from './property-box.model';

import './property-box.css'

export default class PropertyBox extends Component<PropertyBoxProps> {
    
    render() {
        const {name, value, nameWidth} = this.props;
        return (
        <>
            <div className='property-box-container'>
                <p className='property-box-name' style={{minWidth: nameWidth}}>{name}</p>
                <p className='property-box-value'>{value}</p>
            </div>
        </>
        );
    }
}