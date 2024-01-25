// styles.ts
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #063970, #abdbe3);
`;

export const GameContainer = styled.div`

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  height: 90vh;
  width: 85vw;
  gap: 20px;
`;

export const Card = styled.div`
  border-radius: 6px;
  transition: transform 0.2s;
  position: relative;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  box-shadow: 0 5px 7px -5px rgba(0, 0, 0, 0.5);

  &.show {
    transform: rotateY(180deg);
  }
`;

export const CardImageFront = styled.img`
  border-radius: 6px;
  overflow: hidden;
  object-fit: contain;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const CardImageBack = styled.img`
  border-radius: 6px;
  overflow: hidden;
  object-fit: contain;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;
