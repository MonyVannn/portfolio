// components/ThreeDModel.js
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ z }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 0).normalize();
    scene.add(directionalLight);

    // Animation mixer
    let mixer;
    let model;

    // Load the model
    const loader = new GLTFLoader();
    loader.load(
      "/spaceman.glb",
      (gltf) => {
        model = gltf.scene;
        scene.add(model);
        model.position.set(0, -0.8, 0);
        model.scale.set(2, 2, 2);

        // Initialize the animation mixer and play the idle animation
        mixer = new THREE.AnimationMixer(model);
        if (gltf.animations.length > 0) {
          const idleAction = mixer.clipAction(gltf.animations[0]);
          idleAction.play();
        }
      },
      undefined,
      (error) => {
        console.error(error);
      },
    );

    camera.position.z = z;

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      if (model) {
        const time = clock.getElapsedTime() * 0.3; // Adjust the factor to control the speed
        const minRotation = THREE.MathUtils.degToRad(110); // Convert degrees to radians
        const maxRotation = THREE.MathUtils.degToRad(150);
        const rotationRange = (maxRotation - minRotation) / 2;
        const midRotation = (maxRotation + minRotation) / 2;

        // Oscillate between minRotation and maxRotation using sine function
        model.rotation.y = midRotation + rotationRange * Math.sin(time);
      }
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="md:w-[500px] w-[300px] h-[400px] 2xl:h-[600px]"
    />
  );
};

export default Model;
