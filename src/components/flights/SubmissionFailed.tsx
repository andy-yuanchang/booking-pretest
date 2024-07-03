import React from 'react';
import Modal from '@/components/common/Modal';

interface SubmissionFailedProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string
}

const SubmissionFailed: React.FC<SubmissionFailedProps> = ({ isOpen, onClose, message = '' }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="absolute bottom-0 sm:static bg-white rounded-lg p-4 z-10 max-w-full sm:max-w-md mx-auto w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col items-center justify-center min-h-48">
          <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <p className="mt-2 text-lg font-semibold text-red-600">送出行程失敗</p>
          <p className="mt-2 text-gray-600">請稍後再試。</p>
          {message && <p className="mt-2 text-gray-600">{message}</p>}
        </div>
      </div>
    </Modal>
  );
};

export default SubmissionFailed;