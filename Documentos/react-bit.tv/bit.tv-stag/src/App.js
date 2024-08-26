import React, { useState, useEffect } from "react";
import "./App.css";
import channels from "./channels";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("NOTÍCIAS COVID-19");
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [showCategories, setShowCategories] = useState(true);
  const [showChannels, setShowChannels] = useState(true);

  const categories = [
    "TODOS",
    "LISTA DE FAVORITOS",
    "TOP & NOVO",
    "UHD",
    "NOTÍCIAS COVID-19",
    "ESPORTE",
    "FILMES & SÉRIES",
    "ABERTOS",
  ];

  const [allChannels, setAllChannels] = useState([]);

  // Calcula todos os canais sem repetição para a categoria "TODOS"
  useEffect(() => {
    const uniqueChannels = Object.values(channels)
      .flat()
      .reduce((acc, channel) => {
        if (!acc.some((c) => c.id === channel.id)) {
          acc.push(channel);
        }
        return acc;
      }, []);
    setAllChannels(uniqueChannels);
  }, []);

  // Seleciona a categoria
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedChannel(null); // Limpa o canal selecionado ao trocar de categoria
  };

  // Seleciona o canal e carrega o link
  const handleChannelSelect = (channel) => {
    setSelectedChannel(channel);
    setShowCategories(false);
    setShowChannels(false);
  };

  // Esconde as listas após um tempo de inatividade
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCategories(false);
      setShowChannels(false);
    }, 5000); // Esconde após 5 segundos de inatividade
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {showCategories && (
        <div className="sidebar">
          {categories.map((category) => (
            <div
              key={category}
              className={`category ${
                category === selectedCategory ? "active" : ""
              }`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}

      {showChannels && selectedCategory && (
        <div className="content">
          <h2>{selectedCategory}</h2>
          <ul className="channel-list">
            {(selectedCategory === "TODOS"
              ? allChannels
              : channels[selectedCategory]
            ).map((channel) => (
              <li
                key={channel.id}
                className="channel"
                onClick={() => handleChannelSelect(channel)}
              >
                {channel.id} - {channel.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedChannel && (
        <div className="player">
          <h2>{selectedChannel.name}</h2>
          <video controls autoPlay>
            <source src={selectedChannel.link} type="application/x-mpegURL" />
            Seu navegador não suporta o player de vídeo.
          </video>
        </div>
      )}
    </div>
  );
};

export default App;
