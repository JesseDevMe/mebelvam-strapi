'use strict';

/**
 * static-information router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::static-information.static-information');
