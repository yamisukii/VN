"use strict";
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.ƒ = FudgeCore;
    VisualNovel.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // **** DATEN DIE GESPEICHERT WERDEN SOLLEN ****
    VisualNovel.dataForSave = {
        nameSwimmingWinner: "",
        swimmingWinner: "Yui Ohashi",
        savedSouls: 0,
        statusAyumi: 4,
        statusTakeshi: 4,
        revengeIsPicked: false,
        //Meter
        emotionalScala: "",
    };
    function getMood(_CharakterMood) {
        let mood = 0;
        if (_CharakterMood <= 4) {
            mood = 1;
        }
        if (_CharakterMood > 4) {
            mood = 2;
        }
        return mood;
    }
    VisualNovel.getMood = getMood;
    window.addEventListener("load", start);
    function start(_event) {
        VisualNovel.ƒS.Speech.hide();
        document.getElementById("emotionalScala").setAttribute("class", "hide");
        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = true);
        VisualNovel.gameMenu = VisualNovel.ƒS.Menu.create(VisualNovel.inGameMenuButtons, VisualNovel.buttonFunctionalities, "gameMenuCSSclass");
        VisualNovel.buttonFunctionalities("Close");
        let scenes = [
            // { scene: Intro, name: "First Scene" },
            { scene: VisualNovel.Intro, name: "Introduction" },
            { id: "BridgeScene", scene: VisualNovel.Bridge, name: "First Meeting" },
            { id: "EmotionScene", scene: VisualNovel.Emotion, name: "Get caught by Aikas feeling" },
            { id: "RenjisWorld", scene: VisualNovel.RenjisWorld, name: "Jay in Renjis World between Life an Death" },
            { id: "swimmingGirl", scene: VisualNovel.swimmignHall, name: "Meet Ayumi at the swimmingHall" },
            { id: "takeshi", scene: VisualNovel.TakeshisCase, name: "Meet Takeshi at bar disrtict" },
            { id: "EndOne", scene: VisualNovel.EndOne, name: "EndOne" },
            { id: "EndTwo", scene: VisualNovel.EndTwo, name: "EndTwo" },
            { id: "EndThree", scene: VisualNovel.EndThree, name: "EndThree" },
            { id: "EmptyScene", scene: VisualNovel.Empty, name: "Empty" }
            // { scene: HowToMakeChoices, name: 'Choices' },
        ];
        // start the sequence
        VisualNovel.ƒS.Progress.go(scenes);
    }
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.menuIsOpen = true;
    // **** CREDITS ****
    function showCredits() {
        VisualNovel.ƒS.Text.setClass("class2");
        VisualNovel.ƒS.Text.print("Halleluja");
    }
    VisualNovel.showCredits = showCredits;
    // **** MENÜ ****
    // Buttons
    VisualNovel.inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits",
        inventory: "Inventory"
    };
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case VisualNovel.inGameMenuButtons.save:
                await VisualNovel.ƒS.Progress.save();
                break;
            case VisualNovel.inGameMenuButtons.load:
                await VisualNovel.ƒS.Progress.load();
                break;
            case VisualNovel.inGameMenuButtons.close:
                VisualNovel.gameMenu.close();
                VisualNovel.menuIsOpen = false;
                break;
            case VisualNovel.inGameMenuButtons.credits:
                showCredits();
                break;
            case VisualNovel.inGameMenuButtons.inventory:
                VisualNovel.ƒS.Inventory.open();
        }
    }
    VisualNovel.buttonFunctionalities = buttonFunctionalities;
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case VisualNovel.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await VisualNovel.ƒS.Progress.save();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await VisualNovel.ƒS.Progress.load();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.I:
                console.log("Open Inventory");
                await VisualNovel.ƒS.Inventory.open();
            case VisualNovel.ƒ.KEYBOARD_CODE.ESC:
                console.log("Close Inventory");
                VisualNovel.ƒS.Inventory.close();
                // ƒS.Inventory.close();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.M:
                if (VisualNovel.menuIsOpen) {
                    console.log("Close");
                    VisualNovel.gameMenu.close();
                    VisualNovel.menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    VisualNovel.gameMenu.open();
                    VisualNovel.menuIsOpen = true;
                }
                break;
        }
    }
    VisualNovel.hndKeyPress = hndKeyPress;
    VisualNovel.uiElement = document.querySelector("[type=interface]");
    VisualNovel.dataForSave = VisualNovel.ƒS.Progress.setData(VisualNovel.dataForSave, VisualNovel.uiElement);
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    // **** DEFINITIONEN ****
    // define transitions
    VisualNovel.transitions = {
        water: {
            duration: 1.5,
            alpha: "/Template/FreeTransitions/Others/002.jpg",
            edge: 1
        },
        thinking: {
            duration: 2,
            alpha: "./FreeTransitions/WipesAndOther/21.jpg",
            edge: 0.8
        },
        dramatic: {
            duration: 1,
            alpha: "./FreeTransitions/WipesAndOther/19.jpg",
            edge: 1
        },
        dayNight: {
            duration: 0.6,
            alpha: "./FreeTransitions/WipesAndOther/dayToNight.jpg",
            edge: 0
        },
        cloudy: {
            duration: 2,
            alpha: "./FreeTransitions/WipesAndOther/12.jpg",
            edge: 0.7
        },
    };
    VisualNovel.soundKaIntro = {
        traffic1: "/Template/Audio/Kapitel1/Traffic_1.wav",
        traffic2: "/Template/Audio/Kapitel1/Traffic_2.wav",
        nachdenklich: "/Template/Audio/Kapitel1/Nachdenkliche_Musik.wav",
        dramatic1: "/Template/Audio/Kapitel1/Dramatic_1.wav",
        dramatic2: "/Template/Audio/Kapitel1/Dramatic_2.wav",
        fastPiano: "/Template/Audio/fastPiano.mp3",
        sadPaino: "/Template/Audio/sadPiano.mp3",
    };
    VisualNovel.soundKaRenji = {
        deppresiv: "/Template/Audio/Kapitel2/depressiv.mp3",
    };
    VisualNovel.soundKaAyumi = {
        correct: "/Template/Audio/Kapitel3/correct.wav",
        wrong: "/Template/Audio/Kapitel3/wromg.wav",
        water: "/Template/Audio/Kapitel3/water.wav",
        empty: "/Template/Audio/Kapitel3/Empty_Hall2.flac",
    };
    VisualNovel.soundKaATakeshi = {
        bar: "/Template/Audio/Kapitel4/Bar.wav",
        dark1: "/Template/Audio/Kapitel4/Dark_Athmo_1.wav",
        dark2: "/Template/Audio/Kapitel4/Dark_Athmo_2.wav",
    };
    VisualNovel.locations = {
        heaven: {
            name: "endScene1",
            background: "/Template/Images/Backgrounds/End/Heaven.png"
        },
        endScene1: {
            name: "endScene1",
            background: "/Template/Images/Backgrounds/BridgeScene/FallScene/IWillRemeberYou.png"
        },
        bar: {
            name: "rainyDistrict",
            background: "/Template/Images/Backgrounds/RevengeCase/Bar.png"
        },
        rainyDistrict: {
            name: "rainyDistrict",
            background: "/Template/Images/Backgrounds/RevengeCase/rainyDistrict.png"
        },
        swimmingHall: {
            name: "swimminHall",
            background: "/Template/Images/Backgrounds/swimmingHall/swimmingHall.png"
        },
        renjisWorld1: {
            name: "renjisWorld1",
            background: "/Template/Images/Backgrounds/RenjisWorld/RenjisWorld1.png"
        },
        renjisWorld2: {
            name: "renjisWorld2",
            background: "/Template/Images/Backgrounds/RenjisWorld/RenjisWorld2.png"
        },
        memorie1: {
            name: "Memorie1",
            background: "/Template/Images/Backgrounds/BridgeScene/Feelings/Memories1.png"
        },
        memorie2: {
            name: "Memorie2",
            background: "/Template/Images/Backgrounds/BridgeScene/Feelings/Memories2.png"
        },
        memorie3: {
            name: "Memorie3",
            background: "/Template/Images/Backgrounds/BridgeScene/Feelings/Memories3.png"
        },
        fall2: {
            name: "FallingDown1",
            background: "/Template/Images/Backgrounds/BridgeScene/FallScene/Falling2.png"
        },
        fall1: {
            name: "FallingDown1",
            background: "/Template/Images/Backgrounds/BridgeScene/FallScene/Falling.png"
        },
        tokyoBridge: {
            name: "TokyoBridge",
            background: "/Template/Images/Backgrounds/BridgeScene/BridgeGirl.png"
        },
        tokyoWalkingHome: {
            name: "TokyoAtEvenning",
            background: "/Template/Images/Backgrounds/Tokyo/WalkingHome.png"
        },
        purgatory: {
            name: "DecisionWorld",
            background: "/Template/Images/BG/DescisionWorld.jpg"
        },
        alleyEv: {
            name: "alleyEvening",
            background: "/Template/Images/BG/alley_evening.png"
        },
        nightStreets: {
            name: "Starry",
            background: "/Template/Images/Backgrounds/nightStreets.jpg"
        }
    };
    VisualNovel.characters = {
        jay: {
            name: "Jay",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "/Template/Images/Characters/Jay/default.png",
                serious: "/Template/Images/Characters/Jay/serious.png",
                stressed: "/Template/Images/Characters/Jay/stressed.png",
                crying: "/Template/Images/Characters/Jay/crying.png",
                schocked: "/Template/Images/Characters/Jay/schocked.png",
            }
        },
        takeshi: {
            name: "Takeshi",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                default: "/Template/Images/Characters/Takeshi/default.png",
                aggresiv: "/Template/Images/Characters/Takeshi/aggresiv.png"
            }
        },
        yoshi: {
            name: "Yoshi",
            origin: VisualNovel.ƒS.ORIGIN.CENTERLEFT,
            pose: { default: "/Template/Images/Characters/Yoshi/Default.png" }
        },
        renji: {
            name: "Renji",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: { default: "/Template/Images/Characters/Renji/default.png", }
        },
        aika: {
            name: "Aika",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMLEFT,
        },
        ayumi: {
            name: "Ayumi",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                angry: "/Template/Images/Characters/Ayumi/sad.png",
                happy: "/Template/Images/Characters/Ayumi/happy.png",
            }
        }
    };
    VisualNovel.items = {
        ayumi: {
            name: "Ayumi",
            description: "<br>" + "<br>" + "- Alter: 19 " + "<br>" + "-Hintergrund: Ehemalige Olympiaschwimmerin" + "<br>" + "-Aktueller Status: Rollstuhlbenutzerin nach einem Unfall" + "<br>" + "- Gefahren: Suizid" + "<br>",
            image: "./Images/Characters/Ayumi/happy.png",
            static: true
        },
        takeshi: {
            name: "Takeshi",
            description: "<br>" + "<br>" + "- Alter: 27 " + "<br>" + "-Gezeichnet vom tragischen Autounfall und Verlust seiner Schwester" + "<br>" + "-Aktueller Status: Desillusionierter junger Mann, kämpft mit existenziellen Krisen" + "<br>" + "- Gefahren: Geplanter Mord aus Rache, moralische Qualen" + "<br>",
            image: "./Images/Characters/Takeshi/aggresiv.png",
            static: true
        },
    };
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function Bridge() {
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
        VisualNovel.ƒS.Speech.hide();
        console.log();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.tokyoBridge);
        await VisualNovel.ƒS.update(VisualNovel.transitions.dayNight.duration, VisualNovel.transitions.dayNight.alpha, 0.5);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.default, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        // ƒS.Character.hide(characters.jay);
        // ƒS.Character.hideAll();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ101);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ102);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aika, text.Aika.TA101);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ103);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aika, text.Aika.TA102);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ104);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.nachdenklich, 0, 2);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aika, text.Aika.TA103);
        VisualNovel.ƒS.Character.hide(VisualNovel.characters.jay);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.fastPiano, 2, 2, true);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.schocked, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(VisualNovel.transitions.dayNight.duration, VisualNovel.transitions.dayNight.alpha, 0);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ105);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aika, text.Aika.TA104);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ106);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aika, text.Aika.TA105);
        VisualNovel.ƒS.Speech.clear();
        VisualNovel.ƒS.Speech.hide();
        await VisualNovel.ƒS.update();
        let sceneIntroDecision1 = {
            helping: "Versuchen zu helfen",
            notHelping: "Nicht ernst nehmen"
        };
        let dialogueElementS1D1 = await VisualNovel.ƒS.Menu.getInput(sceneIntroDecision1, "choicesCssClass");
        switch (dialogueElementS1D1) {
            case sceneIntroDecision1.notHelping:
                console.log("Intro helfen");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ106_1);
                await dialogOne();
                VisualNovel.ƒS.Speech.hide();
                VisualNovel.ƒS.update();
                break;
            case sceneIntroDecision1.helping:
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ106_2);
                console.log("Intro nicht helfen");
                await dialogTwo();
                VisualNovel.ƒS.Speech.hide();
                VisualNovel.ƒS.update();
                break;
        }
        async function dialogOne() {
            console.log("Scene Intro Dialoge1");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aika, text.Aika.TA106_1);
            VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.fastPiano, 0, 2, true);
            VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.sadPaino, 0.6, 4, true);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ107_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aika, text.Aika.TA107_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ108_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aika, text.Aika.TA108_1);
            VisualNovel.ƒS.Character.hideAll();
        }
        async function dialogTwo() {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aika, text.Aika.TA106_2);
            VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.fastPiano, 0, 2, true);
            VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.sadPaino, 0.6, 4, true);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ107_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aika, text.Aika.TA107_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ108_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aika, text.Aika.TA108_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ109_2);
            ;
            VisualNovel.ƒS.Character.hideAll();
        }
        console.log("End BridgeScene");
    }
    VisualNovel.Bridge = Bridge;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function Emotion() {
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
        VisualNovel.ƒS.Speech.hide();
        console.log();
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.traffic2, 0, 1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.sadPaino, 1.3, 1, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.fall1);
        await VisualNovel.ƒS.update(VisualNovel.transitions.dramatic.duration, VisualNovel.transitions.dramatic.alpha, VisualNovel.transitions.dramatic.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ001);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ002);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.fall2);
        await VisualNovel.ƒS.update(2, VisualNovel.transitions.dramatic.alpha, VisualNovel.transitions.dramatic.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ003);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ004);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.memorie1);
        await VisualNovel.ƒS.update(VisualNovel.transitions.thinking.duration, VisualNovel.transitions.thinking.alpha, VisualNovel.transitions.thinking.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ005);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.memorie2);
        await VisualNovel.ƒS.update(VisualNovel.transitions.thinking.duration, VisualNovel.transitions.thinking.alpha, VisualNovel.transitions.thinking.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ006);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.memorie3);
        await VisualNovel.ƒS.update(VisualNovel.transitions.thinking.duration, VisualNovel.transitions.thinking.alpha, VisualNovel.transitions.thinking.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ007);
        VisualNovel.ƒS.Speech.hide();
    }
    VisualNovel.Emotion = Emotion;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function Empty() {
        //
    }
    VisualNovel.Empty = Empty;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function EndOne() {
        console.log("Let's text!");
        let text = {
            Renji: {
                TR001: "Jay du hast euch beide gerettet!!!",
                TR002: "Ich wünsch euch noch viel Spaß in eurem Leben",
                TR003: "Genießt euren Flug zum Boden",
            },
        };
        // ƒS.Sound.fade(sound.dystopian, 2, 7, true);
        VisualNovel.ƒS.Character.hideAll();
        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = true);
        VisualNovel.ƒS.Speech.hide();
        console.log();
        VisualNovel.ƒS.Sound.play(VisualNovel.soundKaIntro.sadPaino, 0.5, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.endScene1);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.update(VisualNovel.transitions.dayNight.duration, VisualNovel.transitions.dayNight.alpha, VisualNovel.transitions.dayNight.edge);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.default, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR001);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR003);
        VisualNovel.ƒS.Speech.hide();
        return VisualNovel.Intro();
    }
    VisualNovel.EndOne = EndOne;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function EndThree() {
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
        VisualNovel.ƒS.Character.hideAll();
        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = true);
        VisualNovel.ƒS.Speech.hide();
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Speech.hide();
        console.log();
        VisualNovel.ƒS.Sound.play(VisualNovel.soundKaIntro.sadPaino, 0.5, true);
        VisualNovel.ƒS.Sound.play(VisualNovel.soundKaIntro.traffic2, 0.2, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.tokyoWalkingHome);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.update(VisualNovel.transitions.dayNight.duration, VisualNovel.transitions.dayNight.alpha, VisualNovel.transitions.dayNight.edge);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.schocked, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR001);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR003);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR004);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR005);
        VisualNovel.ƒS.Speech.hide();
        return VisualNovel.Intro();
    }
    VisualNovel.EndThree = EndThree;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function EndTwo() {
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
        VisualNovel.ƒS.Character.hideAll();
        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = true);
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Speech.hide();
        console.log();
        VisualNovel.ƒS.Sound.play(VisualNovel.soundKaIntro.sadPaino, 0.5, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.heaven);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.update(VisualNovel.transitions.dayNight.duration, VisualNovel.transitions.dayNight.alpha, VisualNovel.transitions.dayNight.edge);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.default, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR001);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR003);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR004);
        VisualNovel.ƒS.Speech.hide();
        return VisualNovel.Intro();
    }
    VisualNovel.EndTwo = EndTwo;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function Intro() {
        console.log("Let's text!");
        let text = {
            Jay: {
                TJ000: "Puh...",
                TJ001: "Genug gelernt für heute!",
                TJ002: "Endlich auf dem heimweg!!",
                TJ003: "So ein beschissener Tag schon wieder.",
                TJ004: "Fuck!! auch keine Kippen mehr dabei.",
                TJ005: "Dann geh ich halt noch über die Saitama Brücke zum Konbini...",
            }
        };
        // ƒS.Sound.fade(sound.dystopian, 2, 7, true);
        VisualNovel.ƒS.Speech.hide();
        console.log();
        // ƒS.Text.print("Mit M öffnest du das Menü");
        VisualNovel.ƒS.Sound.play(VisualNovel.soundKaIntro.traffic2, 0.3, true);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.nachdenklich, 0.5, 7, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.tokyoWalkingHome);
        //await ƒS.update();
        await VisualNovel.ƒS.update(VisualNovel.transitions.dayNight.duration, VisualNovel.transitions.dayNight.alpha, VisualNovel.transitions.dayNight.edge);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.default, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        // await ƒS.Character.show(characters.jay, characters.jay.pose.happy, ƒS.positionPercent(170, 10));
        VisualNovel.ƒS.Character.hide(VisualNovel.characters.jay);
        // ƒS.Character.hideAll();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ000);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ001);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ003);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ004);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ005);
        VisualNovel.ƒS.Speech.hide();
    }
    VisualNovel.Intro = Intro;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function RenjisWorld() {
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
        VisualNovel.ƒS.Speech.hide();
        console.log();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.renjisWorld1);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.schocked, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(VisualNovel.transitions.cloudy.duration, VisualNovel.transitions.cloudy.alpha, VisualNovel.transitions.cloudy.edge);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.sadPaino, 0, 2, true);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaRenji.deppresiv, 0.7, 2, true);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ001);
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Character.hide(VisualNovel.characters.jay);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.renjisWorld2);
        await VisualNovel.ƒS.update(4, VisualNovel.transitions.cloudy.alpha, 0.8);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.renji, VisualNovel.characters.renji.pose.default, VisualNovel.ƒS.positionPercent(120, 180));
        await VisualNovel.ƒS.update(2, VisualNovel.transitions.cloudy.alpha, 0.5);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR001);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR002);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.serious, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(2, VisualNovel.transitions.cloudy.alpha, 0.5);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ002);
        VisualNovel.ƒS.Speech.hide();
        await VisualNovel.ƒS.Character.hideAll();
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.yoshi, VisualNovel.characters.yoshi.pose.default, VisualNovel.ƒS.positionPercent(10, 60));
        await VisualNovel.ƒS.update(VisualNovel.transitions.cloudy.duration, VisualNovel.transitions.cloudy.alpha, VisualNovel.transitions.cloudy.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.yoshi, text.Yoshi.TY001);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.renji, VisualNovel.characters.renji.pose.default, VisualNovel.ƒS.positionPercent(110, 180));
        await VisualNovel.ƒS.update(VisualNovel.transitions.cloudy.duration, VisualNovel.transitions.cloudy.alpha, VisualNovel.transitions.cloudy.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR003);
        VisualNovel.ƒS.Character.hide(VisualNovel.characters.yoshi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.serious, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(VisualNovel.transitions.cloudy.duration, VisualNovel.transitions.cloudy.alpha, VisualNovel.transitions.cloudy.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ003);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR004);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ004);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ005);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR005);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR006);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.yoshi, text.Yoshi.TY002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR007);
        VisualNovel.ƒS.Speech.hide();
        await VisualNovel.ƒS.Character.hideAll();
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.yoshi, VisualNovel.characters.yoshi.pose.default, VisualNovel.ƒS.positionPercent(10, 60));
        await VisualNovel.ƒS.update(VisualNovel.transitions.cloudy.duration, VisualNovel.transitions.cloudy.alpha, VisualNovel.transitions.cloudy.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.yoshi, text.Yoshi.TY003);
        await VisualNovel.ƒS.Character.hideAll();
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.renji, VisualNovel.characters.renji.pose.default, VisualNovel.ƒS.positionPercent(110, 180));
        await VisualNovel.ƒS.update(1, VisualNovel.transitions.cloudy.alpha, VisualNovel.transitions.cloudy.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR008);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR009);
        VisualNovel.ƒS.Speech.hide();
        await VisualNovel.ƒS.Character.hideAll();
    }
    VisualNovel.RenjisWorld = RenjisWorld;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function swimmignHall() {
        console.log("Let's text!");
        let text = {
            Jay: {
                TJ301_1: "Hey Süße, du siehst traurig aus. Kann ich dich wieder zum Lächeln bringen?",
                TJ301_2: "Hey, keine Angst ich bin Jay, ich weiß es super gruselig, ich habe auch kein Bock hier zu sein, aber jetzt sind wir beide hier.",
                TJ301_3: "Oh hey, was haben du und ein Mörder gemeinsam? Mhm na ihr sitzt beide lebenslänglich.",
                TJ302: "Ich habe dich hier sitzen sehen und joo dachte ich komm mal rüber.",
                TJ303: "Ja kann ich schon machen, aber mir ist langweilig… ",
                TJ304: "Also will auch hier bleiben.",
                TJ305_1: "(seufz…)Mhmm ich weiß das mein Leben davon abhängt deins zu retten, deswegen werde ich alles dafür tun.",
                TJ305_2: "Ich weiß wie es dir geht und wollte dir einfach helfen.",
                TJ305_3: "Ich schwimme gern nachts, wenn niemand da ist.",
                TJ306_1: "(leicht verwirrt) Mein Leben? Ich dachte, ich könnte dir vielleicht helfen oder dich aufmuntern.",
                TJ307_1: "(ruhig) Hmmm verstehe. Hab ich meistens auch kein Bock. Aber manchmal ist es gut, mit jemandem zu reden.",
                TJ308_1: "(einfühlsam) Is okay, du musst nicht sofort darüber reden. Aber wenn du möchtest, ich bin ja eh hier.",
                TJ309_1: "Ja schon, aber du bist mir sympathisch.",
                TJ306_2: "(neugierig) Früher? Was hat sich geändert?",
                TJ307_2: "(einfühlsam) Das tut mir leid zu hören. Was ist passiert?",
                TJ308_2: "(überrascht) Das tut mir wirklich leid, Ayumi. Es muss hart gewesen sein.",
                TJ309_2: "(nachdenklich) Und jetzt fühlst du dich, als ob alles umsonst war?",
                TJ310_1: "Ich war früher auch ein sehr guter Schwimmer. Ich hab den Sport über alles geliebt. Ich kann mir gut vorstellen, was du durchmachen musst.",
                TJ311_1: "Schwöre. Habe jede Olympiade mit meinen Eltern geschaut. Kenne alle Olympiasieger.",
                TJ312_1: "[Freies Eingabefenster]",
                TJ313_1: "Ich hatte einfach keine Lust mehr. Schwimmen hat mir zu viel Zeit für viele andere Dinge genommen. Obwohl ich mich nie bei meinen Freunden gemeldet hab, wollten die immer was mit mir machen, aber ich hatte nie Zeit. Irgendwann hab ich das Gefühl bekommen, dass ich was verpasse und dass mein Ehrgeiz mir im Weg steht. Ich hab dann aufgehört. Und ich sag dir… das war so erleichternd. Ich hab so viel Freizeit und kann endlich die schönen Dinge im Leben genießen.",
                TJ314_1: "(nickt zustimmend) Ja stimmt. Glaub mir, das war die beste Entscheidung meines Lebens. Manchmal müssen wir loslassen, um Platz für neue Erfahrungen zu schaffen und uns erlauben, glücklich zu sein.",
                TJ315_1: "(ruhig) Jeder Mensch hat seinen eigenen Weg und es ist in Ordnung, wenn der sich ändert.",
                TJ316: "(aufmunternd) Das klingt nach einem guten Ansatz. Veränderungen können beängstigend sein, aber sie bringen auch Chancen mit sich. Ich bin mir sicher, dass du eine neue Leidenschaft finden wirst, die dich genauso erfüllt.",
                TJ317: "(freundlich) Hab ich gern gemacht. Wenn du jemals jemanden zum Reden brauchst, bin ich hier.",
                TJ312_2: "Nein, wirklich. Ich habs leider nur vergessen",
            },
            Ayumi: {
                TA301_1: "Ekelhaft. Ich komm schon alleine klar.",
                TA301_2: "und warum bist du dann hier ?",
                TA301_3: "hahaha.... so etwas bescheuertes habe ich schon lang nicht mehr gehört. Aber besser als das ständige Mitleid. Warum bist du hier?",
                TA302: "Alles ist gut, danke. Du kannst gehe",
                TA303: "Hmm ja okay. Kann dich ja nicht zwingen zu gehen…",
                TA304: "aber was machst du eigentlich in dieser Schwimmhalle um dieser Uhrzeit ???",
                TA305_1: "Was hat mein Leben mit deinem zu tun?!",
                TA305_2: "Woher willst du das bitte wissen ?",
                TA305_3: "Ich bin früher auch gern alleine geschwommen. Da kann man den Kopf so gut ausschalten.",
                TA306_1: "(bitter) Du kannst mir nicht helfen. Niemand kann das.",
                TA307_1: "(abweisend) Ich rede nicht gerne über meine Probleme. Das bringt sowieso nichts.",
                TA308_1: "(zögerlich) Warum machst du das überhaupt? Ich kann dir doch egal sein.",
                TA309_1: "Danke, aber ich weiß nicht, ob es etwas ändern wird.",
                TA306_2: "(leicht betrübt) Ein Unfall hat alles verändert. Ich kann nicht mehr schwimmen wie früher.",
                TA307_2: "(zögert kurz) Es war vor ein paar Monaten. Ich hatte einen schweren Unfall beim Training, und seitdem bin ich an den Rollstuhl gefesselt.",
                TA308_2: "(etwas resigniert) Es war und ist immer noch schwer. Ich habe mein ganzes Leben darauf aufgebaut, eine erfolgreiche Schwimmerin zu sein.",
                TA309_2: "(nickt) Genau. Ich weiß nicht, wer ich ohne das Schwimmen bin.",
                TA310_1: "Waaaaas?!? Das glaub ich dir nicht!!! Du lügst mich doch an.",
                TA311_1: "Wenn du so ein erfahrener Schwimmer warst, dann erzähl mir mal, wer 2020 die Olympiasiegerin im 200m und 400m Lagenschwimmen war.",
                TA312_1: "Wow. Du hast wirklich nicht gelogen… Aber wieso schwimmst du dann jetzt nicht mehr? Was ist passiert?",
                TA314_1: "(etwas nachdenklich) Hmm, interessant. Sieht so aus, als wärst du mit deiner Entscheidung jetzt auch noch glücklich, oder?",
                TA315_1: "(lächelt leicht) Ich glaube, du hast Recht…",
                TA316: "(nachdenklich) Ich habe das Gefühl, dass ich immer noch versuche, an etwas festzuhalten, das nicht mehr da ist. Vielleicht ist es an der Zeit, dass ich mich für neue Möglichkeiten öffne.",
                TA317: "(lächelt dankbar) Danke, Jay. Du hast mir wirklich geholfen, die Dinge aus einer anderen Perspektive zu sehen.",
                TA312_2: "Ich wusste, dass du lügst!!",
                TA311_2: "Ich glaub dir gar nichts mehr und jetzt lass mich bitte allein.",
            },
            Renji: {
                TR301: "Jay, ich hab dich in eine  Schwimmhalle in Tokyo gesendet.",
                TR302: "Hier solltest du auf ein Mädchen treffen das deine Hilfe dringend braucht. ",
                TR303: "Ich schick dir eine Notiz die du dir in ruhe anschauen kannst, bevor du dieses Mädchen ansprichst",
                TR304: "Aber pass auf !! Jede Entscheidung die du triffst könnte ihr und auch deine Zukuft ändern. Denke Weise nach! Viel Erfolg.",
            }
        };
        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = true);
        let emotionMeter = document.getElementById("emotionMeter");
        console.log(VisualNovel.dataForSave.statusAyumi);
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaAyumi.empty, 0.5, 2);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaAyumi.water, 0.1, 2, true);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.sadPaino, 0.4, 2, true);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaRenji.deppresiv, 0, 2, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.swimmingHall);
        await VisualNovel.ƒS.update(VisualNovel.transitions.water.duration, VisualNovel.transitions.water.alpha, VisualNovel.transitions.water.edge);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.renji, VisualNovel.characters.renji.pose.default, VisualNovel.ƒS.positionPercent(60, 180));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR301);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR302);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR303);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, text.Renji.TR304);
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Character.hide(VisualNovel.characters.renji);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.sadPaino, 0.4, 3, true);
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.ayumi);
        VisualNovel.ƒS.update();
        VisualNovel.ƒS.Text.addClass("novelPageAyumi");
        await VisualNovel.ƒS.Text.print("");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, "Mit 'i' öffnest du dein Inventar. Dort ist auch deine Notiz nochmal");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.ayumi, VisualNovel.characters.ayumi.pose.angry, VisualNovel.ƒS.positionPercent(3, 130));
        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("emotionalScala").classList.remove("hide");
        emotionMeter.value = VisualNovel.dataForSave.statusAyumi;
        VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, "Oh ich seh Sie. Ich geh mal rüber und quatsch Sie an...");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.default, VisualNovel.ƒS.positionPercent(80, 100));
        VisualNovel.ƒS.update(1);
        let sceneOneDecision1 = {
            flirting: "Anbbagern",
            intorduction: "Sich Vorstellen",
            makingJoke: "Rollstuhlwitz machen"
        };
        let sceneOneDecision2 = {
            direct: "Ehrlich sein",
            sensitive: "Einfühlsam",
            lying: "Lügen"
        };
        let dialogueElementS1D1 = await VisualNovel.ƒS.Menu.getInput(sceneOneDecision1, "choicesCssClass");
        //#region  let dialogueElementS1D2 = await ƒS.Menu.getInput(sceneOneDecision2, "choicesCssClass");
        //#region let dialogueElementS1D3 = await ƒS.Menu.getInput(sceneOneDecision3, "choicesCssClass");
        switch (dialogueElementS1D1) {
            case sceneOneDecision1.flirting:
                console.log("S1 anbagern");
                VisualNovel.dataForSave.statusAyumi -= 2;
                emotionMeter.value = VisualNovel.dataForSave.statusAyumi;
                console.log(VisualNovel.dataForSave.statusAyumi);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ301_1);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA301_1);
                await dialogOne();
                break;
            case sceneOneDecision1.intorduction:
                console.log("S1 vorstellen");
                VisualNovel.dataForSave.statusAyumi += 1;
                emotionMeter.value = VisualNovel.dataForSave.statusAyumi;
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ301_2);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA301_2);
                await dialogOne();
                break;
            case sceneOneDecision1.makingJoke:
                console.log("S1 macht Witz");
                VisualNovel.dataForSave.statusAyumi += 2;
                emotionMeter.value = VisualNovel.dataForSave.statusAyumi;
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ301_3);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA301_3);
                await dialogOne();
                break;
        }
        async function dialogOne() {
            console.log(VisualNovel.getMood(VisualNovel.dataForSave.statusAyumi));
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ302);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA302);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ303);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA303);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ304);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA304);
            let dialogueElementS1D2 = await VisualNovel.ƒS.Menu.getInput(sceneOneDecision2, "choicesCssClass");
            switch (dialogueElementS1D2) {
                case sceneOneDecision2.direct:
                    VisualNovel.dataForSave.statusAyumi -= 1;
                    emotionMeter.value = VisualNovel.dataForSave.statusAyumi;
                    console.log(VisualNovel.dataForSave.statusAyumi);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ305_1);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA305_1);
                    await dialog2();
                    break;
                case sceneOneDecision2.sensitive:
                    console.log("Einfühlsam");
                    VisualNovel.dataForSave.statusAyumi += 1;
                    emotionMeter.value = VisualNovel.dataForSave.statusAyumi;
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ305_2);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA305_2);
                    await dialog2();
                    break;
                case sceneOneDecision2.lying:
                    VisualNovel.dataForSave.statusAyumi += 2;
                    emotionMeter.value = VisualNovel.dataForSave.statusAyumi;
                    console.log("lügen");
                    await dialog3();
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ305_3);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA305_3);
                    break;
            }
        }
        async function dialog2() {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ306_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA306_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ307_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA307_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ308_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA308_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ309_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA309_1);
            await dialog4();
        }
        async function dialog3() {
            VisualNovel.ƒS.Character.hide(VisualNovel.characters.ayumi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.ayumi, VisualNovel.characters.ayumi.pose.happy, VisualNovel.ƒS.positionPercent(3, 130));
            VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ306_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA306_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ307_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA307_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ308_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA308_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ309_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA309_2);
            await dialog4();
        }
        async function dialog4() {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ310_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA310_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ311_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA311_1);
            VisualNovel.dataForSave.nameSwimmingWinner = await VisualNovel.ƒS.Speech.getInput();
            if (VisualNovel.dataForSave.swimmingWinner.toLocaleLowerCase().includes(VisualNovel.dataForSave.nameSwimmingWinner.toLocaleLowerCase())) {
                console.log(VisualNovel.dataForSave.nameSwimmingWinner);
                await dialog5();
            }
            else
                await dialog6();
        }
        async function dialog5() {
            VisualNovel.dataForSave.statusAyumi += 3;
            emotionMeter.value = VisualNovel.dataForSave.statusAyumi;
            await VisualNovel.ƒS.update();
            VisualNovel.ƒS.Character.hide(VisualNovel.characters.ayumi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.ayumi, VisualNovel.characters.ayumi.pose.happy, VisualNovel.ƒS.positionPercent(3, 130));
            VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA312_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ313_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA314_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ314_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA315_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ315_1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA316);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ316);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA317);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ317);
            if (VisualNovel.getMood(VisualNovel.dataForSave.statusAyumi) == 2) {
                VisualNovel.dataForSave.savedSouls += 1;
            }
        }
        async function dialog6() {
            VisualNovel.ƒS.Character.hide(VisualNovel.characters.ayumi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.ayumi, VisualNovel.characters.ayumi.pose.angry, VisualNovel.ƒS.positionPercent(3, 130));
            VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Text.print("Es war Yui Ohashi");
            VisualNovel.dataForSave.statusAyumi -= 3;
            emotionMeter.value = VisualNovel.dataForSave.statusAyumi;
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA312_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ312_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.ayumi, text.Ayumi.TA311_2);
            if (VisualNovel.getMood(VisualNovel.dataForSave.statusAyumi) == 2) {
                VisualNovel.dataForSave.savedSouls += 1;
            }
        }
    }
    VisualNovel.swimmignHall = swimmignHall;
    ;
})(VisualNovel || (VisualNovel = {}));
;
// ƒS.Sound.fade(sound.dystopian, 2, 7, true);
var VisualNovel;
(function (VisualNovel) {
    async function TakeshisCase() {
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
        };
        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = true);
        let emotionMeter = document.getElementById("emotionMeter");
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaRenji.deppresiv, 0, 2, true);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaATakeshi.bar, 0.3, 2, true);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaAyumi.empty, 0.5, 2);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaAyumi.water, 0, 2, true);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaIntro.sadPaino, 0, 2, true);
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaRenji.deppresiv, 0, 2, true);
        VisualNovel.ƒS.Character.hideAll();
        VisualNovel.ƒS.Speech.hide();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.rainyDistrict);
        await VisualNovel.ƒS.update(VisualNovel.transitions.dramatic.duration, VisualNovel.transitions.dramatic.alpha, VisualNovel.transitions.dramatic.edge);
        if (VisualNovel.dataForSave.savedSouls > 0) {
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.renji, VisualNovel.characters.renji.pose.default, VisualNovel.ƒS.positionPercent(60, 180));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, "Super,Du hast Sie gerettet!!!!");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, "Ich muss dich leider gleich weiter schicken. Die Zeit rennt");
        }
        else {
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.renji, VisualNovel.characters.renji.pose.default, VisualNovel.ƒS.positionPercent(60, 180));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, "Du hast die Seele leider nicht retten können. Kopf hoch, es war richtig schwer...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, "Du kannst es aber bei der nächsten Seele besser machen !");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, "Ich muss dich leider gleich weiter schicken. Die Zeit rennt");
        }
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, "Hier deine Notiz, ich kann dir leider nicht mehr sagen. Ich muss los.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.renji, "Ich legs dir in dein Inventar nochmal ab");
        VisualNovel.ƒS.Character.hideAll();
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.takeshi);
        VisualNovel.ƒS.update();
        VisualNovel.ƒS.Text.addClass("novelPageTakeshi");
        await VisualNovel.ƒS.Text.print("");
        VisualNovel.ƒS.Sound.fade(VisualNovel.soundKaATakeshi.dark2, 0.7, 2, true);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.takeshi, VisualNovel.characters.takeshi.pose.default, VisualNovel.ƒS.positionPercent(0, 160));
        document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("emotionalScala").classList.remove("hide");
        emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
        await VisualNovel.ƒS.update(2);
        //Das ist egal
        //hier ist die erste Szene
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.serious, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ401);
        await VisualNovel.ƒS.update(2);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT401);
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
        let dialogueElementS4D1 = await VisualNovel.ƒS.Menu.getInput(sceneFourDecision1, "choicesCssClass");
        //Hier erste Entscheidung
        switch (dialogueElementS4D1) {
            case sceneFourDecision1.aggresiv:
                VisualNovel.dataForSave.statusTakeshi -= 4;
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ402_1);
                VisualNovel.ƒS.Speech.hide();
                VisualNovel.ƒS.Character.hide(VisualNovel.characters.takeshi);
                await VisualNovel.ƒS.Character.show(VisualNovel.characters.takeshi, VisualNovel.characters.takeshi.pose.aggresiv, VisualNovel.ƒS.positionPercent(0, 160));
                VisualNovel.ƒS.update(1);
                emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT402_1);
                await endCalc();
                break;
            case sceneFourDecision1.waiting:
                //geht in Pfad Entscheidung 2 Rein
                VisualNovel.dataForSave.statusTakeshi += 1;
                emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
                await dialogOne();
                break;
            case sceneFourDecision1.drinking:
                //geht in Pfad Entscheidung 3 Rein
                VisualNovel.dataForSave.statusTakeshi += 1;
                emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
                await dialogThree();
                break;
        }
        //Hier ENtscheidung 2
        async function dialogOne() {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ402_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT402_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ403_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT403_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ404_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT404_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ405_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT405_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ406_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT406_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ407_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT407_2);
            let dialogueElementS4D2 = await VisualNovel.ƒS.Menu.getInput(sceneFourDecision2, "choicesCssClass");
            switch (dialogueElementS4D2) {
                case sceneFourDecision2.judgeSister:
                    //Hier ENtscheidung 2.1
                    VisualNovel.dataForSave.statusTakeshi -= 5;
                    VisualNovel.ƒS.Speech.hide();
                    VisualNovel.ƒS.Character.hide(VisualNovel.characters.takeshi);
                    await VisualNovel.ƒS.Character.show(VisualNovel.characters.takeshi, VisualNovel.characters.takeshi.pose.aggresiv, VisualNovel.ƒS.positionPercent(0, 160));
                    VisualNovel.ƒS.update(1);
                    emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ408_2_1);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT408_2_1);
                    await endCalc();
                    break;
                case sceneFourDecision2.sensitive:
                    //Hier Entscheidung 2.2
                    VisualNovel.dataForSave.statusTakeshi += 1;
                    emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
                    await dialogTwo();
                    break;
            }
        }
        async function dialogTwo() {
            //Hier soll Path 2.2
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ408_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT408_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ409_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT409_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ410_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT410_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ411_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT411_2_2);
            let dialogueElementS4D3 = await VisualNovel.ƒS.Menu.getInput(sceneFourDecision3, "choicesCssClass");
            switch (dialogueElementS4D3) {
                case sceneFourDecision3.collectProof:
                    //Hier ENtscheidung 2.2.1
                    VisualNovel.dataForSave.statusTakeshi -= 2;
                    VisualNovel.ƒS.Speech.hide();
                    VisualNovel.ƒS.Character.hide(VisualNovel.characters.takeshi);
                    await VisualNovel.ƒS.Character.show(VisualNovel.characters.takeshi, VisualNovel.characters.takeshi.pose.aggresiv, VisualNovel.ƒS.positionPercent(0, 160));
                    VisualNovel.ƒS.update(1);
                    emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ412_2_2_1);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT412_2_2_1);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ413_2_2_1);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT413_2_2_1);
                    await endCalc();
                    break;
                case sceneFourDecision3.diffrentPlan:
                    //Hier Entscheidung 2.2.2
                    VisualNovel.dataForSave.statusTakeshi -= 1;
                    VisualNovel.ƒS.Speech.hide();
                    VisualNovel.ƒS.Character.hide(VisualNovel.characters.takeshi);
                    await VisualNovel.ƒS.Character.show(VisualNovel.characters.takeshi, VisualNovel.characters.takeshi.pose.aggresiv, VisualNovel.ƒS.positionPercent(0, 160));
                    VisualNovel.ƒS.update(1);
                    emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ412_2_2_2);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT413_2_2_2);
                    await endCalc();
                    break;
                case sceneFourDecision3.helpigOthers:
                    //Hier Entscheidung 2.2.3
                    VisualNovel.dataForSave.statusTakeshi += 3;
                    emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ412_2_2_3);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT413_2_2_3);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ413_2_2_3);
                    await endCalc();
                    break;
            }
        }
        async function dialogThree() {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ414_3);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT414_3);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ415_3);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT415_3);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ416_3);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT416_3);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ417_3);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT417_3);
            let dialogueElementS4D4 = await VisualNovel.ƒS.Menu.getInput(sceneFourDecision4, "choicesCssClass");
            switch (dialogueElementS4D4) {
                case sceneFourDecision4.yes:
                    //Hier ENtscheidung 3.1
                    VisualNovel.dataForSave.statusTakeshi -= 2;
                    VisualNovel.ƒS.Speech.hide();
                    VisualNovel.ƒS.Character.hide(VisualNovel.characters.takeshi);
                    await VisualNovel.ƒS.Character.show(VisualNovel.characters.takeshi, VisualNovel.characters.takeshi.pose.aggresiv, VisualNovel.ƒS.positionPercent(0, 160));
                    VisualNovel.ƒS.update(1);
                    emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ416_3_1);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT417_3_1);
                    await endCalc();
                    break;
                case sceneFourDecision4.funny:
                    //Hier Entscheidung 3.2
                    VisualNovel.dataForSave.statusTakeshi += 1;
                    VisualNovel.ƒS.Speech.hide();
                    emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
                    await dialogFour();
                    break;
            }
        }
        async function dialogFour() {
            VisualNovel.ƒS.Character.hideAll();
            VisualNovel.ƒS.Speech.hide();
            await VisualNovel.ƒS.Location.show(VisualNovel.locations.bar);
            await VisualNovel.ƒS.update(VisualNovel.transitions.dramatic.duration, VisualNovel.transitions.dramatic.alpha, VisualNovel.transitions.dramatic.edge);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.takeshi, VisualNovel.characters.takeshi.pose.default, VisualNovel.ƒS.positionPercent(0, 160));
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.serious, VisualNovel.ƒS.positionPercent(80, 100));
            VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ416_3_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT416_3_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ417_3_2);
            VisualNovel.ƒS.Character.hide(VisualNovel.characters.takeshi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.yoshi, VisualNovel.characters.yoshi.pose.default, VisualNovel.ƒS.positionPercent(10, 60));
            VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.yoshi, text.Yoshi.TY401_3_2);
            VisualNovel.ƒS.Character.hide(VisualNovel.characters.jay);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.stressed, VisualNovel.ƒS.positionPercent(80, 100));
            VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ418_3_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.yoshi, text.Yoshi.TY402_3_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ419_3_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.yoshi, text.Yoshi.TY403_3_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ420_3_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT417_3_2);
            VisualNovel.ƒS.Character.hide(VisualNovel.characters.jay);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.jay, VisualNovel.characters.jay.pose.serious, VisualNovel.ƒS.positionPercent(80, 100));
            VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ421_3_2);
            VisualNovel.ƒS.Character.hide(VisualNovel.characters.yoshi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.takeshi, VisualNovel.characters.takeshi.pose.default, VisualNovel.ƒS.positionPercent(0, 160));
            VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT418_3_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ422_3_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT419_3_2);
            let dialogueElementS4D5 = await VisualNovel.ƒS.Menu.getInput(sceneFourDecision5, "choicesCssClass");
            switch (dialogueElementS4D5) {
                case sceneFourDecision5.police:
                    //Hier ENtscheidung 3.2.1
                    VisualNovel.dataForSave.statusTakeshi -= 5;
                    VisualNovel.ƒS.Speech.hide();
                    VisualNovel.ƒS.Character.hide(VisualNovel.characters.takeshi);
                    await VisualNovel.ƒS.Character.show(VisualNovel.characters.takeshi, VisualNovel.characters.takeshi.pose.aggresiv, VisualNovel.ƒS.positionPercent(0, 160));
                    VisualNovel.ƒS.update(1);
                    emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ423_3_2_1);
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT423_3_2_1);
                    await endCalc();
                    break;
                case sceneFourDecision5.questioning:
                    //Hier Entscheidung 3.2.2
                    VisualNovel.dataForSave.statusTakeshi += 3;
                    emotionMeter.value = VisualNovel.dataForSave.statusTakeshi;
                    await dialogFive();
                    break;
            }
        }
        async function dialogFive() {
            await VisualNovel.ƒS.Location.show(VisualNovel.locations.rainyDistrict);
            await VisualNovel.ƒS.update(VisualNovel.transitions.dramatic.duration, VisualNovel.transitions.dramatic.alpha, VisualNovel.transitions.dramatic.edge);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ423_3_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT423_3_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ424_3_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT424_3_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ425_3_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT425_3_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jay, text.Jay.TJ426_3_2_2);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.takeshi, text.Takeshi.TT426_3_2_2);
            await endCalc();
        }
        async function endCalc() {
            if (VisualNovel.getMood(VisualNovel.dataForSave.statusTakeshi) == 2) {
                VisualNovel.dataForSave.savedSouls += 1;
            }
            switch (VisualNovel.getMood(VisualNovel.dataForSave.savedSouls)) {
                case 0:
                    return VisualNovel.EndOne();
                    break;
                case 1:
                    return VisualNovel.EndTwo();
                    break;
                case 2:
                    return VisualNovel.EndThree();
                    break;
            }
        }
    }
    VisualNovel.TakeshisCase = TakeshisCase;
    ;
})(VisualNovel || (VisualNovel = {}));
;
//# sourceMappingURL=Template.js.map