<script type="text/javascript">
        $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $("#toTop").click(function () {
       //1 second of animation time
       //html works for FFX but not Chrome
       //body works for Chrome but not FFX
       //This strange selector seems to work universally
       $("html, body").animate({scrollTop: 0}, 1000);
    });
    </script>
    
    <script type="text/javascript">
        /* Set the width of the side navigation to 250px */
        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        }

        /* Set the width of the side navigation to 0 */
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
    </script>