import React, {useState} from 'react'
import NameForm from './NameForm'
import Name from './Name';

function NameList() {

    //new names (a state variable), and setNames function to update this "names" value
    const [names, setNames] = useState([]);

    const addName = name => {
        //make sure if user enter text or not, and check space
        if (!name.text || /^\s*$/.test(name.text)){
            return;
        }

        const newNames = [name, ...names];

        setNames(newNames);

        //F12 check console logs for input and debug
        //console.log(name, ...names);
    }

    const updateName = (nameId, newValue) => {
        //make sure if user enter text or not when update(edit), and check space
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setNames(prev => prev.map(item => (item.id === nameId ? newValue : item)))
    }


    const removeName = id => {
        const removeArr = [...names].filter(name => name.id !== id)
        //console.log(...names);
        setNames(removeArr);
    }

    const completeName = id => {
        let updatedNames = names.map(name => {
            if (name.id === id){
                name.isComplete = !name.isComplete;
            }
            return name;
        });
        setNames(updatedNames);
    }

  return (
    <div>
        <h1>Customer name lists</h1>
        <NameForm onSubmit={addName} />
        <Name 
            names={names} 
            completeName={completeName} 
            removeName={removeName} 
            updateName={updateName} 
        />
    </div>
  )
}

export default NameList