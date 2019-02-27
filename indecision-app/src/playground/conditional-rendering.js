
let user = {
  name: 'Matthew',
  age: 43,
  location: 'PDX'
};

// let userName = 'Matt';
// let age = 43;
// let loc = 'PDX';

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
};

/* examples:
name - ternary operator; simplified if/else statement.  is expression, so can be written inline
line 2 - logical "and" operator
location - call conditional render function
*/
const template2 = (
  <div>
    <h1>Name: {user.name ? user.name : 'Anonomous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

