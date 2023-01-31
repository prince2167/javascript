
const cars = [
    {
      id:1,
      name: "BMW ",
      model: "320d",
      speed:140
    },
    {
      id:2,
      name: "mercedes",
      model: "G wagon",
      speed:160
    },
    {
      id:3,
      name: "audi",
      model: "q7",
      speed:150
    },
    {
      id:4,
      name: "toyota",
      model: "Land crusier",
      speed:180
    },
    {
      id:5,
      name:  "Range rover",
      model: "320d",
      speed:170
    },
  ];
  cars.map((car)=>{
    console.log(car.name);
    console.log(car.model);
    console.log(car.speed);
  })
  cars.forEach((cars)=>{
  console.log(cars.name);
  })