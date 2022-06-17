# great-circle-cursor

calculate the coordinates from a point along a great circle course heading for a distance in meters

# example

calculate a point 150km south east (135 degrees) of fairbanks:

``` js
var gc = require('great-circle-cursor')
var fairbanks = [-147.7,64.8]
console.log(gc([],fairbanks,135,150_000))
```

output:

```
[ -145.53922765306623, 63.8309774628036 ]
```

