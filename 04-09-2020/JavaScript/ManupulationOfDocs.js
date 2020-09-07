function User(name, age, mobile) {
    this.name = name;
    this.age = age;
    this.mobile = mobile;
  }
  var userCount = 10;
  var userArray = new Array(userCount);

  for(i=0;i<userCount;i++)
  {
    userArray[i] = new User('User'+i, parseInt(Math.random()* 20 +18), 999999950+i);
  }
  for(i = 0;i<userCount;i++)
  {
    console.log(userArray[i]);
  }