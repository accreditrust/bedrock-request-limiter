/*
 * Bedrock request limiter configuration
 *
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 */
var config = require('bedrock').config;

config.limiter = {};
// redis config
config.limiter.host = 'localhost';
config.limiter.port = 6379;
config.limiter.options = {};
config.limiter.password = '';
// limit number of requests per hour per IP address (0 means no limit)
config.limiter.ipRequestsPerHour = 0;
