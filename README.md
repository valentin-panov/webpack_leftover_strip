[![Build status](https://ci.appveyor.com/api/projects/status/mc8jqmnsx2r94dr7?svg=true)](https://ci.appveyor.com/project/vapanov/webpack-leftover-strip)

WEB VERSION: https://valentin-panov.github.io/webpack_leftover_strip/

# Try to find the development artefact in the production build?

https://github.com/valentin-panov/webpack_leftover_strip/blob/6e3cf49f49e64524d1a4b7681944d29a5ab28c81/src/App.tsx#L7
```javascript
if (process.env.NODE_ENV !== 'production') {
alert('FIND ME IN THE CHUNK ? /// NODE_ENV: ' + process.env.NODE_ENV)
}
```

