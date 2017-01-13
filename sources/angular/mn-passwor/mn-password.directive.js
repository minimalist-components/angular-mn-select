angular
  .module('mn-password')
  .directive('mnPassword', MnPasswordDirective)

function MnPasswordDirective($compile, $parse) {
  return {
    restrict: 'E',
    link,
    require: 'ngModel',
  }

  function link(scope, element, attributes) {
    const input = element.find('input')
    element[0].value = $parse(attributes.ngModel)(scope)
    input.attr('ng-model', attributes.ngModel)
    $compile(input)(scope)
  }
}
