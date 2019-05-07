/**
 * 对象数组多重排序
 * @param {array} rules - 排序参照的字段名数组，注意顺序
 * @param {boolean} [reversal] - 是否倒序，默认为 false
 */
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
