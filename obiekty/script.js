const User = {
  name: "Adam",
  age: 21,
};
console.log(User);
console.log(User.name);

for (let klucz in User) {
  console.log(klucz + ":" + User[klucz]);
}

const newUser = {
  name: "tomasz",
  age: 24,
  car: {
    brand: "Audi",
    model: "A3",
    color: "czarny",
  },
};

console.log(newUser);

console.log(newUser.car.brand);

console.log(newUser.car.model);

console.log(
  `${newUser.name} ma ${newUser.car.color} samochód marki ${newUser.car.brand}`,
);

const Woman = {
  name: "Lisa",
  age: 30,
  car: {
    brand: "toyota",
    color: "white",
    sound: function () {
      console.log("brum brum");
    },
    sound2: () => {
      console.log("wrrrr");
    },
  },
};

Woman.car.sound();
Woman.car.sound2();
Woman.country = "USA";
Woman["fav_color"] = "black";

console.log(Woman);

let dogName = "Dolar";
let dogAge = 5;

const Dog = {
  name: dogName,
  age: dogAge,
};
console.log(Dog);

const Person = {
  name: "kasia",
  shownName: function () {
    console.log(this.name);
  },
};
Person.shownName();

const Person3 = {
  name: "anna",
  "fav meal": "pizza",
  showInfo: function () {
    console.log(this);
    console.log(this["fav meal"]);
  },
};

Person3.showInfo();

const Szkola = {
  nazwa: "zspm",
  typ: "technikum nr 18",
  klasa: {
    profil: "technik informatyk",
    poziom: "4c",
    showInfo: function () {
      console.log(this.profil + "" + this.poziom);
    },
  },
};
