// This file was added by layer0 init.
// You should commit this file to source control.

import { Router } from '@layer0/core/router';
const ONE_HOUR = 60 * 60;
const ONE_DAY = 24 * ONE_HOUR;

const router = new Router();

for (let i = 1; i < 1001; i++) {
  router.match(`/test/${i}/:id`, ({ send, cache }) => {
    cache({
      edge: { maxAgeSeconds: ONE_DAY },
      browser: { maxAgeSeconds: ONE_DAY },
    });
    send(`route /test/${i}/`);
  });
}
// send any unmatched request to origin
router.fallback(({ proxy }) => proxy('origin'));

export default router;
