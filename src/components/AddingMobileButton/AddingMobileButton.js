import Button from 'react-bootstrap/Button';
import { PlusCircle } from 'react-bootstrap-icons';
import './AddingMobileButton.scss';

function AddingMobileButton() {
  return (
    <Button variant="info" className="btn-addgoal" aria-label="Agregar nueva meta">
      <PlusCircle className="me-2" />
      Agregar Meta
    </Button>
  );
}

export default AddingMobileButton;
