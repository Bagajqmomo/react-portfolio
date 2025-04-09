// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const ThreeScene = () => {
//   const sceneRef = useRef();

//   useEffect(() => {
//     // Scene, Camera, Renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     sceneRef.current.appendChild(renderer.domElement);

//     // Camera Position
//     camera.position.set(200, 300, 200);

//     // OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true; // Smooth controls
//     controls.dampingFactor = 0.05;

//     // Ambient Light (Soft, Overall Lighting)
//     const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light
//     scene.add(ambientLight);

//     // Create and add a SpotLight (focused beam of light, like a spotlight)
//     const spotLight = new THREE.SpotLight(0xbc7efc, 1); // Purple color light
//     spotLight.position.set(0, 5, -100); // Position the light above the scene
//     spotLight.target.position.set(20, 10, 200); // Target the center of the scene
//     scene.add(spotLight.target); // Add target to the scene

//     // Adjust the spotlight's properties
//     spotLight.angle = Math.PI / 6; // 30-degree cone angle
//     spotLight.penumbra = 0.5; // Softens the edges of the spotlight beam
//     spotLight.castShadow = true; // Enable shadows
//     spotLight.distance = 50; // How far the spotlight reaches
//     spotLight.decay = 2; // How the light fades with distance

//     // Add the spotlight to the scene
//     scene.add(spotLight);

//     // Create a SpotLightHelper to visualize the spotlight
//     const spotLightHelper = new THREE.SpotLightHelper(spotLight);
//     scene.add(spotLightHelper);

//     // Load the 3D Model
//     const loader = new GLTFLoader();
//     loader.load(
//       "/isometric-room.glb", // Path to the model
//       (gltf) => {
//         const model = gltf.scene;
//         scene.add(model);
//         model.position.set(0, 0, 0);
//         model.scale.set(1, 1, 1);
//       },
//       undefined, // Progress callback
//       (error) => {
//         console.error("An error occurred while loading the model:", error);
//       }
//     );

//     // Animation Loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update(); // Update OrbitControls
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Enable shadows
//     renderer.shadowMap.enabled = true;
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap;

//     // Cleanup
//     return () => {
//       renderer.dispose();
//       sceneRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={sceneRef}></div>;
// };

// export default ThreeScene;
