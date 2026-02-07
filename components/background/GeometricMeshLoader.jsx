'use client';

import dynamic from 'next/dynamic';

const GeometricMesh = dynamic(
  () => import('@/components/background/GeometricMesh'),
  { ssr: false },
);

export default function GeometricMeshLoader() {
  return <GeometricMesh />;
}
