import { destinationsData } from '@/data/destinations';
import { DestinationDetailClient } from '@/components/sections/DestinationDetailClient';
import { notFound } from 'next/navigation';

interface DestinationDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DestinationDetailPage({ params }: DestinationDetailProps) {
  const { id } = await params;
  const destination = destinationsData.find((d) => d.id === id);

  if (!destination) {
    notFound();
  }

  return <DestinationDetailClient destination={destination} />;
}
