import React, { useEffect } from 'react';

// Toast notification — auto-dismisses after 3.2s
function Toast({ message, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3200);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="toast">
      <span className="toast-icon">✅</span>
      <div className="toast-text">
        <strong>Done!</strong> {message}
      </div>
    </div>
  );
}

export default Toast;
