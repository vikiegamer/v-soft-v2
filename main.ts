input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 500), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C G B F - G - - ", 368), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        # . . . #
        . . # . .
        # . . . #
        . # # # .
        `)
})
basic.showString("welkom")
music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 255, 80, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showString("vince INC")
music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 255, 80, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showString("Version 2.0")
basic.forever(function () {
	
})
