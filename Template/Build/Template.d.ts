declare namespace VisualNovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameSwimmingWinner: string;
        swimmingWinner: string;
        savedSouls: number;
        statusAyumi: number;
        statusTakeshi: number;
        revengeIsPicked: boolean;
        emotionalScala: string;
    };
    function getMood(_CharakterMood: number): number;
}
declare namespace VisualNovel {
    let gameMenu: ƒS.Menu;
    let menuIsOpen: boolean;
    let inventory: ƒS.Inventory;
    function showCredits(): void;
    let inGameMenuButtons: {
        save: string;
        load: string;
        close: string;
        credits: string;
        inventory: string;
    };
    function buttonFunctionalities(_option: string): Promise<void>;
    function hndKeyPress(_event: KeyboardEvent): Promise<void>;
    let uiElement: HTMLElement;
}
declare namespace VisualNovel {
    let transitions: {
        water: {
            duration: number;
            alpha: string;
            edge: number;
        };
        thinking: {
            duration: number;
            alpha: string;
            edge: number;
        };
        dramatic: {
            duration: number;
            alpha: string;
            edge: number;
        };
        dayNight: {
            duration: number;
            alpha: string;
            edge: number;
        };
        cloudy: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        nightclub: string;
        dystopian: string;
    };
    let soundKaIntro: {
        traffic1: string;
        traffic2: string;
        nachdenklich: string;
        dramatic1: string;
        dramatic2: string;
        fastPiano: string;
        sadPaino: string;
    };
    let soundKaRenji: {
        deppresiv: string;
    };
    let soundKaAyumi: {
        correct: string;
        wrong: string;
        water: string;
        empty: string;
    };
    let soundKaATakeshi: {
        bar: string;
        dark1: string;
        dark2: string;
    };
    let locations: {
        heaven: {
            name: string;
            background: string;
        };
        endScene1: {
            name: string;
            background: string;
        };
        bar: {
            name: string;
            background: string;
        };
        rainyDistrict: {
            name: string;
            background: string;
        };
        swimmingHall: {
            name: string;
            background: string;
        };
        renjisWorld1: {
            name: string;
            background: string;
        };
        renjisWorld2: {
            name: string;
            background: string;
        };
        memorie1: {
            name: string;
            background: string;
        };
        memorie2: {
            name: string;
            background: string;
        };
        memorie3: {
            name: string;
            background: string;
        };
        fall2: {
            name: string;
            background: string;
        };
        fall1: {
            name: string;
            background: string;
        };
        tokyoBridge: {
            name: string;
            background: string;
        };
        tokyoWalkingHome: {
            name: string;
            background: string;
        };
        purgatory: {
            name: string;
            background: string;
        };
        alleyEv: {
            name: string;
            background: string;
        };
        nightStreets: {
            name: string;
            background: string;
        };
    };
    let characters: {
        jay: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
                serious: string;
                stressed: string;
                crying: string;
                schocked: string;
            };
        };
        takeshi: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
                aggresiv: string;
            };
        };
        yoshi: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        renji: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        aika: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        ayumi: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
            };
        };
    };
    let items: any;
}
declare namespace VisualNovel {
    function Bridge(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function Emotion(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function Empty(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function EndOne(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function EndThree(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function EndTwo(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function Intro(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function RenjisWorld(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function swimmignHall(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function TakeshisCase(): ƒS.SceneReturn;
}
