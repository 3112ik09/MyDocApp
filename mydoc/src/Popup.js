import React from 'react';
import './Popup.css';
function Popup(props) {
  return (props.trigger)? (
    <div className='report'> 
        <div className='report__child'>
            { props.children }
        </div>
    </div>
  ):"";
}

export default Popup