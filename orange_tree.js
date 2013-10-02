
function Orange(){
    this.diameter = function (){
      return Math.round((Math.random()*(12.00/2.54 - 8.00/2.54) + 8.00/2.54)*100)/100;
  };
}

function orangeTree() {
  this.age = 0;
  this.height = 0;
  var self = this;
  this.orange_basket = [];
  this.age_one_year = function() {
    self.age = self.age + 1;
    if (self.age < 30 && self.height < 26) {self.height += 2;}
    if (self.age < 45 && self.age > 5) {growOranges();}
  };

  function growOranges() {
    if(self.dead() === false){
      for(i = 0; i < 11; i++){
        self.orange_basket.push(new Orange());
      }
    }
  }

  this.dead = function(){
    return self.age > 50;
  };

  this.any_oranges = function(){
    return self.orange_basket.length > 0;
  };

  this.pick_an_orange = function() {
    if(this.any_oranges()){
      return self.orange_basket.pop;
    }else{
      throw "This tree has no oranges";
    }
  };
}

// Have an OrangeTree#height method which returns the tree's current height
// Have an OrangeTree#age method which returns the tree's current age

// OrangeTree#any_oranges
// OrangeTree#pick_an_orange if no oranges raise NoOrangeError

var orange = new Orange();
console.log(orange.diameter());
var tree = new orangeTree();
tree.age_one_year();
console.log(tree.age);
console.log(tree.height);
for(i = 0; i < 11; i++){
tree.age_one_year();
}
console.log(tree.age);
console.log(tree.height);
console.log(tree.any_oranges());
console.log(tree.dead());
console.log(tree.orange_basket);

