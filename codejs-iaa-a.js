function blinkD13 () {
    pixel.setColor(0xff0000)
    pins.D13.digitalWrite(true)
    pause(1000)
    pixel.setColor(0x0000ff)
    pins.D13.digitalWrite(false)
    pause(1000)
}
forever(function () {
    blinkD13()
})

