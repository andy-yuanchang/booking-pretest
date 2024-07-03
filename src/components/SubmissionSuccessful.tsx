import React from 'react';
import Modal from '@/components/Modal';

interface SubmissionSuccessfulProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmissionSuccessful: React.FC<SubmissionSuccessfulProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center min-h-48">
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <p className="mt-2 text-lg font-semibold text-green-600">完成送出行程</p>
      </div>
    </Modal>
  );
};

export default SubmissionSuccessful;