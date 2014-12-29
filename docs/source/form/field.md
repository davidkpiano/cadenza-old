[[content]]

## Fields

### Standard Field

Contains a label and an input element.

[[example]]
<div class="field">
    <label for="input1">Field Label</label>
    <input type="text" id="input1">
</div>
[[/]]

### Horizontal Field

[[example]]
<div class="field-horizontal">
    <label for="input1">Horizontal Field Label</label>
    <input type="text" id="input1">
</div>
<div class="field-horizontal">
    <label for="input1">Horizontal Field Label</label>
    <div class="field-input">
        <input type="text" id="input1" placeholder="Input inside .field-input">
    </div>
</div>
<div class="field-horizontal">
    <label for="input1" class="nowrap">Horizontal Field Label with `.nowrap`</label>
    <div class="field-input">
        <input type="text" id="input1" placeholder="Input inside .field-input">
    </div>
</div>
[[/]]

[[/]]
