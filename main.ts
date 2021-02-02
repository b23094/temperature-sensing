basic.forever(function () {
    if (input.temperature() > 40) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
    } else if (input.temperature() < 35) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
    } else if (input.temperature() < 40 && input.temperature() > 35) {
        basic.showIcon(IconNames.Yes)
    }
})
