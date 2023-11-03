if (input.buttonIsPressed(Button.A)) {
    AlphaBot2.MotorRun(Motors.M2, 150)
} else {
    AlphaBot2.MotorRun(Motors.M2, 0)
}
if (input.buttonIsPressed(Button.B)) {
    AlphaBot2.MotorRun(Motors.M1, 150)
} else {
    AlphaBot2.MotorRun(Motors.M1, 0)
}
basic.forever(function () {
	
})
