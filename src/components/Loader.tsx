import { FC } from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader: FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-blue-600 text-center">
        <p>Loading 3D Model... {progress.toFixed(0)}%</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;