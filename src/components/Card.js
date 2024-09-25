import React from "react";

// 1. below we wrote a function instead of a class, not sure why yet, BUT in general Class is kinda a function, he showed before... 
// 2. we need curly brackets around name <h2> and email <p> because it's a JS expression
// 3. img src is with template strings to make it more dynamic and be able to use ${}. ES6 lecture. 
//and because template strings come from JS, we need to also wrap it between curly brackets.
//4. we could have done destructing like this: const { name, email, id} = props; // destructuring, also from ES6 lecture (name, email and id from props)
//BUT we did right in the arguments given to the function 

const Card = ({ name, email, id }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}200x200`} />
            <div>
                <h2>{name}</h2> 
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
