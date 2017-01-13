[![Bower version](https://badge.fury.io/bo/angular-mn-password.svg)](https://badge.fury.io/bo/angular-mn-password)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/angular-mn-password.svg)](https://gemnasium.com/github.com/minimalist-components/angular-mn-password)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   


# angular-mn-password

An angular directive to [mn-password](https://github.com/minimalist-components/mn-password)

See the [demo](https://minimalist-components.github.io/mn-password)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-password/master/sources/example/mn-password.gif)](https://minimalist-components.github.io/mn-password/)

### install

With bower

```sh
bower install --save angular-mn-password
```

Or just download the main files, located in [dist/](https://github.com/minimalist-components/angular-mn-password/tree/master/dist)

### usage

```js
// add dependency in you module
angular.module('app', [
  'mn-password'
]);
```

And then, in your html, you can use the tag:

```html
<mn-password placeholder="Password" ng-model='password'></mn-password>
```


For more details check [mn-password docs](https://github.com/minimalist-components/mn-password).

