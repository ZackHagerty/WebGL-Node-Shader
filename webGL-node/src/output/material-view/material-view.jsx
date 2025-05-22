import { Canvas } from "@react-three/fiber";

export default function MaterialView() {
return (
    <Canvas>
      <mesh>
        <planeGeometry args={[7, 7, 7]} />
        <meshPhongMaterial />
      </mesh>
      {/* <ambientLight intensity={0.1} /> */}
      <directionalLight position={[0, 0, 5]} color="red" />
    </Canvas>
);
}