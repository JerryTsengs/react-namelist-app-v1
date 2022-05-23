import React, {useState} from 'react'
import NameForm from './NameForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Name({ names, completeName, removeName, updateName }) {

    //new edit (a state variable), and setEdit function to update this "edit" value
    const [ edit, setEdit ] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateName (edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    }

    if (edit.id) {
        return <NameForm edit={edit} onSubmit={submitUpdate} />;
    }

   //use map() function view all name array(values) and pass to below remove and edit functions
  return names.map((name, index) => (
    //change backgroup color when click any names
    //To know which name list is clicking on
    //create icons(RiCloseCircleLine, TiEdit) and icons functions
    <div 
        className={name.isComplete ? 'name-row complete' : 'name-row'} 
        key={index}
    >
        <div key={name.id} onClick={() => completeName(name.id)}>
            {name.text}
        </div>

        <div className='icons'>
            <RiCloseCircleLine 
            onClick={() => removeName(name.id)}
            className='delete-icon'
            />
            <TiEdit 
            onClick={() => setEdit({ id: name.id, value: name.text })}
            className='edit-icon'
            />
        </div>

    </div>
  ))
}

export default Name