function multiSort(rules, reversal) {
  return function(o, p) {
    var a, b, i;

    for (i = 0; i < rules.length; i++) {
      var rule = rules[i];

      a = o[rule];
      b = p[rule];

      if (a !== b) {
        return (a - b) * (reversal ? -1 : 1);
      }
    }
  }
}
