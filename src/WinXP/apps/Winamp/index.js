import React, { useState, useRef } from 'react';
import styled from 'styled-components';

function Winamp({ onClose, onMinimize }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [currentTrack, setCurrentTrack] = useState('Heroines - Diablo Swing Orchestra');
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <WinampContainer>
      <WinampHeader>
        <WinampTitle>*** WINAMP ***</WinampTitle>
        <WindowControls>
          <ControlButton onClick={onMinimize}>_</ControlButton>
          <ControlButton onClick={onClose}>X</ControlButton>
        </WindowControls>
      </WinampHeader>
      
      <DisplayArea>
        <TrackInfo>{currentTrack}</TrackInfo>
        <TimeDisplay>{currentTime}</TimeDisplay>
      </DisplayArea>
      
      <ControlsArea>
        <ControlButton>⏮️</ControlButton>
        <PlayButton onClick={togglePlay}>
          {isPlaying ? '⏸️' : '▶️'}
        </PlayButton>
        <ControlButton>⏭️</ControlButton>
        <ControlButton>⏹️</ControlButton>
      </ControlsArea>
      
      <VolumeArea>
        <VolumeSlider type="range" min="0" max="100" defaultValue="75" />
      </VolumeArea>
    </WinampContainer>
  );
}

const WinampContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #00ff00 0%, #008000 100%);
  border: 2px outset #c0c0c0;
  font-family: Arial, sans-serif;
  font-size: 11px;
  display: flex;
  flex-direction: column;
`;

const WinampHeader = styled.div`
  background: linear-gradient(to bottom, #00ff00 0%, #008000 100%);
  padding: 2px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #004000;
`;

const WinampTitle = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 10px;
`;

const WindowControls = styled.div`
  display: flex;
  gap: 2px;
`;

const ControlButton = styled.button`
  background: #c0c0c0;
  border: 1px outset #c0c0c0;
  width: 16px;
  height: 14px;
  font-size: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:active {
    border: 1px inset #c0c0c0;
  }
`;

const DisplayArea = styled.div`
  background: #000;
  color: #00ff00;
  padding: 4px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Courier New', monospace;
  font-size: 10px;
`;

const TrackInfo = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TimeDisplay = styled.div`
  font-size: 12px;
  color: #ffff00;
  margin-top: 2px;
`;

const ControlsArea = styled.div`
  background: #c0c0c0;
  padding: 4px;
  display: flex;
  gap: 4px;
  justify-content: center;
`;

const PlayButton = styled(ControlButton)`
  width: 24px;
  background: #e0e0e0;
`;

const VolumeArea = styled.div`
  background: #c0c0c0;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VolumeSlider = styled.input`
  width: 80%;
  height: 4px;
`;

export default Winamp;
