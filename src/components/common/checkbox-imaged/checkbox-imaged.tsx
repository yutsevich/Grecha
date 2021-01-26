// Libs
import {Component} from 'react';
import {CheckboxImagedProps} from './checkbox-imaged.model';

export default class CheckboxImaged extends Component<CheckboxImagedProps> {

    render() {
        const { imageOn, imageOff, isChecked, alt, onChange } = this.props;
        return (
			<>
				<img
					src={isChecked ? imageOff : imageOn}
					alt={alt || ''}
					onClick={() => onChange(!isChecked)}
				/>
			</>
		);
    }
}