function User(name, age, mobile) {
    this.name = name;
    this.age = age;
    this.mobile = mobile;
  }
  var user1 = new User('Chaitra', 26, 8888888888);
  var user2 = new User('Charitha',21,9999999999);
  console.log(user1);
  console.log(user2);
  user1 = {
    age: 26,
    mobile: 1993,
    name: "Talha"
  }