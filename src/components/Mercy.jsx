import React from 'react';
import ParticleImage, { forces, Vector } from 'react-particle-image';

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  radius: () => Math.random() * 0.5 + 0.75,
  mass: () => 40,
  friction: () => 0.15,
  color: ({ x, y, image }) => '#fff',
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const Mercy = ({ innerWidth }) => {
  return (
    <ParticleImage
      src={require('../img/mercy.png')}
      width={Number(innerWidth)}
      height={600}
      scale={0.5}
      entropy={10}
      maxParticles={4200}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="transparent"
    />
  );
};

export default Mercy;
