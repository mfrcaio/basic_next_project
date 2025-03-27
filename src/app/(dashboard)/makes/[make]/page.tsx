import { Metadata } from 'next';
interface IMakeProps {
  params: {
    make: string,
  },
}

export function generateMetadata({ params }: IMakeProps): Metadata {
  return {
    title: `Vehicles make ${params.make} | Jstacar`,
  };
}

export default function Make({ params }: IMakeProps) {
  return (
    <div>
      All vehicles: {params.make}
    </div>
  );
}