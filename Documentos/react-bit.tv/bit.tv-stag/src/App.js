import React, { useState, useEffect } from "react";
import ChannelList from "./components/ChannelList";
import VideoPlayer from "./components/VideoPlayer";
import "./styles.css";

const App = () => {
  const [channels, setChannels] = useState([
    { name: "Channel 1", src: "source1.m3u8", type: "m3u8", isSelected: false },
    { name: "Channel 2", src: "source2.m3u8", type: "m3u8", isSelected: false },
    // Outros canais...
  ]);

  const [currentChannelIndex, setCurrentChannelIndex] = useState(0);

  const handleChannelSelect = (index) => {
    const updatedChannels = channels.map((channel, i) => ({
      ...channel,
      isSelected: i === index,
    }));
    setChannels(updatedChannels);
    setCurrentChannelIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === "Backspace") {
        // Lógica para abrir o menu de canais ou selecionar um canal
      } else if (e.key === "ArrowDown") {
        setCurrentChannelIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % channels.length;
          handleChannelSelect(nextIndex);
          return nextIndex;
        });
      } else if (e.key === "ArrowUp") {
        setCurrentChannelIndex((prevIndex) => {
          const prevChannelIndex =
            (prevIndex - 1 + channels.length) % channels.length;
          handleChannelSelect(prevChannelIndex);
          return prevChannelIndex;
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [channels]);

  return (
    <div>
      <ChannelList channels={channels} onSelect={handleChannelSelect} />
      <VideoPlayer
        src={channels[currentChannelIndex].src}
        type={channels[currentChannelIndex].type}
      />
    </div>
  );
};

export default App;
