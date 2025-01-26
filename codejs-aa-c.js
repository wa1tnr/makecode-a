function doFaceUp () {
    light.setAll(0x000000)
}
function doTiltUp () {
    light.clear()
    light.setPixelColor(4, 0x00ff00)
    light.setPixelColor(5, 0x00ff00)
}
function doTiltDown () {
    light.clear()
    light.setPixelColor(0, 0x00ff00)
    light.setPixelColor(9, 0x00ff00)
}
function doTiltLeft () {
    light.clear()
    light.setPixelColor(2, 0x00ff00)
}
input.onGesture(Gesture.TiltUp, function () {
    doTiltUp()
})
input.onGesture(Gesture.TiltDown, function () {
    doTiltDown()
})
input.onGesture(Gesture.TiltLeft, function () {
    doTiltLeft()
})
input.onGesture(Gesture.TiltRight, function () {
    doTiltRight()
})
function nlooping () {
    pause(10)
}
function doTiltRight () {
    light.clear()
    light.setPixelColor(7, 0x00ff00)
}
function looping () {
    for (let index = 0; index <= 9; index++) {
        light.setPixelColor(index, 0xff0000)
        pause(900)
    }
    light.setAll(0x10ffee)
    pause(2000)
    light.setAll(0x000000)
    pause(90)
}
input.onGesture(Gesture.FaceUp, function () {
    doFaceUp()
})
light.setAll(0x000000)
forever(function () {
    nlooping()
})

