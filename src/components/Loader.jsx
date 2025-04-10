import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '1.2rem' }}>
        Cargando... {progress.toFixed(0)}%
      </div>
    </Html>
  );
};

export default Loader;