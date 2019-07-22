import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logInAsync } from '../actions/loggedIn'

export default function withAuth(ComponentToBeWrapped) {
  class Something extends React.Component {
    componentDidMount() {
      try {
        this.props.setCurrentOtter()
          .catch(e => {
            this.props.history.push("/login")
          })
      } catch (e) {
        if (e.message === "Please log in") {
          this.props.history.push("/login")
        }
      }
    }

    render() {
      return <ComponentToBeWrapped
        loggedIn={this.props.loggedIn}
        {...this.props}
        />
    }
  }

  const mapStateToProps = state => {
    return {
      loggedIn: state.loggedIn
    }
  }

  // const mapDispatchToProps = dispatch => {
  //   return {
  //     setCurrentOtter: function(otter) {
  //       // dispatch({
  //       //   type: 'SET_CURRENT_OTTER',
  //       //   currentOtter: otter,
  //       //   loggedIn: true
  //       // })
  //
  //       dispatch(logIn())
  //     }
  //   }
  // }

  return withRouter(connect(mapStateToProps, {
    setCurrentOtter: logInAsync
  })(Something))
}
