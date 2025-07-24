import { useState } from 'react';
import './workresult.scss';

export const WorkResult = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleButton = (index) => {
    setActiveIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // 이미 눌렀으면 제거
          : [...prev, index] // 아니면 추가
    );
  };

  return (
    <div className="button-group">
      {[0, 1, 2, 3, 4].map((index) => {
        const isActive = activeIndexes.includes(index);
        return (
          <button
            key={index}
            className={`custom-button ${isActive ? 'active' : ''}`}
            onClick={() => toggleButton(index)}
          >
            버튼 {index + 1}
          </button>
        );
      })}
    </div>
  );
};
