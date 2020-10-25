$(document).ready(function () {
    console.log(1)
    let predescription = $('.predescription')
    let counter = 0;
    console.log(predescription)
    $(window).scroll(function () {
        let scroll = $(window).scrollTop()+ $(window).height();
        let offset = predescription.offset().top+predescription.height();
        if(scroll>offset&&counter==0){
            predescription[0].classList.add('run-animation')
            setTimeout(()=>{predescription[0].classList.remove('run-animation')},3000)
            counter=1;
        }
        if(scroll<offset)
        {
            counter=0;
        }
    })
})