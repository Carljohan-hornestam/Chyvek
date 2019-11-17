//Back function for back button on the form when recomended package is showing
$(document).on('click', '#form-back', ()=>{
    $('#form-answer').empty()
    $('#form-wrapper > form')[0].reset();
    $('#form-wrapper > *').fadeToggle()
}
)

$('#submit-button').on('click', ()=>{
//Check if contact is requested
if(requestedContact()){
//check if name and mail fields is filled
if(inputNotBlank()){
showAnswer()
}else{
    alert("If you wish to be contacted please fill name and e-mail fields");
}
}else{
    showAnswer()
}
})

function showAnswer(){
 // get medium score
 let score = getScoreMedian()


 //2. Max total median score is 100, if below 33 = diamond, below 66 = gold, over = silver.
 if(score < 33){
 $('#form-answer').append(diamondPackage())
 }else if (score < 66){
 $('#form-answer').append(goldPackage())
 }else{
 $('#form-answer').append(silverPackage())
 }
 
 // toggle form visible/invisible
 $('#form-wrapper > *').toggle()
 
}



//Checks if checkbox is checked
function requestedContact(){
return $('#request-contact:checkbox:checked').length > 0
}

//Check name and email feel is not blank, returns true if not
function inputNotBlank(){
    return $.trim( $('#inputName').val()).length > 0 && $.trim( $('#inputEmail').val()).length > 0
}


function diamondPackage(){
return `<article class="row d-flex flex-column justify-content-between align-content-center p-3">
<div>
    <h2 class="text-center">The Diamond Package</h2>
</div>
<div class="d-flex align-items-center">
    <p>The service in this package breaks down the most unreasonable and resistant person. It will be hard to recognice the new hard-working and obedient person that returns. It has such a good success rate that we almost would have a money-back guarantee.</p>
    <i id="packageIcon">💎</i> 
</div>
<div class="d-flex flex-row-reverse">
        <button type="button" class="btn btn-primary" id="form-back">Back</button>
</div>

</article>`
}

function goldPackage(){
    return `<article class="row d-flex flex-column justify-content-between align-content-center p-3">
    <div>
        <h2 class="text-center">The Gold Package</h2>
    </div>
    <div class="d-flex align-items-center">
        <p>The service in this package is the most common one and usually enough. Works great for people that need to have their behavior corrected, go from a disrespectful slacker to an effective person with a new passion to work.</p>
        <i id="packageIcon">🥇</i> 
    </div>
    <div class="d-flex flex-row-reverse">
            <button type="button" class="btn btn-primary" id="form-back">Back</button>
    </div>
    
    </article>`
    }

    function silverPackage(){
        return `<article class="row d-flex flex-column justify-content-between align-content-center p-3">
        <div>
            <h2 class="text-center">The Silver Package</h2>
        </div>
        <div class="d-flex align-items-center">
            <p>The service in this package is mostly used for people that need guidance, which has started to show a decrease in interest in doing their best and lackluster performance is just behind the next corner. Perfect for shoving them to the right path again.</p>
            <i id="packageIcon">🥈</i> 
        </div>
        <div class="d-flex flex-row-reverse">
                <button type="button" class="btn btn-primary" id="form-back">Back</button>
        </div>
        
        </article>`
        }

function getScoreMedian(){
    let happyRange = parseInt($('#happyRange').val()) 
    let respRange = parseInt($('#respectRange').val()) 
    let satisRange = parseInt($('#satisfiedRange').val()) 

 return  (happyRange + respRange + satisRange) / 3
}
