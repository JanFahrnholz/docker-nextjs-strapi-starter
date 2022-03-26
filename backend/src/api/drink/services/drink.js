'use strict';

/**
 * drink service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drink.drink');
