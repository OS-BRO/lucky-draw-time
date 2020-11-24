input.onGesture(Gesture.Shake, function () {
    luckyNO = randint(1, 6)
})
let luckyNO = 0
basic.showNumber(3)
basic.pause(100)
music.playTone(262, music.beat(BeatFraction.Half))
basic.showNumber(2)
basic.pause(100)
music.playTone(523, music.beat(BeatFraction.Whole))
basic.showNumber(1)
basic.pause(100)
music.playTone(698, music.beat(BeatFraction.Half))
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
music.playTone(698, music.beat(BeatFraction.Half))
basic.forever(function () {
    if (luckyNO == 1) {
        basic.showNumber(1)
    } else if (luckyNO == 2) {
        basic.showNumber(2)
    } else if (luckyNO == 3) {
        basic.showNumber(3)
    } else if (luckyNO == 4) {
        basic.showNumber(4)
    } else if (luckyNO == 4) {
        basic.showNumber(4)
    } else if (luckyNO == 5) {
        basic.showNumber(5)
    } else if (luckyNO == 6) {
        basic.showNumber(6)
    } else {
        basic.showString("SHAKE")
    }
})
