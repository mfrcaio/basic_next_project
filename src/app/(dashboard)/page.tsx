import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='mb-8'>Home</h1>

      <div className='grid grid-cols-2 gap-4'>
        <Link href={`/vehicles`}>
          <div className='rounded-lg bg-zinc-900 border border-zinc-700 grid place-items-center h-56'>
            Go to Vehicles
          </div>
        </Link> 

        <Link href={`/makes`}>
          <div className='rounded-lg bg-zinc-900 border border-zinc-700 grid place-items-center h-56'>
            Go to Makes
          </div>
        </Link> 

        <Link href={`/auth/signin`}>
          <div className='rounded-lg bg-zinc-900 border border-zinc-700 grid place-items-center h-56'>
            Go to SignIn
          </div>
        </Link> 

        <Link href={`/auth/signup`}>
          <div className='rounded-lg bg-zinc-900 border border-zinc-700 grid place-items-center h-56'>
            Go to SignUp
          </div>
        </Link> 
      </div>
    </div>
  );
}
