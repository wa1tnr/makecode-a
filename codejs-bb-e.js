/**
 * Mon 27 Jan 21:33:52 UTC 2025 codejs-bb-e
 * https://makecode.com/_7defahFXtUVM
 * 
 * version bb-d: https://makecode.com/_Fv3WzfAk7LEh
 * 
 * https://makecode.com/_5yvevP0x4Uve
 * 
 * https://makecode.com/_gjmYqEbE6H34
 * 
 * Tested on real hardware - quite good. So 'it works' as they say.
 * 
 * This method of code generation has its own validity.
 * 
 * opnote: single ctrl v does it - no need for left shift key to paste.
 */
input.onGesture(Gesture.FaceUp, function () {
    light.clear()
})
input.onGesture(Gesture.TiltUp, function () {
    light.clear()
    light.setPixelColor(4, 0x0000ff)
    light.setPixelColor(5, 0x0000ff)
    pause(1000)
    light.clear()
})
input.onGesture(Gesture.TiltDown, function () {
    light.clear()
    light.setPixelColor(0, 0xff0080)
    light.setPixelColor(9, 0xff0080)
    pause(1000)
    light.clear()
})
input.onGesture(Gesture.TiltLeft, function () {
    light.clear()
    light.setPixelColor(2, 0x00ff00)
    pause(1000)
    light.clear()
})
input.onGesture(Gesture.TiltRight, function () {
    light.clear()
    light.setPixelColor(7, 0xff8000)
    pause(1000)
    light.clear()
})
light.clear()
light.setBrightness(4)
light.setAll(0x00ffff)
pause(1000)
light.clear()
forever(function () {
    pins.LED.digitalWrite(true)
    pause(22)
    pins.LED.digitalWrite(false)
    pause(9955)
})

