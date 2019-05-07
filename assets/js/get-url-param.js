/**
 * 获取 url 传参指定字段的值
 * @param {string} name - 字段名称
 */
function getUrlParam(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var result = window.location.search.substr(1).match(reg);

  return result ? decodeURIComponent(result[2]) : null;
}
