import { Canvas } from "@react-three/fiber";
import Model from "./Model"

export const Canvasmodel = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-10]">
      <Canvas>
        <Model />
      </Canvas>
    </div>
    
  )
}

export default Canvasmodel;
