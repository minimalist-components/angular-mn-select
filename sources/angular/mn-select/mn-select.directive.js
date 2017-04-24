angular
  .module('mn-select')
  .directive('mnSelect', MnSelectDirective)

function MnSelectDirective($parse, $timeout) {
  return {
    restrict: 'E',
    require: 'ngModel',
    link,
  }

  function link(scope, element, attributes, ngModel) {

    element.bind('change', (event) => {
      $timeout(() => {
        const value = event.target.value
        ngModel.$setViewValue(value)
        ngModel.$render()
      })
    })

    scope.$watch(attributes.ngModel, (value) => {
      // console.log(value)
      element[0].value = value
    })

    $timeout(() => {
      const value = $parse(attributes.ngModel)(scope)
      if (value) {
        element[0].value = value
      }
      element[0].setMobile()
      element[0].setOptionEvents()
    })
  }
}
