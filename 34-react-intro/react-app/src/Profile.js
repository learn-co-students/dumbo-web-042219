import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Ott</h1>
        <img
          src={this.props.currentUser.profile_picture}
          width={100}
          alt="current user"
          title="THIS IS MY IMAGE!"/>
        <span>{this.props.currentUser.username}</span>
      </div>
    )
  }
}

export default Profile;
