import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex gap-10 w-full'>
      {children}
      <Link href={'/'}>Go to Home</Link>
    </div>
  );
}