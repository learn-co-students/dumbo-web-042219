import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div className="navigation_profile">
        <h1>Ott</h1>
        <img className="user_img" src={this.props.user.profile_picture} alt={this.props.user.username}/>
        <p>{this.props.user.username}</p>
      </div>
    )
  }
}

export default Profile;
