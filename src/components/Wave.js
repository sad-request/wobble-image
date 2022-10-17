import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import glsl from 'babel-plugin-glsl/macro';
import * as THREE from 'three';
import { useRef } from 'react';
import raw from 'raw.macro';
// import vertex from '../shader/vertex.glsl';
// import fragment from '../shader/fragment.glsl';

const fragment = raw('../shader/fragment.glsl');
const vertex = raw('../shader/vertex.glsl');

var glslify = require('glslify');

const vertexTest = glslify(vertex);
const fragmentTest = glslify(fragment);

const WaveShaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
        uTime: 0,
        uColor: new THREE.Color(0.0, 0.0, 0.0),
        uTexture: new THREE.Texture(),
    },
    vertexShader: { vertex },
    fragmentShader: { fragment },
});

extend({ WaveShaderMaterial });

const Wave = () => {
    const ref = useRef();
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

    const [image] = useLoader(THREE.TextureLoader, ['./test-image.jpeg']);

    return (
        <mesh>
            <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
            {/* <waveShaderMaterial uColor={'hotpink'} ref={ref} uTexture={image} /> */}
            <shaderMaterial
                vertexShader={vertexTest}
                fragmentShader={fragmentTest}
                uniforms={{
                    uTime: 0,
                    uColor: new THREE.Color(0.0, 0.0, 0.0),
                    uTexture: new THREE.Texture(),
                }}
                uColor={'hotpink'}
                ref={ref}
                uTexture={image}
            />
        </mesh>
    );
};

export default Wave;
