import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Link } from 'react-router';

class AppContainer extends Component {

  render() {
    const { balance, etherBalance, address } = this.props;
    return(
      <div>
        <h2>This is the App's Container Component</h2>
        <Link to={ '/' }>Home</Link>
        <Link to={ '/about'}>About</Link>
        { this.props.children }
        <hr />
        <p>Balance is: { balance }</p>
        <p>Ether Balance is: { etherBalance }</p>
        <p>Address is: { address }</p>
      </div>
    );
  }

};

const mapStateToProps = ({ balance, etherBalance, address }) => ({ balance, etherBalance, address });

export default connect(mapStateToProps)(AppContainer);
