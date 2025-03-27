interface IMakeProps {
  params: {
    make: string,
  },
}

export default function Make({ params }: IMakeProps) {
  console.log(params);
  
  return (
    <div>
      Todos os veículos de: {params.make}
    </div>
  );
}