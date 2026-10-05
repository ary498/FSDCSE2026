import React from 'react'

function ICard({data}) {
  return (
    <div
      style={{
        border: "10px solid red",
        height: "500px",
        width: "300px",
        backgroundColor: "white",
        marginTop: "100px",
        fontweight: "bold",
        color: "black",
      }}>
      {/* <img src="https://www.bing.com/th/id/OIP.fnCmCPk0m964Ynm7U5Y78gAAAA?w=193&h=266&c=8&rs=1&qlt=90&o=6&dpr=2&pid=ImgAns&rm=2"
        style={{ height: 100, width: 100 }}
      /> */}
      <img src={data.picture} alt={`${data.name}'s profile`} style={{ height: 100, width: 100 }} />
      <h2 style={{ color: "black", textAlign: "center", fontWeight: "bold" }}>
        roll: {data.roll}
      </h2>
      <h3>name: {data.name}</h3>
      <h4>course: {data.course}</h4>
      <h5>branch: {data.branch}</h5>
      <h6>college: {data.college}</h6>
    </div>
  );
}

export default ICard