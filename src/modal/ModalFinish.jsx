import { Button } from '../components/button';

export const ModalFinishQuiz = ({ onCancel, onConfirm }) => {

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