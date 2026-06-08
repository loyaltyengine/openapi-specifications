import express from 'express';
import { apiReference } from '@scalar/express-api-reference';
import 'dotenv/config';

const app = express()

const port = process.env.PORT || 3000

app.use('/api', express.static('dist'))

app.use(
  '/',
  apiReference({
    theme: 'purple',
    pathRouting: {
      basePath: '/'
    },
    sources: [
      {
        title: 'Authentication v1',
        slug: 'auth-v1',
        url: '/api/auth-v1.yaml',
        default: true,
      },
      {
        title: 'Coupons v1',
        slug: 'coupons-v1',
        url: '/api/coupons-v1.yaml',
      },

    ],

  }),
)

export default app;

if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Scalar express app listening locally on port ${port}`);
  });
}