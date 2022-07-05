//var a = [1, 2];
// a[100] = "23";

// console.log(a.length);

// console.log(typeof 42.1);

const a = { x: 1 };
const b = { x: 1 };

// console.log(a === b);

const bear = {
  sound: "roar",

  roar: function () {
    console.log(this.sound);
  },
};

bear.sound = "bleat";
bear.roar();
