import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export const Model = () => {
  const rot1Ref = useRef();
  const rot2Ref = useRef();
  const rot3Ref = useRef();

  useFrame((state,delta)=>{
    rot1Ref.current.rotation.x += 0.2*delta;
    rot1Ref.current.rotation.y += 0.1*delta;
    rot1Ref.current.rotation.z += 0.2*delta;
    rot2Ref.current.rotation.x += 0.1*delta;
    rot2Ref.current.rotation.y += 0.2*delta;
    rot2Ref.current.rotation.z += 0.1*delta;
    rot3Ref.current.rotation.y += 0.1*delta;
  });

  useGSAP(()=>{
    document.addEventListener('scroll',()=>{

    gsap.to(rot1Ref.current.rotation, {
      x: `+=${0.8}`,
      y: `+=${0.8}`,
      z: `+=${0.8}`,
      ease: "none",
      ScrollTrigger:{
        trigger: "body",
        pin:true,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(rot2Ref.current.rotation, {
      x: `+=${1}`,
      y: `+=${1}`,
      z: `+=${1}`,
      ease: "none",
      ScrollTrigger:{
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    
    gsap.to(rot3Ref.current.rotation, {
      x: `+=${1}`,
      y: `+=${1}`,
      z: `+=${1}`,
      ease: "none",
      ScrollTrigger:{
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  },{scope:[rot1Ref,rot2Ref,rot3Ref]});


  return (
    <>
        <ambientLight intensity={1} />
        <mesh ref={rot1Ref}>
          <torusGeometry args={[2, 0.06, 16, 100]} />
          <meshStandardMaterial wireframe />
        </mesh>

        <mesh ref={rot2Ref}>
          <torusGeometry args={[1.8, 0.04, 16, 100]} />
          <meshStandardMaterial wireframe />
        </mesh>

        <mesh ref={rot3Ref}>
          <torusGeometry args={[2.5, 0.06, 16, 100]} />
          <meshStandardMaterial wireframe />
        </mesh>
    </>
  )
}

export default Model;
