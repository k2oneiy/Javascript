

$('ul').on('click','li',function(){
    $(this).toggleClass('grey');


})

$('ul').on('click','span',function(event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove()
    })
    event.stopPropagation()
})


$('input').on('keypress',function(event){
    if(event.which == 13){
        let mytodo = $(this).val();
        $(this).val('');

        $('ul').append(`<li> <span><i class="fa fa-times-circle" aria-hidden="true"></i> </span> ${mytodo}</li>`);
        // console.log(event.target.value);
    }
})