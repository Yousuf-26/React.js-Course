export default function ConditionalCmp() {
  //HOW TO CONDITIONALLY RENDER ELEMENTS

  {
    /*
      //MUTIPLE RETURN STATEMENT IS NOT A GOOD PRACTICE
        const display = true;
        if (display) {
            return (
            <div>
                <h3>This is component is conditionally rendered</h3>
            </div>
            );
        } else {
            return (
            <div>
            <h3>The component is not conditionally rendered</h3>
            </div>
        );
        }
    
    
    */
  }

  let message;
  const display = false;

  if (display) {
    message = <h1>This is conditionally rendered using best practice</h1>;
  } else {
    message = <h1>This is not available using best practice</h1>;
  }

  return message;
}
