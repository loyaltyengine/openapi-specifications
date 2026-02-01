const { apiReference } = require('@scalar/express-api-reference')
const express = require('express')
const app = express()
require('dotenv').config()

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
        title: 'Authentication (v1)',
        slug: 'auth-v1',
        url: '/api/auth-v1.yaml',
        default: true,
      },
      {
        title: 'Coupons (v1)',
        slug: 'coupons-v1',
        url: '/api/coupons-v1.yaml',
      },

    ],

  }),
)

app.listen(port, () => {
  console.log(`Scalar express app listening on port ${port}`)
})
