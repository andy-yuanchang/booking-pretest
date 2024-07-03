import React from 'react';
import Modal from '@/components/Modal';

interface FlightNotFoundProps {
  isOpen: boolean;
  flightNumber: string;
  onRetry: () => void;
  onSubmit: () => void;
  onClose: () => void;
}

const FlightNotFound: React.FC<FlightNotFoundProps> = ({ isOpen, flightNumber, onRetry, onSubmit, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center min-h-48">
        <p className="text-lg font-semibold text-red-600">查不到「{flightNumber}」航班資訊</p>
        <p className="mt-2 text-gray-600">請確認航班資訊，趕局時務等。你也可以直接填寫寄此航班作為聯繫送出資訊。</p>
        <div className="mt-4 space-x-2">
          <button
            onClick={onRetry}
            className="px-4 py-2 font-medium text-white bg-gray-500 rounded hover:bg-gray-700"
          >
            重新填寫
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            確認航班資訊，並送出
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default FlightNotFound;