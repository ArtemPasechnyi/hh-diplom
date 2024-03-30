import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC, SyntheticEvent, useState } from "react";
import { EPasswordType } from "../model/enums";

import { EyeOpenIcon, EyeNoneIcon } from "@radix-ui/react-icons";

export const PasswordInput: FC = () => {
  const [type, setType] = useState<EPasswordType>(EPasswordType.PASSWORD);

  const handleType = (event: SyntheticEvent) => {
    event.preventDefault();
    switch (type) {
      case EPasswordType.PASSWORD: {
        setType(EPasswordType.TEXT);
        break;
      }
      case EPasswordType.TEXT: {
        setType(EPasswordType.PASSWORD);
        break;
      }
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type={type} name="password" placeholder="Пароль" required />

      <Button variant="outline" size="icon" onClick={handleType}>
        {type === EPasswordType.PASSWORD ? (
          <EyeOpenIcon className="h-4 w-4" />
        ) : (
          <EyeNoneIcon className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};
