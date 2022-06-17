# great-circle-cursor

get the coordinates for a point along a great circle course heading for a distance in meters

# example

calculate a point 150km southeast (135 degrees) of fairbanks:

``` js
var gcc = require('great-circle-cursor')
var fairbanks = [-147.7,64.8]
console.log(gcc([],fairbanks,135,150_000))
```

output:

```
[ -145.53922765306623, 63.8309774628036 ]
```

# api

```
var gcc = require('great-circle-cursor')
```

## gcc(out, start, course, distance)

Calculate the coordinates for a point `distance` meters from the `start` coordinates
(in `[lon,lat]` degrees) with a heading of `course` degrees.

The result is stored in `out` and `out` is returned.

# install

```
npm install great-circle-cursor
```

# license

bsd

