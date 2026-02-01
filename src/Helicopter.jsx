import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Helicopter({ active }) {
  const mount = useRef();

  useEffect(() => {
    if (!active) return;

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA → upar se, cinematic 3D angle
    const camera = new THREE.PerspectiveCamera(25, 1.5, 5, 100);
    // camera
camera.position.set(-1, 2.5, 8);
camera.lookAt(0, -0.8, -1.8);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(
      mount.current.clientWidth,
      mount.current.clientHeight
    );

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    mount.current.appendChild(renderer.domElement);

    // LIGHTING (clean & realistic)
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(5, 6, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(1024, 1024);
    scene.add(dirLight);

    // SHADOW CATCHER (ground feel)
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.ShadowMaterial({ opacity: 0.2 })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = 0;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    let heli;
    let time = 0;

    // LOAD MODEL
    new GLTFLoader().load("/models/helicopter.glb", (gltf) => {
      heli = gltf.scene;

      heli.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = true;
        }
      });

      heli.scale.set(0.05, 0.05, 0.05);
      heli.position.set(0, -1, 0);

      // slight facing angle (towards text side)
      heli.rotation.y = -0.25;

      scene.add(heli);

      // camera tilt + focus
      
      const animate = () => {
        requestAnimationFrame(animate);

        // subtle idle sway (left → center → right)
        time += 0.01;
        heli.rotation.y = -0.1 + Math.sin(time) * 0.12;

        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      mount.current.innerHTML = "";
    };
  }, [active]);

  return <div ref={mount} className="three-container" />;
}
