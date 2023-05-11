import React from "react";

const Input = (props) => {
    const [currentGuess, setCurrentGuess] = React.useState('');

    return (
        <div data-test='component-input'>
            <form className="form-inline">
                <input
                    data-test='input-box' className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="Enter Guess"
                    value={currentGuess}
                    onChange={(e) => setCurrentGuess(e.target.value)}
                />
                <button
                    data-test='submit-button'
                    type="submit"
                    onClick={(e) => e.preventDefault()}
                    className="btn btn-primary mb-2"
                >Submit</button>
            </form>
        </div>
    );
}

export default Input;