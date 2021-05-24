// tests go here; this will not be compiled when this package is used as a library
serial.writeString("Alive\n\r");
dht11.set_pin(DigitalPin.P0)
basic.forever(() => {
    serial.writeValue("温度", dht11.temperature())
    basic.pause(2000)
    serial.writeValue("湿度", dht11.humidity())
    basic.pause(2000)
})