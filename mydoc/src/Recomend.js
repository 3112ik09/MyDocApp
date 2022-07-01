import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './Recomend.css';
import { Grid, TextField, } from '@material-ui/core';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Symptoms from './sym';
import { Global } from '@emotion/react';
import Popup from './Popup';
import { height } from '@mui/system';
function Recomend() {
    const [name ,setName] = useState();
    const [age ,setAge] = useState();
    const [selectedValue, setSelectedValue] = useState([]);
    const [report , setReport] = useState([{}]);
    const [show , setShow] = useState(false);
    function handleChange(e){
        setSelectedValue(Array.isArray(e) ? e.map(x =>x.value ) : []);
        console.log(selectedValue);
      }
    function handleClick(){
        var j=""
        var d=0;
        function addSym(item)
        {
          j=j+"-"+item;
          console.log(j);
        }
        selectedValue.forEach(addSym);
        console.log("the goning -->"+j);
        if(j!='')
        fetch("/api/?query="+j).then( response => response.json()
        ).then(data => { return setReport(data)});
        else
        {
        alert("Please Enter Symptons");
        d=-1
        }
        if(d==0)setShow(true);
        console.log(report);
    };

    function close(){
      setShow(false);
    }



  return (
    
    <div className='recomend'>

      <div className='recomend__info'>

            <TextField className='recomend__infoText' variant='outlined'
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            >

            </TextField>

            <TextField className='recomend__infoText' variant='outlined'
            label="Age"
            value={age}
            >

            </TextField>

            <TextField className='recomend__infoText' variant='outlined'
            label="Gender"
            >
            </TextField>
      </div>


        <h1>Online Recomendation</h1>
        <div className='data'>
          <h2>Select Symptoms</h2>
          <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
            Generate Report
          </Button>
        </div>
        <Select classNamePrefix="mySelect"
        options={Symptoms}
        onChange={handleChange}
  
        isMulti
        />
        <Popup trigger={show}>
                <h1>Patient   {name}</h1>
                <h1>Result</h1>
                <h2>{report["result"]}</h2>

                <p style={{maxWidth:"400px"}}>{report["Description"]}</p>
                <br></br>
                <h3>Precaution</h3>
                <ul>
                  <li>{report["Precaution_1"]}</li>
                  <li>{report["Precaution_2"]}</li>
                  <li>{report["Precaution_3"]}</li>
                  <li>{report["Precaution_4"]}</li>
                </ul>
                <br></br>
                <h3>Recomended Test</h3>
                <ul>
                  <li>{report["Tests"]}</li>
                </ul>
                <br></br>
                <button onClick={close} style={{height:"40px"}}><b>CLOSE</b></button>
        </Popup>
        
        
    </div>
  )
}

export default Recomend