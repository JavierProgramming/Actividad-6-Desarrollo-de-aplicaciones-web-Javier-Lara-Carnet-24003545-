import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './form.scss'
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
} from '../../reducers/todoSlice'
import {
  addGoal
} from '../../reducers/goalsSlice'
import { useRef } from "react";

function FormTaskAndGoal() {
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();

const addItem = (e) => {
  e.preventDefault();
    console.log(inputRefName.current.value);
    if(inputRefName.current.value && inputRefDescription.current.value && inputRefDueDate.current.value){
      if(option==="tasks"){
        dispatch(addTodo({'name': inputRefName.current.value,'description':inputRefDescription.current.value,'dueDate':inputRefDueDate.current.value}));
      }else{
        dispatch(addGoal({'name': inputRefName.current.value,'description':inputRefDescription.current.value,'dueDate':inputRefDueDate.current.value}));
      }
      
    }
  }

  return (
  <div className='space'>
       <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" ref={inputRefName}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} ref={inputRefDescription}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="name@example.com" ref={inputRefDueDate}/>
      </Form.Group>
      {(option==='tasks')&&
         <Button variant="info"  onClick={addItem}>Add Tasks</Button>
      }
      {(option==='goals')&&
         <Button variant="info"  onClick={addItem}>Add Goal</Button>
      }
    </Form>
  </div>
 
  );
}

export default FormTaskAndGoal;