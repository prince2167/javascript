const groceryList = [
    { item: "apple", price: 200, category: "fruits" },
  
    { item: "mango", price: 150, category: "fruits" },
  
    { item: "patato", price: 50, category: "veges" },
  
    { item: "Milk", price: 100, category: "dairy" },
  ];
  // console.log(groceryList[0].item);
  // console.log(groceryList[0].price);
  // console.log(groceryList[0].category);
  
  const [f, , ...rest] = groceryList;
  
  console.log(f.item);
  console.log(f.price);
  console.log(f.category);
  console.log(rest);