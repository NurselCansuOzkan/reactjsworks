import React from "react";
function Header({ number, data }) {
  console.log("Header component Re-rendered");

  return (
    <div>
      Header - {number}
      <br />
      <br />
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}
//state değiştiğinde render işlemi yapıldığında bu kısmın render edilmemesi için React.memo() ile sarmalandı
export default React.memo(Header);
