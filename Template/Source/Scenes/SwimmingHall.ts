namespace VisualNovel {
  export async function swimmignHall(): ƒS.SceneReturn {
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


    }

    document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = true);
    let emotionMeter: HTMLMeterElement = <HTMLMeterElement>document.getElementById("emotionMeter");

    console.log(dataForSave.statusAyumi);
    ƒS.Speech.hide();
    ƒS.Sound.fade(soundKaAyumi.empty, 0.5, 2);
    ƒS.Sound.fade(soundKaAyumi.water, 0.1, 2, true);
    ƒS.Sound.fade(soundKaIntro.sadPaino, 0.4, 2, true);
    ƒS.Sound.fade(soundKaRenji.deppresiv, 0, 2, true);
    await ƒS.Location.show(locations.swimmingHall);
    await ƒS.update(transitions.water.duration, transitions.water.alpha, transitions.water.edge);
    await ƒS.Character.show(characters.renji, characters.renji.pose.default, ƒS.positionPercent(60, 180));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.renji, text.Renji.TR301);
    await ƒS.Speech.tell(characters.renji, text.Renji.TR302);
    await ƒS.Speech.tell(characters.renji, text.Renji.TR303);
    await ƒS.Speech.tell(characters.renji, text.Renji.TR304);
    ƒS.Speech.hide();
    ƒS.Character.hide(characters.renji);
    ƒS.Sound.fade(soundKaIntro.sadPaino, 0.4, 3, true);
    await ƒS.update();
    ƒS.Inventory.add(items.ayumi);
    ƒS.update();
    ƒS.Text.addClass("novelPageAyumi");
    await ƒS.Text.print("");
    await ƒS.Speech.tell(characters.renji, "Mit 'i' öffnest du dein Inventar. Dort ist auch deine Notiz nochmal");
    await ƒS.Character.show(characters.ayumi, characters.ayumi.pose.angry, ƒS.positionPercent(3, 130));

    document.getElementsByName("moodPoints").forEach(meterStuff => meterStuff.hidden = false);
    document.getElementById("emotionalScala").classList.remove("hide");
    emotionMeter.value = dataForSave.statusAyumi;

    ƒS.update(1);

    await ƒS.Speech.tell(characters.jay, "Oh ich seh Sie. Ich geh mal rüber und quatsch Sie an...");
    await ƒS.Character.show(characters.jay, characters.jay.pose.default, ƒS.positionPercent(80, 100));
    ƒS.update(1);

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

    let dialogueElementS1D1 = await ƒS.Menu.getInput(sceneOneDecision1, "choicesCssClass");

    //#region  let dialogueElementS1D2 = await ƒS.Menu.getInput(sceneOneDecision2, "choicesCssClass");
    //#region let dialogueElementS1D3 = await ƒS.Menu.getInput(sceneOneDecision3, "choicesCssClass");

    switch (dialogueElementS1D1) {

      case sceneOneDecision1.flirting:
        console.log("S1 anbagern");
        dataForSave.statusAyumi -= 2;
        emotionMeter.value = dataForSave.statusAyumi;
        console.log(dataForSave.statusAyumi);
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ301_1);
        await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA301_1);
        await dialogOne();
        break;

      case sceneOneDecision1.intorduction:
        console.log("S1 vorstellen");
        dataForSave.statusAyumi += 1;
        emotionMeter.value = dataForSave.statusAyumi;
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ301_2);
        await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA301_2);
        await dialogOne();
        break;

      case sceneOneDecision1.makingJoke:
        console.log("S1 macht Witz");
        dataForSave.statusAyumi += 2;
        emotionMeter.value = dataForSave.statusAyumi;
        await ƒS.Speech.tell(characters.jay, text.Jay.TJ301_3);
        await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA301_3);
        await dialogOne();
        break;
    }



    async function dialogOne(): Promise<void> {
      console.log(getMood(dataForSave.statusAyumi));
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ302);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA302);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ303);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA303);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ304);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA304);

      let dialogueElementS1D2 = await ƒS.Menu.getInput(sceneOneDecision2, "choicesCssClass");

      switch (dialogueElementS1D2) {
        case sceneOneDecision2.direct:
          dataForSave.statusAyumi -= 1;
          emotionMeter.value = dataForSave.statusAyumi;
          console.log(dataForSave.statusAyumi);
          await ƒS.Speech.tell(characters.jay, text.Jay.TJ305_1);
          await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA305_1);
          await dialog2();
          break;
        case sceneOneDecision2.sensitive:
          console.log("Einfühlsam");
          dataForSave.statusAyumi += 1;
          emotionMeter.value = dataForSave.statusAyumi;
          await ƒS.Speech.tell(characters.jay, text.Jay.TJ305_2);
          await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA305_2);
          await dialog2();
          break;
        case sceneOneDecision2.lying:
          dataForSave.statusAyumi += 2;
          emotionMeter.value = dataForSave.statusAyumi;
          console.log("lügen");
          await dialog3();
          await ƒS.Speech.tell(characters.jay, text.Jay.TJ305_3);
          await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA305_3);
          break;
      }


    }


    async function dialog2(): Promise<void> {
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ306_1);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA306_1);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ307_1);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA307_1);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ308_1);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA308_1);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ309_1);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA309_1);
      await dialog4();

    }

    async function dialog3(): Promise<void> {
      ƒS.Character.hide(characters.ayumi);
      await ƒS.Character.show(characters.ayumi, characters.ayumi.pose.happy, ƒS.positionPercent(3, 130));
      ƒS.update(1);

      await ƒS.Speech.tell(characters.jay, text.Jay.TJ306_2);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA306_2);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ307_2);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA307_2);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ308_2);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA308_2);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ309_2);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA309_2);
      await dialog4();

    }

    async function dialog4(): Promise<void> {
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ310_1);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA310_1);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ311_1);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA311_1);
      dataForSave.nameSwimmingWinner = await ƒS.Speech.getInput();

      if (dataForSave.swimmingWinner.toLocaleLowerCase().includes(dataForSave.nameSwimmingWinner.toLocaleLowerCase())) {
        console.log(dataForSave.nameSwimmingWinner);
        await dialog5();
      } else await dialog6();
    }

    async function dialog5(): Promise<void> {
      dataForSave.statusAyumi += 3;
      emotionMeter.value = dataForSave.statusAyumi;
      await ƒS.update();
      ƒS.Character.hide(characters.ayumi);
      await ƒS.Character.show(characters.ayumi, characters.ayumi.pose.happy, ƒS.positionPercent(3, 130));
      ƒS.update(1);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA312_1);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ313_1);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA314_1);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ314_1);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA315_1);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ315_1);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA316);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ316);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA317);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ317);

      if (getMood(dataForSave.statusAyumi) == 2) {
        dataForSave.savedSouls += 1;
      }
    }

    async function dialog6(): Promise<void> {
      ƒS.Character.hide(characters.ayumi);
      await ƒS.Character.show(characters.ayumi, characters.ayumi.pose.angry, ƒS.positionPercent(3, 130));
      ƒS.update(1);
      await ƒS.Text.print("Es war Yui Ohashi");
      dataForSave.statusAyumi -= 3;
      emotionMeter.value = dataForSave.statusAyumi;
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA312_2);
      await ƒS.Speech.tell(characters.jay, text.Jay.TJ312_2);
      await ƒS.Speech.tell(characters.ayumi, text.Ayumi.TA311_2);

      if (getMood(dataForSave.statusAyumi) == 2) {
        dataForSave.savedSouls += 1;
      }

    }
  };
};

  // ƒS.Sound.fade(sound.dystopian, 2, 7, true);


