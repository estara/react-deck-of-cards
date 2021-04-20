import React from "react";

const DeckWrapper = (props) => {
    
    if (props.dealing) {
        return (
            <div>
              <button onClick={props.handleClick}>Stop drawing</button>
            </div>
          )
    } else {
    return (
      <div>
        <button onClick={props.handleClick}>Start drawing</button>
      </div>
    )
    }
  }

export default DeckWrapper;