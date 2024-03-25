/*
WE NEED STATE --> CAN BE THOUGHT AS VARIABLES WITHIN FUNCTIONS
* IF STATE CHANGES THE COMPONENT RE-RENDERS

*/

export default function Message() {
  function handleClick() {
    console.log("handleClick");
  }
  return (
    <div>
      <button onClick={handleClick}>Clcike here to get a message</button>
    </div>
  );
}
