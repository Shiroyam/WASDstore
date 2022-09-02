import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { lazy, Suspense, useEffect } from 'react';

const LazyModel = lazy(() => import('../keyboard3d/Scene'));
export function Preview() {
  return (
    <div>
      <Suspense fallback="loading">
        <Canvas
          style={{ width: '100%', height: '100vh' }}
          className="canvas"
          camera={{ position: [5, 10, 10], zoom: 1 }}
        >
          <OrbitControls enableZoom={false} />
          <hemisphereLight intensity={0.35} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[100, 100, 100]} />
          <Suspense>
            <LazyModel />
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  );
}
