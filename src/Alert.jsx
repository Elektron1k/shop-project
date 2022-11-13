import { useEffect } from 'react';

function Alert({ alertName, closeAlert }) {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [alertName]);
  return (
    <div id="toast-container">
      <div className="toast">{alertName} added to cart</div>
    </div>
  );
}

export default Alert;
