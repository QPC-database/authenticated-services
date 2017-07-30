import React from 'react';
import Welcome from './src/Welcome.jsx';
import styles from './app.scss';

const App = () => (
  <div className={styles.app}>
    <Welcome />
  </div>
);

export default App;
