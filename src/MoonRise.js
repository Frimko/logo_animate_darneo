/**
 * Created by frimko on 28.01.2017.
 */
import mojs from 'mo-js';

class MoonRise {
    constructor(data) {
        this.params = data.PARAMS;
        return data.timeLine(this);
    }

    moon(duration, delay) {
        let moon = new mojs.Shape({
            parent:         this.params.parentTag,
            className:      'moon',
            shape:          'moon',
            stroke:         'none',
            delay:          delay,
            duration:       duration,
            x:              {450: 300},
            y:              {0: -80},
            opacity:        {0: 1},
            scale:          1,
            radius:         75,
            isRefreshState: true,
            isShowEnd:      true
        });
        let moonArea = new mojs.Shape({
            parent:         this.params.parentTag,
            className:      'moon',
            delay:          delay,
            duration:       duration,
            stroke:         '#dad9d0',
            x:              400,
            opacity:        0,
            strokeOpacity:  0.2,
            strokeWidth:    20,
            y:              {[+this.params.EndPointY + 50]: this.params.EndPointY},
            scale:          1,
            fill:           '#dad9d0',
            radius:         40,
            isRefreshState: true,
            isShowEnd:      true
        });
        moon.el.style['z-index'] = 949;
        moonArea.el.style['z-index'] = 949;
        return moon;
    }

    mountains(duration, delay) {
        let mountains = new mojs.Shape({
            parent:      this.params.parentTag,
            className:   'mountains',
            shape:       'mountains',
            x:           400,
            opacity:     {0: 1},
            y:           {[+this.params.EndPointY + 50]: this.params.EndPointY},
            scale:       1,
            radius:      169,
            stroke:      'none',
            fill:        '#4c585c',
            strokeWidth: 1,
            delay:       delay,
            duration:    duration,

            isRefreshState: true,
            isShowEnd:      true
        });
        mountains.el.style['z-index'] = 950;
        return mountains;
    }

    horizonLine(duration, delay) {
        const horizonLine = new mojs.Shape({
            parent:           this.params.parentTag,
            className:        'horizontLine',
            shape:            'horizontLine',
            stroke:           '#adb9bd',
            fill:             'none',
            scale:            1,
            x:                -150,
            y:                {[+this.params.EndPointY + 115]: +this.params.EndPointY + 65},
            radius:           169,
            opacity:          0.3,
            radiusX:          438,
            strokeWidth:      6,
            delay:            delay,
            duration:         duration,
            strokeDasharray:  '100%',
            strokeDashoffset: {'100%': '200%'},

            isRefreshState: true,
            isShowEnd:      true

        });
        horizonLine.el.style['z-index'] = 948;
        return horizonLine;
    }
/*
    hideMoonRise() {
        if (this.curentMoonItems) {
            this.curentMoonItems.forEach(function (obj) {
                $(obj.el.children).animate({
                    opacity: 0
                }, 500);
            })
        }
    }*/
}

export default MoonRise
