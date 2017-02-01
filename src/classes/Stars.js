/**
 * Created by frimko on 28.01.2017.
 */

import mojs from 'mo-js';

var sample = require('lodash/fp/sample');


class Stars {
    constructor(data) {
        this.params = data.PARAMS;
        this.color = data.PARAMS.STARS_COLOR;
        return data.timeLine(this);
    }

    star(duration, delay, count) {
        count = (count ? count : 5);
        let arStars = [],
            arStarRim = [];
        let blurTime = 19690;
        for (let i = 0; i <= count; i++) {
            let color = this.color;
            let star = new mojs.Shape({
                parent:      this.params.parentTag,
                className:   'star',
                x:           'rand(-550, 550)',
                y:           'rand(-130, -45)',
                stroke:      '#fdee88',
                fill:        '#fdee88',
                delay:       delay,
                radius:      'rand(0.2, 2)',
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
                delay:  600,
            }).then({
                stroke: sample(color),
                fill:   sample(color),
                delay:  900,
            }).then({
                stroke: sample(color),
                fill:   sample(color),
                delay:  1200,
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
            }).then({
                stroke: sample(color),
                fill:   sample(color),
                delay:  400,
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
        let calculateParams = 21090;
        count = count ? Number(count) : 1;
        let curentStars = arrStars.filter(
            function (o) {
                return (o._o.className === "star_rim");
            });
        for (let i = 0; i < count; i++) {
            let rimStar = sample(curentStars);
            let color = this.color;
            rimStar.then({
                className: 'star_rim_shine',
                radius:    rimStar._props.radius * 3,
                stroke:    sample(color),
                fill:      sample(color),
                delay:     delay - calculateParams,
                duration:  duration,
                opacity:   rimStar._props.opacity * 8,
            }).then({
                duration: 400,
                delay:    10,
                radius:   rimStar._props.radius,
                opacity:  rimStar._props.opacity,
            });
        }
    }

    lastStep(mojsObj, duration, delay, obj) {
        let time = mojsObj.timeline._props.time;
        obj.duration = duration;
        obj.delay = delay - time;
        return obj
    }

    hideStars(duration, delay) {
        if (this.curentStars) {
            this.curentStars.forEach(function (obj) {
                this.lastStep(obj, duration, delay, {opacity: 0})
            })
        }
    }
}

export default Stars
