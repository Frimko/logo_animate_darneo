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
        console.log(this.curRimShineStar);
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
            /*            const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
             const scaleCurveBase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' );
             const scaleCurve = (p) => { return 1 + scaleCurveBase(p); };
             const nScaleCurve = (p) => { return 1 - scaleCurveBase(p)/10; };*/
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
                let angle = (Math.atan(katet2 / katet1) / Math.PI) * 180;
                let radius = rimStar._props.radius;
                console.log(delay - rimStar.timeline._props.time);
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
                    //fill:      sample(color),
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
                    radiusX:          {0: radius / 2 * 50},
                    strokeDasharray:  '100%',
                    strokeDashoffset: {
                        '100%': '0%'
                    },
                    duration:         duration / 2,
                    strokeWidth:      {[radius / 2]: radius / 4},
                    //isShowStart:      true,
                    opacity:          .75,
                    //opacity:   {.75: 0, easing: 'M0, 100 C0, 100 95, 95 95, 95 C95, 95 100, 0 100, 0 '},
                    x:                10,
                    delay:            delay,
                    left:             {0: radius / 2 * 50},
                    /*easing:           mojs.easing.path('M0, 100 C0, 100 43.40092346453452, 96.33252985991308 57.142857142857146, ' +
                     '92.42857142857143 C70.88479082117978, 88.5246129972298 80, 80 80, 80 C80, 80 86.71428571428571, ' +
                     '65 86.71428571428571, 65 C86.71428571428571, 65 100, 0 100, 0'),*/
                    easing:           'cubic.out',
                    y:                1

                };

                const trail2Opts = {
                    ...trailOpts,
                    //radiusX: radius / 2 * 33,
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
                    left:             radius / 2 * 10
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
                /*
                 const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
                 const scaleCurveBase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' );
                 const scaleCurve = (p) => { return 1 + scaleCurveBase(p); };
                 const nScaleCurve = (p) => { return 1 - scaleCurveBase(p)/10; };

                 const circle = new mojs.Shape({
                 angle:-45,
                 fill:         { '#F64040' : '#F64040', curve: scaleCurve },
                 radius:       10,
                 rx:           3,
                 x:            { [-125] : 125, easing: shiftCurve },
                 y:            { [-125] : 125, easing: shiftCurve },
                 scaleX:       { 1 : 1, curve: nScaleCurve },
                 scaleY:       { 1 : 1, curve: scaleCurve },
                 origin:       { '0 50%' : '100% 50%', easing: shiftCurve },

                 isYoyo:         true,
                 delay:        500,
                 duration:     800,
                 repeat:       999,
                 //isForce3d:    true
                 }).play();


                 const LINE1_DURATION = 1000;

                 const ball = new mojs.Shape({
                 shape: 'circle',
                 fill: 'white',
                 radius: 3,
                 x: {
                 [-100]: 100
                 },
                 y:{
                 [-100]: 100
                 },
                 angle: -45,
                 radiusY: 4,
                 duration: 2 * LINE1_DURATION,
                 easing: 'cubic.out',
                 });
                 const trailOpts = {
                 parent: ball.el,
                 fill: 'none',
                 stroke: 'white',
                 shape: 'line',
                 radiusY: 0,
                 radiusX: 30,
                 strokeDasharray: '100%',
                 strokeDashoffset: {
                 '100%': '0%'
                 },
                 angle: -90,
                 duration: LINE1_DURATION / 2,
                 strokeWidth: {
                 2: 1
                 },
                 isShowStart: true,
                 easing: 'cubic.out',
                 opacity: .75,
                 y: 1,
                 top: -35
                 }

                 const trail2Opts = {
                 ...trailOpts,
                 top: -45,
                 radiusX: 40,
                 y: 0
                 }
                 const trail3Opts = {
                 ...trailOpts,
                 y:        3
                 }
                 const trailReturn = {
                 easing: 'quad.in',
                 strokeDashoffset: '100%',
                 duration: LINE1_DURATION / 2,
                 }

                 const trail1 = new mojs.Shape(trailOpts)
                 .then({
                 duration: LINE1_DURATION / 5,
                 ...trailReturn
                 });

                 const trail2 = new mojs.Shape(trail2Opts)
                 .then({
                 duration: LINE1_DURATION / 6,
                 ...trailReturn
                 });
                 const trail3 = new mojs.Shape(trail3Opts)
                 .then({
                 duration: LINE1_DURATION / 6,
                 ...trailReturn
                 });
                 const timeline = new mojs.Timeline({
                 delay: 500
                 });

                 timeline
                 .add(
                 ball,
                 trail1 , trail2,trail3,
                 );

                 new MojsPlayer({
                 add: timeline,
                 isPlaying: true,
                 isRepeat: true
                 });
                 */

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
