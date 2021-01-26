// Libs
import {Component, CSSProperties} from 'react';
import {ToggleCardProps, ToggleCardState} from './toggle-card.model';
import './toggle-card.css'

export default class ToggleCard extends Component<ToggleCardProps, ToggleCardState> {

    render() {

		const {
			content,
            contentExtra,
            selectedId,
            cardId,
            width,
			onSelect,
        } = this.props; 

        const isSelected = cardId === selectedId;
        
        const selectedStyle: CSSProperties = isSelected
            ? {
                borderColor: '#fff', 
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'
            } 
            : {};

        return (
			<>
				<div
					className='toggle-card-container'
					style={{ minWidth: width, ...selectedStyle  }}
					onClick={() => onSelect(cardId)}
                    >
					<div>
						{content}
						{isSelected && contentExtra}
					</div>
				</div>
			</>
		);
	}

}