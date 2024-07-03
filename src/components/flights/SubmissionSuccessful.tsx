import React from 'react';
import Modal from '@/components/common/Modal';

interface SubmissionSuccessfulProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmissionSuccessful: React.FC<SubmissionSuccessfulProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="absolute bottom-0 sm:static bg-white rounded-lg p-4 z-10 max-w-full sm:max-w-md mx-auto w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col items-center justify-center min-h-48">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <p className="mt-2 text-lg font-semibold text-green-600">完成送出行程</p>
        </div>
      </div>
    </Modal>
  );
};

export default SubmissionSuccessful;