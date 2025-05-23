import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';


export default function ObjectView() {
  const [geometryType, setGeometryType] = useState('capsule');
  const [menuPosition, setMenuPosition] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuPosition({
      mouseX: event.clientX,
      mouseY: event.clientY,
    });
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const handleSelect = (type) => {
    setGeometryType(type);
    handleClose();
  };

  const renderGeometry = () => {
    switch (geometryType) {
      case 'box': return <boxGeometry />;
      case 'sphere': return <sphereGeometry />;
      case 'torus': return <torusGeometry args={[1, 0.4, 16, 100]} />;
      case 'plane': return <planeGeometry args={[2, 2]} />;
      case 'torusKnot': return <torusKnotGeometry args={[1, 0.3, 100, 16]} />;
      default: return <capsuleGeometry />;
    }
  };

  return (
    <>
      <div onContextMenu={handleMenuOpen} style={{ width: '100vw', height: '100vh' }}>
        <Canvas style={{ width: "25vw", height: "50vh" }}>
          <ambientLight />
          <mesh>
            {renderGeometry()}
            <meshStandardMaterial color="orange" />
          </mesh>
          <OrbitControls />
        </Canvas>

        <Menu
          open={menuPosition !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={
            menuPosition !== null
              ? { top: menuPosition.mouseY, left: menuPosition.mouseX }
              : undefined
          }
        >
          <MenuItem onClick={() => handleSelect('sphere')}>Sphere</MenuItem>
          <MenuItem onClick={() => handleSelect('box')}>Box</MenuItem>
          <MenuItem onClick={() => handleSelect('torus')}>Torus</MenuItem>
          <MenuItem onClick={() => handleSelect('plane')}>Plane</MenuItem>
          <MenuItem onClick={() => handleSelect('torusKnot')}>Torus Knot</MenuItem>
        </Menu>
      </div>
    </>
  );
}