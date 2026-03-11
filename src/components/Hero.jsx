import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MessageSquare } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let renderer, scene, camera, model, modelGroup;
    let frameId;

    const init = () => {
      // Scene setup
      scene = new THREE.Scene();
      
      // Use parent container for accurate sizing
      const parent = canvasRef.current.parentElement;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 5; // Pulled back for better framing

      renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current, 
        alpha: true, 
        antialias: true 
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      // Parent group for rotation
      modelGroup = new THREE.Group();
      scene.add(modelGroup);

      // Parent group for rotation
      modelGroup = new THREE.Group();
      scene.add(modelGroup);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 2);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Loader
      const loader = new GLTFLoader();
      loader.load('/laptop.glb', (gltf) => {
        model = gltf.scene;
        
        // Center the model inside the modelGroup
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        
        model.position.x = -center.x;
        model.position.y = -center.y;
        model.position.z = -center.z;
        
        modelGroup.add(model);
        modelGroup.scale.set(1.5, 1.5, 1.5);
      }, undefined, (error) => {
        console.error('Error loading GLB:', error);
      });

      window.addEventListener('resize', handleResize);
    };

    const handleResize = () => {
      if (!canvasRef.current || !camera || !renderer) return;
      const width = canvasRef.current.parentElement.clientWidth;
      const height = canvasRef.current.parentElement.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (modelGroup) {
        modelGroup.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <section className="relative lg:h-screen lg:mt-0 mt-24 w-full flex items-center bg-dark-bg overflow-hidden">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 relative z-10">
        <div className="flex flex-col justify-center px-10 lg:px-20 xl:px-32 space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tighter text-zinc-100 uppercase">
              Gonzalez <br />
              Cristian
            </h1>
            <p className="text-xl lg:text-2xl font-bold bg-linear-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-widest uppercase">
              Desarrollador Fullstack
            </p>
          </div>
          
          <p className="text-lg  text-zinc-400 max-w-md leading-relaxed">
            Soluciones web modernas para potenciar tu negocio local. Diseño profesional, alto rendimiento y compromiso total.
          </p>
          
          <div className="flex pt-2">
            <a
              href="https://wa.me/your-number"
              className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-xl font-bold hover:bg-zinc-200 transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg group"
            >
              <MessageSquare size={18} className="text-zinc-600 group-hover:text-indigo-600 transition-colors" />
              Hablemos de tu proyecto
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center h-[400px] lg:h-full w-full relative">
          <div className="absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-linear-to-tr from-violet-600/40 via-fuchsia-600/30 to-indigo-500/40 blur-2xl animate-blob -z-10 mix-blend-screen"></div>
          <canvas ref={canvasRef} className="w-full h-full outline-none z-10 relative" />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-indigo-500/5 to-transparent pointer-events-none" />
      
      {/* Centered Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-zinc-900 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-zinc-900 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
