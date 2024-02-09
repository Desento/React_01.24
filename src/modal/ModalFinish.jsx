import { Button } from '../components/button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../navigation/routes';

export const ModalFinishQuiz = ({ onCancel, onConfirm }) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        onCancel();
    };

    const handleConfirm = () => {
        onConfirm();
    };

    return (
        <div>
            <p> Are you sure?</p>
            <Button text="Cancel" onClick={handleCancel} />
            <Button text='Confirm' onClick={handleConfirm} />
        </div>
    );
};