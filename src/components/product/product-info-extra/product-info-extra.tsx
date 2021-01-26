// Libs
import React, {Component} from 'react';
import {ProductInfoExtraProps} from './product-info-extra.model';
import Chart from "react-apexcharts";

import './product-info-extra.css'
import PropertyBox from '../../common/property-box';


export default class ProductInfoExtra extends Component<ProductInfoExtraProps> {
    render() {

        const nameWidth = 130;

        const test = {
			options: {
				xaxis: {
					categories: [
						1991,
						1992,
						1993,
						1994,
						1995,
						1996,
						1997,
						1998,
						1999,
					],
				},
			},
			series: [
				{
					name: 'series-1',
					data: [30, 40, 45, 50, 49, 60, 70, 91],
				},
			],
		};

        return (
			<>
				<div className='product-info-extra-container'>
                    <div>
                        <div>
                            <PropertyBox name='Магазин' value='Rozetka' nameWidth={nameWidth}/>
                            <PropertyBox name='Упаковка' value='Бумажная' nameWidth={nameWidth}/>
                            <PropertyBox name='Вес' value='666 г' nameWidth={nameWidth}/>
                        </div>
                        <a className='product-info-extra-buy'>Купить</a>
                    </div>
                    <Chart options={test.options} series={test.series} height='200px' width='100%' type='line'/>
                </div>
			</>
		);
    }
}
