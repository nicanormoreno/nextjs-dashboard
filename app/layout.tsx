import '@/app/ui/global.css';
import { font } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`} >{children}</body>
    </html>
  );
}
