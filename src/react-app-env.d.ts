/// <reference types="react-scripts" />
interface Window {
  Kakao: any
}

interface Data {
  url: string;
  id: number;
  imageSource?: string;
  createdAt?: string;
  description?: string;
}

interface ModalBaseProps {
  isOpenModal: boolean,
  closeModal: () => void,
}