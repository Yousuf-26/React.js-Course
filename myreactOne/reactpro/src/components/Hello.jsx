/*
1. Component is bascially a building block of React.js
2. return JSX
3. props is an object that we pass in the function
Every function must return some JSX
*/
const name = "Samuel";
function Hello(props) {
  //props is an object that we pass in the function and carries value from the component
  //Immutability of Props, we cannot change props value
  console.log(props);
  //Destructuring component
  //props ={name: 'Rahman', age: '30'}
  const { name, age, seatNumbers, person } = props;

  return (
    <div>
      <h1>
        Name: {name} Age:{age} {seatNumbers[0]}
        <br />
        {person.name}
      </h1>
    </div>
  );
}

//In order to use the component(function) , we need to export it
export default Hello;
