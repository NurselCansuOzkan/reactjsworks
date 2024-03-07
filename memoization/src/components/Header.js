import React from "react";
function Header({ number, increment }) {
  console.log("Header component Re-rendered");

  return (
    <div>
      Header - {number}
      <br />
      <br />
      <button onClick={increment}>Click</button>

    </div>
  );
}
//state değiştiğinde render işlemi yapıldığında bu kısmın render edilmemesi için React.memo() ile sarmalandı
export default React.memo(Header);
