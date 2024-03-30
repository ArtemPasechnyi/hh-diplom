import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SignLink = () => {
  return (
    <Link href="/signin">
      <Button variant="link">Link</Button>
    </Link>
  );
};
