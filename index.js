let carcolor ='blue';

const car =(function(){

    return {
        changecolorRed :function(){
            carcolor='red';
            return carcolor
        }
        ,
        changecolorBlue :function(){
            carcolor='red';
            return carcolor
        }
    }

});

console.log(car.changecolorBlue());