// Libs
import {Component} from 'react';
import {ProductInfoProps} from './product-info.model';

import './product-info.css'

export default class ProductInfo extends Component<ProductInfoProps> {
    
    render() {
        return (
        <>
            <div className='product-info-container'>
                <div>
                    <img className='product-info-img' src='https://i2.rozetka.ua/goods/14397645/art_foods_4820191590977_images_14397645953.jpg'/>
                    <p className='product-info-name'>Крупы гречневые ArtFoods ядрица быстроразваривающаяся 1 кг (4820191590977)</p>
                    <p className='product-info-price'>55 UAH</p>
                </div>
            </div>
        </>
        );
    }
}