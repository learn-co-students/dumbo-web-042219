import React, { Component } from 'react';
import Layouts from '../layouts'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfilePage extends Component {
  componentDidMount() {
    if (!localStorage.token) {
      this.props.history.push("/login")
    }

    if (!!localStorage.token) {
      fetch('http://localhost:3000/api/v1/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      }).then(res => {
        if (res.status === 401) {
          throw new Error("Unauthorized")
        }

        return res.json()
      }).then(({otter}) => {
        this.props.setCurrentOtter(otter)
        this.props.history.push("/profile")
      }).catch(e => {
        this.props.history.push("/login")
      })
    }
  }

  render() {
    return (
      <Layouts.Profile title="Profile">
        <dl>
          <dt>Name</dt>
          <dd>{this.props.currentOtter.name}</dd>

          <dt>Email</dt>
          <dd>{this.props.currentOtter.email}</dd>

          <dt>Interests</dt>
          <dd>{this.props.currentOtter.interests}</dd>
        </dl>
      </Layouts.Profile>
    );
  }

}

const mapStateToProps = state => {
  return {
    currentOtter: state.currentOtter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentOtter: function(currentOtter) {
      dispatch({ type: 'SET_CURRENT_OTTER', currentOtter })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage));
