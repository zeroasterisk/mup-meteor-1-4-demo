# Demo Repo

> **⚠️ Personal Hobby Project** — This is an independent, personal project by [Alan Blount](https://github.com/zeroasterisk). It is **not affiliated with, endorsed by, or supported by any employer, company, or organization**. No warranty; use at your own risk.


https://github.com/meteor/meteor/issues/7475#issuecomment-235698284

Steps to setup:

1. Install [mup(new)](https://github.com/kadirahq/meteor-up)
2. Replace the `deploy/mup.js` details as needed, server & credentials
   give it
3. Prep: `(cd webapp && npm install --production)`
4. Deploy with: `(cd deploy && mup deploy)`

I've been adding in npm packages, trying to figure out which it is...
From my experiementation, it appears the problem is `redux`

If you remove redux and deploy again, it should work.

Still trying to figure out what the cause is...
