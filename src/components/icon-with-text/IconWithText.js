import { useState } from 'react';


function IconWithText({ children, text }) {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      {children}
      {showText && <span className={styles.tooltipText}>{text}</span>}
    </div>
  );
}

export default IconWithText;
