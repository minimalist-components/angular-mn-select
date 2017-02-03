[![npm version](https://badge.fury.io/js/angular-mn-select.svg)](https://badge.fury.io/js/angular-mn-select)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/angular-mn-select.svg)](https://gemnasium.com/github.com/minimalist-components/angular-mn-select)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) 

# angular-mn-select

An angular directive to [mn-select](https://github.com/minimalist-components/mn-select)

See the [demo](https://minimalist-components.github.io/angular-mn-select)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-select/master/preview.gif)](https://minimalist-components.github.io/angular-mn-select/)

### Install

```sh
npm install --save angular-mn-select
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/angular-mn-select/tree/master/dist) with your preferred tool.

### usage

```js
// add dependency in you module
angular.module('app', [
  'mn-select'
]);
```

in your controller, you just need a array to be the values, similar to

```js
angular
  .module('app')
  .controller('HousesController', HousesController)

function HousesController() {
  // or $scope.options if you use $scope
  this.options = [
    {text: 'Stark', value: 'stark'},
    {text: 'Lannister', value: 'lannister'},
    {text: 'Targaryen', value: 'targaryen'},
    {text: 'Baratheon', value: 'baratheon'},
  ]
}
```

finally in html, use the tags `mn-select` and `option`, and directives `ng-repeat` and `ng-value`, e.g.

```html
<mn-select ng-model='houses' placeholder='Houses'>
  <option ng-repeat="option in options" ng-value="option.value">{{ option.text }}</option>
</mn-select>
```


For more details check [mn-select docs](https://github.com/minimalist-components/mn-select).

