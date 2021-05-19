import { getLogger } from './logger.config';
import swaggerUi from 'swagger-ui-express';
import apiSpec from './../../swagger.json';
import { env } from 'src/env';

const Logger = getLogger(__filename);
export const swagger = (router) => {
  Logger.info('Start Server swagger');

  const swaggerUiOptions = {
    customCss: '.swagger-ui .topbar { display: none }',
  };

  // Dev routes
  console.log('estou no swagger', env.node);
  if (env.node === 'development') {
    router.use('/dev/api-docs', swaggerUi.serve);
    router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions));
  }
};
