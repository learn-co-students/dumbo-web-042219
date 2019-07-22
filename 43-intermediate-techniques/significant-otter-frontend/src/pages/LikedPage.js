import React, { Component } from 'react';
import Layouts from '../layouts'

class LikedPage extends Component {
  componentDidMount() {
    if (!localStorage.token) {
      this.props.history.push("/login")
    }

    if (!!localStorage.token) {
      fetch('http://localhost:3000/api/v1/liked', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      }).then(res => {
        if (res.status === 401) {
          throw new Error("Unauthorized")
        }

        return res.json()
      }).catch(e => {
        this.props.history.push("/login")
      })
    }
  }

  render() {
    return (
      <Layouts.List title="liked">
        LikedPage
      </Layouts.List>
    );
  }

}

export default LikedPage;
