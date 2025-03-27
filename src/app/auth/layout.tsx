export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex gap-10 w-full'>
      {children}
    </div>
  );
}