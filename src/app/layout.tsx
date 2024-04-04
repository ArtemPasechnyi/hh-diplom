import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Source_Code_Pro as SourceCodePro } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Main from "@/pages/Main/ui/Main";

const fontSans = SourceCodePro({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "HH analitics",
  description: "Diplom work",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Main>{children}</Main>
        </ThemeProvider>
      </body>
    </html>
  );
}
