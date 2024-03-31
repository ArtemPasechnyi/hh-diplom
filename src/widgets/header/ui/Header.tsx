import { ModeToggle } from "@/shared/ModeToggle/ui/ModeToggle";
import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <div className="h-20 sticky flex items-center justify-between py-2 px-8 border-b-[2px]">
      <Link href="/">
        <div className="text-3xl border rounded-lg px-2 bg-primary text-primary-foreground">
          <span>HH</span> аналитика
        </div>
      </Link>
      <div className="flex items-center justify-between gap-4">
        <ModeToggle />

        <Link href="/">
          <Avatar>
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
};
