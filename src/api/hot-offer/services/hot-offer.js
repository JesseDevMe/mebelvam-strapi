'use strict';

/**
 * hot-offer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hot-offer.hot-offer');
