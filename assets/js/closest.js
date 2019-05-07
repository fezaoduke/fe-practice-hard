/**
 * 沿当前元素的 DOM 树向上遍历，找到所有匹配 `node` 选择器的父祖元素
 */
Element.prototype.closestAll = function(node) {
  var el = this;
  var nodelist;

  // 参数校验
  if (typeof node !== 'string' || !node.trim()) {
    throw Error('\' + node + \' is not a valid selector');
  }

  nodelist = document.querySelectorAll(node);

  // 使用 ES5 的 filter 过滤出包含 el 的元素
  return Array.prototype.slice.call(nodelist)
    .filter(function(node) {
      return node.contains(el)
    })
    .reverse();  // 反转数组，最近的排前面，依次从近到远
}

// closest polyfill（js 有原生的 closest 方法）
window.Element && 'closest' in Element.prototype || +function() {
  Element.prototype.closest = function(node) {
    var result = this.closestAll(node);
    return result.length === 0 ? null : result[0];
  }
}();


