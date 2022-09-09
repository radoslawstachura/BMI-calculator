
window.onload = function(){
    console.log("app started")
    app.init();
};

let app={
    /*DOMheight: document.getElementById("height").value,
    DOMweight: document.getElementById("weight").value,*/
    calcButton: document.getElementById("calc"),
    resultArea: document.getElementById("result"),
    BMI: null,

    init: function(){
        this.calcButton.addEventListener("click", app.calculate);
    },

    calculate: function(){
        let DOMheight = document.getElementById("height").value;
        let DOMweight = document.getElementById("weight").value;
        app.BMI = DOMweight / ((DOMheight / 100) ** 2);

        if(DOMheight !== "" && DOMweight !== ""){
            app.showResult(); 
        }
        else{
            app.resultArea.innerHTML = '<p style="color: #EB5353;">Pass your body weight and height!</p>';
        }
    },

    showResult: function(){ 
        if(this.BMI < 18.5){
            this.resultArea.innerHTML = '<p>Result: ' + this.BMI.toPrecision(4) + '</p><p style="color: #EB5353;">Your BMI is too low <i class="fa-solid fa-arrow-down-long"></i></p>';
        }
        else if(this.BMI > 24.9){
            this.resultArea.innerHTML = '<p>Result: ' + this.BMI.toPrecision(4) + '</p><p style="color: #EB5353;">Your BMI is too high <i class="fa-solid fa-arrow-up-long"></i></p>';
        }
        else{
            this.resultArea.innerHTML = '<p>Result: ' + this.BMI.toPrecision(4) + '</p><p style="color: #36AE7C;">Your BMI is good</p>';
        }
    }

};