import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const VantaBackground: React.FC = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            import('vanta/dist/vanta.globe.min').then((GLOBE) => {
                setVantaEffect(
                    GLOBE.default({
                        el: myRef.current,
                        THREE: THREE,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        color: 0x12780d,
                        size: 0.90,
                        backgroundColor: 0xffffff
                    })
                );
            });
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return <div ref={myRef} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} />;
};

export default VantaBackground;