import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../reducers/todoSlice';
import './item.scss';

const Item = ({ id, name, description, dueDate }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = (event) => {
    event.preventDefault();
    dispatch(removeTodo(id));
  };

  return (
    <Card className="mb-3 shadow-sm item-card">
      <Card.Body>
        <Card.Title className="item-title">{name}</Card.Title>

        <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
        <Card.Text>{description}</Card.Text>

        <Card.Subtitle className="mb-2 text-muted">Due Date</Card.Subtitle>
        <Card.Text>{dueDate}</Card.Text>
      </Card.Body>

      <Card.Footer className="bg-transparent border-top-0 d-flex justify-content-end">
        <Button variant="info" onClick={handleRemoveClick}>
          Eliminar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Item;
