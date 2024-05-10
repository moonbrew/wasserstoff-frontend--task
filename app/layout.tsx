import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-[#15181B] w-screen h-screen'>
        {children}
      </body>
    </html>
  );
} 
