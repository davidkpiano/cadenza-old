<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cadenza SCSS</title>
    <link rel="stylesheet" href="css/main.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
</head>
<body class="layer">
    <aside class="theme-dark">
        <hgroup class="content">
            <h2>CADENZA<span class="color-primary">CSS</span></h2>
        </hgroup>
        <nav>
            <ul>
                <li><a href="#" activate="grid">Grid System</a></li>
                <li><a href="#" activate="type">Typography</a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </nav>
    </aside>
    <section>
        <section class="layer scroll" id="components">
            <article class="page active" id="grid">
                <?php include('views/grid.php'); ?>
            </article>
            <article class="page inactive" id="type">
                <?php include('views/type.php'); ?>
            </article>
        </section>
    </section>
</body>

<script>
    window.activate = function(id) {
        var $target_page = $('#'+id),
            $pages = $target_page.parent().find('.page');

        $pages.not('#'+id).removeClass('active').addClass('inactive');
        $target_page.removeClass('inactive').addClass('active');
    }

    window.deactivate = function(id) {
        $('#'+id).removeClass('active').addClass('inactive');
    }

    $('[activate]').each(function() {
        $(this).click(function(e) {
            e.preventDefault();
            window.activate($(this).attr('activate'));
        });
    });
</script>

</html>