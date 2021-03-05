function Human(emotion) {
  this.emotion = emotion;
}

Human.prototype.changeEmotion = function (newEmotion) {
  //prototype은 instance가
  //부모의 method를 사용할수 있게 하는것이고
  this.emotion = newEmotion;
  console.log(this.emotion);
};

let human = new Human();
human.changeEmotion("ddd");
console.log(human.__proto__.changeEmotion);

function Bird() {}
let bird = new Bird();

function Cat() {}

function Mixin(target) {
  //Mixin은 instance에 method를 추가해주는 것
  target.hunt = function () {
    return "...hungry";
  };
}

Mixin(Bird);
Mixin(Cat);
console.log(bird);
