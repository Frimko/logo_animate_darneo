/* eslint-disable */
import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';
import {Howler, Howl} from 'howler';
import FirstRainbow from './FirstRainbow';
import Stars from './Stars';
import MoonRise from './MoonRise';
import {elipceD, elipceR ,elipceR2, S, mountains, horizontLine, moon, lilium} from './resorce.js';
import './index.css';


mojs.isDebug = true;
const PARAMS = {
    COORDINATES_X: {
        str1: {
            'D': '-530',
            'A': '-414',
            'R': ['-345', '-295'],
            'N': ['-255', '-195'],
            'E': '-155',
            'O': '-50',
        },
        str2: {
            'S': '86',
            'T': '166',
            'U': ['225', '273'],
            'D': '318',
            'I': '419',
            'O': '501',
        }
    },
    startPointY:   -100,
    EndPointY:     55,
    parentTag:     '#animate_logo',
    COLORS:        ['#F9DD5E', '#FC2D79', '#11CDC5'],
    STARS_COLOR:['#ECCAFD', '#B89AC9', '#FFEAD7', '#FDF47E', '#FDFD40']
};
mojs.addShape('elipceR2', elipceR2);
mojs.addShape('elipceD', elipceD);
mojs.addShape('elipceR', elipceR);
mojs.addShape('S', S);
mojs.addShape('mountains', mountains);
mojs.addShape('horizontLine', horizontLine);
mojs.addShape('moon', moon);
mojs.addShape('lilium', lilium);

let TimeLineFR = new FirstRainbow({
    PARAMS:PARAMS,
    defaultParamsForBurstChild: {
        shape:       'line',
        stroke:      PARAMS.COLORS,
        radius:      60,
        strokeWidth: 8,
        isForce3d:   true,
    },
    defaultParamsForBurst:      {
        parent:         PARAMS.parentTag,
        y:              {[PARAMS.startPointY]: PARAMS.EndPointY},
        count:          3,
        degree:         7,
        radius:         {250: 0},
        isRefreshState: false,
        isShowEnd:      false
    },
    timeLine(o) {
        let that = o;
        return [
            that.firstD(),

            ...that.rainbow(200, 500, 'A', 'str1'),
            ...that.rainbow(200, 850, 'R', 'str1', 0),
            ...that.rainbow(200, 850, 'R', 'str1', 1),
            ...that.rainbow(200, 1400, 'N', 'str1', 0),
            ...that.rainbow(200, 1400, 'N', 'str1', 1),
            ...that.rainbow(200, 2000, 'E', 'str1'),
            ...that.rainbow(200, 2500, 'O', 'str1'),

            ...that.rainbow(200, 3200, 'S', 'str2'),
            ...that.rainbow(200, 3700, 'T', 'str2'),
            ...that.rainbow(200, 4300, 'U', 'str2', 0),
            ...that.rainbow(200, 4300, 'U', 'str2', 1),
            ...that.rainbow(200, 5000, 'D', 'str2'),
            ...that.rainbow(200, 5350, 'I', 'str2'),
            ...that.rainbow(200, 5600, 'O', 'str2'),

            ...that.rainbow(200, 6150, 'O', 'str1'),
            ...that.rainbow(200, 6150, 'D', 'str2'),

            ...that.rainbow(200, 6800, 'R', 'str1', 0),
            ...that.rainbow(200, 6800, 'T', 'str2'),

            ...that.rainbow(200, 7400, 'O', 'str1'),
            ...that.rainbow(200, 7400, 'S', 'str2'),

            ...that.rainbow(200, 7900, 'D', 'str1'),
            ...that.rainbow(200, 7900, 'O', 'str2'),

            ...that.rainbow(200, 8400, 'R', 'str1', 0),
            ...that.rainbow(200, 8400, 'D', 'str2'),
        ]
    }
});
let TimeLineMR = new MoonRise({
    PARAMS:PARAMS,
    timeLine(o) {
        let that = o;
        that.curentMoonItems = [
            that.moon(5000, 20000),
            that.mountains(1500, 18500),
            that.horizonLine(1600, 18500),
        ];
        return that.curentMoonItems;
    }
});
let TimeLineStars = new Stars({
    PARAMS:PARAMS,
    timeLine (o) {
        let that = o;
        that.curentStars = [
            ...that.star(200, 17050, 5),
            ...that.star(200, 17300, 15),
            ...that.star(200, 17600, 25),
            ...that.star(200, 17900, 30),
            ...that.star(200, 18200, 35),
        ];
        that.shineStars(10, 21200, that.curentStars);
        that.shineStars(10, 21600, that.curentStars);
        that.shineStars(10, 21900, that.curentStars);

        that.shineStars(10, 22100, that.curentStars);
        that.shineStars(10, 22400, that.curentStars);
        that.shineStars(10, 22700, that.curentStars);
        that.shineStars(10, 22700, that.curentStars);

        that.shineStars(10, 23300, that.curentStars, 20);
        that.shineStars(10, 23900, that.curentStars, 15);
        that.shineStars(10, 24500, that.curentStars, 5);

        return that.curentStars;
    }
});
var addOverflow = function () {
    if ($('.shadow').length == 0) {
        $('.logo').after($('.logo').clone().addClass('shadow'));
        $('.logo').after($('<div>').addClass('overflow_logo'));
        $('.shadow, .overflow_logo').animate({
            opacity: .9
        }, 700);
    }
};
var removeOverflow = function () {
    $('.shadow , .overflow_logo').animate({
        opacity: 0
    }, 700, function () {
        $(this).remove();
    })
};
function getSecondsToday() {
    var now = new Date();

// создать объект из текущей даты, без часов-минут-секунд
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    var diff = now - today; // разница в миллисекундах
    console.clear();
    return Math.floor(diff); // перевести в секунды
}

var sound = new Howl({
    src: ['din-dong.mp3']
});
const timeline = new mojs.Timeline({
    delay:      1000,
    onStart:    function () {
        console.log('start timeline');
        //sound.stop();
    },
    onComplete: function () {
        console.log('end timeline');
        //Bamboo.hidePlants();
        //Stars.hideStars();
        //MoonRise.hideMoonRise();
        //removeOverflow();
    }
});

var Bamboo = {
    bubble:   function (duration, delay, coords) {
        const CIRCLE_RADIUS = 15;
        const RADIUS = 15;
        const circle = function (addDuration) {
            return new mojs.Shape({
                parent:      PARAMS.parentTag,
                stroke:      {'#E5214A': '#37e3f5'},
                strokeWidth: {3: 0},
                fill:        'none',
                scale:       {0: 1},
                radius:      CIRCLE_RADIUS,
                duration:    +duration + 400 + (addDuration ? addDuration : 0),
                delay:       delay,
                easing:      'cubic.out'

            });
        };
        const burst = new mojs.Burst({
            parent:   PARAMS.parentTag,
            radius:   {4: RADIUS},
            angle:    45,
            count:    10,
            timeline: {delay: +delay + 100},
            children: {
                radius:      1,
                fill:        [
                    {'#9EC9F5': '#9ED8C6'},
                    {'#91D3F7': '#9AE4CF'},

                    {'#DC93CF': '#E3D36B'},
                    {'#CF8EEF': '#CBEB98'},

                    {'#87E9C6': '#1FCC93'},
                    {'#A7ECD0': '#9AE4CF'},

                    {'#87E9C6': '#A635D9'},
                    {'#D58EB3': '#E0B6F5'},

                    {'#F48BA2': '#CF8EEF'},
                    {'#91D3F7': '#A635D9'},

                    {'#CF8EEF': '#CBEB98'},
                    {'#87E9C6': '#A635D9'},
                ],
                scale:       {1: 0, easing: 'quad.in'},
                pathScale:   [.8, null],
                degreeShift: [13, null],
                duration:    [+duration + 400, 700],
                easing:      'quint.out',
            }
        });
        return [
            burst.tune(coords),
            circle().tune(coords),
            circle(400).tune(coords),
            circle(800).tune(coords),
        ];
    },
    lilium:   function (duration, delay, coords) {
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            timeline: {
                delay: +delay + 100
            },
            children: {
                className:        'lilium',
                shape:            'lilium',
                stroke:           PARAMS.COLORS,
                scale:            1,
                //fill:             '#E0B6F5',
                radius:           100,
                strokeWidth:      1,
                duration:         [+duration + 400, 700],
                strokeDasharray:  '20%',
                strokeDashoffset: {
                    '100%': '150%'
                }
            }
        });
        return [
            leftLine.tune(coords),
        ];
    },
    horLine:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            y:        PARAMS.EndPointY,
            children: {
                className:        'hor_line',
                shape:            'line',
                stroke:           ['#11CDC5', '#FC2D79', '#F9DD5E'],
                scale:            1,
                y:                PARAMS.EndPointY,
                radius:           600,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        });

        return [
            leftLine,
        ]
    },
    horLine2: function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            y:        PARAMS.EndPointY - 90,
            children: {
                className:        'hor_line',
                shape:            'line',
                stroke:           ['#11CDC5', '#FC2D79', '#F9DD5E'],
                scale:            1,
                y:                PARAMS.EndPointY - 90,
                radius:           600,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        });

        return [
            leftLine,
        ]
    },
    plant_D:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_d_1',
                x:                PARAMS.COORDINATES_X.str1['D'],
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           43,
                radiusY:          250,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: PARAMS.COORDINATES_X.str1['D'], y: PARAMS.EndPointY - 45});

        const equal = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            x:        +PARAMS.COORDINATES_X.str1.D + 34,
            y:        3,
            degree:   0,
            children: {
                className:        'label_d_2',
                origin:           '50% 100%',
                angle:            -90,
                shape:            'elipceD',
                fill:             'none',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radiusY:          32.5,
                radiusX:          40,
                rotate:           0,
                strokeWidth:      6,
                duration:         +duration + 1600,
                delay:            delayModify(200),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        });
        $(equal.el.children).css('height', '180');
        return [
            leftLine,
            ...this.bubble(duration, +delay + 600, {x: PARAMS.COORDINATES_X.str1['D'], y: PARAMS.EndPointY - 85}),
            equal,
        ]
    },
    plant_A:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   0,
            degree:   0,
            angle:    0,
            children: {
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           45,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({
            x: PARAMS.COORDINATES_X.str1['A'],
            y: PARAMS.EndPointY - 45
        })
            .then({
                x:     PARAMS.COORDINATES_X.str1['A'] - 16,
                angle: 25,
                y:     PARAMS.EndPointY - 44
            });

        const rightLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   0,
            degree:   0,
            angle:    0,
            children: {
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           45,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({
            x: +PARAMS.COORDINATES_X.str1['A'],
            y: PARAMS.EndPointY - 45
        })
            .then({
                x:     +PARAMS.COORDINATES_X.str1['A'] + 16,
                angle: -25,
                y:     PARAMS.EndPointY - 44
            });

        const horLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   0,
            degree:   0,
            angle:    90,
            x:        PARAMS.COORDINATES_X.str1['A'],
            y:        PARAMS.EndPointY - 20,
            children: {
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           0,
                radiusX:          0,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(200),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).then({
            children: {
                radiusX: {0: 33}
            }
        });
        return [
            leftLine,
            rightLine,
            horLine,
            ...this.bubble(duration, +delay + 600, {x: PARAMS.COORDINATES_X.str1['A'], y: PARAMS.EndPointY - 20})
        ]
    },
    plant_R:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_r_1',
                x:                PARAMS.COORDINATES_X.str1['R'][0],
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           43,
                radiusY:          250,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: PARAMS.COORDINATES_X.str1['R'][0], y: PARAMS.EndPointY - 45});
        const equal = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            x:        +PARAMS.COORDINATES_X.str1['R'][0] + 34,
            y:        3,
            degree:   0,
            children: {
                className:        'label_r_2',
                angle:            -90,
                shape:            'elipceR',
                fill:             'none',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radiusY:          32,
                radiusX:          40,
                rotate:           0,
                strokeWidth:      6,
                duration:         +duration + 1600,
                delay:            delayModify(+duration),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '150%': '50%'
                }
            }
        });
        const equal2 = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            x:        +PARAMS.COORDINATES_X.str1['R'][0] + 34,
            y:        3,
            degree:   0,
            children: {
                className:        'label_r_3',
                origin:           '0% 100%',
                angle:            -90,
                shape:            'elipceR2',
                fill:             'none',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radiusY:          32,
                radiusX:          40,
                rotate:           0,
                strokeWidth:      6,
                duration:         +duration + 400,
                delay:            delayModify(+duration),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        });
        const rightLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -30,
            children: {
                className:        'label_r_4',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           20,
                radiusY:          20,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: +PARAMS.COORDINATES_X.str1['R'][0] + 40, y: PARAMS.EndPointY - 19});

        return [
            leftLine,
            equal,
            equal2,
            rightLine,
            ...this.bubble(duration, +delay + +duration, {x: +PARAMS.COORDINATES_X.str1['R'][0] + 31, y: PARAMS.EndPointY - 37})
        ]
    },
    plant_N:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_1',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           43,
                radiusY:          250,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: PARAMS.COORDINATES_X.str1['N'][0], y: PARAMS.EndPointY - 45});
        const rightLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_2',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           43,
                radiusY:          250,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: +PARAMS.COORDINATES_X.str1['N'][1], y: PARAMS.EndPointY - 45});
        const leftLineToRight = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    140,
            children: {
                className:        'label_n_1_1',
                rx:               0,
                ry:               0,
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           27,
                strokeWidth:      6,
                duration:         +duration + 600,
                delay:            delayModify(+duration),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: +PARAMS.COORDINATES_X.str1['N'][0] + 10, y: +PARAMS.EndPointY - 70});
        const rightLineToLeft = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -38,
            children: {
                className:        'label_n_2_1',
                rx:               0,
                ry:               0,
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           27,
                strokeWidth:      6,
                duration:         +duration + 600,
                delay:            delayModify(+duration),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: +PARAMS.COORDINATES_X.str1['N'][1] - 13, y: +PARAMS.EndPointY - 24});

        return [
            leftLine,
            rightLine,
            leftLineToRight,
            ...this.bubble(duration, +delay + 700, {x: +PARAMS.COORDINATES_X.str1['N'][0], y: PARAMS.EndPointY - 83}),
            ...this.bubble(duration, +delay + 700, {x: +PARAMS.COORDINATES_X.str1['N'][1], y: PARAMS.EndPointY - 7}),
            rightLineToLeft
        ]
    },
    plant_E:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (0 + Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_e_1',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           43,
                radiusY:          250,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: PARAMS.COORDINATES_X.str1['E'], y: PARAMS.EndPointY - 45});

        const horLineTop = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            children: {
                className:        'label_e_2',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           20,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(+duration + 600),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '200%'}
            }
        }).tune({x: +PARAMS.COORDINATES_X.str1['E'] + 15, y: PARAMS.EndPointY - 80})
            .then({
                children: {
                    radius: 25,
                }
            });

        const horLineCenter = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            children: {
                className:        'label_e_3',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           17,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(+duration + 200),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: +PARAMS.COORDINATES_X.str1['E'] + 15, y: PARAMS.EndPointY - 45})
            .then({
                x:        +PARAMS.COORDINATES_X.str1['E'] + 13,
                children: {
                    radius: 24,
                }
            });

        const horLineBottom = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            children: {
                className:        'label_e_4',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           20,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(+duration),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: +PARAMS.COORDINATES_X.str1['E'] + 15, y: PARAMS.EndPointY - 10})
            .then({
                children: {
                    radius: 25,
                }
            });

        return [
            leftLine,
            ...this.bubble(duration, +delay + 600, {x: +PARAMS.COORDINATES_X.str1['E'], y: PARAMS.EndPointY - 80}),
            ...this.bubble(duration, +delay + 200, {x: +PARAMS.COORDINATES_X.str1['E'], y: PARAMS.EndPointY - 45}),
            ...this.bubble(duration, +delay + 100, {x: +PARAMS.COORDINATES_X.str1['E'], y: PARAMS.EndPointY - 10}),
            horLineTop,
            horLineBottom,
            horLineCenter,
        ]
    },
    plant_O:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const rootLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_o',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           9,
                strokeWidth:      6,
                duration:         +duration + 100,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: PARAMS.COORDINATES_X.str1['O'], y: PARAMS.EndPointY - 10});
        const rightLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            fill:     'none',
            children: {
                className:        'label_o_1',
                shape:            'circle',
                stroke:           PARAMS.COLORS,
                fill:             'none',
                scale:            1,
                radius:           40,
                //radiusY:          250,
                strokeWidth:      6,
                duration:         +duration + 600,
                delay:            delayModify(600),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '150%'}
            }
        }).tune({x: PARAMS.COORDINATES_X.str1['O'], y: PARAMS.EndPointY - 45});
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            //angle:180,
            fill:     'none',
            children: {
                className:        'label_o_2',
                shape:            'circle',
                stroke:           PARAMS.COLORS,
                fill:             'none',
                scale:            1,
                radius:           40,
                strokeWidth:      6,
                duration:         +duration + 600,
                delay:            delayModify(600),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '50%'}
            }
        }).tune({x: +PARAMS.COORDINATES_X.str1['O'], y: PARAMS.EndPointY - 45});
        const innerRightLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            fill:     'none',
            children: {
                className:        'label_o_1',
                shape:            'circle',
                stroke:           PARAMS.COLORS,
                fill:             'none',
                scale:            1,
                radius:           30,
                //radiusY:          250,
                strokeWidth:      6,
                duration:         +duration + 1000,
                delay:            delayModify(1000),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '140%'}
            }
        }).tune({x: PARAMS.COORDINATES_X.str1['O'], y: PARAMS.EndPointY - 45});

        const innerLeftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            //angle:180,
            fill:     'none',
            children: {
                className:        'label_o_2',
                shape:            'circle',
                stroke:           PARAMS.COLORS,
                fill:             'none',
                scale:            1,
                radius:           30,
                strokeWidth:      6,
                duration:         +duration + 1000,
                delay:            delayModify(1000),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '60%'}
            }
        }).tune({x: +PARAMS.COORDINATES_X.str1['O'], y: PARAMS.EndPointY - 45});
        return [
            rootLine,
            leftLine,
            rightLine,
            innerRightLine,
            innerLeftLine,
            ...this.bubble(duration, +delay + 400, {x: +PARAMS.COORDINATES_X.str1['O'], y: PARAMS.EndPointY - 5}),
            ...this.bubble(duration, +delay + 1000, {x: +PARAMS.COORDINATES_X.str1['O'], y: PARAMS.EndPointY - 15}),
        ]
    },

    plant_S:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const rootLine1 = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_s',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           20,
                strokeWidth:      2,
                duration:         +duration + 100,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: PARAMS.COORDINATES_X.str2['S'] - 30, y: PARAMS.EndPointY - 10});
        const rootLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -90,
            children: {
                className: 'label_s',
                shape:     'line',
                stroke:    PARAMS.COLORS,
                scale:     1,

                strokeWidth:      2,
                duration:         +duration + 100,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: PARAMS.COORDINATES_X.str2['S'], y: PARAMS.EndPointY, radius: 20,});
        const sLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -90,
            fill:     'none',
            children: {
                className:        'label_s_1',
                shape:            'S',
                stroke:           PARAMS.COLORS,
                fill:             'none',
                scale:            1,
                radius:           40,
                //radiusY:          250,
                strokeWidth:      2,
                duration:         +duration + 600,
                delay:            delayModify(600),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '200%'}
            }
        }).tune({x: +PARAMS.COORDINATES_X.str2['S'] + 10, y: PARAMS.EndPointY - 45});
        const sLine2 = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -90,
            fill:     'none',
            children: {
                className:        'label_s_1',
                shape:            'S',
                stroke:           PARAMS.COLORS,
                fill:             'none',
                scale:            1,
                radius:           40,
                //radiusY:          250,
                strokeWidth:      2,
                duration:         +duration + 600,
                delay:            delayModify(600),
                strokeDasharray:  '100%',
                strokeDashoffset: {'150%': '200%'}
            }
        }).tune({x: +PARAMS.COORDINATES_X.str2['S'] + 10, y: PARAMS.EndPointY - 45});
        return [
            rootLine1,
            rootLine,
            sLine,
            sLine2,
        ]
    },
    plant_T:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_1',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           43,
                radiusY:          250,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: PARAMS.COORDINATES_X.str2['T'], y: PARAMS.EndPointY - 45});
        const rightLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_2',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           43,
                radiusY:          250,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: +PARAMS.COORDINATES_X.str2['T'], y: PARAMS.EndPointY - 45});
        const leftLineToRight = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    140,
            children: {
                className:        'label_n_1_1',
                rx:               0,
                ry:               0,
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           27,
                strokeWidth:      6,
                duration:         +duration + 600,
                delay:            delayModify(+duration),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: +PARAMS.COORDINATES_X.str2['T'] + 10, y: +PARAMS.EndPointY - 70});
        const rightLineToLeft = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -38,
            children: {
                className:        'label_n_2_1',
                rx:               0,
                ry:               0,
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           27,
                strokeWidth:      6,
                duration:         +duration + 600,
                delay:            delayModify(+duration),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: +PARAMS.COORDINATES_X.str2['T'] - 13, y: +PARAMS.EndPointY - 24});

        return [
            leftLine,
            rightLine,
            leftLineToRight,
            ...this.bubble(duration, +delay + 700, {x: +PARAMS.COORDINATES_X.str2['T'], y: PARAMS.EndPointY - 83}),
            ...this.bubble(duration, +delay + 700, {x: +PARAMS.COORDINATES_X.str2['T'], y: PARAMS.EndPointY - 7}),
            rightLineToLeft
        ]
    },
    plant_U:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_1',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           43,
                radiusY:          250,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: PARAMS.COORDINATES_X.str2['U'][0], y: PARAMS.EndPointY - 45});
        const rightLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_2',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           43,
                radiusY:          250,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: +PARAMS.COORDINATES_X.str2['U'][1], y: PARAMS.EndPointY - 45});
        return [
            leftLine,
            rightLine,
            ...this.bubble(duration, +delay + 700, {x: +PARAMS.COORDINATES_X.str2['U'][0], y: PARAMS.EndPointY - 83}),
            ...this.bubble(duration, +delay + 700, {x: +PARAMS.COORDINATES_X.str2['U'][1], y: PARAMS.EndPointY - 7}),
        ]
    },
    plant_D2: function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_d_1',
                x:                PARAMS.COORDINATES_X.str2['D'],
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           43,
                radiusY:          250,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: PARAMS.COORDINATES_X.str2['D'], y: PARAMS.EndPointY - 45});

        const equal = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            x:        +PARAMS.COORDINATES_X.str2.D + 34,
            y:        3,
            degree:   0,
            children: {
                className:        'label_d_2',
                origin:           '50% 100%',
                angle:            -90,
                shape:            'elipceD',
                fill:             'none',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radiusY:          32.5,
                radiusX:          40,
                rotate:           0,
                strokeWidth:      6,
                duration:         +duration + 1600,
                delay:            delayModify(200),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        });
        $(equal.el.children).css('height', '180');
        return [
            leftLine,
            ...this.bubble(duration, +delay + 600, {x: PARAMS.COORDINATES_X.str2['D'], y: PARAMS.EndPointY - 85}),
            equal,
        ]
    },
    plant_I:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_1',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           43,
                radiusY:          250,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: PARAMS.COORDINATES_X.str2['I'], y: PARAMS.EndPointY - 45});

        return [
            leftLine,
            ...this.bubble(duration, +delay + 700, {x: +PARAMS.COORDINATES_X.str2['I'], y: PARAMS.EndPointY - 83}),
        ]
    },
    plant_O2: function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const rootLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_o',
                shape:            'line',
                stroke:           PARAMS.COLORS,
                scale:            1,
                radius:           9,
                strokeWidth:      6,
                duration:         +duration + 100,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: PARAMS.COORDINATES_X.str2['O'], y: PARAMS.EndPointY - 10});
        const rightLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            fill:     'none',
            children: {
                className:        'label_o_1',
                shape:            'circle',
                stroke:           PARAMS.COLORS,
                fill:             'none',
                scale:            1,
                radius:           40,
                //radiusY:          250,
                strokeWidth:      6,
                duration:         +duration + 600,
                delay:            delayModify(600),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '150%'}
            }
        }).tune({x: PARAMS.COORDINATES_X.str2['O'], y: PARAMS.EndPointY - 45});
        const leftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            //angle:180,
            fill:     'none',
            children: {
                className:        'label_o_2',
                shape:            'circle',
                stroke:           PARAMS.COLORS,
                fill:             'none',
                scale:            1,
                radius:           40,
                strokeWidth:      6,
                duration:         +duration + 600,
                delay:            delayModify(600),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '50%'}
            }
        }).tune({x: +PARAMS.COORDINATES_X.str2['O'], y: PARAMS.EndPointY - 45});
        const innerRightLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            fill:     'none',
            children: {
                className:        'label_o_1',
                shape:            'circle',
                stroke:           PARAMS.COLORS,
                fill:             'none',
                scale:            1,
                radius:           30,
                //radiusY:          250,
                strokeWidth:      6,
                duration:         +duration + 1000,
                delay:            delayModify(1000),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '140%'}
            }
        }).tune({x: PARAMS.COORDINATES_X.str2['O'], y: PARAMS.EndPointY - 45});

        const innerLeftLine = new mojs.Burst({
            parent:   PARAMS.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            //angle:180,
            fill:     'none',
            children: {
                className:        'label_o_2',
                shape:            'circle',
                stroke:           PARAMS.COLORS,
                fill:             'none',
                scale:            1,
                radius:           30,
                strokeWidth:      6,
                duration:         +duration + 1000,
                delay:            delayModify(1000),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '60%'}
            }
        }).tune({x: +PARAMS.COORDINATES_X.str2['O'], y: PARAMS.EndPointY - 45});
        return [
            rootLine,
            leftLine,
            rightLine,
            innerRightLine,
            innerLeftLine,
            ...this.bubble(duration, +delay + 400, {x: +PARAMS.COORDINATES_X.str2['O'], y: PARAMS.EndPointY - 5}),
            ...this.bubble(duration, +delay + 1000, {x: +PARAMS.COORDINATES_X.str2['O'], y: PARAMS.EndPointY - 15}),
        ]
    },

    hidePlants:  function () {
        if (this.curentPlants) {
            let curentPlants = this.curentPlants;
            curentPlants.forEach(function (obj) {
                $(obj.el.children).animate({
                    opacity: 0
                }, 1000);
            })
        }
    },
    getTimeLine: function () {
        //TODO рандомное перемешивание таймеров роста букв

        this.curentPlants = [
            //...this.horLine(800, 10111),
            //...this.horLine2(800, 10111),
            ...this.plant_D(800, 10111),
            ...this.plant_A(800, 10400),
            ...this.plant_R(800, 10800),
            ...this.plant_N(800, 11000),
            ...this.plant_E(800, 11200),
            ...this.plant_O(800, 11600),

            ...this.plant_S(800, 12000),
            ...this.plant_T(800, 12400),
            ...this.plant_U(800, 12800),
            ...this.plant_D2(800, 13200),
            ...this.plant_I(800, 13600),
            ...this.plant_O2(800, 14300),
        ];
        return this.curentPlants;

    },

};

timeline.add(
    ...TimeLineStars,
    ...TimeLineMR,
    ...TimeLineFR,
    ...Bamboo.getTimeLine(),
    //FirstRainbow.rainbow(200, 34077, 'A', 'str1'),
);
//timeline.add(FirstRainbow.getTimeLine());

var playerPanel = new MojsPlayer({
    add:         timeline,
    isPlaying:   false,
    isSaveState: false,
});

$(playerPanel.stopButton.el).click(function () {
    sound.stop();
    //removeOverflow();
    console.log('stopPlayEventButton');
});
window.timeline = timeline;
window.sound = sound;
$('.play').on('click', function () {
    let time = $('.time input').val();
    console.log('play');
    timeline.reset();
    sound.stop();

    addOverflow();
    time = Number(time);
    //17000
    console.log(time);
    if (time > 0) {
        sound = new Howl({
            src:    ['din-dong.mp3'],
            format: ['mp3'],
            sprite: {
                start: [time, time + 18000],
            }
        });
        sound.play('start');
        timeline.play(time + 1000);
        setTimeout(() => {
            timeline.stop();
            timeline.reset();
            sound.stop();
            console.log('stop timer');
        }, 18000);
    } else {
        sound.play();
        timeline.play(1000);
    }
});
$('.stop').on('click', function () {
    sound.stop();
    console.log('stop');
    timeline.stop();
    timeline.reset();
    removeOverflow();
//timeline.reset();
});


/*var timeProgress = 4800;
 sound = new Howl({
 src: ['din-dong.mp3'],
 format: ['mp3'],
 sprite: {
 start1: [0, 4000],
 start: [timeProgress, +timeProgress+4000],
 }
 });
 sound.play('start');
 timeline.play(+timeProgress);*/


addOverflow();
/*const burstRainbowEnd = new mojs.Burst({
 ...params,
 radius:   { 0: 300 },
 count:    10,
 repeat:   77,
 duration: 1500,
 }).tune({ x: point.left, y: point.top }).play();*/
