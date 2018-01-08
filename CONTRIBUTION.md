# Setup Web Version Locally

You need to have an HTTP static file server like [live-server](https://www.npmjs.com/package/live-server). 

Navigate to the directory that contains index.html on your terminal and execute

```bash
live-server
```

This should start a server on port 8080, and open the address `https://localhost:8080` on your browser.

## TODO

- [ ] Specific url/page for each meme, which shows details of the meme such as author, description, origin and history.
- [ ] Host audio on a CDN such as soundcloud
- [ ] Have an actual node server serving the app
- [ ] Store records in a DB
- [ ] Let users create sounds
- [ ] Users shouldn't have to sign up, but we still need to be able to identify them
