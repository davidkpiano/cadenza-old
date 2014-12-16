[[content]]

## Rows

With Cadenza, you can implement a vertical grid system in your layouts alongside a horizontal grid system. A **row** is much like a row in any other framework; that is, they are full-width and able to contain columns. However, the biggest difference in Cadenza is that you can manipulate the size and layout of rows in much the same way as you can for columns.

[[/]]

[[code]]
###### Settings
```scss
$grid-rows: 12 !default;
$grid-row-gutter: 1rem !default;
$grid-row-mqs: (all, short, tall, small);
```
[[/]]

[[content]]
### The 12-Row Grid

<div class="borders border pad" style="height: 50vw">
    <div class="col-1 row-1">.row-1</div>
    <div class="col-1 row-2">.row-2</div>
    <div class="col-1 row-3">.row-3</div>
    <div class="col-1 row-4">.row-4</div>
    <div class="col-1 row-5">.row-5</div>
    <div class="col-1 row-6">.row-6</div>
    <div class="col-1 row-7">.row-7</div>
    <div class="col-1 row-8">.row-8</div>
    <div class="col-1 row-9">.row-9</div>
    <div class="col-1 row-10">.row-10</div>
    <div class="col-1 row-11">.row-11</div>
    <div class="col-1 row-12">.row-12</div>
</div>
[[/]]

[[code]]
//
[[/]]

[[content]]
### Fractional Rows

<div class="borders border pad" style="height: 50vw">
    <div ng-repeat="row_span in [
        'full',
        'half',
        '3rd',
        '4th',
        '5th',
        '6th',
        '7th',
        '8th',
        '9th'
    ]" class="border-primary col-9th row-{{row_span}}">row-{{row_span}}</div>
    <!-- end ng-repeat -->
</div>
[[/]]