'use client';

import { HeaderDesktop } from '@/widgets/HeaderDesktop/ui/HeaderDesktop';
import { HeaderMobile } from '@/widgets/HeaderMobile/ui/HeaderMobile';
import { useEffect } from 'react';

const Main = ({ children }: any) => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
      const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
      fetch(
        `https://api.hh.ru/token?grant_type=authorization_code&client_id=${client_id}&client_secret=${client_secret}&code=${code}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
        .then((response) => response.json())
        .then((data) => console.log('data', data))
        .catch((error) => console.error('Error:', error));
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
