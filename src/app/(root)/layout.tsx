import Sidebar from "@/components/Sidebar";

export default RootLayout;

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Tony', lastName: 'Wilson'};

  return (
   <main className="flex h-screen w-full font-inter">

    <Sidebar user={loggedIn} />

    {children}
   </main>
  );
}
