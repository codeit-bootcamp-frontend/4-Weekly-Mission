import './Dimmed.css';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Dimmed = ({onClick}: Props) => {
  return <div className="dimmed" onClick={onClick}/>
}

export default Dimmed