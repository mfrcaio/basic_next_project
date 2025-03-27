import { Metadata } from 'next';
import Link from 'next/link';

async function getMakes() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return ['audi', 'bmw', 'mercedes', 'nissan', 'subaru'];
}

export const metadata: Metadata = {
  title: "All Vehicles | Jstacar",
};

export default async function Makes() {
  const makes = await getMakes();

  return (
    <div>
      <h1 className='mb-10 font-xlg'>
        Makes
      </h1>

      <div className='grid grid-cols-5 gap-4'>
        {makes.map(make =>
          <Link href={`/makes/${make}`} key={make}>
            <div className='rounded-lg bg-zinc-900 border border-zinc-700 grid place-items-center h-56'>
              {make}
            </div>
          </Link> 
        )}
      </div>
    </div>
  );
}