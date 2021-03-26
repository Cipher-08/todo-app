// import logo from './logo.svg';
import React, { useState, useEffect} from 'react'
import Todo from './todo'
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import firebase from 'firebase';
// import IconButton from '@material-ui/core/IconButton';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['']);
  const [input,setInput]= useState('')
  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
     
      setTodos(snapshot.docs.map(doc =>({id:doc.id, todo:doc.data().todo})))
    })
  },[input]);
  // console.log(input)
  const addTodo = (event)=>{
    //this will fire off when we will click on that button
    // console.log("I am a button !! and I am working ")
    event.preventDefault();//stops refreshing

    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input])
    setInput('');
  }

  return (
    <div className="App">
      
      <h1>Todo App &#128640; </h1>
        <form>
        <input placeholder="&#10004; Enter the task" class="input" value={input} onChange={event => setInput(event.target.value)} />
        <AddIcon />
        <button disabled={!input} class="btn" type="submit" onClick={addTodo}>!Add Todo!</button>
        </form>
       
        <ul>
         {todos.map(todo=>(
           <Todo todo={todo}/>
          //  <li>{todo}</li>
         ))}
        </ul>
      
    </div>
  );
}

export default App;
