'use client';

import dynamic from 'next/dynamic';
import React, { FC } from 'react';

const MapComponent = dynamic(() => import('../../components/MapComponent'), {
  ssr: false,
});

const MapPage: FC = () => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🌊 Marine Species Explorer</h1>
      <MapComponent />
    </main>
  );
};

export default MapPage;