export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex items-center justify-center h-full w-full pt-36'>
      {children}
    </div>
  );
}
