var Jscalc = ((function () {

    return {
        btn_plus_fn: function (arg) {

            if (arg.value.slice(-1) != "+"
                && arg.value.slice(-1) != "-"
                && arg.value.slice(-1) != "*"
                && arg.value.slice(-1) != "/"
                && arg.value.slice(-1) != "%") {
                arg.value += '+';
            }
            return arg
        },

        btn_subtract_fn: function (arg) {
            if (arg.value.slice(-1) != "+"
                && arg.value.slice(-1) != "-"
                && arg.value.slice(-1) != "*"
                && arg.value.slice(-1) != "/"
                && arg.value.slice(-1) != "%") {
                arg.value += "-";
            }
            return arg
        },

        btn_multiply_fn: function (arg) {

            if (arg.value.slice(-1) != "+"
                && arg.value.slice(-1) != "-"
                && arg.value.slice(-1) != "*"
                && arg.value.slice(-1) != "/"
                && arg.value.slice(-1) != "%") {
                arg.value += '*';
            }
           return arg
        },

        btn_divide_fn: function (arg) {

            if (arg.value.slice(-1) != "+"
                && arg.value.slice(-1) != "-"
                && arg.value.slice(-1) != "*"
                && arg.value.slice(-1) != "/"
                && arg.value.slice(-1) != "%") {
                arg.value += '/';
            }
            return arg
        },

        btn_modulus_fn: function (arg) {

            if (arg.value.slice(-1) != "+"
                && arg.value.slice(-1) != "-"
                && arg.value.slice(-1) != "*"
                && arg.value.slice(-1) != "/"
                && arg.value.slice(-1) != "%") {
                arg.value += '%';

            }
            return arg
        },

        btn_decimal_fn: function (arg) {
            if (arg.value.slice(-1) != ".") {
                arg.value += '.';
            }
            return arg
        },

        btn_cancel_fn: function (arg) {

            arg.value = "";
            return arg
        },

        btn_equals_fn: function (arg) {

            arg.value = eval(arg.value);

            return arg
        },

        btn_cancelError_fn: function (arg) {

            arg.value = arg.value.substring(0, arg.value.length - 1);

            return arg

        }
    }

})());




