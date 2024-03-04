import { Button } from '../components/button';
import { ModalFinishQuizProps } from '../types/interfaces';

export const ModalFinishQuiz: React.FC<ModalFinishQuizProps> = ({ onCancel, onConfirm }) => {

    const handleCancel = () => {
        onCancel();
    };

    const handleConfirm = () => {
        onConfirm();
    };

    return (
        <div className='modal'>
            <p> Are you sure?</p>
            <div className='buttons'>
                <Button className='quiz-button' text="Cancel" onClick={handleCancel} />
                <Button className='quiz-button' text='Confirm' onClick={handleConfirm} />
            </div>
        </div>
    );
};
