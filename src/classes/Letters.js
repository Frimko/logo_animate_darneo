/**
 * Created by frimko on 28.01.2017.
 */
import mojs from 'mo-js';

class Letters {

    constructor(data) {
        this.params = data.PARAMS;
        return data.timeLine(this);
    }

    bubble(duration, delay, coords) {
        const CIRCLE_RADIUS = 15;
        const RADIUS = 15;
        const circle = (addDuration) => {
            return new mojs.Shape({
                parent:      this.params.parentTag,
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
            parent:   this.params.parentTag,
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
    }

    lilium(duration, delay, coords) {
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            timeline: {
                delay: +delay + 100
            },
            children: {
                className:        'lilium',
                shape:            'lilium',
                stroke:           this.params.COLORS,
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
    }

    horLine(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            y:        this.params.EndPointY,
            children: {
                className:        'hor_line',
                shape:            'line',
                stroke:           ['#11CDC5', '#FC2D79', '#F9DD5E'],
                scale:            1,
                y:                this.params.EndPointY,
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
    }

    horLine2(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            y:        this.params.EndPointY - 90,
            children: {
                className:        'hor_line',
                shape:            'line',
                stroke:           ['#11CDC5', '#FC2D79', '#F9DD5E'],
                scale:            1,
                y:                this.params.EndPointY - 90,
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
    }

    plant_D(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_d_1',
                x:                this.params.COORDINATES_X.str1['D'],
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str1['D'], y: this.params.EndPointY - 45});

        const equal = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            x:        +this.params.COORDINATES_X.str1.D + 34,
            y:        3,
            degree:   0,
            children: {
                className:        'label_d_2',
                origin:           '50% 100%',
                angle:            -90,
                shape:            'elipceD',
                fill:             'none',
                stroke:           this.params.COLORS,
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

        for (let el of equal.el.children) {
            el.style['height'] = '180px';
        }
        return [
            leftLine,
            ...this.bubble(duration, +delay + 600, {
                x: this.params.COORDINATES_X.str1['D'],
                y: this.params.EndPointY - 85
            }),
            equal,
        ]
    }

    plant_A(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   0,
            degree:   0,
            angle:    0,
            children: {
                shape:            'line',
                stroke:           this.params.COLORS,
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
            x: this.params.COORDINATES_X.str1['A'],
            y: this.params.EndPointY - 45
        })
            .then({
                x:     this.params.COORDINATES_X.str1['A'] - 16,
                angle: 25,
                y:     this.params.EndPointY - 44
            });

        const rightLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   0,
            degree:   0,
            angle:    0,
            children: {
                shape:            'line',
                stroke:           this.params.COLORS,
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
            x: +this.params.COORDINATES_X.str1['A'],
            y: this.params.EndPointY - 45
        })
            .then({
                x:     +this.params.COORDINATES_X.str1['A'] + 16,
                angle: -25,
                y:     this.params.EndPointY - 44
            });

        const horLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   0,
            degree:   0,
            angle:    90,
            x:        this.params.COORDINATES_X.str1['A'],
            y:        this.params.EndPointY - 20,
            children: {
                shape:            'line',
                stroke:           this.params.COLORS,
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
            ...this.bubble(duration, +delay + 600, {
                x: this.params.COORDINATES_X.str1['A'],
                y: this.params.EndPointY - 20
            })
        ]
    }

    plant_R(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_r_1',
                x:                this.params.COORDINATES_X.str1['R'][0],
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str1['R'][0], y: this.params.EndPointY - 45});
        const equal = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            x:        +this.params.COORDINATES_X.str1['R'][0] + 34,
            y:        3,
            degree:   0,
            children: {
                className:        'label_r_2',
                angle:            -90,
                shape:            'elipceR',
                fill:             'none',
                stroke:           this.params.COLORS,
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
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            x:        +this.params.COORDINATES_X.str1['R'][0] + 34,
            y:        3,
            degree:   0,
            children: {
                className:        'label_r_3',
                origin:           '0% 100%',
                angle:            -90,
                shape:            'elipceR2',
                fill:             'none',
                stroke:           this.params.COLORS,
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
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -30,
            children: {
                className:        'label_r_4',
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: +this.params.COORDINATES_X.str1['R'][0] + 40, y: this.params.EndPointY - 19});

        return [
            leftLine,
            equal,
            equal2,
            rightLine,
            ...this.bubble(duration, +delay + +duration, {
                x: +this.params.COORDINATES_X.str1['R'][0] + 31,
                y: this.params.EndPointY - 37
            })
        ]
    }

    plant_N(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_1',
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str1['N'][0], y: this.params.EndPointY - 45});
        const rightLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_2',
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: +this.params.COORDINATES_X.str1['N'][1], y: this.params.EndPointY - 45});
        const leftLineToRight = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    140,
            children: {
                className:        'label_n_1_1',
                rx:               0,
                ry:               0,
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: +this.params.COORDINATES_X.str1['N'][0] + 10, y: +this.params.EndPointY - 70});
        const rightLineToLeft = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -38,
            children: {
                className:        'label_n_2_1',
                rx:               0,
                ry:               0,
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: +this.params.COORDINATES_X.str1['N'][1] - 13, y: +this.params.EndPointY - 24});

        return [
            leftLine,
            rightLine,
            leftLineToRight,
            ...this.bubble(duration, +delay + 700, {
                x: +this.params.COORDINATES_X.str1['N'][0],
                y: this.params.EndPointY - 83
            }),
            ...this.bubble(duration, +delay + 700, {
                x: +this.params.COORDINATES_X.str1['N'][1],
                y: this.params.EndPointY - 7
            }),
            rightLineToLeft
        ]
    }

    plant_E(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_e_1',
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str1['E'], y: this.params.EndPointY - 45});

        const horLineTop = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            timeline: {
                delay: 600
            },
            children: {
                className:        'label_e_2',
                shape:            'line',
                stroke:           this.params.COLORS,
                scale:            1,
                radius:           20,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '200%'}
            }
        }).tune({x: +this.params.COORDINATES_X.str1['E'] + 15, y: this.params.EndPointY - 80})
            .then({
                children: {
                    radius: 25,
                }
            });

        const horLineCenter = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            timeline: {
                delay: 200
            },
            children: {
                className:        'label_e_3',
                shape:            'line',
                stroke:           this.params.COLORS,
                scale:            1,
                radius:           17,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(100),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: +this.params.COORDINATES_X.str1['E'] + 15, y: this.params.EndPointY - 45})
            .then({
                x:        +this.params.COORDINATES_X.str1['E'] + 13,
                children: {
                    radius: 24,
                }
            });

        const horLineBottom = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            children: {
                className:        'label_e_4',
                shape:            'line',
                stroke:           this.params.COLORS,
                scale:            1,
                radius:           20,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: +this.params.COORDINATES_X.str1['E'] + 15, y: this.params.EndPointY - 10})
            .then({
                children: {
                    radius: 25,
                }
            });

        return [
            leftLine,
            ...this.bubble(duration, +delay + 600, {
                x: +this.params.COORDINATES_X.str1['E'],
                y: this.params.EndPointY - 80
            }),
            ...this.bubble(duration, +delay + 200, {
                x: +this.params.COORDINATES_X.str1['E'],
                y: this.params.EndPointY - 45
            }),
            ...this.bubble(duration, +delay, {
                x: +this.params.COORDINATES_X.str1['E'],
                y: this.params.EndPointY - 10
            }),
            horLineTop,
            horLineBottom,
            horLineCenter,
        ]
    }

    plant_O(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const rootLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_o',
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str1['O'], y: this.params.EndPointY - 10});
        const rightLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            fill:     'none',
            children: {
                className:        'label_o_1',
                shape:            'circle',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str1['O'], y: this.params.EndPointY - 45});
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            //angle:180,
            fill:     'none',
            children: {
                className:        'label_o_2',
                shape:            'circle',
                stroke:           this.params.COLORS,
                fill:             'none',
                scale:            1,
                radius:           40,
                strokeWidth:      6,
                duration:         +duration + 600,
                delay:            delayModify(600),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '50%'}
            }
        }).tune({x: +this.params.COORDINATES_X.str1['O'], y: this.params.EndPointY - 45});
        const innerRightLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            fill:     'none',
            children: {
                className:        'label_o_1',
                shape:            'circle',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str1['O'], y: this.params.EndPointY - 45});

        const innerLeftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            //angle:180,
            fill:     'none',
            children: {
                className:        'label_o_2',
                shape:            'circle',
                stroke:           this.params.COLORS,
                fill:             'none',
                scale:            1,
                radius:           30,
                strokeWidth:      6,
                duration:         +duration + 1000,
                delay:            delayModify(1000),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '60%'}
            }
        }).tune({x: +this.params.COORDINATES_X.str1['O'], y: this.params.EndPointY - 45});
        return [
            rootLine,
            leftLine,
            rightLine,
            innerRightLine,
            innerLeftLine,
            ...this.bubble(duration, +delay + 400, {
                x: +this.params.COORDINATES_X.str1['O'],
                y: this.params.EndPointY - 5
            }),
            ...this.bubble(duration, +delay + 1000, {
                x: +this.params.COORDINATES_X.str1['O'],
                y: this.params.EndPointY - 15
            }),
        ]
    }

    plant_S(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const rootLine1 = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_s',
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str2['S'] - 30, y: this.params.EndPointY - 10});
        const rootLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -90,
            children: {
                className: 'label_s',
                shape:     'line',
                stroke:    this.params.COLORS,
                scale:     1,

                strokeWidth:      2,
                duration:         +duration + 100,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: this.params.COORDINATES_X.str2['S'], y: this.params.EndPointY, radius: 20,});
        const sLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -90,
            fill:     'none',
            children: {
                className:        'label_s_1',
                shape:            'S',
                stroke:           this.params.COLORS,
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
        }).tune({x: +this.params.COORDINATES_X.str2['S'] + 10, y: this.params.EndPointY - 45});
        const sLine2 = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -90,
            fill:     'none',
            children: {
                className:        'label_s_1',
                shape:            'S',
                stroke:           this.params.COLORS,
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
        }).tune({x: +this.params.COORDINATES_X.str2['S'] + 10, y: this.params.EndPointY - 45});
        return [
            rootLine1,
            rootLine,
            sLine,
            sLine2,
        ]
    }

    plant_T(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_1',
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str2['T'], y: this.params.EndPointY - 45});
        const rightLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_2',
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: +this.params.COORDINATES_X.str2['T'], y: this.params.EndPointY - 45});
        const leftLineToRight = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    140,
            children: {
                className:        'label_n_1_1',
                rx:               0,
                ry:               0,
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: +this.params.COORDINATES_X.str2['T'] + 10, y: +this.params.EndPointY - 70});
        const rightLineToLeft = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -38,
            children: {
                className:        'label_n_2_1',
                rx:               0,
                ry:               0,
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: +this.params.COORDINATES_X.str2['T'] - 13, y: +this.params.EndPointY - 24});

        return [
            leftLine,
            rightLine,
            leftLineToRight,
            ...this.bubble(duration, +delay + 700, {
                x: +this.params.COORDINATES_X.str2['T'],
                y: this.params.EndPointY - 83
            }),
            ...this.bubble(duration, +delay + 700, {
                x: +this.params.COORDINATES_X.str2['T'],
                y: this.params.EndPointY - 7
            }),
            rightLineToLeft
        ]
    }

    plant_U(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_1',
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str2['U'][0], y: this.params.EndPointY - 45});
        const rightLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_2',
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: +this.params.COORDINATES_X.str2['U'][1], y: this.params.EndPointY - 45});
        return [
            leftLine,
            rightLine,
            ...this.bubble(duration, +delay + 700, {
                x: +this.params.COORDINATES_X.str2['U'][0],
                y: this.params.EndPointY - 83
            }),
            ...this.bubble(duration, +delay + 700, {
                x: +this.params.COORDINATES_X.str2['U'][1],
                y: this.params.EndPointY - 7
            }),
        ]
    }

    plant_D2(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_d_1',
                x:                this.params.COORDINATES_X.str2['D'],
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str2['D'], y: this.params.EndPointY - 45});

        const equal = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            x:        +this.params.COORDINATES_X.str2.D + 34,
            y:        3,
            degree:   0,
            children: {
                className:        'label_d_2',
                origin:           '50% 100%',
                angle:            -90,
                shape:            'elipceD',
                fill:             'none',
                stroke:           this.params.COLORS,
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
        for (let el of equal.el.children) {
            el.style['height'] = '180px';
        }
        return [
            leftLine,
            ...this.bubble(duration, +delay + 600, {
                x: this.params.COORDINATES_X.str2['D'],
                y: this.params.EndPointY - 85
            }),
            equal,
        ]
    }

    plant_I(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_1',
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str2['I'], y: this.params.EndPointY - 45});

        return [
            leftLine,
            ...this.bubble(duration, +delay + 700, {
                x: +this.params.COORDINATES_X.str2['I'],
                y: this.params.EndPointY - 83
            }),
        ]
    }

    plant_O2(duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const rootLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_o',
                shape:            'line',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str2['O'], y: this.params.EndPointY - 10});
        const rightLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            fill:     'none',
            children: {
                className:        'label_o_1',
                shape:            'circle',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str2['O'], y: this.params.EndPointY - 45});
        const leftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            //angle:180,
            fill:     'none',
            children: {
                className:        'label_o_2',
                shape:            'circle',
                stroke:           this.params.COLORS,
                fill:             'none',
                scale:            1,
                radius:           40,
                strokeWidth:      6,
                duration:         +duration + 600,
                delay:            delayModify(600),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '50%'}
            }
        }).tune({x: +this.params.COORDINATES_X.str2['O'], y: this.params.EndPointY - 45});
        const innerRightLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            fill:     'none',
            children: {
                className:        'label_o_1',
                shape:            'circle',
                stroke:           this.params.COLORS,
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
        }).tune({x: this.params.COORDINATES_X.str2['O'], y: this.params.EndPointY - 45});

        const innerLeftLine = new mojs.Burst({
            parent:   this.params.parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            //angle:180,
            fill:     'none',
            children: {
                className:        'label_o_2',
                shape:            'circle',
                stroke:           this.params.COLORS,
                fill:             'none',
                scale:            1,
                radius:           30,
                strokeWidth:      6,
                duration:         +duration + 1000,
                delay:            delayModify(1000),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '60%'}
            }
        }).tune({x: +this.params.COORDINATES_X.str2['O'], y: this.params.EndPointY - 45});
        return [
            rootLine,
            leftLine,
            rightLine,
            innerRightLine,
            innerLeftLine,
            ...this.bubble(duration, +delay + 400, {
                x: +this.params.COORDINATES_X.str2['O'],
                y: this.params.EndPointY - 5
            }),
            ...this.bubble(duration, +delay + 1000, {
                x: +this.params.COORDINATES_X.str2['O'],
                y: this.params.EndPointY - 15
            }),
        ]
    }

    /*    hidePlants () {
     if (this.curentPlants) {
     let curentPlants = this.curentPlants;
     curentPlants.forEach(function (obj) {
     $(obj.el.children).animate({
     opacity: 0
     }, 1000);
     })
     }
     }*/
}
export default Letters
