// Libs
import {Component} from 'react';
import {ToggleNamedProps, ToggleNamedState} from './toggle-named.model';
import CheckboxImaged from '../checkbox-imaged';

// Media
import Plus from '../../../images/plus.svg'
import Minus from '../../../images/minus.svg'
import './toggle-named.css'

export default class ToggleNamed extends Component<ToggleNamedProps, ToggleNamedState> {

    constructor(props: ToggleNamedProps) {
        super(props);
        this.state = {isOpened:false}

        this.onToggle = this.onToggle.bind(this);
    }

    private onToggle(isOpened: boolean) {
        this.setState({isOpened});
    }

    public render() {

        const {name, width, children} = this.props;
        const {isOpened} = this.state;
        
        return (
			<>
				<div className='toggle-named-container'>
					<div>
						<p className='toggle-named-name' style={{minWidth: width}}>{name}</p>
						<CheckboxImaged
							isChecked={isOpened}
							onChange={this.onToggle}
							imageOff={Minus}
							imageOn={Plus}
						/>
					</div>
					{isOpened && (
						<div className='toggle-named-content'>{children}</div>
					)}
				</div>
			</>
		);
    }
    
}