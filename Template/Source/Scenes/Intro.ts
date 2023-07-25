namespace VisualNovel {
  export async function Intro(): ƒS.SceneReturn {
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
    ƒS.Speech.hide();
    console.log()
    // ƒS.Text.print("Mit M öffnest du das Menü");
    ƒS.Sound.play(soundKaIntro.traffic2, 0.3, true);
    ƒS.Sound.fade(soundKaIntro.nachdenklich, 0.5, 7, true);
    await ƒS.Location.show(locations.tokyoWalkingHome);
    //await ƒS.update();
    await ƒS.update(transitions.dayNight.duration, transitions.dayNight.alpha, transitions.dayNight.edge);
    await ƒS.Character.show(characters.jay, characters.jay.pose.default, ƒS.positionPercent(80, 100));
    await ƒS.update(1);
    // await ƒS.Character.show(characters.jay, characters.jay.pose.happy, ƒS.positionPercent(170, 10));
    ƒS.Character.hide(characters.jay);
    // ƒS.Character.hideAll();
    await ƒS.Speech.tell(characters.jay, text.Jay.TJ000);
    await ƒS.Speech.tell(characters.jay, text.Jay.TJ001);
    await ƒS.Speech.tell(characters.jay, text.Jay.TJ002);
    await ƒS.Speech.tell(characters.jay, text.Jay.TJ003);
    await ƒS.Speech.tell(characters.jay, text.Jay.TJ004);
    await ƒS.Speech.tell(characters.jay, text.Jay.TJ005);
    ƒS.Speech.hide();

  }
}   