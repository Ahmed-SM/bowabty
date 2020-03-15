$('#img-click').click(()=>{
    $('#img-click').hide(0);
    $('#card-click').show();
});
$('#card-click').click(()=>{
    $('#img-click').show();
    $('#card-click').hide(0);
});