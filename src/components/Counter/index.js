import "./index.css"

import {Component} from "react"


class Counter extends Component {
    state={count:0}
    onIncrement=()=>{
        this.setState((prevState)=> ({count:prevState.count+1})
        )
    }
    onDecrement=()=>{
        this.setState((prevState)=>({count:prevState.count-1}))
    }

    render(){
       let  {count}=this.state
        return({
           <div className="container">

           <h1 className="heading"> Counter{ count}</h1>
           <div>
               <button className="button" onClick={this.onIncrement}>
                   Increase
               </button>
               <button className="button" onClick={this.onDecrement}>
                   Decrease
               </button>
           </div>

           </div>

        })
    }
}

export default Counter