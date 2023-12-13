[![Build status](https://ci.appveyor.com/api/projects/status/mc8jqmnsx2r94dr7?svg=true)](https://ci.appveyor.com/project/vapanov/webpack-leftover-strip)

WEB VERSION: https://valentin-panov.github.io/webpack_leftover_strip/

# Try to find the development artefact in the production build?

```javascript
if (process.env.NODE_ENV !== 'production') {
alert('FIND ME IN THE CHUNK ? /// NODE_ENV: ' + process.env.NODE_ENV)
}
```

