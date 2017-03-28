function printMultTable(min, max) {
  for (var x = min; x <= max; x++) {
    console.log('');
    for (var y = min; y <= max; y++) {
      console.log(x + ' x ' + y + ' = ' + x * y);
    }
  }
}

printMultTable(1, 12);
