import React, { useState } from "react";
import "./hiragana.css";

const hiraganaGroups = [
  {
    symbols: ["あ", "い", "う", "え", "お"],
    translations: ["a", "i", "u", "e", "o"],
  },
  {
    symbols: ["か", "き", "く", "け", "こ"],
    translations: ["ka", "ki", "ku", "ke", "ko"],
  },
  {
    symbols: ["さ", "し", "す", "せ", "そ"],
    translations: ["sa", "shi", "su", "se", "so"],
  },
  {
    symbols: ["た", "ち", "つ", "て", "と"],
    translations: ["ta", "chi", "tsu", "te", "to"],
  },
  {
    symbols: ["な", "に", "ぬ", "ね", "の"],
    translations: ["na", "ni", "nu", "ne", "no"],
  },
  {
    symbols: ["は", "ひ", "ふ", "へ", "ほ"],
    translations: ["ha", "hi", "fu", "he", "ho"],
  },
  {
    symbols: ["ま", "み", "む", "め", "も"],
    translations: ["ma", "mi", "mu", "me", "mo"],
  },
  { symbols: ["や", "ゆ", "よ"], translations: ["ya", "yu", "yo"] },
  {
    symbols: ["ら", "り", "る", "れ", "ろ"],
    translations: ["ra", "ri", "ru", "re", "ro"],
  },
  { symbols: ["わ", "を"], translations: ["wa", "wo"] },
  { symbols: ["ん"], translations: ["n"] },
  {
    symbols: ["が", "ぎ", "ぐ", "げ", "ご"],
    translations: ["ga", "gi", "gu", "ge", "go"],
  },
  {
    symbols: ["ざ", "じ", "ず", "ぜ", "ぞ"],
    translations: ["za", "ji", "zu", "ze", "zo"],
  },
  {
    symbols: ["だ", "ぢ", "づ", "で", "ど"],
    translations: ["da", "ji", "zu", "de", "do"],
  },
  {
    symbols: ["ば", "び", "ぶ", "べ", "ぼ"],
    translations: ["ba", "bi", "bu", "be", "bo"],
  },
  {
    symbols: ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
    translations: ["pa", "pi", "pu", "pe", "po"],
  },
];

const Hiragana: React.FC = () => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const goToNextGroup = () => {
    setCurrentGroupIndex(
      (prevIndex) => (prevIndex + 1) % hiraganaGroups.length
    );
  };

  const goToPreviousGroup = () => {
    setCurrentGroupIndex(
      (prevIndex) =>
        (prevIndex - 1 + hiraganaGroups.length) % hiraganaGroups.length
    );
  };

  return (
    <div className="hiragana-container">
      <h1 className="hiragana-title">Impara l'Hiragana</h1>

      <div className="hiragana-carousel">
        <button onClick={goToPreviousGroup} className="carousel-button">
          &#10094;
        </button>

        <div className="carousel-content">
          <div className="group">
            {hiraganaGroups[currentGroupIndex].symbols.map((symbol, index) => (
              <div key={index} className="symbol">
                {symbol}
                <div className="name">
                  {hiraganaGroups[currentGroupIndex].translations[index]}
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
        <h2 className="info-title">Cos'è l'Hiragana?</h2>
        <p className="info-text">
          L'Hiragana è uno dei due alfabeti sillabici utilizzati nella lingua
          giapponese, l'altro è il Katakana. A differenza dei kanji, che sono
          caratteri ideografici, l'Hiragana rappresenta i suoni e viene
          utilizzato per scrivere parole giapponesi native e per esprimere la
          grammatica, come particelle e desinenze verbali. Ogni simbolo
          nell'Hiragana rappresenta una sillaba, e per scrivere una parola
          giapponese, si combinano vari simboli di Hiragana.
        </p>
        <p className="info-text">
          La storia dell'Hiragana risale all'VIII secolo, ed è stato sviluppato
          dai monaci buddisti come una forma di scrittura più semplice rispetto
          ai complessi ideogrammi kanji. Inizialmente era conosciuto come
          "onnade" (scrittura femminile), poiché le donne, che non erano ammesse
          a studiare il cinese classico, lo utilizzavano per scrivere poesie e
          opere letterarie.
        </p>
      </div>
    </div>
  );
};

export default Hiragana;
