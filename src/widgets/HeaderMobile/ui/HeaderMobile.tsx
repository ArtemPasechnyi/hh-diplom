'use client';

import { BarChart2, ScrollText, LineChart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { ModeToggle } from '@/shared/ModeToggle/ui/ModeToggle';
import { AuthModal } from '@/widgets/Auth/ui/AuthModal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = (url: string) => {
    router.push(url);
    setIsOpen(false);
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
          onClick={handleOpen}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <div
              className="flex cursor-pointer items-center gap-2 text-lg font-semibold"
              onClick={() => handleClose('/')}
            >
              <BarChart2 className="h-6 w-6" />
            </div>
            <div
              className="mx-[-0.65rem] cursor-pointer flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              onClick={() => handleClose('/vacancies')}
            >
              <ScrollText className="h-5 w-5" />
              Вакансии
            </div>
            <div
              className="mx-[-0.65rem] cursor-pointer  flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              onClick={() => handleClose('/analytics')}
            >
              <LineChart className="h-5 w-5" />
              Аналитика
            </div>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full flex-1 items-center justify-end gap-4">
        <ModeToggle />
        <AuthModal />
      </div>
    </header>
  );
};