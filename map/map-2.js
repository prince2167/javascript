const names = ["prince", "simran", "aarohi", "lokesh", "shriya", "omkar"];

names.map((name) => {
  console.log(name);
});

const persons = [
  {
    id: 1,
    name: "Prince",
    occupation: "student",
    address: {
      city: "Delhi",
      state: "New Delhi",
      country: "India",
    },
  },
  {
    id: 1,
    name: "Prince",
    occupation: "student",
    address: {
      city: "Delhi",
      state: "New Delhi",
      country: "India",
    },
  },
  {
    id: 2,
    name: "Lokesh",
    occupation: "Software Engineer",
    address: {
      city: "Pitoragarh",
      state: "UtraKhand",
      country: "India",
    },
  },
  {
    id: 3,
    name: "aarohi",
    occupation: "School Student",
    address: {
      city: "Lucknow",
      state: "UP",
      country: "India",
    },
  },
  {
    id: 4,
    name: "tyler",
    occupation: "CA",
    address: {
      city: "New York",
      state: "USA",
      country: "USA",
    },
  },
];

persons.map((person)=>{
    console.log(person.name)
    console.log(person.occupation)
    console.log(person.address.city)
    console.log(person.address.state)
})
