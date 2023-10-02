import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Overlay } from "../components/Overlay/Overlay";

export type ModalContextProps = {
  setModalComponent: Dispatch<SetStateAction<JSX.Element | null>>;
  closeModal: VoidFunction;
};

type ModalProviderProps = {
  children: JSX.Element;
};

export const ModalContext = createContext<ModalContextProps | null>(null);

const ModalProvider = ({ children }: ModalProviderProps): JSX.Element => {
  const [modalComponent, setModalComponent] = useState<JSX.Element | null>(
    null
  );
  const closeModal = () => setModalComponent(null);
  return (
    <ModalContext.Provider value={{ setModalComponent, closeModal }}>
      {modalComponent ? <Overlay>{modalComponent}</Overlay> : null}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
