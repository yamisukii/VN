namespace VisualNovel {
    export async function Emotion(): ƒS.SceneReturn {
        console.log("Let's text!");

        let text = {
            Jay: {
                TJ001: "Bleib hieeeeeeer !!!!!!!!!",
                TJ002: "Scheiße!!!! Jetzt fall ich auch !!!!",
                TJ003: "Das wars dann wohl",
                TJ004: "Was ist das für ein  Gefühl ????",
                TJ005: "Irgendwelche Bilder in meinem Kopf erscheinen",
                TJ006: "Das sind die Erinnerungen von dem Mädchen",
                TJ007: "aber warum ??????",

            }
        };

        // ƒS.Sound.fade(sound.dystopian, 2, 7, true);
        ƒS.Speech.hide();
        console.log()
        ƒS.Sound.fade(soundKaIntro.traffic2, 0, 1);
        ƒS.Sound.fade(soundKaIntro.sadPaino, 1.3, 1, true);
        await ƒS.Location.show(locations.fall1);
        await ƒS.update(transitions.dramatic.duration, transitions.dramatic.alpha, transitions.dramatic.edge);

        await ƒS.Speech.tell(characters.jay, text.Jay.TJ001);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ002);
        await ƒS.Location.show(locations.fall2);
        await ƒS.update(2, transitions.dramatic.alpha, transitions.dramatic.edge);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ003);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ004);
        await ƒS.Location.show(locations.memorie1);
        await ƒS.update(transitions.thinking.duration, transitions.thinking.alpha, transitions.thinking.edge);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ005);
        await ƒS.Location.show(locations.memorie2);
        await ƒS.update(transitions.thinking.duration, transitions.thinking.alpha, transitions.thinking.edge);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ006);
        await ƒS.Location.show(locations.memorie3);
        await ƒS.update(transitions.thinking.duration, transitions.thinking.alpha, transitions.thinking.edge);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ007);
        ƒS.Speech.hide();

    }
}   