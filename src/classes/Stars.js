/**
 * Created by frimko on 28.01.2017.
 */

import mojs from 'mo-js';

var sample = require('lodash/fp/sample');
var baseRandom = require('lodash/_baseRandom');


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

    shootingStar(duration, delay) {
        if (this.curRimShineStar) {
            const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
            const scaleCurveBase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' );
            const scaleCurve = (p) => { return 1 + scaleCurveBase(p); };
            const nScaleCurve = (p) => { return 1 - scaleCurveBase(p)/10; };
            let length = this.curRimShineStar.length;
            let randKey = baseRandom(0, length - 1);
            let rimStar = length ? this.curRimShineStar[randKey] : undefined;
            this.curRimShineStar.splice(randKey, 1);
            if (rimStar) {
                let color = this.color;
                rimStar.then({
                    radius:    rimStar._props.radius * 3,
                    className: 'star_rim_shine_shot',
                    //x:         -530,
                    y:         55,
                    stroke:    sample(color),
                    //fill:      sample(color),
                    delay:     delay - rimStar.timeline._props.time,
                    duration:  duration,
                    //radius:       10,
                }).then({
                    duration: 600,
                    delay:    10,
                });
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
