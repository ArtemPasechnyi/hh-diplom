"use client";

import { FC, useState } from "react";

import { cn } from "@/lib/utils";
import { ModalContainer } from "@/shared/ModalContainer/ui/ModalContainer";
import { ISubmitButton } from "@/shared/ModalContainer/model/interfaces";
// import { IUser } from "@/widgets/header/features/AuthModal/interfaces";

const title: string = "Подтверждение входа";
const submitButton: ISubmitButton = {
  submitText: "Войти",
  link: "http://localhost:8080/auth/osu/login",
};
const declineButton: string = "Отмена";

const openButton = { text: "Вход" };

export const AuthModal: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //   const [user, setUser] = useState<IUser>();
  //   const [token, setToken] = useState<string>("");

  //   const { username } = user ?? {};

  //   const router = useRouter();

  //   useEffect(() => {
  //     setToken(localStorage.getItem("jwt") ?? "");
  //     setUser(JSON.parse(localStorage.getItem("user") ?? "{}"));

  //     const checkLogin = () => {
  //       const urlSearchParams = new URLSearchParams(window.location.search);
  //       const params = Object.fromEntries(urlSearchParams.entries());

  //       if (params.accessToken) {
  //         localStorage.setItem("jwt", params.accessToken);
  //         localStorage.setItem("user", params.user);
  //         setToken(params.accessToken);
  //         setUser(JSON.parse(params.user));
  //         router.push("/successRegistration");
  //       }
  //     };

  //     checkLogin();
  //   }, [router]);

  const handleSubmitClick = () => {
    setIsOpen(false);
  };
  return (
    <ModalContainer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      openButton={openButton}
      title={title}
      onSubmitClick={handleSubmitClick}
      submitButton={submitButton}
      declineButton={declineButton}
    >
      {/* {!token ? ( */}
      <div className="flex flex-col gap-2 my-4">
        <div className={cn("w-full h-auto")}>
          Вход будет осуществлён через сайт hh. Полученные данные будут хранится
          и использоваться только в рамках этого сайта. Авторизуясь, вы
          принимаете условия использования данного веб-сайта.
        </div>
        <div>
          В качестве условия использования этого веб-сайта вы гарантируете, что
          не будете использовать этот веб-сайт или любой контент, полученный с
          этого веб-сайта, для любых целей, которые являются незаконными или
          запрещены настоящими условиями.
        </div>
      </div>
      {/* ) : (
        <div>{username}, ты уже авторизован.</div>
      )} */}
    </ModalContainer>
  );
};
