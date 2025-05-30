import './App.scss';
import { Todos } from './components/todos';
import { Goals } from './components/goals';
import Menu from './components/Menu/menu';
import FormTaskAndGoal from './components/Form/form';
import Item from './components/Item/item';
import AddingMobileButton from './components/AddingMobileButton/AddingMobileButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initAddTodo } from './reducers/todoSlice';

function App() {
  const todos = useSelector((state) => state.todos.value);
  const goals = useSelector((state) => state.goals.value);
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch('http://localhost:3001/tasks/getTasks', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '123456',
          },
        });
        const data = await response.json();
        data.forEach((task) => dispatch(initAddTodo(task)));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    fetchTodos();
  }, [dispatch]);

  return (
    <div className="App">
      <Menu />

      <Container>
        <Row>
          {/* Formulario solo visible en pantallas md en adelante */}
          <Col xs={0} md={0} className="d-none d-sm-block d-sm-none d-md-block">
            <FormTaskAndGoal />
          </Col>

          <Col xs={12}>
            {/* Botón flotante en mobile */}
            <Row className="d-md-none">
              <div className="bg-transparent overlapping-div">
                <AddingMobileButton className="float-left" />
              </div>
            </Row>

            {/* Lista de tareas o metas */}
            <Row>
              <div className="scrolling">
                {option === 'tasks' &&
                  todos.map((todo, index) => (
                    <Item
                      key={todo._id || index}
                      name={todo.name}
                      description={todo.description}
                      dueDate={todo.dueDate}
                      id={todo._id}
                    />
                  ))}

                {option === 'goals' &&
                  goals.map((goal, index) => (
                    <Item
                      key={goal.id || index}
                      name={goal.name}
                      description={goal.description}
                      dueDate={goal.dueDate}
                      id={goal.id}
                    />
                  ))}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
