import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Background: React.FC = () => {
    
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const myRef = useRef(null);

    useEffect(() => {
        let effect: any = null;
        if (!vantaEffect) {
            import('vanta/dist/vanta.birds.min')
                .then((BIRDS) => {
                    effect = BIRDS.default({
                        el: myRef.current,
                        THREE: THREE,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        birdSize: 1.50,
                        wingSpan: 20.00,
                        speedLimit: 4.00,
                        quantity: 4.00
                    });
                    setVantaEffect(effect);
                })
                .catch(error => console.error("Failed to load Vanta effect:", error));
        }
    
        return () => {
            if (effect) effect.destroy();
        };
    }, [vantaEffect]);

    return <div ref={myRef} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, pointerEvents: 'none' }} />;
};

export default Background;