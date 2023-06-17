import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@mui/material";

const Content = () => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer>();
    const animationFrameRef = useRef<number>();

    const theme = useTheme();

    useEffect(() => {
        // Based on example from https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
        // Rewritten to fit with react
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(theme.palette.secondary.light);

        const renderer = new THREE.WebGLRenderer();
        rendererRef.current = renderer;

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({
            color: theme.palette.primary.main,
        });
        const cube = new THREE.Mesh(geometry, material);

        let camera = new THREE.PerspectiveCamera();
        let windowInnerHeigth = window.innerHeight - 100;

        sceneRef.current != null &&
            sceneRef.current.appendChild(renderer.domElement);

        scene.add(cube);

        let handleSize = function () {
            windowInnerHeigth = window.innerHeight - 100;

            camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / windowInnerHeigth,
                0.1,
                1000
            );

            camera.position.z = 5;

            renderer.setSize(window.innerWidth, windowInnerHeigth);
        };

        handleSize();

        window.addEventListener("resize", handleSize);

        let animate = function () {
            animationFrameRef.current = requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        let saveSceneRefForCleanUp = sceneRef.current;
        return () => {
            window.removeEventListener("resize", handleSize);
            if (
                saveSceneRefForCleanUp != null &&
                rendererRef.current
            ) {
                saveSceneRefForCleanUp.removeChild(rendererRef.current.domElement);
                animationFrameRef.current &&
                    cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [sceneRef, rendererRef, animationFrameRef, theme.palette.secondary.light, theme.palette.primary.main]);

    return <div ref={sceneRef} />;
};

export default Content;
