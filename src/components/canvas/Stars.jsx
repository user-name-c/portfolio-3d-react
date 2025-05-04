import {useState, useRef, Suspense, useMemo} from 'react'
import{Canvas,useFrame} from '@react-three/fiber'
import{Points, PointMaterial, Preload, calcPosFromAngles} from '@react-three/drei'
import * as THREE from 'three'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref=useRef();


  // Generamos los puntos solo una vez
  const positions = useMemo(() => {
    const sphere = random.inSphere(new Float32Array(6000), { radius: 1.2 })
    console.log(sphere)
    return new THREE.BufferAttribute(sphere, 3)
  }, [])

  // Rotación sutil
  useFrame((state, delta) => {
    ref.current.rotation.y -= delta * 0.02
  })

  return (
    <group rotation={[0,0, Math.PI / 4]}>
      <Points ref={ref}  frustumCulled={false} {...props}>
        <bufferGeometry attach="geometry">
          <bufferAttribute attach="attributes-position" {...positions}/>
        </bufferGeometry>
          
        <PointMaterial 
          transparent
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
} 

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{position:[0,0,3]}} style={{ background: 'black' }}>
        <Suspense fallback={null}>
          <Stars/>
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  )
} 

export default StarsCanvas