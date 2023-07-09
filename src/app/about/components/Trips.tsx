import { prisma } from '@/lib/prisma';

// sem o `use client` ele entende que é um server componente, logo vc consegue se conectar diretamente com o banco.
// Como o component roda no servidor ele aparece o console no servidor
// caso vire um client component a chamada terá que ser realizada com o fetch das informações
const getTrips = async () => {
  return await prisma.trip.findMany({});
};

export default async function Trips() {
  const data = await getTrips();

  return <div>Trips</div>;
}
