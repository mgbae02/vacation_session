import './BlockItem.scss';

export const BlockItem = ({ number, title, desc, reverse }) => {
  return (
    <div className={`blockItem ${reverse ? 'reverse' : ''}`}>
      <div className="blockContent">
        <div className="blockNumber">{number}</div>
        <h2 className="blockTitle">{title}</h2>
        <p className="blockDesc">{desc}</p>
        <button className="blockButton">
          바로가기 <span className="arrow">〉</span>
        </button>
      </div>
      <div className="blockImage" />
    </div>
  );
};
