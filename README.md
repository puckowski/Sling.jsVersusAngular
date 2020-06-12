# Sling 3 versus Angular 9 Benchmark

This project contains two projects which create the same Bootstrap 4 navbar. 

Both projects time how long it takes to route to the component which creates the Bootstrap 4 navbar to get an idea of framework performance relative to one another.

[Sling.js on GitHub](https://github.com/puckowski/Sling.js)

| Sling.js 3 Times |
| ---------------- |
| 0.388916015625   |
| 0.28125          | 
| 0.295166015625   |
| 0.254638671875   |
| 0.248779296875   |
| 0.27392578125    |
| 0.2509765625     |
| 0.243896484375   |
| 0.25390625       |
| 0.258056640625   |

| Angular 9 Times  |
| ---------------- |
| 0.56396484375    |
| 0.4677734375     |
| 0.43310546875    |
| 0.415771484375   |
| 0.385986328125   |
| 0.557373046875   |
| 0.4111328125     |
| 0.39013671875    |
| 0.369140625      |
| 0.3837890625     |

Sling.js 3 average time: 0.2743 seconds
Angular 9 average time: 0.4373 seconds

Sling.js 3 is roughly 37.27% faster than Angular 9.
