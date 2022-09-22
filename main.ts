basic.forever(function () {
    if (input.temperature() == 10) {
        basic.showNumber(input.temperature())
        basic.showString("¡VAMOS A ESQUIAR!")
    } else if (input.temperature() == 20) {
        basic.showNumber(input.temperature())
        basic.showString("¡HAGAMOS UN PICNIC!")
    } else if (input.temperature() == 30) {
        basic.showNumber(input.temperature())
        basic.showString("¡VAMOS A LA PLAYA!")
    } else if (input.temperature() == 40) {
        basic.showNumber(input.temperature())
        basic.showString("MEJOR NO SALGAS")
    } else {
        basic.showNumber(input.temperature())
    }
})
