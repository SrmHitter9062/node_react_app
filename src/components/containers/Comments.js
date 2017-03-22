import React , { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'

class Comments extends Component {
  constructor(){
    super()
    this.state = {
      list: [
        {body:'comment 1' , username:'user1',timestamp:'10:23'},
        {body:'comment 2' , username:'user2',timestamp:'10:34'},
        {body:'comment 3' , username:'user3',timestamp:'10:45'}
      ]
    }
  }
  render(){
    const commentList = this.state.list.map((comment ,i ) =>{
        return(
          <li><Comment currentComment ={comment} /></li>
        )
    } )
    return(
      <div>
        <h2>Zone 1 Comments </h2>
          <div style={styles.comment.commentBox}>
            <ul style={styles.comment.commentsList}>
              { commentList}
            </ul>
           </div>
      </div>
    )
  }
}

export default Comments
