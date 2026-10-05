import React from 'react'
import ICard from './ICard'
import flower from './assets/flower.jpg'

function ICardGallery() {
  const student = [
    {
      roll: "12345",
      name: "Vishu",
      course: "B.Tech",
      branch: "Computer Science and engineering ",
      picture: flower,
    },
    {
      roll: "659830",
      name: "Varun",
      course: "B.Tech",
      branch: "Computer Science and engineering ",
      picture: flower,
    },
    {
      roll: "12345",
      name: "Arya",
      course: "B.Tech",
      branch: "Computer Science and engineering ",
      picture: flower,
    },
    {
      roll: "123",
      name: "Yash",
      course: "B.Tech",
      branch: "Computer Science and engineering ",
      picture: flower,
    },
    {
      roll: "12345",
      name: "Pandat",
      course: "B.Tech",
      branch: "Computer Science and engineering ",
      picture: flower,
    },
  ];
  
  
    return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', border: '2px solid white' }}>
      {/* <ICard roll="12345" name="Tanishq" branch="Computer Science and Engineering" picture={flower}/>
      <ICard
        roll="12345"
        name="Tanishq"
        course="B.Tech"
        branch="Computer Science and Engineering"
        college="Abes engineering college"
        picture={flower}
      />
      <ICard
        roll="12346"
        name="John Doe"
        course="B.Tech"
        branch="Computer Science and Engineering"
        college="Abes engineering college"
        picture={flower}
      /> */}
      {/* <ICard data={student[1]}/> */}
      {
        student.map((ele) => (
          <ICard key={ele.roll + ele.name} data={ele} />
        ))
      }
     
    </div>
  );
}

export default ICardGallery