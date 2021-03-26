import React, { useState, updateTodo } from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Modal } from '@material-ui/core';
import './todo.css';
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function Todo(props) {
    const classes= useStyle();
    const [open,setOpen]=useState(false)
    const [input,setInput]=useState('');

    const handleOpen=()=>{
        setOpen(true);
    }

    const handleClose=()=>{
        setOpen(false);

       var updateTodo=()=>{
            db.collection('todos').doc(props.todo.id).set({
          todo:input
            },{merge:true})

            setOpen(false);
        }
    }
    return (
        <>
        <Modal
        open={open}
        onClose={e=>setOpen(false)}
        
        >
            <div className={classes.paper}>
                <h1>More Info</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event=>setInput(event.target.value)}/>
                    <button onClick={updateTodo}>Add</button>
                         
                
            </div>
        </Modal>
        <List className="list">
            <ListItemAvatar>
            
            </ListItemAvatar>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Reminder!!"></ListItemText>
                    <button onClick={e => setOpen(true)}>&#128394;&#65039;</button>
                
                <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}>&#10060;</DeleteIcon>
            </ListItem>
           
        </List>
        </>
    )
}

export default Todo
