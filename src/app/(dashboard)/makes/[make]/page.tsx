interface IMakeProps {
  params: {
    make: string,
  },
}

export default function Make({ params }: IMakeProps) {
  return (
    <div>
      Todos os veículos de: {params.make}
    </div>
  );
}