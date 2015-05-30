var BMIController = {

    init:function(){
        BMIController.setForm();
    
    
    },
    
    setForm: function() {
    var form = document.querySelector('form');
        form.addEventListener('submit', function(event){
            BMIController.calculateBMI(form);
            //alert('Form submitted');
        //it is necessary to avoid from submition
        event.preventDefault();
        });
    },
    
    calculateBMI: function(form) {
        var
            weight = parseFloat(form.weight.value),
            height = parseFloat(form.height.value),
            result = 0;
            
        
        result = BMIService.getIndex(weight,height);
        
        BMIController.showResult(result);
        //BMIService.getDescription();
    },
    
    showResult: function(result) {
        var spanResult = document.querySelector('.result');
        spanResult.innerHTML = result.toFixed(2);
    },
};

//initialization
BMIController.init();