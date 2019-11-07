$('.carousel').carousel()

$(".carousel-control-prev").click(function(){
    $("#boring-jobs").carousel("prev");
  });

function orderAccepted() {
    alert("Your order has been registered! Thank you for choosing Chyvek!")
}

let hideText = document.querySelector('#hidden-text');
let silverPackage = document.querySelector('#package-icon');