import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./item.scss";
import {
  removeTodo,
} from '../../reducers/todoSlice'
import { useDispatch } from 'react-redux';


function Item(props) {
  const dispatch = useDispatch();

  const removeItem = (e) => {
    e.preventDefault();
    console.log("Removing item: ", props);
    console.log(props.id);
      dispatch(removeTodo(props.id));
    }

  return (
    <Card >
      <Card.Body>
        <Card.Title >{props.name}</Card.Title>
        <Card.Text className="fw-bold">
          Description
        </Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text className="fw-bold">
          Due Date
        </Card.Text>
        <Card.Text>
          {props.dueDate}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        {/*<Button variant="info">Editar</Button>*/}
        <Button variant="info" onClick={removeItem}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;