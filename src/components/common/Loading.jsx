import './Loading.css';

const Loading = ({ text = 'Loading magical books...' }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">{text}</p>
    </div>
  );
};

export default Loading;
