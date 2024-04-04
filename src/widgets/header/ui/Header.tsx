import { ModeToggle } from "@/shared/ModeToggle/ui/ModeToggle";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AuthModal } from "../features/Auth/ui/AuthModal";

export const Header = () => {
  return (
    <div className="h-20 flex items-center justify-between py-2 px-8 border-b-[2px]">
      <Link href="/">
        <div className="text-3xl border rounded-lg px-2 bg-primary text-primary-foreground">
          аННалитика
        </div>
      </Link>

      <Link href="/vacancies">
        <Button>Поиск</Button>
      </Link>

      <div className="flex items-center justify-between gap-4">
        <ModeToggle />

        {/* {token ? (
          <div className="flex flex-row gap-2 items-center">
            <div>{username}</div>
            <Image
              src={avatarUrl}
              alt="avatar"
              width="48"
              height="48"
              className="rounded-lg"
            />
          </div>
        ) : (
          <AuthModal />
        )} */}
        <AuthModal />
      </div>
    </div>
  );
};
