# bedrock-request-limiter

A [bedrock][] module that adds HTTP(S) request limiting to [bedrock-express][]
to, for example, help mitigate DoS attacks.

**bedrock-request-limiter** is built using [redback][].

## Quick Examples

```
npm install bedrock-request-limiter
```

Request limiting is controlled via the configuration system; simply include
**bedrock-request-limiter** and set the maximum number of requests per IP per
hour to allow.


```js
var bedrock = require('bedrock');

require('bedrock-server');
require('bedrock-express');
require('bedrock-request-limiter');

// limit number of requests per hour per IP address (0 means no limit)
config.limiter.ipRequestsPerHour = 3600;

bedrock.start();
```

## Configuration

For more documentation on configuration, such as where to set your
[Redis][] host, port, and password information, see [config.js](https://github.com/digitalbazaar/bedrock-request-limiter/blob/master/lib/config.js).


[bedrock]: https://github.com/digitalbazaar/bedrock
[bedrock-express]: https://github.com/digitalbazaar/bedrock-express
[redback]: https://github.com/chriso/redback
[Redis]: http://redis.io/
