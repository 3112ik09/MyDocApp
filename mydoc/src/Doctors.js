import React from 'react';
import Card from './Card';
import './Doctors.css';
function Doctors() {
  return (
    <div className='doctors'>
       <div >
         <Card name="Dr .Irene" img="/images/d1.png" desc="General Physician"contact="true"/>
      </div>

      <div name="Dr .Nihal">
         <Card name="Dr .Nihal" img="/images/d2.png"  desc="Cardiac Surgeons"contact="true"/>
      </div>

      <div name="Dr .Samay">
         <Card name="Dr .Samay" img="/images/d3.png" desc="paediatrician"contact="true"/>
      </div>
    </div>
  )
}

export default Doctors