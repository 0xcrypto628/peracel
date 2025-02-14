import "./globals.css";
import { raleway } from "./fonts/fonts";
import { constructMetadata } from "@/lib/utils";
import Providers from "@/components/providers/Providers";

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
          <main className='min-h-full flex flex-col'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
