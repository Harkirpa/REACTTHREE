import React, { Component } from 'react'
import '../index.css'
class FuncChild extends Component {
  constructor(props){
    super(props);
    console.log(this.props.value)
  }
 render(){
  return (
    <>
               
    <div className="container">
        {
            this.props.value.map((item, index) => {
                return (
                    <>
                    <span>
                            <div id="box" key={index}>
                                Name:{item.name} | Department:{item.dept} | Rating:{item.rate}
                            </div>
                        </span>
                    </>
                )
            })}
    </div>
    <button id="go"  onClick={this.props.toggleHandle}>Go Back</button>
</>
)

}
}

export default FuncChild;