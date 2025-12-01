import {
  OrbitControls,
  View,
  PerspectiveCamera,
  Html,
} from "@react-three/drei";

import Lights from "./Lights";
import IPhone from "./IPhone";
import { Suspense } from "react";
import * as THREE from "three";
import Loader from "./Loader";
const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationControl,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={` w-full h-full absolute ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      {/* Ambient Light : lights up all the object on the scence equaly */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        target={new THREE.Vector3(0, 0, 0)}
        rotateSpeed={0.7}
        onEnd={() => setRotationControl(controlRef.current.getAzimuthaAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense
          fallback={
            <Html>
              <Loader />
            </Html>
          }
        >
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [18, 18, 18]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
