import React, { useRef } from 'react'
import StoreDetails from './StoreDetails';
import {useDispatch,useSelector} from 'react-redux';
import { useState } from 'react';


const AddDetails = () => {
  const dispatch=useDispatch();
  const details=useSelector(state=>state.add);
  const[show,setShow]=useState({display:'none'});
  // const[close,setClose]=useState(false);
    const pnameRef=useRef();
    const descRef= useRef();
    const contactRef=useRef();
    const bookingRef= useRef();
    const appointRef= useRef();
    const dnameRef= useRef();
    const handleClick=()=>{
     if(pnameRef.current.value==="" || descRef.current.value==="" || contactRef.current.value===""
     || bookingRef.current.value==="" || appointRef.current.value==="" || dnameRef.current.value===""){
        
      setShow({display:'block'});

     }
     else{
      setShow({display:'none'});
        let obj={
           Pname: pnameRef.current.value,
           Desc: descRef.current.value,
           Contact: contactRef.current.value,
           Booking: bookingRef.current.value,
           Appoint: appointRef.current.value,
           Dname: dnameRef.current.value
        }
        
        let arr=[...details,obj];
         pnameRef.current.value="";
         descRef.current.value="";
         contactRef.current.value="";
         bookingRef.current.value="";
         appointRef.current.value="";
         dnameRef.current.value="";
         
         dispatch({type:'ADD',payload:arr});
     }
    }
    // const handleClose=()=>{
    //   setClose(true);
    //   setShow({display:'none'});
    // }
  
  return (
    <div className='container-sm'>
    <h2 className='fs-3 fw-medium p-3 m-3 text-center font-monospace text-decoration-underline' style={{color:'#ffff'}}>Patient Online Appointment Database</h2>
   <div className='container-sm border border-secondary p-3' id='form'>
   <form className='container-sm' >
   <div className="alert alert-warning alert-dismissible fade show" role="alert" style={show}>
  <strong>Warning!</strong> You should fill in those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  <div className="mb-1 mt-2">
    <label className="form-label">Patient Name:</label>
    <input type="text" className="form-control text-capitalize fw-medium" id="pname"  ref={pnameRef}/>
  </div>
  <div className="mb-1 mt-2">
    <label className="form-label">Description:</label>
    <input type="text" className="form-control text-capitalize" id="desc" ref={descRef}/>
  </div>
  <div className="mb-1 mt-2">
    <label className="form-label">Contact No:</label>
    <input type="text" className="form-control text-capitalize" id="conc" ref={contactRef}/>
  </div>
  <div className="mb-1 mt-2">
    <label className="form-label">Booking Date:</label>
    <input type="date" className="form-control" id="bdate" ref={bookingRef}/>
  </div>
  <div className="mb-1 mt-2">
    <label className="form-label">Appointment Date:</label>
    <input type="date" className="form-control" id="adate" ref={appointRef}/>
  </div>
  <div className="mb-1 mt-2">
    <label className="form-label">Doctor Name:</label>
    <input type="text" className="form-control text-capitalize" id="dname" ref={dnameRef}/>
  </div>
  <div className='mt-3 d-flex justify-content-center'>
  <button type='button' className="btn btn-primary"  onClick={handleClick}>Add Details</button>
  </div>
</form>
</div>
    <hr />
    {details.length===0? null: <StoreDetails   />}
    </div>
  )
}

export default AddDetails