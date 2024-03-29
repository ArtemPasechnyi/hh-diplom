import { ModeToggle } from "@/shared/ModeToggle/ui/ModeToggle";
import Link from "next/link";
import Image from "next/image";

import logo from "/src/public/icons/logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <div className="h-20 sticky flex items-center justify-between py-2 px-8 border-b-[2px]">
      <Link href="/">
        <Image src={logo} alt="svin logo" className="h-14 w-auto" priority />
      </Link>
      <div className="flex items-center justify-between gap-4">
        <ModeToggle />
        <Link href="/profile">
          <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
};
