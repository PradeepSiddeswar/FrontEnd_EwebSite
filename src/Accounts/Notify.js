import React, { useEffect } from 'react';

function Notify() {
  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission()
        .then((permission) => {
          if (permission === 'granted') {
            console.log('Notification permission granted.');
          } else {
            console.log('Notification permission denied.');
          }
        })
        .catch((error) => {
          console.error('Permission request error:', error);
        });
    } else {
      console.error('Notification API not available in this browser.');
    }
  }, []);

  return (
    <div>
      <h1>Push Notifications Example</h1>
      {/* Your app content */}
    </div>
  );
}

export default Notify;
