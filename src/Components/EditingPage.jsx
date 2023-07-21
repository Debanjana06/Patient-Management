import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const EditingPage = ({index,edited}) => {
  const details=useSelector(state=>state.add);
  const dispatch=useDispatch();
const data=[...details];
    const pnameRef=useRef();
    const descRef= useRef();
    const contactRef=useRef();
    const bookingRef= useRef();
    const appointRef= useRef();
    const dnameRef= useRef();
    useEffect(() => {
       pnameRef.current.value=data[index]?.Pname;
       descRef.current.value=data[index]?.Desc;
       contactRef.current.value=data[index]?.Contact;
       bookingRef.current.value=data[index]?.Booking;
       appointRef.current.value=data[index]?.Appoint;
       dnameRef.current.value=data[index]?.Dname;
    }, [index])
    const handleSave=()=>{
      let newArr= [...data];
      newArr[index]={
        Pname:pnameRef.current.value,
        Desc:descRef.current.value,
        Contact:contactRef.current.value,
        Booking:bookingRef.current.value,
        Appoint:appointRef.current.value,
        Dname:dnameRef.current.value
      }
      dispatch({type:'Update',payload:newArr});
      edited();
    }
  return (
    <>
    <div className="row g-2 align-items-center caption-top">
      <caption className='text-center mb-3 mt-3 fw-bold text-decoration-underline bg-light text-dark border border-secondary'>Update the patient's details</caption>
      <div className="col-md text-center">
      <label className="form-label border fw-medium text-light p-1">Patient Name:</label>
      <input className="form-control-sm border border-secondary m-1 fw-medium" type="text" ref={pnameRef}/>
      <label className="form-label border fw-medium text-light p-1">Description:</label>
      <input className="form-control-sm border border-secondary m-1 fw-medium" type="text" ref={descRef}/>
      <label className="form-label border fw-medium text-light p-1">Contact No:</label>
      <input className="form-control-sm border border-secondary m-1 fw-medium" type="text" ref={contactRef}/>
      <label className="form-label border fw-medium text-light p-1">Booking Date:</label>
      <input className="form-control-sm border border-secondary m-1 fw-medium" type="date" ref={bookingRef}/>
      <label className="form-label border fw-medium text-light p-1">Appointment Date:</label>
      <input className="form-control-sm border border-secondary m-1 fw-medium" type="date" ref={appointRef}/>
      <label className="form-label border fw-medium text-light p-1">Doctor Name:</label>
      <input className="form-control-sm border border-secondary m-1 fw-medium" type="text" ref={dnameRef}/>
      </div>
      <div className='mt-3 d-flex justify-content-center'>
      <button type='button' className='btn btn-primary fw-medium mb-3' onClick={()=>handleSave(index)}>Save Change</button>
      </div>
    </div>
    
    </>
  )
}

export default EditingPage