[[content]]
## Position

<div class="row">
    <div class="field col-6">
        <label ng-repeat="position in [
        '-left',
        '-right',
        '-before',
        '-after',
        '-center',
        '-beforeLeft',
        '-centerLeft',
        '-afterLeft',
        '-beforeRight',
        '-centerRight',
        '-afterRight',
        '-beforeCenter',
        '-afterCenter']">
            <span>{{position}}</span>
            <input type="radio" ng-model="cadenza.position_horizontal" ng-value="position">
        </label>
    </div>
    <div class="field col-6">
        <label ng-repeat="position in [
            '-top', 
            '-bottom', 
            '-below', 
            '-above', 
            '-middle', 
            '-aboveTop', 
            '-midTop', 
            '-belowTop', 
            '-aboveMiddle', 
            '-belowMiddle', 
            '-aboveBottom', 
            '-midBottom',
            '-belowBottom']">
            <span>{{position}}</span>
            <input type="radio" ng-model="cadenza.position_vertical" ng-value="position">
        </label>
    </div>
</div>
<div class="row-6">
    <div class="col-6 col-center border">
        <div class="shape-square-medium bg-primary position{{cadenza.position_horizontal}}{{cadenza.position_vertical}}"></div>
    </div>
</div>

[[/]]