//recieve the success state as a prop
import React from "react";
const Congrats = (props) => {
    if(props.success){
        return (
            <div className="alert alert-success" data-test='component-congrats'>
                <span data-test='congrats-message'>
                    Congratulations! You guessed the word!
                </span>
            </div>
        )
    }
    else {
        return (
            <div data-test='component-congrats'/>
        )
    }
    
    
}

export default Congrats;