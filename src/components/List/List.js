import React from 'react';
import styles from './list.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        source: PropTypes.string.isRequired,
      }
      static defaultProps = {
        children: <p>I can do all the things!!!</p>,
      }
  render() {
    return (
      <section className={styles.component}>
          <Hero titleText={this.props.title} imageSource = {this.props.source}/>
          <div className={styles.description}>
            {this.props.children}
          </div>
          <div className={styles.columns}>
            <Column title='Column one' />
            <Column title='Column two' />
            <Column title='Column three' />
        </div>
      </section>
    )
  }
}


export default List;
