import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Menu, MenuItem } from "@mui/material";


export default function ObjectView() {
const containerRef = useRef(null);
  const [menuPosition, setMenuPosition] = useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setMenuPosition(
      menuPosition === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  return (
    <div
      ref={containerRef}
      onContextMenu={handleContextMenu}
    
    >
      <Canvas style={{ width: "25vw", height: "50vh" }}>
        <ambientLight />
        <mesh>
          <boxGeometry />
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
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
      </Menu>
    </div>
  );
}