import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = (props) => {
  const {header, subHeader, captionOnAction, captionOnCancel} = props;
  const {onAction, onCancel} = props;
  const {form} = props;
  
  const showSubHeader = subHeader ? <small className="align-self-end">({subHeader})</small> : null;
  const showBody = form ? form : <p className="text-muted">Здесь должна быть форма объекта</p>;
  
  return(
    <div className="card border-dark mb-3">
	  <div className="card-header">
		<div className="row justify-content-between mx-1">
		  <h5>{header}</h5>
		  {showSubHeader}
		</div>
	  </div>
	  <div className="card-body">
		{showBody}
	  </div>
	  <div className="card-footer bg-transparent">
		<div className="row justify-content-between mx-1">
		  <button type="button" className="btn btn-link btn-sm"
				  onClick={() => onCancel()}>
			{captionOnCancel}
		  </button>
		  <button type="button" className="btn btn-primary btn-sm"
				  onClick={() => onAction()}>
			{captionOnAction}
		  </button>
		</div>
	  </div>
	</div>
  );
};

Card.defaultProps = {
  captionOnAction: 'Ok',
  captionOnCancel: 'Cancel'
};

Card.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
  captionOnAction: PropTypes.string,
  captionOnCancel: PropTypes.string,
  onAction: PropTypes.func,
  onCancel: PropTypes.func
};

export default Card;
