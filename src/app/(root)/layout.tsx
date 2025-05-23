import MainLayout from "@/layouts/RootLayout";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>{children}</MainLayout>
  );
}
