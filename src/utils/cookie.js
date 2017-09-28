export default {
  set: function (name, value, days) {
    let d = new Date()
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
    window.document.cookie = name + '=' + value + ';path=/;expires=' +
      d.toGMTString()
  },
  get: function (name) {
    let v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    return v ? v[2] : null
  },
  delete: function (name) {
    this.set(name, '', -1)
  }
}
