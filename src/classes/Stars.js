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
                radius:      'rand(0.2, 3)',
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
            arrStars.forEach((o)=>{
                if(o._o.className === "star_rim"){
                    this.curRimStar.push(o);
                }
            });
        }
        for (let i = 0; i < count; i++) {
            let rimStar = this.randRimStarAndDel();
            if(rimStar){
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

    randRimStarAndDel() {
        let array = this.curRimStar;
        let length = array.length;
        let randKey = baseRandom(0, length - 1);
        let randArray = length ? array[randKey] : undefined;
        this.curRimStar.splice(randKey, 1);
        return randArray
    }

    shootingStar(){

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
