import "./globals.css";
import { raleway } from "./fonts/fonts";
import { cn, constructMetadata } from "@/lib/utils";
import Providers from "@/components/providers/Providers";
import NavBar from "@/components/NavBar";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={raleway.className}>
      <body>
        <Providers>
          <main className='min-h-full flex flex-col'>
            <NavBar />
            <div className='flex-grow flex-1'>{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
