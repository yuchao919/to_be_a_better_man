var buz = {
  fog: 'stack',
  __proto__: {
    a: function() {
      console.log('aaa');
    }
  }
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log('this is fog (' + name + ') for sure. Value: ' + buz[name]);
  } else {
    console.log(name); // toString or something else
  }
}

buz.a();
