// const fruits = ['apel', 'banana', 'mango']
// const number = [1, 2, 3]

// const newArray = fruits.concat(number);
// console.log(newArray); // Output: ["apel", "banana", "mango", 1, 2, 3]
const arr1 = [
    { min_score: 1, status: "fresher" },
    { min_score: 5, status: "junior" },
    { min_score: 8, status: "senior" },
  ];
  
  const arr2 = [
    { name: "Susanti", id: "1", score: 4, status_test: "" },
    { name: "Mei", id: "2", score: 7, status_test: "" },
    { name: "Ros", id: "3", score: 9, status_test: "" },
    { name: "Mail", id: "4", score: 2, status_test: "" },
  ];
  const arr3 = arr2.concat(arr1);
  for (var i=0; i<=arr3.length; i++){
    if (arr2[i]===arr3[0]){
      console.log("name: " + arr2[i].name +" "+"id: " + arr2[i].id +" "+"score: " + arr2[i].score +" "+"status_test: " + arr1[1].status +" ");
      }
    if (arr2[i]===arr3[1]){
        console.log("name: " + arr2[i].name +" "+"id: " + arr2[i].id +" "+"score: " + arr2[i].score +" "+"status_test: " + arr1[1].status +" ");
      }
      if (arr2[i]===arr3[2]){
        console.log("name: " + arr2[i].name +" "+"id: " + arr2[i].id +" "+"score: " + arr2[i].score +" "+"status_test: " + arr1[2].status +" ");
      }
      if (arr2[i]===arr3[3]){
        console.log("name: " + arr2[i].name +" "+"id: " + arr2[i].id +" "+"score: " + arr2[i].score +" "+"status_test: " + arr1[0].status +" ");
      }
  }