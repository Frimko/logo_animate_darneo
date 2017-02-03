/**
 * Created by Сергей on 03.02.2017.
 */
import mojs from 'mo-js';

class PointsTimer{
    constructor(data) {
        this.params = data.PARAMS;
        return data.timeLine(this);
    }
    bubble (duration, delay, coords) {
        const CIRCLE_RADIUS = 15;
        const RADIUS = 15;
        const circle = (addDuration) => {
            return new mojs.Shape({
                parent:        this.params.parentTag,
                stroke:        '#37e3f5',
                className:     'bubbleTimer',
                fill:          'none',
                radius:        CIRCLE_RADIUS - 5,
                easing:        'cubic.out',
                strokeWidth:   {3: 1},
                scale:         {0: 1},
                angle:         0,
                strokeOpacity: 0.3,
                ...coords,
                duration:      1500
            }).then({
                stroke:        '#E5214A',
                strokeWidth:   0,
                scale:         0,
                angle:         360,
                duration:      +duration + 400 + (addDuration ? addDuration : 0),
                delay:         delay,
                radius:        CIRCLE_RADIUS,
                strokeOpacity: 1,
            });
        };
        const burst = new mojs.Burst({
            parent:   this.params.parentTag,
            radius:   {4: RADIUS},
            count:    15,
            ...coords,
            duration: 1500,
            scale:    {0: 1, easing: 'quad.in'},
            children: {
                angle:       [0, 360],
                className:   'bubbleTimerPoint',
                radius:      1,
                fill:        [
                    {'#9EC9F5': '#9ED8C6'},
                    {'#91D3F7': '#9AE4CF'},

                    {'#DC93CF': '#E3D36B'},
                    {'#CF8EEF': '#CBEB98'},

                    {'#87E9C6': '#A635D9'},
                    {'#D58EB3': '#E0B6F5'},

                    {'#F48BA2': '#CF8EEF'},
                    {'#91D3F7': '#A635D9'},

                    {'#CF8EEF': '#CBEB98'},
                    {'#87E9C6': '#A635D9'},
                ],
                scale:       {0: 1, easing: 'quad.in'},
                pathScale:   [null, .5],
                degreeShift: [null, 12],
                easing:      'quint.out',
            }
        }).then({
            radius:   0,
            angle:    360,
            children: {
                delay:    +delay + 100,
                scale:    {1: 0, easing: 'quad.in'},
                duration: [+duration + 100, +duration + 700],
            }
        });
        return [
            burst,
            circle(),
            circle(400),
            circle(800),
        ];
    };
}
export default PointsTimer;
