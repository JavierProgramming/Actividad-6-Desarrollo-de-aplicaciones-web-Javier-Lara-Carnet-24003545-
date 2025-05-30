import './App.scss';
import './components/todos'
 import { Todos } from './components/todos';
 import { Goals } from './components/goals';
import  Menu  from './components/Menu/menu'
import FormTaskAndGoal from './components/Form/form';
import Item from './components/Item/item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddingMobileButton from './components/AddingMobileButton/AddingMobileButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  initAddTodo,
} from './reducers/todoSlice'
import {
} from './reducers/goalsSlice'

function App() {
  const todos = useSelector((state) => state.todos.value);
  const option = useSelector((state) => state.option.value);
  const goals = useSelector((state) => state.goals.value);
  const dispatch = useDispatch();

  async function initFetch() {
      fetch('http://localhost:3001/tasks/getTasks',{
        headers:{
          "Content-Type": "application/json",
          "Authorization": "123456"
        },
      }).then((response)=>
          response.json()
      ).then(response=>{
        console.log(response);
        response.map((task)=>{
          dispatch(initAddTodo(task));
        })
      }).catch((err)=>{
          console.log(err);
      });
  }
  
  useEffect(() => {
    initFetch();
  }, []);

  return (
    <div className="App">
      <Menu/>
      {/*<Todos/> 
      <Goals/>*/} 

      <Container>
      <Row>
        <Col xs={0} md={0}  className='d-none d-sm-block d-sm-none d-md-block '><FormTaskAndGoal/></Col>
        <Col xs ={0}  sm ={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div ' >
              <AddingMobileButton className='float-left'/>
            </div>
          </Row>
          <Row>
          <div className='scrolling'>
            {option==='tasks' &&
                todos.map((todo, index)=>(
                  <Item key={index} name={todo.name} description={todo.description} dueDate={todo.dueDate} id={todo._id}/>
   
                 ))
            }      
           {option==='goals' &&
                goals.map((goal, index)=>(
                  <Item key={index} name={goal.name} description={goal.description} dueDate={goal.dueDate} d={goal.id}/>
   
                 ))
            }      
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
