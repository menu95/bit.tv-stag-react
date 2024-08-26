import React from "react";

const ChannelList = ({ channels, onSelect }) => {
  return (
    <ul id="channel-list">
      {channels.map((channel, index) => (
        <li
          key={index}
          data-src={channel.src}
          data-type={channel.type}
          className={channel.isSelected ? "selected" : ""}
          onClick={() => onSelect(index)}
        >
          {channel.name}
        </li>
      ))}
    </ul>
  );
};

export default ChannelList;
