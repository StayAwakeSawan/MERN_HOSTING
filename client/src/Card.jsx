import { Component, useState } from "react";

// class based component
// export class Card extends Component {
//   render() {
//     return <div>Card</div>;
//   }
// }

export function Card({ data, data2, children, signal }) {
  console.log(data2);

  let num = 1;
  let [num2, setNum2] = useState(1);

  return (
    <div>
      Card {data.name}
      {children}
      <button onClick={() => (num = num + 1)}>Click me {num}</button>
      <button onClick={() => setNum2(num2 + 1)}>Click me {num2}</button>
    </div>
  );
}

// App -------(value, children)-props---------> children

//  App function---> props---> Card --> function()
