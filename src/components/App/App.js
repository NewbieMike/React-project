import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  static defaultProps = {
    children: <img src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" className={styles.image}/>
  };
  render() {
    return (
      <main className={styles.component}>
          <h1 className={styles.title}>My first React app</h1>
          <h2 className={styles.subtitle}>Hello world!</h2>
          <List title={['Things to do ', <sup key='1'>soon!</sup>]} source='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'>
          
          </List>
      </main>
    )
  }
}

export default App;
