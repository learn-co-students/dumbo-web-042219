import React, { Component } from 'react'

export default (props) => (
  <div style={{border: '1px solid black'}}>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <div>
    <p>
      {props.up_votes} Up Votes
    </p>
    <button onClick={props.onUpVote}>upvote</button>
    <p>
      {props.down_votes} Down Votes
    </p>
    <button onClick={props.onUpVote}>downvote</button>
    </div>
  </div>
)
