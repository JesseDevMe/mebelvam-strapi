'use strict';

/**
 * specific-value service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::specific-value.specific-value');
