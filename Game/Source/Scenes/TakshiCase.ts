namespace VisualNovel {
    export async function TakeshisCase(): ƒS.SceneReturn {
        console.log("Let's text!");

        let text = {

            Jay: {
                //Start
                TJ401: "Bro hast du ne Kippe für mich?",

                //Entscheidung 1:

                TJ402_1: "Geht dich nichts an!?",

                //Entscheidung 2:

                TJ402_2: "Nein, ich wollte zu meiner Cousine, die wohnt hier.",
                TJ403_2: "Jup, aber ich muss warten, bis sie von der Arbeit zurückkommt. Und warum chillst du hier?",
                TJ404_2: "Ok. Nices Hobby. Machst du das öfter?",
                TJ405_2: "Naja, sind ja auch nur Menschen am Ende des Tages, oder?",
                TJ406_2: "Was meinst du damit?",
                TJ407_2: "Du weißt nichts über mich. Wir alle haben unsere Probleme.",

                //Entscheidung 2.1:

                TJ408_2_1: "Vielleicht hatte deine Schwester es verdient. Schon mal daran gedacht?",

                //Entscheidung 2.2:

                TJ408_2_2: "Und jetzt willst du selbst für Gerechtigkeit sorgen? Ich denke, das ist keine gute Idee…",
                TJ409_2_2: "Naja, ich bin grad hier. Ich mein’s ernst, du wirst es bereuen.",
                TJ410_2_2: "Ich versteh, dass du wütend bist, aber Rache wird deine Schwester nicht zurückbringen. Es wird dich nur noch tiefer in den Abgrund ziehen.",
                TJ411_2_2: "Du hast recht, ich kann mir nicht vorstellen, wie schwer das für dich sein muss. Aber meinst du sie hätte gewollt, dass du dein Leben wegwirfst? Du würdest diesen Mistkerl gewinnen lassen.",


                //Entscheidung 2.2.1:
                TJ412_2_2_1: "Sammle Beweise gegen ihn. Zur Not gehst du an die Öffentlichkeit. Ich bin sicher, es gibt da draußen Menschen, die dich unterstützen würden. Wenn es genug Druck dahinter gibt werden sie den Fall neu aufrollen und er wird endlich seine gerechte Strafe bekommen.",
                TJ413_2_2_1: "Es wird nicht einfach werden, aber du schaffst das, da bin ich sicher. ",

                //Entscheidung 2.2.2:
                TJ412_2_2_2: "Wie wär's mit einem etwas raffinierteren Plan? Dafür musst du ihm kein Haar krümmen und er wird trotzdem fühlen, was du fühlen musstest.",

                //Entscheidung 2.2.3:
                TJ412_2_2_3: "Du solltest das große Ganze betrachten. Anstatt jetzt Rache zu üben, könntest du versuchen, deine Kraft sinnvoller einzusetzen, um anderen Menschen zu helfen. Ihr Leid verringern anstatt selbst noch Leid zu produzieren.",
                TJ413_2_2_3: "Das solltest du. Für sie. ",

                //Entscheidung 3:
                TJ414_3: "Ja, schon. Wollte was trinken, aber hab niemand, der mitgeht. Weißt du wo man sich hier ordentlich den Helm polieren kann?",
                TJ415_3: "Hahaha. Das hört sich doch genau nach meinem Geschmack an. Willst du mitkommen? Ich geb dir einen aus.",
                TJ416_3: "Ahhh.. Da sagt dein Magen was anderes. ",
                TJ417_3: "Wie wärs dann mit einem Bier und einem Abendessen als Dankeschön für die Kippe? ",

                //Entscheidung 3.1:
                TJ416_3_1: "Was, wenns so wäre?",

                //Entscheidung 3.2:
                TJ416_3_2: "Haha, Humor hat er auch noch. Seh ich so aus, als wärst du mein Geschmack",
                TJ417_3_2: "(leise) Scheiße ich hab gar kein Geld dabei",
                TJ418_3_2: "Was machst du hier?! Kann man dich nicht sehen???",
                TJ419_3_2: "Hää nein! Ich komm schon klar! Danke Yoshi.",
                TJ420_3_2: "…",
                TJ421_3_2: "Ich glaub, ich brauch nur dringend ein Bier! Wie auch immer. Du hast gesagt, du bist richtig wütend. Warum?",
                TJ422_3_2: "Oh, das hört sich aber nach Selbstjustiz an…",

                //Entscheidung 3.2.1:
                TJ423_3_2_1: "Dann lässt du mir keine Wahl, ich werde wohl die Polizei einschalten müssen.",

                //Entscheidung 3.2.2:
                TJ423_3_2_2: "Ohne, dass ich mich hier einmischen will. Aber was auch immer dir passiert ist, bist du sicher, du möchtest jemanden das Leben nehmen aus Rache?",
                TJ424_3_2_2: "Die Welt ist hart und kann oft sehr ungerecht sein, aber willst du wirklich auch ein Teil davon werden? Lass die Dunkelheit auf dieser Erde nicht in dich hinein. Du kannst nicht ändern was passiert ist, aber du kannst die Zukunft ändern. Anstatt die Erde zu einem noch dunkleren Fleck zu machen, kannst du deinen Hass und die Erfahrungen nehmen und jemandem helfen, der das gleiche Schicksal durchmacht wie du.",
                TJ425_3_2_2: "Die Welt ist nicht immer gerecht, aber du könntest versuchen, diese Welt ein bisschen mehr ins Gleichgewicht zu bringen. Was würde deine Schwester besser finden?",
                TJ426_3_2_2: "Natürlich mein Vorschlag. Ich bin ja auch der King.",


            },

            Takeshi: {
                //start
                TT401: "Ja, hier. Hast du dich verlaufen oder was?",


                //Entscheidung 1:
                TT402_1: "Was willst du, du Lackaffe?! Ich geb dir ne Kippe und du kommst mir so frech!!! Du Hosenscheißer.",

                //Entscheidung 2:
                TT402_2: "Ach, die wohnt in diesem Haus?",
                TT403_2: "Ich mags hier einfach am Straßenrand zu stehen und auf die reichen Bonzenautos zu spucken.",
                TT404_2: "Irgendeiner muss ja die Drecksarbeit machen.",
                TT405_2: "Sie bluten vielleicht wie Menschen, aber vor dem Gericht sind sie unantastbar.",
                TT406_2: "Man merkt, dass du bisher ein leichtes Leben hattest. ",
                TT407_2: "Pff, ich bin mir sicher, deine sind nichts im Vergleich zu meinen. Oder wurde deine Schwester umgebracht und der Mörder freigesprochen? .",


                //Entscheidung 2.1:
                TT408_2_1: "Wehe du redest noch einmal so über sie. Verpiss dich, bevor ich mich vergesse und es heute Nacht zwei Morde gibt.",


                //Entscheidung 2.2:
                TT408_2_2: "Als ob mich deine Meinung interessiert. ",
                TT409_2_2: "Glaubst du, du kannst mich aufhalten? Ich muss das tun. Das ist der einzige Weg, um meiner Schwester Frieden zu bringen. Der Dreckskerl hat nicht nur ihr Leben zerstört, sondern auch meins und die verdammte Justiz hat einfach weggeschaut. ",
                TT410_2_2: "Du hast leicht reden. Du warst nicht da, als sie starb. Du weißt nicht, wie es ist, jemanden zu verlieren, den du über alles geliebt hast. ",
                TT411_2_2: "Was soll ich deiner Meinung nach tun? ",

                //Entscheidung 2.2.1:
                TT412_2_2_1: "Hmm… Möglich. Ich weiß nicht so recht. Bringt sowas wirklich was?  ",
                TT413_2_2_1: "Ok ich denk drüber nach. ",

                //Entscheidung 2.2.2:
                TT413_2_2_2: "Ich denke, ich verstehe. Ich werde ihm jeden nehmen, den er liebt. Danke, ohne dich wäre ich da nie draufgekommen.",

                //Entscheidung 2.2.3:
                TT413_2_2_3: "So hab ich das noch nicht betrachtet. Meine Schwester war so lieb und hilfsbereit, vielleicht sollte ich fortführen, was sie begonnen hat. ",


                //Entscheidung 3:
                TT414_3: "Ich kenn mich hier auch nicht so gut aus, aber ich hab gehört, dass die Sakura Bar um die Ecke gute Kolben zündet.",
                TT415_3: "Hmm, eigentlich nicht. Ich sag zwar ungern Nein zu einem Bier, aber heute nicht. (Magen grummelt…) ",
                TT416_3: "Hmm. Ja, der hat wohl eher Hunger. Wenn ich jetzt noch ein Bier trink, dann werd ich nur wütender. ",
                TT417_3: "Joooo willst du mich zu einem Date einladen?! ",
                //Entscheidung 3.1:
                TT417_3_1: "Willst du mich verarschen? Ich hab keine Zeit für so einen Schwachsinn. Geh weiter!! ",

                //Entscheidung 3.2:
                TT416_3_2: "Naja, also normalerweise ist es schon komisch, wenn ein Fremder dich zum Essen und Bier einlädt, aber bevor ich noch länger hier hungrig warte, nehm ich das Angebot an. ",
                TT417_3_2: "Warum schaust du so geschockt? ",
                TT418_3_2: "Ich erzähl dir mal, warum ich hier eigentlich dumm rumstehe und die Autos anspucke. Das Leben ist unfair und ungerecht und wenn man nicht selber für Gerechtigkeit sorgt, dann wirst du nie Gerechtigkeit bekommen. ",
                TT419_3_2: "Naja. Nachdem die offizielle Justiz versagt hat. Werde ich jetzt dem Mörder meiner Schwester seine gerechte Strafe erteilen. Ich bring den um, den kleinen Bastard… ",

                //Entscheidung 3.2.1:

                TT423_3_2_1: "Ich wusste, man kann dir nicht vertrauen. Ich bin weg. ",

                //Entscheidung 3.2.2:
                TT423_3_2_2: "Hör mal zu Jay… Mir ist es egal, ob ich in den Knast komme oder ob ich sterbe. Meine Schwester hat Gerechtigkeit verdient. Alles andere ist mir egal. ",
                TT424_3_2_2: "Und wo bleibt da die Gerechtigkeit? Dieser Pisser läuft noch frei rum, während ich meine Schwester nie wieder sehen kann. ",
                TT425_3_2_2: "Hmmmm…. Wahrscheinlich dein Vorschlag. ",
                TT426_3_2_2: "Hahahah. Halts Maul und sauf. ",


            },
            Yoshi: {
                TY401_3_2: "Hey Süßer, naaa? brauchst du meine Hilfe? ",
                TY402_3_2: "Mich kann keiner sehen. Und auch wenn, alle Augen wären natürlich auf dich gerichtet, Süßer. Für ein Küsschen helf ich dir aus…",
                TY403_3_2: "Ach, hab dich nicht so. Ich werd dir natürlich immer helfen. (Gibt Geld) Aber irgendwann will ich was dafür Süßer. Viel Spaß dir noch, Schätzchen… ",
            },



        }




        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = true);
        let emotionMeter: HTMLMeterElement = <HTMLMeterElement>document.getElementById("emotionMeter");
        ƒS.Sound.fade(soundKaRenji.deppresiv, 0, 2, true);
        ƒS.Sound.fade(soundKaATakeshi.bar, 0.3, 2, true);
        ƒS.Sound.fade(soundKaAyumi.empty, 0.5, 2);
        ƒS.Sound.fade(soundKaAyumi.water, 0, 2, true);
        ƒS.Sound.fade(soundKaIntro.sadPaino, 0, 2, true);
        ƒS.Sound.fade(soundKaRenji.deppresiv, 0, 2, true);


        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.rainyDistrict);
        await ƒS.update(transitions.dramatic.duration, transitions.dramatic.alpha, transitions.dramatic.edge);
        if (dataForSave.savedSouls > 0) {
            await ƒS.Character.show(characters.renji, characters.renji.pose.default, ƒS.positionPercent(60, 180));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.renji, "Super,Du hast Sie gerettet!!!!");
            await ƒS.Speech.tell(characters.renji, "Ich muss dich leider gleich weiter schicken. Die Zeit rennt");
        } else {
            await ƒS.Character.show(characters.renji, characters.renji.pose.default, ƒS.positionPercent(60, 180));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.renji, "Du hast die Seele leider nicht retten können. Kopf hoch, es war richtig schwer...");
            await ƒS.Speech.tell(characters.renji, "Du kannst es aber bei der nächsten Seele besser machen !");
            await ƒS.Speech.tell(characters.renji, "Ich muss dich leider gleich weiter schicken. Die Zeit rennt");
        }

        await ƒS.Speech.tell(characters.renji, "Hier deine Notiz, ich kann dir leider nicht mehr sagen. Ich muss los.");
        await ƒS.Speech.tell(characters.renji, "Ich legs dir in dein Inventar nochmal ab");
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        ƒS.Inventory.add(items.takeshi);
        ƒS.update();
        ƒS.Text.addClass("novelPageTakeshi");
        await ƒS.Text.print("");
        ƒS.Sound.fade(soundKaATakeshi.dark2, 0.7, 2, true);
        await ƒS.Character.show(characters.takeshi, characters.takeshi.pose.default, ƒS.positionPercent(0, 160));
        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("emotionalScala").classList.remove("hide");
        emotionMeter.value = dataForSave.statusTakeshi;
        await ƒS.update(2);
        //Das ist egal
        //hier ist die erste Szene
        await ƒS.Character.show(characters.jay, characters.jay.pose.serious, ƒS.positionPercent(80, 100));
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ401);
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT401);


        let sceneFourDecision1 = {
            aggresiv: "Versuchen Cool zu sein",
            waiting: "Auf Schwester warten",
            drinking: "Trinken gehen"

        };

        let sceneFourDecision2 = {
            judgeSister: "Über Schwester urteilen",
            sensitive: "Einfühlsam",

        };
        let sceneFourDecision3 = {
            collectProof: "Beweise sammeln",
            diffrentPlan: "anderen Plan vorschlagen",
            helpigOthers: "Anderen Menschen helfen"

        };
        let sceneFourDecision4 = {
            yes: "Ja",
            funny: "mit Humor nehmen",
        };
        let sceneFourDecision5 = {
            police: "Polizei rufen",
            questioning: "Tat moralisch hinterfragen",
        };

        let dialogueElementS4D1 = await ƒS.Menu.getInput(sceneFourDecision1, "choicesCssClass");


        //Hier erste Entscheidung
        switch (dialogueElementS4D1) {

            case sceneFourDecision1.aggresiv:

                dataForSave.statusTakeshi -= 4;
                await ƒS.Speech.tell(characters.jay, text.Jay.TJ402_1);
                ƒS.Speech.hide();
                ƒS.Character.hide(characters.takeshi);
                await ƒS.Character.show(characters.takeshi, characters.takeshi.pose.aggresiv, ƒS.positionPercent(0, 160));
                ƒS.update(1);
                emotionMeter.value = dataForSave.statusTakeshi;
                await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT402_1);
                await endCalc();
                break;

            case sceneFourDecision1.waiting:
                //geht in Pfad Entscheidung 2 Rein
                dataForSave.statusTakeshi += 1;
                emotionMeter.value = dataForSave.statusTakeshi;
                await dialogOne();
                break;

            case sceneFourDecision1.drinking:
                //geht in Pfad Entscheidung 3 Rein
                dataForSave.statusTakeshi += 1;
                emotionMeter.value = dataForSave.statusTakeshi;
                await dialogThree();
                break;
        }

        //Hier ENtscheidung 2
        async function dialogOne(): Promise<void> {

            await ƒS.Speech.tell(characters.jay, text.Jay.TJ402_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT402_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ403_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT403_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ404_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT404_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ405_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT405_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ406_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT406_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ407_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT407_2);

            let dialogueElementS4D2 = await ƒS.Menu.getInput(sceneFourDecision2, "choicesCssClass");

            switch (dialogueElementS4D2) {

                case sceneFourDecision2.judgeSister:
                    //Hier ENtscheidung 2.1
                    dataForSave.statusTakeshi -= 5;
                    ƒS.Speech.hide();
                    ƒS.Character.hide(characters.takeshi);
                    await ƒS.Character.show(characters.takeshi, characters.takeshi.pose.aggresiv, ƒS.positionPercent(0, 160));
                    ƒS.update(1);
                    emotionMeter.value = dataForSave.statusTakeshi;
                    await ƒS.Speech.tell(characters.jay, text.Jay.TJ408_2_1);
                    await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT408_2_1);
                    await endCalc();
                    break;

                case sceneFourDecision2.sensitive:
                    //Hier Entscheidung 2.2
                    dataForSave.statusTakeshi += 1;
                    emotionMeter.value = dataForSave.statusTakeshi;
                    await dialogTwo();
                    break;

            }
        }

        async function dialogTwo(): Promise<void> {
            //Hier soll Path 2.2
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ408_2_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT408_2_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ409_2_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT409_2_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ410_2_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT410_2_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ411_2_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT411_2_2);

            let dialogueElementS4D3 = await ƒS.Menu.getInput(sceneFourDecision3, "choicesCssClass");

            switch (dialogueElementS4D3) {

                case sceneFourDecision3.collectProof:
                    //Hier ENtscheidung 2.2.1
                    dataForSave.statusTakeshi -= 2;
                    ƒS.Speech.hide();
                    ƒS.Character.hide(characters.takeshi);
                    await ƒS.Character.show(characters.takeshi, characters.takeshi.pose.aggresiv, ƒS.positionPercent(0, 160));
                    ƒS.update(1);
                    emotionMeter.value = dataForSave.statusTakeshi;
                    await ƒS.Speech.tell(characters.jay, text.Jay.TJ412_2_2_1);
                    await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT412_2_2_1);
                    await ƒS.Speech.tell(characters.jay, text.Jay.TJ413_2_2_1);
                    await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT413_2_2_1);
                    await endCalc();
                    break;

                case sceneFourDecision3.diffrentPlan:
                    //Hier Entscheidung 2.2.2
                    dataForSave.statusTakeshi -= 1;
                    ƒS.Speech.hide();
                    ƒS.Character.hide(characters.takeshi);
                    await ƒS.Character.show(characters.takeshi, characters.takeshi.pose.aggresiv, ƒS.positionPercent(0, 160));
                    ƒS.update(1);
                    emotionMeter.value = dataForSave.statusTakeshi;
                    await ƒS.Speech.tell(characters.jay, text.Jay.TJ412_2_2_2);
                    await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT413_2_2_2);
                    await endCalc();
                    break;
                case sceneFourDecision3.helpigOthers:
                    //Hier Entscheidung 2.2.3
                    dataForSave.statusTakeshi += 3;
                    emotionMeter.value = dataForSave.statusTakeshi;
                    await ƒS.Speech.tell(characters.jay, text.Jay.TJ412_2_2_3);
                    await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT413_2_2_3);
                    await ƒS.Speech.tell(characters.jay, text.Jay.TJ413_2_2_3);
                    await endCalc();
                    break;
            }
        }

        async function dialogThree(): Promise<void> {
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ414_3);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT414_3);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ415_3);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT415_3);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ416_3);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT416_3);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ417_3);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT417_3);

            let dialogueElementS4D4 = await ƒS.Menu.getInput(sceneFourDecision4, "choicesCssClass");

            switch (dialogueElementS4D4) {

                case sceneFourDecision4.yes:
                    //Hier ENtscheidung 3.1
                    dataForSave.statusTakeshi -= 2;
                    ƒS.Speech.hide();
                    ƒS.Character.hide(characters.takeshi);
                    await ƒS.Character.show(characters.takeshi, characters.takeshi.pose.aggresiv, ƒS.positionPercent(0, 160));
                    ƒS.update(1);
                    emotionMeter.value = dataForSave.statusTakeshi;
                    await ƒS.Speech.tell(characters.jay, text.Jay.TJ416_3_1);
                    await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT417_3_1);
                    await endCalc();
                    break;

                case sceneFourDecision4.funny:
                    //Hier Entscheidung 3.2
                    dataForSave.statusTakeshi += 1;
                    ƒS.Speech.hide();
                    emotionMeter.value = dataForSave.statusTakeshi;
                    await dialogFour();
                    break;

            }
        }

        async function dialogFour(): Promise<void> {
            ƒS.Character.hideAll();
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.bar);
            await ƒS.update(transitions.dramatic.duration, transitions.dramatic.alpha, transitions.dramatic.edge);
            await ƒS.Character.show(characters.takeshi, characters.takeshi.pose.default, ƒS.positionPercent(0, 160));
            await ƒS.Character.show(characters.jay, characters.jay.pose.serious, ƒS.positionPercent(80, 100));
            ƒS.update(1);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ416_3_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT416_3_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ417_3_2);
            ƒS.Character.hide(characters.takeshi);
            await ƒS.Character.show(characters.yoshi, characters.yoshi.pose.default, ƒS.positionPercent(10, 60));
            ƒS.update(1);
            await ƒS.Speech.tell(characters.yoshi, text.Yoshi.TY401_3_2);
            ƒS.Character.hide(characters.jay);
            await ƒS.Character.show(characters.jay, characters.jay.pose.stressed, ƒS.positionPercent(80, 100));
            ƒS.update(1);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ418_3_2);
            await ƒS.Speech.tell(characters.yoshi, text.Yoshi.TY402_3_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ419_3_2);
            await ƒS.Speech.tell(characters.yoshi, text.Yoshi.TY403_3_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ420_3_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT417_3_2);
            ƒS.Character.hide(characters.jay);
            await ƒS.Character.show(characters.jay, characters.jay.pose.serious, ƒS.positionPercent(80, 100));
            ƒS.update(1);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ421_3_2);

            ƒS.Character.hide(characters.yoshi);
            await ƒS.Character.show(characters.takeshi, characters.takeshi.pose.default, ƒS.positionPercent(0, 160));
            ƒS.update(1);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT418_3_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ422_3_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT419_3_2);

            let dialogueElementS4D5 = await ƒS.Menu.getInput(sceneFourDecision5, "choicesCssClass");

            switch (dialogueElementS4D5) {

                case sceneFourDecision5.police:
                    //Hier ENtscheidung 3.2.1
                    dataForSave.statusTakeshi -= 5;
                    ƒS.Speech.hide();
                    ƒS.Character.hide(characters.takeshi);
                    await ƒS.Character.show(characters.takeshi, characters.takeshi.pose.aggresiv, ƒS.positionPercent(0, 160));
                    ƒS.update(1);
                    emotionMeter.value = dataForSave.statusTakeshi;
                    await ƒS.Speech.tell(characters.jay, text.Jay.TJ423_3_2_1);
                    await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT423_3_2_1);
                    await endCalc();
                    break;

                case sceneFourDecision5.questioning:
                    //Hier Entscheidung 3.2.2
                    dataForSave.statusTakeshi += 3;
                    emotionMeter.value = dataForSave.statusTakeshi;
                    await dialogFive();
                    break;

            }

        }
        async function dialogFive(): Promise<void> {
            await ƒS.Location.show(locations.rainyDistrict);
            await ƒS.update(transitions.dramatic.duration, transitions.dramatic.alpha, transitions.dramatic.edge);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ423_3_2_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT423_3_2_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ424_3_2_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT424_3_2_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ425_3_2_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT425_3_2_2);
            await ƒS.Speech.tell(characters.jay, text.Jay.TJ426_3_2_2);
            await ƒS.Speech.tell(characters.takeshi, text.Takeshi.TT426_3_2_2);
            await endCalc();
        }

        async function endCalc(): Promise<ƒS.SceneReturn> {
            if (getMood(dataForSave.statusTakeshi) == 2) {
                dataForSave.savedSouls += 1;
            }

            switch (getMood(dataForSave.savedSouls)) {
                case 0:
                    return EndOne();
                    break;
                case 1:
                    return EndTwo();
                    break;
                case 2:
                    return EndThree();
                    break;


            }

        }


    };
};



