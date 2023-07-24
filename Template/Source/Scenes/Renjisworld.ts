namespace VisualNovel {
    export async function RenjisWorld(): ƒS.SceneReturn {
        console.log("Let's text!");

        let text = {
            Jay: {
                TJ001: "Was passiert hier? Ich versteh gar nichts? Bin ich nicht tot ?",
                TJ002: "Ein Halbengel? Ich habe alles gespürt... ihren Schmerz, ihre Freude, alles. Aber warum bin ich hier?",
                TJ003: "Wie kann ich das tun?",

                TJ004: "Mir bleibt wohl nicht anderes übrig.",
                TJ005: "Und was ist mit dem Mädchen? Ist sie... tot?",
            },
            Renji: {
                TR001: "Ah, Jay, da bist du ja. Nein, du bist nicht tot. Aber du bist auch nicht lebendig.",
                TR002: "Du hast da etwas Spezielles erlebt. Das Mädchen, Aika, sie war kein normales Mädchen. Sie war ein Halbengel. Die Emotionen und Erinnerungen, die du beim Fallen gespürt hast, gehörten ihr. Sie sind der Grund, warum du hier bist.",
                TR003: "Yoshi! Beherrsche dich. Jay, aufgrund einer höheren Macht, die sich in dein Leben eingeschaltet hat, hast du jetzt die Chance, zurückzukehren",
                TR004: "Du musst mindestens zwei Seelen retten. Die Seelen von Menschen, die mit ihrem Schicksal ringen und kurz davor stehen, Entscheidungen zu treffen, die nicht mehr rückgängig gemacht werden können.",
                TR005: "Schicksal ist komplex. Sie ist weder hier noch dort",
                TR006: "Jeder Pfad, den du in dieser mystischen Welt beschreitest, führt zu unbekannten Ergebnissen. Konzentriere dich jetzt auf die Seelen, die du retten musst. Aika's Schicksal ist in anderen Händen.",
                TR007: "Die Zeit ist kostbar. Begib dich auf deine Reise, Jay.",
                TR008: "... Jay geh bitte schnell. Ich erklär dir alles weiter auf dem Weg",
                TR009: "2 Seelen brauchen drigend deine Hilfe. Du darfst selbst entscheiden wo du als erstes hinmöchtest?",
            },
            Yoshi: {
                TY001: "Na, um uns zu treffen, natürlich! Oder zumindest mich, Süßer.",
                TY002: "Trotzdem... ich habe das Gefühl, dass das nicht das letzte Mal war, dass du sie gesehen hast.",
                TY003: "Und denk dran, wenn du Hilfe brauchst... ich helf dir gerne, Süßer"
            }
        };

        // ƒS.Sound.fade(sound.dystopian, 2, 7, true);
        ƒS.Speech.hide();
        console.log()
        await ƒS.Location.show(locations.renjisWorld1);
        await ƒS.Character.show(characters.jay, characters.jay.pose.schocked, ƒS.positionPercent(80, 100));
        await ƒS.update(transitions.cloudy.duration, transitions.cloudy.alpha, transitions.cloudy.edge);
        ƒS.Sound.fade(soundKaIntro.sadPaino, 0, 2, true);
        ƒS.Sound.fade(soundKaRenji.deppresiv, 0.7, 2, true);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ001);
        ƒS.Speech.hide();
        ƒS.Character.hide(characters.jay);


        await ƒS.Location.show(locations.renjisWorld2);
        await ƒS.update(4, transitions.cloudy.alpha, 0.8);
        await ƒS.Character.show(characters.renji, characters.renji.pose.default, ƒS.positionPercent(120, 180));
        await ƒS.update(2, transitions.cloudy.alpha, 0.5);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR001);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR002);

        await ƒS.Character.show(characters.jay, characters.jay.pose.serious, ƒS.positionPercent(30, 100));
        await ƒS.update(2, transitions.cloudy.alpha, 0.5);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ002);

        ƒS.Speech.hide();
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.yoshi, characters.yoshi.pose.default, ƒS.positionPercent(10, 60));
        await ƒS.update(transitions.cloudy.duration, transitions.cloudy.alpha, transitions.cloudy.edge);


        await ƒS.Speech.tell(characters.yoshi, text.Yoshi.TY001);
        await ƒS.Character.show(characters.renji, characters.renji.pose.default, ƒS.positionPercent(110, 180));
        await ƒS.update(transitions.cloudy.duration, transitions.cloudy.alpha, transitions.cloudy.edge);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR003);
        ƒS.Character.hide(characters.yoshi);

        await ƒS.Character.show(characters.jay, characters.jay.pose.serious, ƒS.positionPercent(30, 100));
        await ƒS.update(transitions.cloudy.duration, transitions.cloudy.alpha, transitions.cloudy.edge);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ003);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR004);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ004);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ005);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR005);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR006);
        await ƒS.Speech.tell(characters.yoshi, text.Yoshi.TY002);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR007);
        ƒS.Speech.hide();
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.yoshi, characters.yoshi.pose.default, ƒS.positionPercent(10, 60));
        await ƒS.update(transitions.cloudy.duration, transitions.cloudy.alpha, transitions.cloudy.edge);
        await ƒS.Speech.tell(characters.yoshi, text.Yoshi.TY003);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.renji, characters.renji.pose.default, ƒS.positionPercent(110, 180));
        await ƒS.update(1, transitions.cloudy.alpha, transitions.cloudy.edge);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR008);
        await ƒS.Speech.tell(characters.renji, text.Renji.TR009);
        ƒS.Speech.hide();
        await ƒS.Character.hideAll();


    }
}