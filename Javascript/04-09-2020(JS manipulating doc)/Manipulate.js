const user1 = {
  age: 26,
  mobile: 8801967402131,
  name: "Charitha"
}
const newObj = {
  ...user1,
  location: 'Bangalore'
}
console.log(newObj)
//
newObj = {
  age: 26,
  location: "India",
  mobile: 8801967402131,
  name: "Charitha"
}