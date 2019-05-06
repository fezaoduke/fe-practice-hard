// closest polyfill
window.Element && 'closest' in Element.prototype || +function() {
  Element.prototype.closest = function(targetEl) {
    var result = this.closestAll(targetEl);
    return result.length === 0 ? null : result[0];
  }
}();

Element.prototype.closestAll = function(targetEl) {
  var el = this;
  var nodelist;

  // 参数校验
  if (typeof targetEl !== 'string' || !targetEl.trim()) {
    throw Error('\' + targetEl + \' is not a valid selector');
  }

  nodelist = document.querySelectorAll(targetEl);

  // 使用 ES5 的 filter 过滤出包含 el 的元素
  return Array.prototype.slice.call(nodelist)
    .filter(function(node) {
      return node.contains(el)
    })
    .reverse();  // 反转数组，最近的排前面，依次从近到远
}
