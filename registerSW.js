if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/ToDo/sw.js', { scope: '/ToDo/' })})}