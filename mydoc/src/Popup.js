import React from 'react';
import './Popup.css';
function Popup(props) {
  return (props.trigger)? (
    <div className='report'> 
        <div>
            { props.children }
        </div>
    </div>
  ):"";
}

export default Popup