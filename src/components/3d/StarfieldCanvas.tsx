import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface StarfieldCanvasProps {
  themeMode?: 'dark' | 'light';
}

export const StarfieldCanvas: React.FC<StarfieldCanvasProps> = ({ themeMode = 'dark' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 120;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Geometry
    const particlesCount = themeMode === 'dark' ? 1200 : 500;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    const purpleColor = new THREE.Color('#8B5CF6'); // Neon Purple
    const blueColor = new THREE.Color('#3B82F6');   // Neon Blue
    const cyanColor = new THREE.Color('#06B6D4');   // Neon Cyan
    const darkParticleColor = new THREE.Color('#64748B');

    for (let i = 0; i < particlesCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 350;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 350;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 350;

      // Color mix
      const rand = Math.random();
      let mixedColor = purpleColor;
      if (rand > 0.6) mixedColor = blueColor;
      else if (rand > 0.3) mixedColor = cyanColor;

      if (themeMode === 'light') {
        mixedColor = darkParticleColor;
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      sizes[i] = Math.random() * 2.5 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture / Material
    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: themeMode === 'dark' ? 0.8 : 0.4,
      blending: themeMode === 'dark' ? THREE.AdditiveBlending : THREE.NormalBlending
    });

    const starParticles = new THREE.Points(geometry, material);
    scene.add(starParticles);

    // Orbiting Geometric Ring
    const ringGeo = new THREE.TorusGeometry(45, 0.4, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: themeMode === 'dark' ? 0x8b5cf6 : 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 4;
    scene.add(ringMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.05;
      mouseY = (e.clientY - windowHalfY) * 0.05;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      starParticles.rotation.y = elapsedTime * 0.02 + targetX * 0.001;
      starParticles.rotation.x = elapsedTime * 0.01 + targetY * 0.001;

      ringMesh.rotation.z = elapsedTime * 0.1;
      ringMesh.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [themeMode]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.9 }}
    />
  );
};
