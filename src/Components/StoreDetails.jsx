import React, { useState } from 'react'
import EditingPage from './EditingPage';
import { useSelector, useDispatch } from 'react-redux';


const StoreDetails = () => {
    const details = useSelector(state => state.add);
    const dispatch = useDispatch();
    const data = [...details];
    const [edit, setEdit] = useState(false);
    const [ind, setInd] = useState(-1)
    const handleEdit = (i) => {
        setEdit(true);
        setInd(i)
    }
    const edited = () => {
        setEdit(false)
    }
    const handleDlt = (index) => {
        data.splice(index, 1);
        dispatch({ type: "Delete", payload: data });
    }
    return (
        <>
            <div className='container table-responsive-sm '>
                
                    <table className="table table-striped table-bordered align-middle caption-top ">
                        <caption className='fw-bold mb-2 text-center text-decoration-underline bg-info-subtle text-dark text-emphasis-primary border border-info'>List of Patient Appointment</caption>
                        <thead className='table table-secondary table-striped text-center '>
                            <tr>
                                <th>Patient Id</th>
                                <th>Patient Name</th>
                                <th>Descritption</th>
                                <th>Contact No</th>
                                <th>Booking Date</th>
                                <th>Appointment Date</th>
                                <th>Doctor Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='table table-dark text-center fw-medium'>
                            {data.map((item, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.Pname}</td>
                                    <td>{item.Desc}</td>
                                    <td>{item.Contact}</td>
                                    <td>{item.Booking}</td>
                                    <td>{item.Appoint}</td>
                                    <td>{item.Dname}</td>
                                    <td>
                                        <div className='d-grid gap-2 d-md-flex justify-content-md-center'>
                                            <button type='button' className='btn btn-outline-secondary text-light' onClick={() => handleEdit(index)}>Edit</button>
                                            <button type='button' className='btn btn-outline-secondary text-light' onClick={() => handleDlt(index)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                

                {edit ? <EditingPage index={ind} edited={edited} /> : null}
            </div>

        </>
    )
}

export default StoreDetails