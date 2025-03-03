import React, { useState } from "react";
import "./katakana.css";

const katakanaGroups = [
  {
    symbols: ["ア", "イ", "ウ", "エ", "オ"],
    translations: ["a", "i", "u", "e", "o"],
  },
  {
    symbols: ["カ", "キ", "ク", "ケ", "コ"],
    translations: ["ka", "ki", "ku", "ke", "ko"],
  },
  {
    symbols: ["サ", "シ", "ス", "セ", "ソ"],
    translations: ["sa", "shi", "su", "se", "so"],
  },
  {
    symbols: ["タ", "チ", "ツ", "テ", "ト"],
    translations: ["ta", "chi", "tsu", "te", "to"],
  },
  {
    symbols: ["ナ", "ニ", "ヌ", "ネ", "ノ"],
    translations: ["na", "ni", "nu", "ne", "no"],
  },
  {
    symbols: ["ハ", "ヒ", "フ", "ヘ", "ホ"],
    translations: ["ha", "hi", "fu", "he", "ho"],
  },
  {
    symbols: ["マ", "ミ", "ム", "メ", "モ"],
    translations: ["ma", "mi", "mu", "me", "mo"],
  },
  { symbols: ["ヤ", "ユ", "ヨ"], translations: ["ya", "yu", "yo"] },
  {
    symbols: ["ラ", "リ", "ル", "レ", "ロ"],
    translations: ["ra", "ri", "ru", "re", "ro"],
  },
  { symbols: ["ワ", "ヲ"], translations: ["wa", "wo"] },
  { symbols: ["ン"], translations: ["n"] },
  {
    symbols: ["ガ", "ギ", "グ", "ゲ", "ゴ"],
    translations: ["ga", "gi", "gu", "ge", "go"],
  },
  {
    symbols: ["ザ", "ジ", "ズ", "ゼ", "ゾ"],
    translations: ["za", "ji", "zu", "ze", "zo"],
  },
  {
    symbols: ["ダ", "ヂ", "ヅ", "デ", "ド"],
    translations: ["da", "ji", "zu", "de", "do"],
  },
  {
    symbols: ["バ", "ビ", "ブ", "ベ", "ボ"],
    translations: ["ba", "bi", "bu", "be", "bo"],
  },
  {
    symbols: ["パ", "ピ", "プ", "ペ", "ポ"],
    translations: ["pa", "pi", "pu", "pe", "po"],
  },
];

const Katakana: React.FC = () => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const goToNextGroup = () => {
    setCurrentGroupIndex(
      (prevIndex) => (prevIndex + 1) % katakanaGroups.length
    );
  };

  const goToPreviousGroup = () => {
    setCurrentGroupIndex(
      (prevIndex) =>
        (prevIndex - 1 + katakanaGroups.length) % katakanaGroups.length
    );
  };

  return (
    <div className="hiragana-container">
      <h1 className="hiragana-title">Impara il Katakana</h1>

      <div className="hiragana-carousel">
        <button onClick={goToPreviousGroup} className="carousel-button">
          &#10094;
        </button>

        <div className="carousel-content">
          <div className="group">
            {katakanaGroups[currentGroupIndex].symbols.map((symbol, index) => (
              <div key={index} className="symbol">
                {symbol}
                <div className="name">
                  {katakanaGroups[currentGroupIndex].translations[index]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={goToNextGroup} className="carousel-button">
          &#10095;
        </button>
      </div>

      <div className="hiragana-info">
        <h2 className="info-title">Cos'è il Katakana?</h2>
        <p className="info-text">
          Il Katakana è uno degli alfabeti sillabici utilizzati nella lingua
          giapponese, insieme all'Hiragana. Viene principalmente usato per
          scrivere parole straniere, nomi propri, e per enfatizzare determinate
          parole. Come l'Hiragana, ogni simbolo rappresenta una sillaba.
        </p>
        <p className="info-text">
          Il Katakana è stato sviluppato come una forma di scrittura per
          rappresentare le parole straniere adattate al giapponese, ed è stato
          inizialmente utilizzato per la trascrizione di termini cinesi.
        </p>
      </div>
    </div>
  );
};

export default Katakana;
