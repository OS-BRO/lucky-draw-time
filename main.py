basic.show_number(3)
basic.pause(100)
music.play_tone(262, music.beat(BeatFraction.HALF))
basic.show_number(2)
basic.pause(100)
music.play_tone(523, music.beat(BeatFraction.WHOLE))
basic.show_number(1)
basic.pause(100)
music.play_tone(698, music.beat(BeatFraction.HALF))
basic.show_icon(IconNames.HAPPY)
basic.pause(1000)
basic.clear_screen()

def on_forever():
    pass
basic.forever(on_forever)
