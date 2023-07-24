namespace VisualNovel {
    export async function EndTwo(): ƒS.SceneReturn {
        console.log("Let's text!");

        let text = {
            Renji: {
                TR001: "Jay es tut mir leid ",
                TR002: "Du hast keine Seele retten können",
                TR003: "Du kannst leider nicht mehr auf die Erde zurück",
                TR004: "Ab hier übernimmt jemand anderes ",

            },
        };

        // ƒS.Sound.fade(sound.dystopian, 2, 7, true);
        ƒS.Character.hideAll();
        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = true);
        await ƒS.update(1);
        ƒS.Speech.hide();
        console.log()

        ƒS.Sound.play(soundKaIntro.sadPaino, 0.5, true);
        await ƒS.Location.show(locations.heaven);
        await ƒS.update(1);
        await ƒS.update(transitions.dayNight.duration, transitions.dayNight.alpha, transitions.dayNight.edge);
        await ƒS.Character.show(characters.jay, characters.jay.pose.default, ƒS.positionPercent(80, 100));
        await ƒS.Speech.tell(characters.renji, text.Renji.TR001);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR002);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR003);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR004);

        ƒS.Speech.hide();
        return Intro();
    }
}   