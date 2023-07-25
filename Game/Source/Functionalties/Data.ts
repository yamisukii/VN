namespace VisualNovel {

  // **** DEFINITIONEN ****
  // define transitions
  export let transitions = {
    puzzle: {
      duration: 1.5,
      alpha: "/Template/FreeTransitions/jigsaw_06.jpg",
      edge: 1
    },
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

  export let sound = {
    nightclub: "/Template/Audio/Nightclub.ogg",
    dystopian: "/Template/Audio/Dystopian.ogg"
  };

  export let soundKaIntro = {
    traffic1: "/Template/Audio/Kapitel1/Traffic_1.wav",
    traffic2: "/Template/Audio/Kapitel1/Traffic_2.wav",
    nachdenklich: "/Template/Audio/Kapitel1/Nachdenkliche_Musik.wav",
    dramatic1: "/Template/Audio/Kapitel1/Dramatic_1.wav",
    dramatic2: "/Template/Audio/Kapitel1/Dramatic_2.wav",
    fastPiano: "/Template/Audio/fastPiano.mp3",
    sadPaino: "/Template/Audio/sadPiano.mp3",
  };
  export let soundKaRenji = {
    deppresiv: "/Template/Audio/Kapitel2/depressiv.mp3",
  };
  export let soundKaAyumi = {
    correct: "/Template/Audio/Kapitel3/correct.wav",
    wrong: "/Template/Audio/Kapitel3/wromg.wav",
    water: "/Template/Audio/Kapitel3/water.wav",
    empty: "/Template/Audio/Kapitel3/Empty_Hall2.flac",
  };
  export let soundKaATakeshi = {
    bar: "/Template/Audio/Kapitel4/Bar.wav",
    dark1: "/Template/Audio/Kapitel4/Dark_Athmo_1.wav",
    dark2: "/Template/Audio/Kapitel4/Dark_Athmo_2.wav",

  };

  export let locations = {

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

  export let characters = {
    jay: {
      name: "Jay",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        default: "/Template/Images/Characters/Takeshi/default.png",
        aggresiv: "/Template/Images/Characters/Takeshi/aggresiv.png"
      }
    },
    yoshi: {
      name: "Yoshi",
      origin: ƒS.ORIGIN.CENTERLEFT,
      pose: { default: "/Template/Images/Characters/Yoshi/Default.png" }
    },
    renji: {
      name: "Renji",

      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: { default: "/Template/Images/Characters/Renji/default.png", }
    },
    aika: {
      name: "Aika",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
    },
    ayumi: {
      name: "Ayumi",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        angry: "/Template/Images/Characters/Ayumi/sad.png",
        happy: "/Template/Images/Characters/Ayumi/happy.png",
      }
    }
  }

  export let items: any = {
    ayumi: { //Namen vergeben wir
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
  }
}