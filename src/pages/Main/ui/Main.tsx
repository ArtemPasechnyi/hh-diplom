'use client';

import { HeaderDesktop } from '@/widgets/HeaderDesktop/ui/HeaderDesktop';
import { HeaderMobile } from '@/widgets/HeaderMobile/ui/HeaderMobile';
import { useEffect } from 'react';

const Main = ({ children }: any) => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetch(`api/authorize?${urlParams.toString()}`);
    }
  }, []);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <HeaderDesktop />
      <div className="flex flex-col">
        <HeaderMobile />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Main;
