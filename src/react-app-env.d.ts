/// <reference types="react-scripts" />
// declare module 'glslify';
declare module 'babel-plugin-glsl/macro';
declare namespace JSX {
    interface IntrinsicElements {
        waveShaderMaterial: any;
    }
}
