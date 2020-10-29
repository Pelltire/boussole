let direction = 0
input.calibrateCompass()
basic.forever(function () {
    direction = input.compassHeading()
    if (direction < 45) {
        basic.showArrow(ArrowNames.North)
    } else {
        if (direction < 135) {
            basic.showArrow(ArrowNames.East)
        } else {
            if (direction < 225) {
                basic.showArrow(ArrowNames.South)
            } else {
                if (direction < 315) {
                    basic.showArrow(ArrowNames.West)
                }
            }
        }
    }
})
