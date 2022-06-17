var test = require('tape')
var bearing = require('great-circle-bearing')
var hdist = require('haversine-distance')
var gcc = require('../')

test('cursor', function (t) {
  var a = [-147.7,64.8]
  var b = gcc([],a,0,150_000)
  t.ok(cmp(b, [-147.70, 66.15], 1e-2), 'north 150km')
  t.ok(Math.abs(hdist(a,b)-150_000) < 1e-3) 
  var c = gcc([],a,135,150_000)
  t.ok(cmp(c, [-145.54, 63.83], 1e-2), 'southeast 150km')
  t.ok(Math.abs(hdist(a,c)-150_000) < 1e-3) 
  var d = gcc([],a,270,2_000_000)
  t.ok(cmp(d, [175.01, 59.40], 1e-2), 'west 2000km')
  t.ok(Math.abs(hdist(a,d)-2_000_000) < 1e-3) 
  t.end()
})

test('check bearings', function (t) {
  var a = [-147.7,64.8]
  var b = gcc([],a,-90,2_000_000)
  var c = gcc([],b,bearing(b,a),2_000_000)
  t.ok(Math.abs(bearing(a,b)-(-90)) < 1e-8, 'bearing ab')
  t.ok(cmp(a,c,1e-8), 'ac')
  t.ok(Math.abs(hdist(a,b)-2_000_000) < 1e-2, 'distance ab 2000km')
  var d = gcc([],a,-90,4_000_000)
  var e = gcc([],d,bearing(d,a),4_000_000)
  t.ok(Math.abs(bearing(a,d)-(-90)) < 1e-8, 'bearing ad')
  t.ok(cmp(a,e,1e-8), 'ae')
  t.ok(Math.abs(hdist(a,d)-4_000_000) < 1e-2, 'distance ad 4000km')
  t.end()
})

function cmp(a, b, e) {
  return Math.abs(a[0]-b[0]) < e && Math.abs(a[1]-b[1]) < e
}
