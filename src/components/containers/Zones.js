import React , { Component } from 'react'
import Zone from '../presentation/Zone'

class Zones extends Component{
  constructor(){
    super()
    this.state = {
      list:[
        {name:'zone 1',zipCode:'10012' , numComments:10},
        {name:'zone 2',zipCode:'10013' , numComments:20},
        {name:'zone 3',zipCode:'10014' , numComments:30},
        {name:'zone 4',zipCode:'10015' , numComments:40},
        {name:'zone 5',zipCode:'10016' , numComments:50}
      ]
    }
  }
  render(){
    const listItems = this.state.list.map((zone,i) => {
      return (
        <li><Zone currentZone={zone}/></li>
      )
    })
    return(
        <div>
          <ol>
              {listItems}
          </ol>
        </div>
    )
  }
}

export default Zones
