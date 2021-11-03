console.log("tut27");
let car = {
  name: "maruti 800",
  topspeed: 90,
  run: function () {
    console.log("car is running");
  },
};
// console.log(car);
function generalcar(givenname, givenspeed) {
  this.name = givenname;
  this.topspeed = givenspeed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
  this.analyse = function () {
    console.log(`this is slower by ${200 - this.topspeed} KMPH than mercedes`);
  };
}
car1 = new generalcar(`nissan`, 180);
car2 = new generalcar(`alto`, 90);
console.log(car1, car2);
