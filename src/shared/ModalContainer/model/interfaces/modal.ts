import { Dispatch, SetStateAction } from "react";
import { IOpenButton } from "./openButton";

export interface ModalContainerProps {
  children: string | JSX.Element;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  title?: string;
  description?: string;
  submitButton?: string;
  declineButton?: string;
  onSubmitClick?: () => void;
  openButton: IOpenButton;
}
