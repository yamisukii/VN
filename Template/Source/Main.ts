namespace VisualNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  // **** DATEN DIE GESPEICHERT WERDEN SOLLEN ****
  export let dataForSave = {
    nameSwimmingWinner: "",
    swimmingWinner: "Yui Ohashi",


    savedSouls: 0,
    statusAyumi: 4,
    statusTakeshi: 4,
    revengeIsPicked: false,
    //Meter
    emotionalScala: "",
  };

  export function getMood(_CharakterMood: number): number {
    let mood = 0;
    if (_CharakterMood <= 4) {
      mood = 1;
    }
    if (_CharakterMood > 4) {
      mood = 2;
    }
    return mood;

  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    ƒS.Speech.hide()
    document.getElementById("emotionalScala").setAttribute("class", "hide");
    document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = true);
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      // { scene: Intro, name: "First Scene" },
      { scene: Intro, name: "Introduction" },
      { id: "BridgeScene", scene: Bridge, name: "First Meeting" },
      { id: "EmotionScene", scene: Emotion, name: "Get caught by Aikas feeling" },
      { id: "RenjisWorld", scene: RenjisWorld, name: "Jay in Renjis World between Life an Death" },
      { id: "swimmingGirl", scene: swimmignHall, name: "Meet Ayumi at the swimmingHall" },
      { id: "takeshi", scene: TakeshisCase, name: "Meet Takeshi at bar disrtict" },

      { id: "EndOne", scene: EndOne, name: "EndOne" },
      { id: "EndTwo", scene: EndTwo, name: "EndTwo" },
      { id: "EndThree", scene: EndThree, name: "EndThree" },
      { id: "EmptyScene", scene: Empty, name: "Empty" }

      // { scene: HowToMakeChoices, name: 'Choices' },
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }

}