import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginTitle } from "../widgets/LoginTitle/ui/LoginTitle";
import { PasswordInput } from "../widgets/PasswordInput/ui/PasswordInput";

import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.root}>
      <form className="flex flex-col gap-4 min-w-fit w-96">
        <LoginTitle />
        <Input type="email" name="email" placeholder="Email" required />
        <PasswordInput />
        <Button type="submit">Войти</Button>
      </form>
    </div>
  );
};
