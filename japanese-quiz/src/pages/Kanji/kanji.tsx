import React, { useState } from "react";
import "./kanji.css";

const kanjiGroups = [
  {
    symbols: ["日", "月", "火", "水", "木"],
    translations: ["sole/giorno", "luna/mese", "fuoco", "acqua", "albero"],
  },
  {
    symbols: ["金", "土", "人", "大", "小"],
    translations: ["oro/denaro", "terra", "persona", "grande", "piccolo"],
  },
  {
    symbols: ["上", "下", "中", "左", "右"],
    translations: ["alto/sopra", "basso/sotto", "centro", "sinistra", "destra"],
  },
  {
    symbols: ["目", "耳", "口", "手", "足"],
    translations: ["occhio", "orecchio", "bocca", "mano", "piede"],
  },
  {
    symbols: ["心", "力", "山", "川", "花"],
    translations: ["cuore", "forza", "montagna", "fiume", "fiore"],
  },
  {
    symbols: ["草", "鳥", "魚", "犬", "猫"],
    translations: ["erba", "uccello", "pesce", "cane", "gatto"],
  },
  {
    symbols: ["学", "生", "死", "天", "空"],
    translations: ["studio", "vita", "morte", "cielo", "vuoto/cielo"],
  },
  {
    symbols: ["地", "道", "時", "年", "前"],
    translations: [
      "terra",
      "strada/way",
      "tempo/orario",
      "anno",
      "prima/avanti",
    ],
  },
  {
    symbols: ["後", "高", "安", "新", "古"],
    translations: ["dopo/dietro", "alto", "sicuro", "nuovo", "vecchio"],
  },
  {
    symbols: ["明", "暗", "白", "黒", "青"],
    translations: ["luminoso", "oscuro", "bianco", "nero", "blu/verde"],
  },
];

const Kanji: React.FC = () => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const goToNextGroup = () => {
    setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % kanjiGroups.length);
  };

  const goToPreviousGroup = () => {
    setCurrentGroupIndex(
      (prevIndex) => (prevIndex - 1 + kanjiGroups.length) % kanjiGroups.length
    );
  };

  return (
    <div className="kanji-container">
      <h1 className="kanji-title">Impara i Kanji</h1>
      <div className="kanji-carousel">
        <button onClick={goToPreviousGroup} className="carousel-button">
          &#10094;
        </button>
        <div className="carousel-content">
          <div className="group">
            {kanjiGroups[currentGroupIndex].symbols.map((symbol, index) => (
              <div key={index} className="symbol">
                {symbol}
                <div className="name">
                  {kanjiGroups[currentGroupIndex].translations[index]}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={goToNextGroup} className="carousel-button">
          &#10095;
        </button>
      </div>
      <div className="kanji-info">
        <h2 className="info-title">Cos'è il Kanji?</h2>
        <p className="info-text">
          Il Kanji è un sistema di scrittura utilizzato nella lingua giapponese,
          composto da ideogrammi derivati dal cinese. Ogni Kanji rappresenta una
          parola o un concetto e può avere diverse letture a seconda del
          contesto. Il Kanji è utilizzato per scrivere parole di origine cinese,
          ma anche per concetti o oggetti di uso quotidiano.
        </p>
        <p className="info-text">
          A differenza dell'Hiragana e del Katakana, che sono alfabeti
          sillabici, i Kanji sono logogrammi che rappresentano idee o cose. In
          giapponese, molte parole sono scritte combinando Kanji con Hiragana o
          Katakana.
        </p>
      </div>
    </div>
  );
};

export default Kanji;
