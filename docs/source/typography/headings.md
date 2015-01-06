[[content]]
## Headings

Here I am describing all the headings.

[[example]]
# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6
[[/]]

[[/]]

[[code]]
```scss
.h-1 // heading 1
.h-2 // heading 2
.h-3 // heading 3
.h-4 // heading 4
.h-5 // heading 5
.h-6 // heading 6

p // this is where paragraph code goes
```
[[/]]

[[content]]
### Subheadings

[[example]]
<h1 class="subheading">Subheading Level 1</h1>
<h2 class="subheading">Subheading Level 2</h2>
<h3 class="subheading">Subheading Level 3</h3>
<h4 class="subheading">Subheading Level 4</h4>
<h5 class="subheading">Subheading Level 5</h5>
<h6 class="subheading">Subheading Level 6</h6>
[[/]]

[[/]]

[[code]]
```scss
.subheading {}
@extend %subheading;

.subheading-light
.subheading-dark
```
[[/]]

[[content]]
### Heading Groups

Unfortunately, `<hgroup>` was discontinued.

[[example]]
<div class="hgroup">
    <h1>Heading 1 in hgroup</h1>
    <h4>Heading 4 in hgroup</h4>
    <small>Small text in hgroup</small>
</div>
[[/]]

[[code]]
```scss
.hgroup {}
```
[[/]]