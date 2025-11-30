import { useState } from 'react';
import './Input.css';

const Input = ({
  type = 'text',
  label,
  value,
  onChange,
  placeholder = '',
  error = '',
  required = false,
  icon = null,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <div className={`input-container ${isFocused ? 'focused' : ''} ${error ? 'error' : ''} ${icon ? 'has-icon' : ''}`}>
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="input-field"
          {...props}
        />
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
