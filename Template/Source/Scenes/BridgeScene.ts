namespace VisualNovel {
    export async function Bridge(): ƒS.SceneReturn {
        console.log("Let's text!");

        let text = {
            Jay: {
                TJ101: "Hmhhh…Wenn der Verktorgradient im 90 Grad Winkel zur Drehmatrix steht…hmmm… könnte die Rotation ohne Reibungsverlust… ne vielleicht…hmm…  ",
                TJ102: "Huh? Was macht die da?  ",
                TJ103: "Is doch ne schöne Aussicht… Dir scheints ja auch zu gefallen. ",
                TJ104: "So war das doch gar nich gemeint. Keine Sorge ich geh schon weiter, juckt mich nich was bei dir abgeht. ",
                TJ105: "Wooou warte, willst du etwa springen?! ",
                TJ106: "Bist du wirklich ganz sicher, dass du das machen willst?  ",

                TJ106_1: "Ach komm, du das meinst du nich so. Geh einfach nach Hause, bevor du noch mehr dämliche Ideen hast. ",
                TJ106_2: "Fuck man. Vielleicht gibt’s noch einen anderen Weg. Bitte lass mich dir helfen. Egal welches Problem dich fertig macht, ich werde es sicher irgendwie gelöst kriegen!",

                TJ107_1: "Was soll ich denn machen? Hinterher springen und dich auffangen? Mach doch was du willst, ich hab besseres zu tun  ",
                TJ108_1: "Du bist doch völlig übergeschnappt! ",

                TJ107_2: "Vielleicht kann ich dir helfen doch noch etwas zu finden, wofür es sich lohnt zu bleiben.",
                TJ108_2: "Ich glaub du hast ein gutes Herz. Für solche Menschen ist es nie zu spät.",
                TJ109_2: "Neeeein!",
            },
            Aika: {
                TA101: "Was guckst du so blöd? ",
                TA102: "Ihhh, geh einfach weiter du Creep >.< ",
                TA103: "(Tränen kommen in ihren Augen hoch)        Natürlich nicht. Juckt niemanden, ob ich da bin oder nicht.  ",
                TA104: "Was kümmerts dich? Jetzt geh endlich weiter!   ",
                TA105: "Ne ich hab vorhin nur ne Münze geworfen… natürlich bin ich mir sicher!  ",

                TA106_1: "Idioten wie du sind der Grund warum alles Scheiße is!  ",
                TA107_1: "(Stimme zittert vor Wut, Tränen in den Augen)    Stimme zittert vor Wut, Tränen in den Augen ",
                TA108_1: "*Dreht sich zum Abgrund – Packt Jay an der Jacke – und springt *",

                TA106_2: "(Wirkt etwas ruhiger und entspannter)    Du musst hier nich den Helden spielen. Ich hab meine Entscheidung getroffen.",
                TA107_2: "Das habe ich lange genug versucht. Ich kann nicht mehr. Ich möchte gehen.  ",
                TA108_2: "(Lächelt zu ersten Mal ein wenig) Danke. Das ist ein schöner Abschied ",
            }
        };

        // ƒS.Sound.fade(sound.dystopian, 2, 7, true);
        ƒS.Speech.hide();
        console.log()
        await ƒS.Location.show(locations.tokyoBridge);
        await ƒS.update(transitions.dayNight.duration, transitions.dayNight.alpha, 0.5);
        await ƒS.Character.show(characters.jay, characters.jay.pose.default, ƒS.positionPercent(80, 100));
        await ƒS.update(1);
        // ƒS.Character.hide(characters.jay);
        // ƒS.Character.hideAll();
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ101);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ102);
        await ƒS.Speech.tell(characters.aika, text.Aika.TA101);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ103);
        await ƒS.Speech.tell(characters.aika, text.Aika.TA102);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ104);
        ƒS.Sound.fade(soundKaIntro.nachdenklich, 0, 2);
        await ƒS.Speech.tell(characters.aika, text.Aika.TA103);
        ƒS.Character.hide(characters.jay);
        ƒS.Sound.fade(soundKaIntro.fastPiano, 2, 2, true);
        await ƒS.Character.show(characters.jay, characters.jay.pose.schocked, ƒS.positionPercent(70, 110));
        await ƒS.update(transitions.dayNight.duration, transitions.dayNight.alpha, 0);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ105);
        await ƒS.Speech.tell(characters.aika, text.Aika.TA104);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ106);
        await ƒS.Speech.tell(characters.aika, text.Aika.TA105);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update();

        let sceneIntroDecision1 = {
            helping: "Versuchen zu helfen",
            notHelping: "Nicht ernst nehmen"
        };

        let dialogueElementS1D1 = await ƒS.Menu.getInput(sceneIntroDecision1, "choicesCssClass");

        switch (dialogueElementS1D1) {
            case sceneIntroDecision1.notHelping:
                console.log("Intro helfen");
                await ƒS.Speech.tell(characters.jay, text.Jay.TJ106_1);
                await dialogOne();
                ƒS.Speech.hide();
                ƒS.update();
                break;
            case sceneIntroDecision1.helping:
                await ƒS.Speech.tell(characters.jay, text.Jay.TJ106_2);
                console.log("Intro nicht helfen");
                await dialogTwo();
                ƒS.Speech.hide();
                ƒS.update();
                break;
        }

        async function dialogOne(): Promise<void> {
            console.log("Scene Intro Dialoge1");
            await ƒS.Speech.tell(characters.aika, text.Aika.TA106_1);
            ƒS.Sound.fade(soundKaIntro.fastPiano, 0, 2, true);
            ƒS.Sound.fade(soundKaIntro.sadPaino, 0.6, 4, true);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ107_1);
            await ƒS.Speech.tell(characters.aika, text.Aika.TA107_1);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ108_1);
            await ƒS.Speech.tell(characters.aika, text.Aika.TA108_1);
            ƒS.Character.hideAll();
        }

        async function dialogTwo(): Promise<void> {
            await ƒS.Speech.tell(characters.aika, text.Aika.TA106_2);
            ƒS.Sound.fade(soundKaIntro.fastPiano, 0, 2, true);
            ƒS.Sound.fade(soundKaIntro.sadPaino, 0.6, 4, true);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ107_2);
            await ƒS.Speech.tell(characters.aika, text.Aika.TA107_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ108_2);
            await ƒS.Speech.tell(characters.aika, text.Aika.TA108_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ109_2);;
            ƒS.Character.hideAll();
        }

        console.log("End BridgeScene");


    }
}   