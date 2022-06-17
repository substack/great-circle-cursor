// https://edwilliams.org/avform147.htm#LL
var R = 6378137

module.exports = function (out, start, course, distance) {
  var lon1 = start[0]*Math.PI/180, lat1 = start[1]*Math.PI/180
  var d = distance/R
  var tc = -course*Math.PI/180
  var lat = Math.asin(
    Math.sin(lat1)*Math.cos(d)
    + Math.cos(lat1)*Math.sin(d)*Math.cos(tc)
  )
  var dlon = Math.atan2(
    Math.sin(tc)*Math.sin(d)*Math.cos(lat1),
    Math.cos(d)-Math.sin(lat1)*Math.sin(lat)
  )
  var lon = (lon1-dlon + Math.PI) % (2*Math.PI) - Math.PI
  out[0] = (((lon*180/Math.PI + 180) % 360) + 360) % 360 - 180
  out[1] = lat*180/Math.PI
  return out
}
