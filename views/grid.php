<h1>Grid System</h1>
<p class="lead">Cadenza's powerful and flexible grid system has all of the features you're used to in other grid systems - 12 columns (by default), nestable, and responsive with predefined classes. However, it includes some useful new features:</p>
<ul>
    <li>Vertical grid system for rows</li>
    <li>"Flexible" columns and rows (not to be confused with flex-box)</li>
    <li>Vertically and horizontally responsive columns and rows</li>
    <li>On-demand gutters</li>
    <li>Easy column and row positioning</li>
    <li><em>And more!</em></li>
</ul>

<div class="panel" id="grid_horizontal">
    <header>
        <h2>Basic Horizontal Grid</h2>
    </header>
    <section>
        <ul>
            <li><code>$grid-columns: 12</code></li>
            <li>Column width is percentage-based.</li>
            <li>Columns must be placed in a <code><strong>.row</strong></code></li>
        </ul>
        <div class="row">
            <div class="col-4"><code class="block border">.col-4</code></div>
            <div class="col-4"><code class="block border">.col-4</code></div>
            <div class="col-4"><code class="block border">.col-4</code></div>
        </div>
        <br>
        <div class="row">
            <div class="col-3"><code class="block border">.col-3</code></div>
            <div class="col-6"><code class="block border">.col-6</code></div>
            <div class="col-3"><code class="block border">.col-3</code></div>
        </div>

    </section>
    <footer></footer>
</div>

<div class="panel" id="grid_horizontal_gutters">
    <header>
        <h2>Horizontal Grid with Gutters</h2>
    </header>
    <section>
        <ul>
            <li><code>$grid-column-gutter: 1rem (16px)</code></li>
            <li>Gutters are created using padding.</li>
            <li>By default, columns do not have gutters.</li>
            <li>Guttered columns must be placed in a <code>.row<strong>.columns-gutter</strong></code></li>
        </ul>
        <div class="row columns-gutter">
            <p><code>.row.columns-gutter</code></p>
            <div class="col-3"><code class="block border">.col-3</code></div>
            <div class="col-3"><code class="block border">.col-3</code></div>
            <div class="col-3"><code class="block border">.col-3</code></div>
            <div class="col-3"><code class="block border">.col-3</code></div>
        </div>
        <br>
        <div class="row columns-gutter">
            <p><code>.row.columns-gutter</code></p>
            <div class="col-4"><code class="block border">.col-4</code></div>
            <div class="col-4"><code class="block border">.col-4</code></div>
            <div class="col-4"><code class="block border">.col-4</code></div>
        </div>
    </section>
    <footer></footer>
</div>

<div class="panel" id="grid_horizontal_responsive">
    <header>
        <h2>Responsive Horizontal Grid</h2>
    </header>
    <section>
        <ul>
            <li><code>-small</code> columns activate at &lt;<code> 767px</code></li>
            <li><code>-medium</code> columns activate at &ge;<code> 767px</code></li>
            <li><code>-large</code> columns activate at &ge;<code> 1280px</code></li>
        </ul>
        <div class="row">
            <div class="col-12-small col-4-medium"><code class="block border">.col-12-small<br>.col-4-medium</code></div>
            <div class="col-6-small col-4-medium"><code class="block border">.col-6-small<br>.col-4-medium</code></div>
            <div class="col-6-small col-4-medium"><code class="block border">.col-6-small<br>.col-4-medium</code></div>
        </div>
        <br>
        <div class="row">
            <div class="col-12-small col-6-medium col-8-large"><code class="block border">.col-12-small<br>.col-6-medium<br>.col-8-large</code></div>
            <div class="col-12-small col-6-medium col-4-large"><code class="block border">.col-12-small<br>.col-6-medium<br>.col-4-large</code></div>
        </div>
    </section>
</div>

<div class="panel" id="grid_horizontal_position">
    <header>
        <h2>Column Positioning</h2>
    </header>
    <section>
        <ul>
            <li>stuff</li>
        </ul>
        <div class="row">
            <div class="col-4 col-left"><code class="block border">.col-4.col-left</code></div>
            <div class="col-4 col-right"><code class="block border">.col-4.col-right</code></div>
        </div>
        <br>
        <div class="row">
            <div class="col-6 col-center"><code class="block border">.col-6.col-center</code></div>
        </div>
        <br>
        <div class="row">
            <div class="col-4 col-offset-2"><code class="block border">.col-4.col-offset-2</code></div>
            <div class="col-4 col-offset-2"><code class="block border">.col-4.col-offset-2</code></div>
        </div>
    </section>
</div>