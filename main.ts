input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        # . . . #
        . # # # .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Chessboard)
        basic.pause(100)
        basic.showIcon(IconNames.Diamond)
    }
    basic.clearScreen()
})
music.playMelody("C D E F G A B C5 ", 200)
basic.pause(100)
music.playMelody("C5 B A G F E D C ", 200)
