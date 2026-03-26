import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function TechnicalShape({ position, scale, speed, geometry }) {
  const meshRef = useRef(null)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * speed * 0.35
    meshRef.current.rotation.y += delta * speed * 0.5
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.18
  })

  return (
    <Float speed={speed * 0.65} rotationIntensity={0.25} floatIntensity={0.55}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry === 'torus' && <torusGeometry args={[1, 0.18, 18, 48]} />}
        {geometry === 'box' && <boxGeometry args={[1.2, 1.2, 1.2]} />}
        {geometry === 'octa' && <octahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.18}
          wireframe
          transparent
          opacity={0.5}
          roughness={0.28}
          metalness={0.65}
        />
      </mesh>
    </Float>
  )
}

function SceneContent() {
  const gridRef = useRef(null)

  useFrame((state) => {
    if (!gridRef.current) return
    gridRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.12) * 0.05
  })

  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 4, 2]} intensity={0.9} color="#34d399" />
      <pointLight position={[-4, -2, 1]} intensity={0.5} color="#10b981" />

      <TechnicalShape position={[-2.8, 1, -1.8]} scale={0.85} speed={0.55} geometry="torus" />
      <TechnicalShape position={[2.4, 1.4, -1.5]} scale={0.72} speed={0.7} geometry="octa" />
      <TechnicalShape position={[0.6, -0.9, -2]} scale={0.65} speed={0.5} geometry="box" />

      <mesh ref={gridRef} position={[0, -2.4, -3.2]} rotation={[-1.25, 0, 0]}>
        <planeGeometry args={[18, 12, 26, 18]} />
        <meshBasicMaterial color="#10b981" wireframe transparent opacity={0.14} />
      </mesh>
    </>
  )
}

function HeroScene3D() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setEnabled(!media.matches && !reducedMotion.matches)
    }

    update()

    media.addEventListener('change', update)
    reducedMotion.addEventListener('change', update)

    return () => {
      media.removeEventListener('change', update)
      reducedMotion.removeEventListener('change', update)
    }
  }, [])

  if (!enabled) return null

  return (
    <div className="hero-3d-layer" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0.4, 5.8], fov: 46 }}
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}

export default HeroScene3D
