async function getMakes() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return ['audi', 'bmw', 'mercedes', 'nissan', 'subaru'];
}

export default async function Makes() {
  const makes = await getMakes();

  return (
    <div>
      <h1 className='mb-10 font-xlg'>
        Makes
      </h1>

      <div className='grid grid-cols-5 gap-4'>
        {makes.map(make => 
          <div key={make} className='rounded-lg bg-zinc-900 border border-zinc-700 grid place-items-center h-56'>
            {make}
          </div>
        )}
      </div>
    </div>
  );
}