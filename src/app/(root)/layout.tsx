export default RootLayout;

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
    SIDEBAR
    {children}
   </main>
  );
}
