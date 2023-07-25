namespace VisualNovel {
    export async function EndOne(): ƒS.SceneReturn {
        console.log("Let's text!");

        let text = {
            Renji: {
                TR001: "Jay du hast euch beide gerettet!!!",
                TR002: "Ich wünsch euch noch viel Spaß in eurem Leben",
                TR003: "Genießt euren Flug zum Boden",

            },
        };

        // ƒS.Sound.fade(sound.dystopian, 2, 7, true);
        ƒS.Character.hideAll();
        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = true);
        ƒS.Speech.hide();
        console.log()

        ƒS.Sound.play(soundKaIntro.sadPaino, 0.5, true);
        await ƒS.Location.show(locations.endScene1);
        await ƒS.update(1);
        await ƒS.update(transitions.dayNight.duration, transitions.dayNight.alpha, transitions.dayNight.edge);
        await ƒS.Character.show(characters.jay, characters.jay.pose.default, ƒS.positionPercent(80, 100));
        await ƒS.Speech.tell(characters.renji, text.Renji.TR001);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR002);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR003);

        ƒS.Speech.hide();
        return Intro();

    }
}   