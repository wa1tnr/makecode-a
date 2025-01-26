<!-- Sun 26 Jan 14:00:16 UTC 2025 -->

<!-- unclear if comment or not -->

light.setAll(0x000000)
forever(function () {
    for (let index = 0; index < 10; index++) {
        light.setPixelColor(index, 0xff0000)
        pause(900)
    }
    light.setAll(0x10ffee)
    pause(2000)
    light.setAll(0x000000)
    pause(90)
})

