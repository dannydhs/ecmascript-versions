function newUser(name, age, country) {
  var name = name || 'Danny';
  var age = age || 30;
  var country = country || 'PE';
  console.log(name, age, country);
}

newUser();
newUser('Zoe', 4, 'PE')

// Default Params
function newAdmin(name = 'Danny', age = 30, country = 'PE') {
  console.log(name, age, country);
}

newAdmin();
newAdmin('Zoe', 4, 'PE')
