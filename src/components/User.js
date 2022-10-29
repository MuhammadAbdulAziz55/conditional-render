import React from "react";

const User = (props) => {
  const familiar = props.familiar;
  let greetings;
  if (familiar) {
    greetings = <p>Welcome, my friend.</p>;
  } else {
    greetings = <p>Who the hell are you?</p>;
  }
  //bellows conditional method called ternary operator
  const greetings2 = familiar ? (
    <p>Welcome, my friend.</p>
  ) : (
    <p>Who the hell are you?</p>
  );

  return (
    <div>
      <div>
        <h2>Greetings</h2>
        {greetings2}
      </div>
      <div>
        <h2>Food</h2>
        {familiar ? (
          <p>I will buy food</p>
        ) : (
          <p>Lets eat his his whose whose</p>
        )}
      </div>
      <div>
        <h2>Connection</h2>
        {familiar && <p>Let's join my facebook</p>}
      </div>
    </div>
  );
};

export default User;
