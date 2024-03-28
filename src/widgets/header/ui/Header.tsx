import { ModeToggle } from "@/app/shared/ModeToggle/ui/ModeToggle";
import Link from "next/link";

import logo from "../../../../public/header-logo.png";

export const Header = () => {
  return (
    <div className="h-20 sticky flex items-center justify-between py-2 px-8 border-b-[2px]">
      <Link href="/">
        {/* <Image src={logo} alt="svin logo" className="h-14 w-auto" priority /> */}
      </Link>
      <div className="flex items-center justify-between gap-4">
        <ModeToggle />
      </div>
    </div>
  );
};
