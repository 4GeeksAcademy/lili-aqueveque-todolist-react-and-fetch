import React, { useState } from 'react';

const InputName =({ setUserName, setShowCardTasks, postData }) => {

    const [value, setValue] = useState('');


    const handleInputChange = (e) => {
        setValue(e.target.value);
    }


    const handleClickButton = async () => {
        try {
            setShowCardTasks(true);
            setUserName(value);
            const sendingPost = await postData() //post method to post the username only
            console.log('Sending Information', sendingPost)
        }
        catch (error) {
            console.log('There is an error', error)
        }   
    }


    return (
        <div className="container-md containerInput">
            
            <div>
                <h1 className="titleInput">This is TodoList Using React!</h1>
            </div>
            <div className="labelName">
                <label for="InputUserName" className='title'>Enter your Username:</label>
            </div>

            <div>
                <input
                type="text"
                id='userNameInput'
                value={value}
                onChange={handleInputChange}
                class='inputName'

                />

            </div>

            <div>
                <button type="button" className="btn btn-light name"
                onClick={handleClickButton}>Submit</button>
            </div>

        </div>
    )
}

export default InputName