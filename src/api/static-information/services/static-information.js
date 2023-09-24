'use strict';

/**
 * static-information service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::static-information.static-information');
