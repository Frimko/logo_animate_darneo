/**
 * Created by frimko on 28.01.2017.
 */

import mojs from 'mo-js';

var sample = require('lodash/fp/sample');
var baseRandom = require('lodash/_baseRandom');

/*const MojsCurveEditor = require('mojs-curve-editor').default;
 const mojsCurve = new MojsCurveEditor({name: 'stars'});
 const mojsCurve2 = new MojsCurveEditor({name: 'starsTail'});
 const EasingMo = mojsCurve.getEasing()
 const EasingMo2 = mojsCurve2.getEasing()*/
class Stars {
    blurTime = 19690;

    constructor(data) {
        this.params = data.PARAMS;
        this.color = data.PARAMS.STARS_COLOR;
        return data.timeLine(this);
    }

    star(duration, delay, count) {
        count = (count ? count : 5);
        let arStars = [],
            arStarRim = [];
        let blurTime = this.blurTime;
        for (let i = 0; i <= count; i++) {
            let color = this.color;
            let star = new mojs.Shape({
                parent:      this.params.parentTag,
                className:   'star',
                x:           'rand(-550, 550)',
                y:           'rand(-130, -50)',
                stroke:      '#fdee88',
                fill:        '#fdee88',
                delay:       delay,
                radius:      'rand(0.2, 2.5)',
                opacity:     'rand(0.1, 1)',
                strokeWidth: 0.1,
                duration:    duration,
            }).then({
                easing:   'sin.in',
                duration: +duration + 2400,
                stroke:   sample(color),
                fill:     sample(color),
                delay:    300,
            }).then({
                stroke: sample(color),
                fill:   sample(color),
                delay:  200,
            }).then({
                stroke: sample(color),
                fill:   sample(color),
                delay:  200,
            }).then({
                stroke: sample(color),
                fill:   sample(color),
                delay:  200,
            }).then({
                opacity: 0,
                fill:    sample(color),
                delay:   1000,
            });

            let starRim = new mojs.Shape({
                parent:        this.params.parentTag,
                className:     'star_rim',
                x:             (star._props.x).replace('px', ''),
                y:             (star._props.y).replace('px', ''),
                stroke:        sample(color),
                fill:          'none',
                radius:        star._props.radius / 2 + 0.7,
                strokeOpacity: star._props.opacity - 0.1,
                strokeWidth:   star._props.radius / 4,
                duration:      +duration + 1300,
                delay:         delay,
            }).then({
                stroke:        sample(color),
                fill:          sample(color),
                strokeOpacity: star._props.opacity * 3,
                delay:         blurTime - delay - (+duration + 1300),
                radius:        star._props.radius * 2,
                duration:      10,
                strokeWidth:   star._props.radius * 3,
            }).then({
                stroke:        sample(color),
                fill:          sample(color),
                delay:         0,
                duration:      500,
                strokeOpacity: star._props.opacity - 0.1,
                opacity:       star._props.opacity,
                radius:        star._props.radius + 0.7,
                strokeWidth:   star._props.radius / 2,
            });
            star.el.style['z-index'] = 948;
            starRim.el.style['z-index'] = 948;
            arStarRim.push(starRim);
            arStars.push(star);
        }
        return [
            ...arStarRim,
            ...arStars
        ];
    }

    shineFarFarStar(duration, delay, coords) {

        const OPT_STEP2 = {
            delay:       0,
            duration:    300,
        };
        const OPT_STEP3 = {
            delay:       100,
            radius:      0,
            opacity:     0,
            duration:    10,
        };
        let FarFarStar = new mojs.Shape({
            parent:      this.params.parentTag,
            className:   'FarFarStar',
            shape:       'star',
            stroke:      '#fdee88',
            fill:        'none',
            delay:       delay,
            radius:      0,
            opacity:     0,
            strokeWidth: 1,
            duration:    duration,
            ...coords,
        }).then({
            ...OPT_STEP2,
            opacity:     1,
            radius:      2,
        }).then(OPT_STEP3);

        let shineFarFarStar = new mojs.Shape({
            parent:      this.params.parentTag,
            className:   'FarFarStar',
            shape:       'star',
            stroke:      '#ffffff',
            fill:        'none',
            delay:       delay,
            radius:      0,
            opacity:     0,
            strokeWidth: .5,
            duration:    duration,
            ...coords,
        }).then({
            ...OPT_STEP2,
            opacity:     0.8,
            radius:      6,
        }).then(OPT_STEP3);

        return [FarFarStar, shineFarFarStar];
    }

    shineStars(duration, delay, arrStars, count) {
        //let calculateParams = 21090;
        count = count ? Number(count) : 1;
        if (!this.curRimStar) {
            this.curRimStar = [];
            this.curRimShineStar = [];
            arrStars.forEach((o) => {
                if (o._o.className === "star_rim") {
                    this.curRimStar.push(o);
                }
            });
        }
        for (let i = 0; i < count; i++) {
            let length = this.curRimStar.length;
            let randKey = baseRandom(0, length - 1);
            let rimStar = length ? this.curRimStar[randKey] : undefined;
            this.curRimShineStar.push(this.curRimStar[randKey]);
            this.curRimStar.splice(randKey, 1);
            if (rimStar) {
                let color = this.color;
                rimStar.then({
                    className: 'star_rim_shine',
                    radius:    rimStar._props.radius * 3,
                    stroke:    sample(color),
                    fill:      sample(color),
                    delay:     delay - rimStar.timeline._props.time,
                    duration:  duration,
                    opacity:   rimStar._props.opacity * 8,
                }).then({
                    duration: 600,
                    delay:    10,
                    radius:   rimStar._props.radius,
                    opacity:  rimStar._props.opacity,
                });
            }
        }
    }

    blurShineStars(duration, delay) {
        if (this.curRimShineStar) {
            this.curRimShineStar.forEach((rimStar) => {
                let color = this.color;
                let radius = rimStar._props.radius;
                rimStar.then({
                    duration: duration,
                    radius:   radius * 3,
                    delay:    delay - rimStar.timeline._props.time,
                    stroke:   sample(color),
                    fill:     sample(color),
                }).then({
                    duration: 200,
                    delay:    0,
                    radius:   radius,
                });
            })
        }

    }

    shootingStar(duration, delay, coordLast) {
        if (this.curRimShineStar) {
            let length = this.curRimShineStar.length;
            let randKey = baseRandom(0, length - 1);
            let rimStar = length ? this.curRimShineStar[randKey] : undefined;
            this.curRimShineStar.splice(randKey, 1);
            if (rimStar) {
                let color = sample(this.color);

                let coordFirst = {
                    x: (rimStar._props.x).replace('px', ''),
                    y: (rimStar._props.y).replace('px', '')
                };
                let katet1 = coordFirst.y - coordLast.y;
                let katet2 = coordFirst.x - coordLast.x;
                let hepotinuze = Math.sqrt(Math.pow(katet1, 2) + Math.pow(katet2, 2));
                let angle = (Math.atan(katet2 / katet1) / Math.PI) * 180;
                let radius = rimStar._props.radius;
                let shot = rimStar.then({
                    duration: 0,
                    angle:    -90 - angle,
                    radiusX:  radius * 1.5,
                    radius:   radius,
                    delay:    delay - rimStar.timeline._props.time,
                }).then({
                    radius:    {[radius / 2]: radius},
                    className: 'star_rim_shine_shot',
                    x:         coordLast.x,
                    y:         coordLast.y,
                    stroke:    color,
                    fill:      color,
                    opacity:   {1: 0, easing: mojs.easing.path('M0, 100 C0, 100 95, 95 95, 95 C95, 95 100, 0 100, 0')},
                    radiusX:   {[radius * 3]: radius},
                    duration:  duration,
                    delay:     0,
                    easing:    'cubic.out'
                    //easing:    mojs.easing.path('M0, 100 C0, 100 51.57142857142857, 55 51.57142857142857, 55 C51.57142857142857, 55 100, 0 100, 0'),
                    //easing:    EasingMo,
                });

                const trailOpts = {
                    parent:           shot.el,
                    fill:             'none',
                    stroke:           color,
                    shape:            'line',
                    radiusY:          0,
                    radiusX:          {0: radius / 2 * hepotinuze},
                    strokeDasharray:  '100%',
                    strokeDashoffset: {
                        '0%': '100%'
                    },
                    duration:         duration,
                    strokeWidth:      {[radius / 2]: radius / 4},
                    opacity:          .75,
                    x:                10,
                    delay:            delay,
                    left:             {0: radius / 2 * hepotinuze},
                    /*easing:           mojs.easing.path('M0, 100 C0, 100 43.40092346453452, 96.33252985991308 57.142857142857146, ' +
                     '92.42857142857143 C70.88479082117978, 88.5246129972298 80, 80 80, 80 C80, 80 86.71428571428571, ' +
                     '65 86.71428571428571, 65 C86.71428571428571, 65 100, 0 100, 0'),*/
                    easing:           'cubic.out',
                    y:                1

                };

                const trail2Opts = {
                    ...trailOpts,
                    y: 0,
                };
                const trail3Opts = {
                    ...trailOpts,
                    y: -1
                };
                const trailReturn = {
                    delay:            0,
                    easing:           'quad.in',
                    strokeDashoffset: '100%',
                    duration:         duration / 2,
                    radiusX:          0,
                    x:                0,
                    left:             hepotinuze / 2 * 10
                };

                const trail1 = new mojs.Shape(trailOpts)
                    .then({
                        duration: duration / 6,
                        ...trailReturn
                    });

                const trail2 = new mojs.Shape(trail2Opts)
                    .then({
                        duration: duration / 2,
                        ...trailReturn
                    });
                const trail3 = new mojs.Shape(trail3Opts)
                    .then({
                        duration: duration / 6,
                        ...trailReturn
                    });

                if (this.curentStars) {
                    this.curentStars = this.curentStars.concat([trail1, trail2, trail3])
                }
            }
        }
    }

    hideStars(duration, delay) {
        if (this.curentStars) {
            this.curentStars.forEach(function (obj) {
                let time = obj.timeline._props.time;
                return obj.then({
                    duration: duration,
                    delay:    delay - time,
                    opacity:  0
                });
            })
        }
    }
}

export default Stars
