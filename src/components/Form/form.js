import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './form.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todoSlice';
import { addGoal } from '../../reducers/goalsSlice';
import { useRef } from 'react';

function FormTaskAndGoal() {
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    const name = inputRefName.current.value.trim();
    const description = inputRefDescription.current.value.trim();
    const dueDate = inputRefDueDate.current.value;

    if (name && description && dueDate) {
      const newItem = { name, description, dueDate };

      if (option === 'tasks') {
        dispatch(addTodo(newItem));
      } else {
        dispatch(addGoal(newItem));
      }

      // Limpieza del formulario después de agregar
      inputRefName.current.value = '';
      inputRefDescription.current.value = '';
      inputRefDueDate.current.value = '';
    } else {
      console.log('Por favor completa todos los campos.');
    }
  };

  return (
    <div className="space">
      <Form>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Escribe un nombre" ref={inputRefName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Describe tu tarea o meta" ref={inputRefDescription} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFechaLimite">
          <Form.Label>Fecha límite</Form.Label>
          <Form.Control type="date" ref={inputRefDueDate} />
        </Form.Group>

        <Button variant="info" onClick={addItem}>
          {option === 'tasks' ? 'Agregar Tarea' : 'Agregar Meta'}
        </Button>
      </Form>
    </div>
  );
}

export default FormTaskAndGoal;
