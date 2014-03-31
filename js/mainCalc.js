var pane = document.getElementById('calcPanel');

var mymodule = (function () {
//Private

//Public
    return {

        $$: function (id) {
            'use strict';
            if (typeof id != 'undefined') {
                return document.getElementById(id);
            }
            else {
                return 'undefined'
            }
        },

        elementGenerate:  function (myId, myClass, myContent, myElement2) {
        var myElement = document.createElement(myElement2);
        myElement.setAttribute("id", myId);
        myElement.setAttribute("class", myClass);
        myElement.innerHTML = myContent;
        return myElement;
        },

        dragDiv: function () {
        $('#myfullcalculator').draggable();
    }
    }
})();

//Generate Button Elements and Add to DOM
//Row One
for (i = 1; i <= 3; i++) {
    mymodule.$$('calcRowOne')
        .appendChild(mymodule.elementGenerate(i, 'mybtn 2u', i, "button"))
    }
// (0-3)
mymodule.$$('calcRowOne')
    .appendChild(mymodule.elementGenerate('btnMultiply', 'mybtn 2u', '&times;', "button"));//multiply
//Row Two
for (i = 4; i <= 6; i++) {
    mymodule.$$('calcRowTwo')
        .appendChild(mymodule.elementGenerate(i, 'mybtn 2u', i, "button"))
    }
//(4-6)
mymodule.$$('calcRowTwo')
    .appendChild(mymodule.elementGenerate('btnDivide', 'mybtn 2u', '&#247;', "button"));//Divide
//Row Three
for (i = 7; i <= 9; i++) {
    mymodule.$$('calcRowThree')
        .appendChild(mymodule.elementGenerate(i, 'mybtn 2u', i, "button"))
    }

//(7-9)
mymodule.$$('calcRowThree')
    .appendChild(mymodule.elementGenerate('btnSubtract', 'mybtn 2u', '&#8211;', "button"));//Subtract
//Row Four
mymodule.$$('calcRowFour')
    .appendChild(mymodule.elementGenerate('0', 'mybtn 2u', '0', "button"));//
mymodule.$$('calcRowFour')
    .appendChild(mymodule.elementGenerate('btnDecPoint', 'mybtn 2u', '&period;', "button"));
mymodule.$$('calcRowFour')
    .appendChild(mymodule.elementGenerate('btnModulus', 'mybtn 2u', 'mod', "button"));
mymodule.$$('calcRowFour')
    .appendChild(mymodule.elementGenerate('btnPlus', 'mybtn 2u', '+', "button"));

//Row Five
mymodule.$$('calcRowFive')
    .appendChild(mymodule.elementGenerate('(', 'mybtn 2u', '(', "button"));//
mymodule.$$('calcRowFive')
    .appendChild(mymodule.elementGenerate(')', 'mybtn 2u', ')', "button"));

mymodule.$$('calcRowFive')
    .appendChild(mymodule.elementGenerate('btnCancelError', 'mybtn 4u', 'Ce', "button"));
//Row Six
mymodule.$$('calcRowSix')
    .appendChild(mymodule.elementGenerate('btnEquals', 'mybtn 4u', '=', "button"));
mymodule.$$('calcRowSix')
    .appendChild(mymodule.elementGenerate('btnCancel', 'mybtn 4u', 'C', "button"));


//EventHandlers and EventListeners
for (i = 0; i <= 9; i++) {
 mymodule.$$(i).addEventListener("click", function () {
        pane.value += this.id
    }, false)

}//Buttons (0-9)
mymodule.$$('(').addEventListener("click", function () {
    pane.value += this.id
}, false);
mymodule.$$(')').addEventListener("click", function () {
    pane.value += this.id
}, false);
//Mathematical functions
mymodule.$$('btnPlus').onclick = function () {
    Jscalc.btn_plus_fn(pane)
};
mymodule.$$('btnMultiply').onclick = function () {
    Jscalc.btn_multiply_fn(pane)
};
mymodule.$$('btnDivide').onclick = function () {
    Jscalc.btn_divide_fn(pane)
};
mymodule.$$('btnSubtract').onclick = function () {
    Jscalc.btn_subtract_fn(pane)
};
mymodule.$$('btnDecPoint').onclick = function () {
    Jscalc.btn_decimal_fn(pane)
};
mymodule.$$('btnCancel').addEventListener("click", function () {
    Jscalc.btn_cancel_fn(pane)
}, false);

mymodule.$$('btnCancelError').addEventListener("click", function () {
    Jscalc.btn_cancelError_fn(pane)
}, false);

mymodule.$$('btnModulus').addEventListener("click", function () {
    Jscalc.btn_modulus_fn(pane)
}, false);

mymodule.$$('btnEquals').onclick = function () {
    //alert('hellowww');

    Jscalc.btn_equals_fn(pane)
};

//Make keyboard active
document.addEventListener('keypress', function (e) {
    if (13 == e.keyCode) {
        Jscalc.btn_equals_fn(pane)
    }
});

$(mymodule.dragDiv);





