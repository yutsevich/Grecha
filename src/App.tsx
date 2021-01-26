import React, {Component} from 'react';
import ToggleNamed from './components/common/toggle-named';
import ToggleCard from './components/common/toggle-card';

import './App.css';
import ProductInfo from './components/product/product-info';
import PropertyBox from './components/common/property-box';
import ProductInfoExtra from './components/product/product-info-extra';
import Header from './components/common/header/header';
import SearchBox from './components/common/search-box';


export default class App extends Component {

  state = {
    selectedId:"1"
  }

  constructor(props: any) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(selectedId: string) {
    this.setState({
      selectedId
    })
  }

	render() {
	const {selectedId} = this.state;	
		return (
			<div>
				<Header>
					<SearchBox value=''/>
				</Header>
				<div className='container'>
					<div>
						<div className='product-filter'>
							<ToggleNamed name='Цена' width={300}>
								<input/>
								<p>-</p>
								<input/>
							</ToggleNamed>
						</div>
						<div className='product-list'>
							<ToggleCard
								content={<ProductInfo/>}
								contentExtra={<ProductInfoExtra />}
								cardId='1'
								selectedId={selectedId}
								onSelect={this.onSelect}
							/>
							<ToggleCard
								content={<ProductInfo/>}
								contentExtra={<ProductInfoExtra />}
								cardId='3'
								selectedId={selectedId}
								onSelect={this.onSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}