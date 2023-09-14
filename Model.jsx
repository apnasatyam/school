import "./Model.css"
import React, { useState } from 'react'

const Model = () => {
    const [showModel, setshowModel] = useState(false)
    const MyModel = () => {
        return <>
            <h1 className='welcome'>Welcome to Student registration form</h1>
            <form action="" method="post">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter your name' />
                <br />
                <label htmlFor="">Surname</label>
                <input type="text" placeholder='Enter your correct Surname' />
                <br />
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder='Enter your correct phone no.' />
                <br />
                <label htmlFor="">Address</label>
                <textarea name="Address" id="" cols="30" rows="10" placeholder='please fill your complete address'></textarea>
                <br />
                <label htmlFor="">Class</label>
                <input type="text" placeholder='Enter your current standard' />
                <br />
            </form>
            <button onClick={() => setshowModel(false)}>Submit</button>
        </>
    }
    return (
        <>
            <div><label type="text" />Click button to Add Students
                <button className='adbtn' onClick={() => setshowModel(true)}>Student <span className='plus'>+</span></button></div>

            {showModel && <MyModel />}
        </>
    )
}

export default Model