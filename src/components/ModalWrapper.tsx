interface ModalWrapperProps {
  children: React.ReactNode
}

export default function ModalWrapper({ children }: ModalWrapperProps) {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </div>

  )
}