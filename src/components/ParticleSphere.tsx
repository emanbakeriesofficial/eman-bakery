'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const count = 4000;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorOptions = [
      new THREE.Color('#d4af37'),
      new THREE.Color('#ff8c00'),
      new THREE.Color('#cd853f'),
      new THREE.Color('#c9a96e'),
      new THREE.Color('#b8860b'),
    ];

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 2.5 + (Math.random() - 0.5) * 0.3;

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;

    // Slow rotation
    meshRef.current.rotation.y = time * 0.08;

    // Subtle pulse
    const scale = 1 + Math.sin(time * 0.5) * 0.02;
    meshRef.current.scale.set(scale, scale, scale);

    // Slight mouse influence
    const pointer = state.pointer;
    mouseRef.current.x += (pointer.x * viewport.width * 0.05 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * viewport.height * 0.05 - mouseRef.current.y) * 0.02;

    meshRef.current.position.x = mouseRef.current.x;
    meshRef.current.position.y = mouseRef.current.y;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ background: 'transparent' }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
    >
      <Particles />
    </Canvas>
  );
}
