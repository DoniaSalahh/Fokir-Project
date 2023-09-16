
let aboutoffset=$('#about').offset().top;
function staybgcolornavbar(){
    let scrolltop=$(window).scrollTop();
    if(scrolltop>aboutoffset){
        $('#main-nav').css('background-color','#333333');
        $('#btnup').fadeIn(10);
    }
    else{
        $('#main-nav').css('background-color','transparent');
        $('#btnup').fadeOut(10);
    }
}
staybgcolornavbar();
$(window).scroll(()=>{
    staybgcolornavbar();
    
})
$('a[href^="#"]').click(function(){
    let ahref=$(this).attr('href');
    let offset=$(ahref).offset().top;
    $("li a").removeClass('active');
    $(this).addClass('active');
    $('body,html').animate({scrollTop:offset},10);
})
let spans=$('.slidebox span');
let boxcolorwidth=$('.boxcolor').width();
spans.eq(0).css('background-color','tomato');
spans.eq(1).css('background-color','#ff206e');
spans.eq(2).css('background-color','#ff305b');
spans.eq(3).css('background-color','#bbf');
spans.eq(4).css('background-color','red');
spans.click(function(){
    let bgcolor=$(this).css('background-color');
    $('h1').css('color',bgcolor);
    localStorage.setItem('colors',bgcolor);
})
let bgcolor=localStorage.getItem('colors');
if(bgcolor!=null){
    $('h1').css('color',bgcolor);
}
let left=true;
$('#close').click(()=>{
    if(left){
        closeboxcolor();
        left=false;
    }
    else{
        $('.slidebox').animate({left:0},1000);
        left=true;
    }
})
$('#btnup').click(()=>{
    $('body,html').animate({scrollTop: 0},10)
})

function closeboxcolor(){
        let boxcolorwidth=$('.boxcolor').width();
        $('.slidebox').animate({left:`-${boxcolorwidth+20}`},1000);

}
closeboxcolor();