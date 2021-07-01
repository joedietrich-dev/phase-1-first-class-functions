function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction() {
  return function albatross(x) { return 'I am lemonade!' };
}

function returnsAnAnonymousFunction() {
  return (x) => 'This chicken is delicious!';
}