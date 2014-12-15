
[[content]]
## Columns

By default, the Cadenza horizontal grid system is based on a standard 12-column and fractional grid. You can either use the simple classes, extend the placeholders, or use a mixin to make a column.
[[/]]

[[code]]

###### Settings
```scss
$grid-columns: 12 !default;
$grid-column-gutter: 1rem !default;
$grid-column-mqs: (all, small, medium, large);
```

###### Exports
- **`.col`** - column
- **`.cols`** <span class="label failure">Parent</span> columns
[[/]]

[[content]]
### The 12-Column Grid

A column can be defined as spanning from 0 to 12 columns on a 12-column grid via:

- class: `.col-[n]`
- placeholder: `%column-[n]`
- mixin: `@mixin column([n], ...)`

### Fractional
<div class="row-1 field text-center small" ng-repeat="col_span in [
    'full',
    'half',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th'
]">
    <div ng-repeat="col in component.util.range($index + 1)" class="border-primary col-{{col_span}}">col-{{col_span}}</div>
</div>

### No Gutter
<div class="row-1 field text-center small" ng-repeat="col_span in [12,6,4,3,2,1]">
    <div ng-repeat="col in component.util.range(12/col_span)" class="border-primary col-{{col_span}}">col-{{col_span}}</div>
</div>

### Gutter
<div class="row-1 field gutter text-center small" ng-repeat="col_span in [12,6,4,3,2,1]">
    <div ng-repeat="col in component.util.range(12/col_span)" class="border-primary col-{{col_span}}">col-{{col_span}}</div>
</div>

### Offset
<div class="row-1 field gutter text-center small" ng-repeat="col_span in component.util.range(12)">
    <div class="border-primary col-1 col-offset-{{col_span}}">col-offset-{{col_span}}</div>
</div>
[[/]]

[[code]]
###### Exports
- **`.col-[n]`** - column spanning *n* rows
- **`.cols-[n]`** - parent of columns each spanning *n* rows
- **`.col-offset-[n]`** - column offset from left using margin
- **`.col-push-[n]`** - column pushed from left using `left`
- **`.col-pull-[n]`** - column pushed from right (pulled) using `right`
[[/]]