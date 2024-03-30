import { Separator } from "@/components/ui/separator";

import styles from "./LoginTitle.module.css";

export const LoginTitle = () => {
  return (
    <div className={styles.root}>
      <Separator />
      <div className="text-4xl">Вход</div>
      <Separator />
    </div>
  );
};
