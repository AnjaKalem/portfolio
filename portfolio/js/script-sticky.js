
window.addEventListener('load', function(){
            const negative = document.getElementById('negative');
            var element_position = $('#negative').offset().top;

            $(window).scroll(function() {
                    var y_scroll_pos = window.pageYOffset;
                    var scroll_pos_test = $('#negative').offset().top;
                    // set to whatever you want it to be, here is distance from div negative to top

                     if(y_scroll_pos > scroll_pos_test) {
                        $('.prazan').css('display','none');
                        negative.classList.remove('absolute')
                        negative.classList.add('sticky')

                        $('.scroll-to-top').css('display', 'block')
                    }
                    else
                    {
                       // nothing else
                    } 

                       $('.dot-flashing').css('display', 'none')
             });
        })