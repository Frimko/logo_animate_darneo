/**
 * Created by frimko on 24.01.2017.
 */
import mojs from 'mo-js';


class FirstRainbow {

    constructor(data) {
        this.params = data.PARAMS;
        this.defaultParamsForBurst = data.defaultParamsForBurst;
        this.defaultParamsForBurstChild = data.defaultParamsForBurstChild;
        return data.timeLine(this);
    }

    rainbow(duration, delay, simbol, word, number) {
        let point;
        if (!isNaN(number)) {
            point = this.params.COORDINATES_X[word][simbol][Number(number)];
        } else {
            point = this.params.COORDINATES_X[word][simbol]
        }

        let params = {
            ...this.defaultParamsForBurst,
            children: {
                ...this.defaultParamsForBurstChild,
                duration: duration,
                delay:    delay
            }
        };

        return [
            new mojs.Burst(params).tune({x: point, y: this.params.EndPointY}),
            this.burstRainbowEnd((delay + duration), simbol, word, number)
        ];
    }

    firstD() {
        let firstBurst = new mojs.Burst({
            ...this.defaultParamsForBurst,
            children:      {
                ...this.defaultParamsForBurstChild,
                duration: 200,
                delay:    300,
            }
        }).tune({x: this.params.COORDINATES_X.str1['D'], y: this.params.EndPointY});

        return [firstBurst, this.burstRainbowEnd(500, 'D', 'str1')];
    }

    /*стандартный эффект*/
    burstRainbowEnd1(delay, simbol, word, number) {
        let point;
        if (!isNaN(number)) {
            point = this.params.COORDINATES_X[word][simbol][Number(number)];
        } else {
            point = this.params.COORDINATES_X[word][simbol]
        }
        return new mojs.Burst({
            parent:   this.params.parentTag,
            y:        this.params.EndPointY - 30,
            degree:   180,
            angle:    90,
            radius:   {10: 25},
            count:    5,
            children: {
                shape:            'line',
                radius:           5,
                radiusY:          0,
                scale:            1,
                strokeDasharray:  '100%',
                strokeDashoffset: {'-100%': '100%'},
                stroke:           ['#F9DD5E', '#FC2D79', '#11CDC5'],
                easing:           'linear.none',
                duration:         800,
                delay:            delay
            }
        }).tune({x: point, y: this.params.EndPointY});
    }

    /*модифицированный эффект*/
    burstRainbowEnd(delay, simbol, word, number) {
        let point;
        if (!isNaN(number)) {
            point = this.params.COORDINATES_X[word][simbol][Number(number)];
        } else {
            point = this.params.COORDINATES_X[word][simbol]
        }
        const RADIUS = 20;
        const CIRCLE_RADIUS = 25;
        let circle = (addDuration) => {
            return new mojs.Shape({
                parent:           this.params.parentTag,
                strokeDasharray:  '100%',
                strokeDashoffset: {'50%': '50%'},
                stroke:           {'#E5214A': '#37e3f5'},
                strokeWidth:      {3: 0},
                fill:             'none',
                scale:            {0: 1},
                radius:           CIRCLE_RADIUS,
                duration:         400 + (addDuration ? addDuration : 0),
                delay:            delay,
                easing:           'cubic.out'

            });
        };
        let burst = new mojs.Burst({
            parent:   this.params.parentTag,
            radius:   {4: RADIUS},
            count:    20,
            y:        this.params.EndPointY - 30,
            degree:   180,
            angle:    90,
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
                duration:    [400, 700],
                easing:      'quint.out',
                delay:       delay
            }
        });
        return [
            burst.tune({x: point, y: this.params.EndPointY}),
            circle().tune({x: point, y: this.params.EndPointY}),
            circle(400).tune({x: point, y: this.params.EndPointY}),
            circle(800).tune({x: point, y: this.params.EndPointY}),
        ];
    }
}

export default FirstRainbow;
