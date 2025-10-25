import { PresentationControls } from '@react-three/drei';
import MacbookModel14 from '../models/Macbook-14';
import MacBookModel16 from '../models/Macbook-16';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ANIMATION_DURATION = 1;
const OFFSET_DURATION = 5;

const fadeMeshes = (group, opacity)=>{
    if (!group) return;

    group.traverse((child)=>{
        if (child.isMesh) {
            child.material.transport = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION } );
        }
    })
}
const moveGroup =(group, x) => {
    if(!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION});
}

const ModelSwitcher = ({ scale, isMobile}) => {
  const SCALE_LARGE_DESKTOP = 0.08;
  const SCALE_LARGE_MOBILE = 0.05;
  const smallMacbook = useRef();
  const largeMacbook = useRef();

  const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE ;

  useGSAP(()=>{
    if(showLargeMacbook){
        moveGroup(smallMacbook.current, -OFFSET_DURATION);
        moveGroup(largeMacbook.current, 0);
    
        fadeMeshes(smallMacbook.current, 0);
        fadeMeshes(largeMacbook.current, 1);
    } else {
        moveGroup(smallMacbook.current, 0);
        moveGroup(largeMacbook.current, OFFSET_DURATION);
        
        fadeMeshes(smallMacbook.current, 1);
        fadeMeshes(largeMacbook.current, 0); 
    }
}, [scale])
  const controlsConfig = {
    snap: true,
    speed: 1.2,
    zoom: 1,
    azimuth: [-Math.PI / 3, Math.PI / 3],
    polar: [-Math.PI / 6, Math.PI / 2.5],
    config: { mass: 1, tension: 120, friction: 26 },
  }

  return (
    <>
        <PresentationControls {...controlsConfig}>
      {showLargeMacbook ? (
        <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
      ) : (
        <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
      )}
    </PresentationControls>
    </>
  )
}

export default ModelSwitcher