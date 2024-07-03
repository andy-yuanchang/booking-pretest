import React from 'react';
import Modal from './Modal';

interface LoadingProps {
  isOpen: boolean
  onClose: () => void
}

const Loading: React.FC<LoadingProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-center h-full">
        <img src="/loader.svg" alt="Loading" className="w-12 h-12 animate-spin" />
      </div>
    </Modal>
  );
};

export default Loading;