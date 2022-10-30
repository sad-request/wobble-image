import { extend, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';
import vertex from '../shader/vertex';
import fragment from '../shader/fragment';
import { shaderMaterial } from '@react-three/drei';

const WaveShaderMaterial = shaderMaterial(
    {
        uTime: 0,
        uColor: new THREE.Color(0.0, 0.0, 0.0),
        uTexture: new THREE.Texture(),
    },
    vertex,
    fragment
);

extend({ WaveShaderMaterial });

const Wave = () => {
    const ref = useRef<any>();

    useFrame(
        ({ clock }) =>
            (ref.current.uniforms.uTime.value = clock.getElapsedTime())
    );
    const [image] = useLoader(THREE.TextureLoader, ['./test-image.jpeg']);

    return (
        <mesh>
            <planeGeometry args={[0.4, 0.6, 16, 16]} />
            <waveShaderMaterial ref={ref} uTexture={image} />
            {/* <shaderMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                uniforms={{
                    uTime: { value: 0 },
                    uColor: { value: new THREE.Color(1.0, 0.0, 0.0) },
                    uTexture: { value: image },
                }}
                ref={ref}
            /> */}
        </mesh>
    );
};

export default Wave;
