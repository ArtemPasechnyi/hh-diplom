import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { FC } from "react";
import { ModalContainerProps } from "../model/interfaces";

export const ModalContainer: FC<ModalContainerProps> = (props) => {
  const {
    children,
    isOpen,
    setIsOpen,
    openButton,
    title,
    description,
    submitButton,
    onSubmitClick,
    declineButton,
  } = props;

  const { text, variant = "default", size = "sm" } = openButton;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button onClick={handleOpen} variant={variant} size={size}>
        {text}
      </Button>

      <DialogContent>
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}

          {!!description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>
        {children}

        {!!submitButton && (
          <DialogFooter>
            {!!declineButton && (
              <Button type="submit" size={"sm"} onClick={handleClose}>
                {declineButton}
              </Button>
            )}
            <Button type="submit" size={"sm"} onClick={onSubmitClick}>
              {submitButton}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
