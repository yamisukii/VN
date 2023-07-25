namespace VisualNovel {
    export async function EndThree(): ƒS.SceneReturn {
        console.log("Let's text!");

        let text = {
            Renji: {
                TR001: "Jay du bist wider zurück in Tokyo ",
                TR002: "Du hast eine Seele retten können",
                TR003: "Das bedeut du bekommst dein Leben zurück, aber leider nur deins ...",
                TR004: "Hättest du noch eine weiter gerettet, wäre Aika auch noch da...",
                TR005: "Vielleicht seht ihr euch irgednwann nochmal an einem anderen Ort.",

            },
        };

        // ƒS.Sound.fade(sound.dystopian, 2, 7, true);
        ƒS.Character.hideAll();
        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = true);
        ƒS.Speech.hide();
        await ƒS.update(1);
        ƒS.Speech.hide();
        console.log()

        ƒS.Sound.play(soundKaIntro.sadPaino, 0.5, true);
        ƒS.Sound.play(soundKaIntro.traffic2, 0.2, true);
        await ƒS.Location.show(locations.tokyoWalkingHome);
        await ƒS.update(1);
        await ƒS.update(transitions.dayNight.duration, transitions.dayNight.alpha, transitions.dayNight.edge);
        await ƒS.Character.show(characters.jay, characters.jay.pose.schocked, ƒS.positionPercent(80, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR001);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR002);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR003);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR004);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR005);

        ƒS.Speech.hide();
        return Intro();
    }
}   