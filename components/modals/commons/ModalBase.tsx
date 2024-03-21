import Dimmed from '@/components/dimmed/Dimmed'

interface ModalProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const ModalBase = ({children, onClick}: ModalProps) => {
  return (
  <>
    <Dimmed onClick={onClick}/>
    <div className="modal">
      {children}
    </div>
  </>
  )
}

export default ModalBase