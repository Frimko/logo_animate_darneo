/* eslint-disable */
import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';
import {Howler, Howl} from 'howler';
import './index.css';

var sample = require('lodash/fp/sample');

const LOGO = $('#logo_darneo');
var moonSVG = require('./svg/1631-full-moon-svg.svg');
const COORDINATES_X = {
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
};
/*var point = new mojs.Shape({
 x:           225,
 y:           -55,
 fill:        'transparent',
 stroke:      '#FD5061',
 fillOpacity: 1,
 delay:       0,
 radius:      6,
 strokeWidth: 3,
 duration:    400,
 }).play();*/

const startPointY = -100;
const EndPointY = 55;
const parentTag = '#animate_logo';
const defaultParams = {
    parent: parentTag,
    y:      {[startPointY]: EndPointY},
};
const COLORS = ['#F9DD5E', '#FC2D79', '#11CDC5'];
const defaultParamsForBurstChild = {
    shape:       'line',
    stroke:      COLORS,
    radius:      60,
    strokeWidth: 8,
    isForce3d:   true,
};


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
var FirstRainbow = {

    defaultParamsForBurst: {
        parent:         parentTag,
        y:              {[startPointY]: EndPointY},
        count:          3,
        degree:         7,
        radius:         {250: 0},
        isRefreshState: false,
        isShowEnd:      false
    },

    rainbow: function (duration, delay, simbol, word, number) {
        let point;
        if (!isNaN(number)) {
            point = COORDINATES_X[word][simbol][Number(number)];
        } else {
            point = COORDINATES_X[word][simbol]
        }

        let params = {
            ...this.defaultParamsForBurst,
            children: {
                ...defaultParamsForBurstChild,
                duration: duration,
                delay:    delay
            }
        };

        return [
            new mojs.Burst(params).tune({x: point, y: EndPointY}),
            this.burstRainbowEnd((delay + duration), simbol, word, number)
        ];
    },

    firstD:           function () {
        let firstBurst = new mojs.Burst({
            ...this.defaultParamsForBurst,
            children:      {
                ...defaultParamsForBurstChild,
                duration: 200,
                delay:    300,
            },
            onStart:       function () {
                //sound.play('start');
                console.log('onStart');
            },
            onRepeatStart: function () {
                /*                sound.stop();
                 sound.play('start');*/
                console.log('onRepeatStart');
            },
        }).tune({x: COORDINATES_X.str1['D'], y: EndPointY});

        return [firstBurst, this.burstRainbowEnd(500, 'D', 'str1')];
    },
    /*стандартный эффект*/
    burstRainbowEnd1: function (delay, simbol, word, number) {
        let point;
        if (!isNaN(number)) {
            point = COORDINATES_X[word][simbol][Number(number)];
        } else {
            point = COORDINATES_X[word][simbol]
        }
        return new mojs.Burst({
            parent:   parentTag,
            y:        EndPointY - 30,
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
        }).tune({x: point, y: EndPointY});
    },
    /*модифицированный эффект*/
    burstRainbowEnd:  function (delay, simbol, word, number) {
        let point;
        if (!isNaN(number)) {
            point = COORDINATES_X[word][simbol][Number(number)];
        } else {
            point = COORDINATES_X[word][simbol]
        }
        const RADIUS = 20;

        const CIRCLE_RADIUS = 25;
        const circle = function (addDuration) {
            return new mojs.Shape({
                parent:           parentTag,
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
        const burst = new mojs.Burst({
            parent:   parentTag,
            radius:   {4: RADIUS},
            count:    20,
            y:        EndPointY - 30,
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
            burst.tune({x: point, y: EndPointY}),
            circle().tune({x: point, y: EndPointY}),
            circle(400).tune({x: point, y: EndPointY}),
            circle(800).tune({x: point, y: EndPointY}),
        ];
    },

    getTimeLine: function () {
        return [
            this.firstD(),

            ...this.rainbow(200, 500, 'A', 'str1'),
            ...this.rainbow(200, 850, 'R', 'str1', 0),
            ...this.rainbow(200, 850, 'R', 'str1', 1),
            ...this.rainbow(200, 1400, 'N', 'str1', 0),
            ...this.rainbow(200, 1400, 'N', 'str1', 1),
            ...this.rainbow(200, 2000, 'E', 'str1'),
            ...this.rainbow(200, 2500, 'O', 'str1'),

            ...this.rainbow(200, 3200, 'S', 'str2'),
            ...this.rainbow(200, 3700, 'T', 'str2'),
            ...this.rainbow(200, 4300, 'U', 'str2', 0),
            ...this.rainbow(200, 4300, 'U', 'str2', 1),
            ...this.rainbow(200, 5000, 'D', 'str2'),
            ...this.rainbow(200, 5350, 'I', 'str2'),
            ...this.rainbow(200, 5600, 'O', 'str2'),

            ...this.rainbow(200, 6150, 'O', 'str1'),
            ...this.rainbow(200, 6150, 'D', 'str2'),

            ...this.rainbow(200, 6800, 'R', 'str1', 0),
            ...this.rainbow(200, 6800, 'T', 'str2'),

            ...this.rainbow(200, 7400, 'O', 'str1'),
            ...this.rainbow(200, 7400, 'S', 'str2'),

            ...this.rainbow(200, 7900, 'D', 'str1'),
            ...this.rainbow(200, 7900, 'O', 'str2'),

            ...this.rainbow(200, 8400, 'R', 'str1', 0),
            ...this.rainbow(200, 8400, 'D', 'str2'),
        ]

    },
};

class elipceD extends mojs.CustomShape {
    getShape() {
        return '<path d="M0,120.5h13.9c39.6,0,59.6-30.6,59.1-61C73,29.8,52.8-0.2,13.3,0L0.1,0"/>'
    }

    getLength() {
        return 300;
    }
}
class elipceR extends mojs.CustomShape {
    getShape() {
        return `<path d="M48.6,78.1C60.5,70,66.3,56.7,66.5,42.9C66.5,21.6,52.1,0.1,23,0.1C17.3,0,9.9,0,2.3,0 C1.5,0,0.6,0-0.3,0"/>`
    }

    getLength() {
        return 300;
    }
}
class elipceR2 extends mojs.CustomShape {
    getShape() {
        return `<path d="M0,83.1H18l2.8-0.1c5.1-0.5,9.2-0.3,14.2-1.2l13.6-3.7"/>`
    }

    getLength() {
        return 300;
    }
}
class S extends mojs.CustomShape {
    getShape() {
        return `<path d="M65.5,23.3c-0.6-2.6-1.7-5-3.1-7.2c-1.4-2.2-3.3-4.1-5.6-5.7c-2.3-1.6-5-2.9-8.2-3.8
		c-3.2-0.9-6.8-1.4-10.8-1.4c-8.5,0-14.9,1.6-19.3,4.7C14.2,13.2,12,17.5,12,23c0,2.5,0.4,4.7,1.2,6.6c0.8,1.9,2.2,3.5,4.1,5
		c1.9,1.5,4.5,2.8,7.7,3.9c3.2,1.1,7.1,2.2,11.9,3.2c2.8,0.6,5.6,1.2,8.6,1.8c2.9,0.6,5.8,1.4,8.6,2.3c2.8,0.9,5.5,2,8,3.2
		c2.5,1.3,4.8,2.9,6.6,4.7c1.9,1.9,3.4,4.1,4.5,6.7c1.1,2.6,1.7,5.7,1.7,9.2c0,4.1-0.9,7.8-2.6,11.2c-1.7,3.4-4.1,6.4-7.1,8.8
		c-3,2.5-6.6,4.4-10.8,5.8c-4.2,1.4-8.7,2.1-13.7,2.1c-6.4,0-12-0.7-16.8-2.1c-4.8-1.4-8.8-3.3-12.1-5.9c-3.3-2.5-5.8-5.6-7.5-9.2
		c-1.7-3.6-2.2-7.7-3-12.1"/>`;
    }

    getLength() {
        return 300;
    }
}
class mountains extends mojs.CustomShape {
    getShape() {
        return `
        <style type="text/css">
	.mountain0{fill:#1D1F20;}
</style>
<g>
	<g>
		<g id="mountains">
			<g>
				<path class="mountain0" d="M93.3,41.6l4.7,3.8v0c-0.1,0-0.2,0-0.3-0.1c-1.2-1-2.4-1.9-3.5-2.9C93.9,42.1,93.6,41.9,93.3,41.6z"/>
				<path class="mountain0" d="M88.7,33.5l-5.9-12.7L77.5,24l-1.9,2.2c1.2-1.6,2.1-3.7,3.6-4.8c1.2-0.9,2.6-1.8,3.7-2.9
					c0.5-0.5,1.2-0.4,1.5,0.2c0.4,0.7,0.7,1.5,0.8,2.3c1.3,6.6,4,12.7,7.6,18.4c1.4,2.3,3.5,4.1,5.1,6l-4.7-3.8
					c-0.3-0.3-0.6-0.5-0.8-0.8L88.7,33.5z"/>
				<path class="mountain0" d="M81.3,41.8l-6.3-14.5c0.3,0.5,0.7,1,1.1,1.4c0.2,0.3,0.5,0.5,0.6,0.8c2.4,4.4,6.2,7.7,9.6,11.2
					c1.3,1.4,3,2.4,4.4,3.5c0,0.1-0.1,0.1-0.1,0.2l-6.8,0.8L81.3,41.8z"/>
				<path class="mountain0" d="M82.7,20.8l5.9,12.7l3.9,7.3c-3.2-3.4-5.5-7.3-7.1-11.8C84.7,27,83.9,25,83,23c-0.2-0.5-0.5-0.9-0.6-1.2
					c-3.2,0.2-4.4,3-6.7,4.4l1.9-2.2L82.7,20.8z"/>
				<path class="mountain0" d="M98,45.4C98,45.4,98,45.4,98,45.4C98,45.4,98,45.4,98,45.4L98,45.4z"/>
				<path class="mountain0" d="M74.9,27.3l6.3,14.5l2.6,3.5l-11,1.4c-1.8-2-3.8-4.1-5.7-6.2c-2.6-3-4.2-6.5-5.8-10.1
					c-0.4-0.9-0.8-1.9-2.2-1.4c-0.2,0.1-0.5-0.2-0.8-0.3c-0.3-0.1-0.7-0.3-0.9-0.2c-0.8,0.5-1.2-0.1-1.4-0.6
					c-0.6-1.5-1.3-2.9-1.7-4.5c-0.5-1.7-1-2.4-2.8-2.4c-0.8,0-1.5-0.2-2-0.7c0,0,0,0,0,0l0.2-0.4c0.3-0.5,0.3-0.8,0.5-1
					c0.4-0.6,0.9-1.2,1.2-1.9c1-2.9,3.6-4.4,5.5-6.6c0.7-0.9,1.6-1.2,2.7,0c0.9,1,2.3,1.4,3.7,2.2c0,0,0.3-0.3,0.5-0.5
					c0.3-0.6,0.5-1.2,0.9-1.7c0.4-0.6,1-1,1.5-1.5c0.4,0.5,1.1,0.9,1.3,1.5c0.7,1.8,1.2,3.7,1.8,5.5c0.3,0.9,0.3,2.1,1.7,2.1
					c0.2,0,0.4,0.4,0.5,0.7c0.2,0.7,0.1,1.6,1.3,1.6c0.1,0,0.4,0.7,0.4,1.1C73.1,23.5,73.8,25.5,74.9,27.3z"/>
				<path class="mountain0" d="M98,46.7H84.4v-0.5l-0.6-0.8l6.8-0.8c0-0.1,0.1-0.1,0.1-0.2c-1.5-1.2-3.1-2.2-4.4-3.5
					c-3.4-3.5-7.2-6.8-9.6-11.2c-0.2-0.3-0.4-0.5-0.6-0.8c-0.4-0.5-0.8-0.9-1.1-1.4l0.7-1c2.3-1.4,3.5-4.2,6.7-4.4
					c0.2,0.3,0.5,0.8,0.6,1.2c0.8,2,1.7,3.9,2.4,5.9c1.6,4.5,3.9,8.4,7.1,11.8l0.1,0.3l0.7,0.5c0.3,0.3,0.5,0.5,0.8,0.8
					c1.1,1,2.3,2,3.5,2.9c0.1,0.1,0.3,0.1,0.3,0.1L98,46.7z"/>
				<path class="mountain0" d="M67.7,44.8l4.3,1.6c-0.4-0.1-1.8-0.3-3.6-0.6c-2.2-0.3-5.2-0.7-8-0.9c-2.6-0.2-3.7-0.1-8.6,0
					c-0.7,0-0.1,0-14.3,0c-4,0-28.2,0-37.2,0c-0.1-0.1-0.3-0.2-0.4-0.3c2.4-3.6,4.7-7.2,7.1-10.8c0.2-0.4,0.6-0.7,0.7-1.1
					c0.6-2.5,2.4-4.2,3.9-6.1c1.5-1.8,2.9-3.8,4.4-5.6c0.8-0.9,1.5-1.9,2.4-2.8c0.8-1,1.7-1.1,2.8-0.3c1.6,1.2,1.7,1.1,2.8-0.5
					c0.7-1,1.6-2,2.5-2.8c0.3-0.3,1.1-0.2,1.6-0.1c0.4,0.1,0.7,0.4,1.2,0.8c0.5-0.8,0.9-1.6,1.3-2.3c0.4-0.6,0.7-1,1.6-0.7
					c0.9,0.4,1.3-0.4,1.7-1c0.3-0.6,0.5-1.2,0.8-1.8c0.1-0.3,0.3-0.7,0.5-0.8c1.8-0.5,1.6-2.1,2.2-3.3c0.8-1.6,1.8-3.2,2.9-4.6
					c0.3-0.5,1.2-1,1.7-0.9c0.6,0.2,1.2,0.9,1.3,1.5C44,4,44.3,6.6,44.9,9c0.3,1.1,0.9,2,1.4,3c0.4,0.8,0.8,1.6,1,2.5
					c0.5,1.5,1,3,1.5,4.5c0.2,0.4,0.4,0.8,0.7,1.1c0,0,0,0,0,0L67.7,44.8z"/>
				<path class="mountain0" d="M58.4,28.6c0.3,0.1,0.6,0.4,0.8,0.3c1.4-0.5,1.8,0.5,2.2,1.4c1.5,3.6,3.2,7.1,5.8,10.1
					c1.8,2.2,3.8,4.2,5.7,6.2c-0.4-0.1-0.6-0.2-0.6-0.2s0,0-0.1,0c0,0,0,0,0,0l-4.3-1.6L49.5,20.2c0.5,0.5,1.2,0.7,2,0.7
					c1.8,0,2.4,0.7,2.8,2.4c0.4,1.5,1.1,3,1.7,4.5c0.2,0.5,0.6,1.1,1.4,0.6C57.7,28.2,58.1,28.5,58.4,28.6z"/>
			</g>
			<g>
			</g>
		</g>
	</g>
	<polyline class="mountain0" points="0,44.7 0,46.7 98,46.7 91.5,38.8 	"/>
</g>
<g>
	<g>
		<g id="XMLID_1_">
			<g>
				<path d="M92.9,39.4c1.4,2.3,3.5,4.1,5.1,6c0,0,0,0,0,0c0,0-0.2,0-0.4-0.1c-1.2-1-2.4-1.9-3.5-2.9c-4.1-3.7-6.9-8.2-8.8-13.4
					C84.7,27,83.9,25,83,23c-0.2-0.5-0.5-0.9-0.6-1.2c-3.2,0.2-4.4,3-6.7,4.4c1.2-1.6,2.1-3.7,3.6-4.8c1.2-0.9,2.6-1.8,3.7-2.9
					c0.5-0.5,1.2-0.4,1.5,0.2c0.4,0.7,0.7,1.5,0.8,2.3C86.6,27.7,89.3,33.8,92.9,39.4z"/>
				<path d="M64.6,14.4c-0.3,0.6-0.6,1.2-1,1.8c-0.2,0.3-0.7,0.7-0.9,0.6c-0.3-0.1-0.6-0.5-0.8-0.9c-0.2-0.5-0.3-1.2-0.5-1.7
					c-0.3-0.7-0.5-1.3-1.6-1.1c-0.3,0.1-0.9-0.8-1.4-1.2c-4.1,1.1-5.4,5.4-8.8,7.9c0.3-0.5,0.3-0.8,0.5-1c0.4-0.6,0.9-1.2,1.2-1.9
					c1-2.9,3.6-4.4,5.5-6.6c0.7-0.9,1.6-1.2,2.7,0c0.9,1,2.3,1.4,3.7,2.2c0,0,0.3-0.3,0.5-0.5c0.3-0.6,0.5-1.2,0.9-1.7
					c0.4-0.6,1-1,1.5-1.5c0.4,0.5,1.1,0.9,1.3,1.5c0.7,1.8,1.2,3.7,1.8,5.5c0.3,0.9,0.3,2.1,1.7,2.1c0.2,0,0.4,0.4,0.5,0.7
					c0.2,0.7,0.1,1.6,1.3,1.6c0.1,0,0.4,0.7,0.4,1.1c0,2.9,1.2,5.3,3,7.4c0.2,0.3,0.5,0.5,0.6,0.8c2.4,4.4,6.2,7.7,9.6,11.2
					c1.3,1.4,3,2.4,4.4,3.5c0,0.1-0.1,0.1-0.1,0.2c-0.7-0.4-1.5-0.7-2.2-1.2c-2.2-1.5-4.6-2.9-6.5-4.7c-3.5-3.4-6.8-6.9-9.8-10.6
					c-3.2-3.9-5.7-8.3-7.1-13.2C64.9,14.7,64.8,14.6,64.6,14.4z"/>
				<path d="M18.7,27.2c-0.5,0.7-1.7,1-1.2,2.3c0,0.1-0.1,0.3-0.2,0.4c-1.5,1.5-3,3-4.5,4.4c-0.7,0.7-1.3,1.4-1.9,2.1
					c1.2-3.3,9.1-13.1,10.8-13.1C20.6,24.8,19.7,26,18.7,27.2z"/>
				<path d="M33.5,14.7c-0.4-0.1-1,0.4-1.3,0.8c-0.4,0.5-0.5,1.2-0.8,1.8c-0.6,1.2-1,1.2-2,0.3c-0.2-0.2-0.7-0.4-0.9-0.2
					c-1.2,0.9-2.5,1.8-3.5,2.9c-1.4,1.6-1.6,1.7-3.4,0.6c-1-0.6-1.7-0.2-2.3,0.4c-2.1,2.1-4.4,4.1-6.2,6.5c-4,5.2-7.8,10.6-11.7,16
					c-0.3,0.4-0.6,0.8-0.9,1.1c-0.1-0.1-0.3-0.2-0.4-0.3c2.4-3.6,4.7-7.2,7.1-10.8c0.2-0.4,0.6-0.7,0.7-1.1c0.6-2.5,2.4-4.2,3.9-6.1
					c1.5-1.8,2.9-3.8,4.4-5.6c0.8-0.9,1.5-1.9,2.4-2.8c0.8-1,1.7-1.1,2.8-0.3c1.6,1.2,1.7,1.1,2.8-0.5c0.7-1,1.6-2,2.5-2.8
					c0.3-0.3,1.1-0.2,1.6-0.1c0.4,0.1,0.7,0.4,1.2,0.8c0.5-0.8,0.9-1.6,1.3-2.3c0.4-0.6,0.7-1,1.6-0.7c0.9,0.4,1.3-0.4,1.7-1
					c0.3-0.6,0.5-1.2,0.8-1.8c0.1-0.3,0.3-0.7,0.5-0.8c1.8-0.5,1.6-2.1,2.2-3.3c0.8-1.6,1.8-3.2,2.9-4.6c0.3-0.5,1.2-1,1.7-0.9
					c0.6,0.2,1.2,0.9,1.3,1.5C44,4,44.3,6.6,44.9,9c0.3,1.1,0.9,2,1.4,3c0.4,0.8,0.8,1.6,1,2.5c0.5,1.5,1,3,1.5,4.5
					c0.5,1.2,1.4,1.8,2.7,1.8c1.8,0,2.4,0.7,2.8,2.4c0.4,1.5,1.1,3,1.7,4.5c0.2,0.5,0.6,1.1,1.4,0.6c0.2-0.1,0.6,0.1,0.9,0.2
					c0.3,0.1,0.6,0.4,0.8,0.3c1.4-0.5,1.8,0.5,2.2,1.4c1.5,3.6,3.2,7.1,5.8,10.1c1.8,2.2,3.8,4.2,5.7,6.2c-0.1,0-0.3-0.1-0.6-0.2
					c-4.8-3.1-9.1-6.8-11.8-12c-0.1-0.1-0.1-0.2-0.2-0.3c-1.2-2-1.7-2-2.9,0c-0.6,1-1.1,2.3-2.5,2.2c-1.4-0.2-1.6-1.6-2-2.7
					c-0.6-2.2-1.1-4.4-1.7-6.5c-0.6-1.9-1.2-2.2-3.1-1.5c-1.8,0.6-3.3,0-3.9-1.9c-0.7-2.3-1.1-4.6-1.6-7c-0.6-2.5-1.1-5.1-1.7-7.6
					c-0.1-0.4-0.5-0.8-0.8-1.2c-0.4,0.3-0.8,0.6-1.1,1c-1,1.5-1.9,3-2.9,4.5C35.5,14.2,34.8,14.9,33.5,14.7z"/>
			</g>
			<g>
			</g>
		</g>
	</g>
</g>`;
    }

    getLength() {
        return 4929;
    }
}
class horizontLine extends mojs.CustomShape {
    getShape() {
        return `<path d="M0.2,4.6c3.2-1.3,6.1-2,8.1-2.5c2.9-0.6,8.2-1.7,14.7-0.8c1.9,0.3,2.3,0.5,4.8,1c15.4,3.2,28.8,1.1,33.4-0.3
	c0.2-0.1,0.6-0.2,1.2-0.3c4.7-1.1,8.8,0.4,9.6,0.7c3,1,10.2,1.1,28.1-1.9"/>`;
    }

    getLength() {
        return 360;
    }
}
class moon extends mojs.CustomShape {
    getShape() {
        return `
<style type="text/css">
	#areal .mountain0{fill:url(#SVGID_1_);}
	#moon.st1{fill:url(#moon_1_);}
</style>
<g id="areal">
	<radialGradient class="st0" id="SVGID_1_" cx="50.5" cy="49.8078" r="49.6551" gradientUnits="userSpaceOnUse">
		<stop  offset="0" style="stop-color:#FFFFFF"/>
		<stop  offset="1" style="stop-color:#000000;stop-opacity:0"/>
	</radialGradient>
	<rect x="0.5" y="0.5" class="mountain0" width="100" height="98.6"/>
</g>
<radialGradient id="moon_1_" cx="-138.8185" cy="680.7072" r="27.9801" gradientTransform="matrix(0.6995 0 0 -0.7135 145.1914 532.9861)" gradientUnits="userSpaceOnUse">
	<stop  offset="0" style="stop-color:#EBEAE5"/>
	<stop  offset="1" style="stop-color:#C0BDAD"/>
</radialGradient>
<path id="moon" class="st1" d="M67.7,50.4c0,9.2-7.4,16.6-16.6,16.6c-9.2,0-16.6-7.4-16.6-16.6c0,0,0,0,0,0
	c0-9.2,7.4-16.6,16.6-16.6S67.7,41.2,67.7,50.4C67.7,50.4,67.7,50.4,67.7,50.4z"/>
`;
    }

    getLength() {
        return 360;
    }
}
class lilium extends mojs.CustomShape {
    getShape() {
        return `
<path d="M50.1,94c-8.4,11.5-15.9,9.9-14.5-3.1c-15.2,6.6-21.2,2.2-11.4-8.4C4.5,82,0.7,75.9,16.9,70.8
			c-21.5-8.4-22.8-15.2-2.5-13.2c-20.3-16.1-19-23,2.5-13.3C0.7,21,4.5,14.9,24.2,32.6c-9.8-28.6-3.9-33,11.4-8.3
			c-1.4-31,6.2-32.6,14.5-3c8-29.5,15.6-28,14.5,3C79.5-0.4,85.5,3.9,76,32.6c19.4-17.6,23.2-11.5,7.3,11.8
			c21.2-9.7,22.5-2.8,2.5,13.2c20-2,18.7,4.8-2.5,13.2C99.3,75.9,95.4,82,76,82.5c9.4,10.6,3.5,15-11.4,8.4
			C65.7,103.9,58.2,105.5,50.1,94z M49.7,90.4c5.7,9.5,11.8,8.3,11.7-2.4c12.3,5.7,17.8,2.2,10.5-6.7c16.9-0.2,20.7-5.6,7.3-10.5
			c19.1-7.9,20.5-14.9,2.7-13.3c17.8-15.3,16.6-21.6-2.3-12c14.1-22,10.7-27.5-6.6-10.6c8.3-26.7,3-30.6-10.3-7.5
			c0.8-28.9-6.1-30.3-13.1-2.8C41.8-2.9,34.9-1.4,36.5,27.5C22.5,4.3,17.2,8.3,26.3,35C8.2,18.2,4.8,23.7,19.7,45.6
			c-19.7-9.7-20.8-3.5-2.3,12c-18.6-2.7-17.4,3.6,2.3,11.9c-14.9,3.8-11.5,9.3,6.6,10.6c-9.1,8.6-3.7,12.6,10.3,7.5
			C35.1,98.5,41.9,99.9,49.7,90.4L49.7,90.4z M42.4,71.3c-4.5-1.3-7.4,9.6-1.8,6.9c-7.7,3.1-10.4,3.6-5,0.9
			c-11.5,3.6-13.8,3.9-4.5,0.5c-12.5,3.4-14.9,3-4.7-0.8c-9.1,1.3-5.6-0.5,6.8-3.4c-7.1-0.8-3.7-3.6,6.4-5.3
			C33.5,68.2,37.9,70.1,42.4,71.3z M34.8,65c-8.8-4.9-5.4,0.5,2.2,3.4c-8.9-1.9-10.4-1.4-2.9,1c-11.3-2.4-13.6-3.2-4.4-1.6
			c-14.2-4.9-16.3-7.1-4.1-4.1c-15.8-8.3-16.7-11-1.9-5.2c-12.1-5.3-9.4-3,5.2,4.6C19.3,58.6,22.4,59.6,34.8,65z M30.5,55.3
			c-11.2-10.3-1.7-19.9,6.1-6.1c-7.8-13.8-0.9-13.8,4.4,0c-2.2-10.7,0.5-7.1,5.2,7c-3.7-10.5-5.3-11-3.1-1.1
			c-6.1-10.9-7.8-11.2-3.1-0.5c-8.1-10.7-9.2-9.7-2.1,1.8c-7.1-8.5-6.6-7.5,1,1.9c-5.6-7.8-3.8-7.4,3.3,0.8
			c-4.7-8.2-0.2-0.2,2.9,5.1c-3.1-5.3,6-2.8,5.8,1.6c-2.2-0.2-4.7,2-4.7,4.1c-3.8-2.1-5.4-2.4-3.2-0.6c-6.3-3-8-3.7-3.2-1.3
			c-8.9-6.1-10.8-9.7-3.7-6.8C27.7,54.2,19.3,44.9,30.5,55.3z M55.4,67.4c2.8-3.5,3.3-3.5,0.3,0c5.6-1.1,8.6,0.3,5.8,2.7
			c6.2-1.9,13,9.1,4.3,7.1c8.7,2,6.2,7.5-1.6,3.5c7.8,4,0.3,6.2-4.8,1.4c5.1,4.8-5.3,3-6.7-1.1c0.4,4-0.3,3.8-1.4-0.4
			c0.1,3.7-0.3,3-0.7-1.2c0.2,3.3-8.9,2.7-5.8-0.4c-3.1,3.1-6.3-0.6-2-2.4c-3-1.8-1.1-4.8,3.7-5.8c-1.5-1.3-0.9-1.2,1.1,0.2
			c0.1-1.4,1.6-2.2,2.8-1.5c1.4-3.9,2.3-5.5,1.8-3.1c1.7-2.9,1.9-1.3,0.5,3.1c1.4-1.4,1.2-0.7-0.5,1.4c0.6-0.7-0.2,0.2-1.7,1.8
			c-1.1,0.8-2,1.7-1.6,1.7c1.4,1.1,3.9,1.4,4.8,0.6c7,0.9,9.5-0.3,4.8-2.3c4.7-1.3,4.1-2.7-1.3-2.7C60.2,66.1,59.1,64.7,55.4,67.4
			L55.4,67.4z M54.4,59.1c2.2-8.2-1.5-14.2-2.4-3.9c1.5-10.8,2.4-11.3,1.6-0.9c2.8-11.3,3.7-11.6,1.7-0.5c4.2-11.1,5.3-10.8,2.1,0.5
			C62,44,63,44.3,59.3,54.9c6-10.6,7.1-10.8,2.1-0.4c7.4-11.3,8.5-11.5,2.1-0.4c8.3-11.1,9.2-10.9,1.8,0.3
			c8.4-10.9,13.4-4.3,3.2,4.2c10.2-8.5,15.4-5.4,3.3,2c12.1-7.4,13.5-1.6,0.9,3.7c12.6-5.3,16.9,0.8,2.8,3.9c14.1-3.1,4,1.2-6.5,2.7
			c10.5-1.5-2.2-5.4-8.1-2.5c2.3-4-0.5-6.2-5.5-4.2c2.8-5.3,23.4-2.3,13.2,1.9c10.2-4.2-1.8-13.8-7.7-6.1c3.1-9.9,1-11-4-2.2
			C58.9,49,57.7,49.7,54.4,59.1L54.4,59.1z M71.9,57.1c12.1-9.3,7.6-16.3-2.9-4.5c12.3-13,14.3-13.6,3.8-1.1
			C89.3,39,93.1,40.9,80,55.1C96.7,44.7,84,47.8,71.9,57.1z M66.2,52.6c8.9-11.8-0.9-14.6-6.3-1.7c7.4-13.9,9.1-15.3,3.3-2.7
			c8.6-16,9.8-17.6,2.4-3.1c9.7-17.6,11.3-18.9,3.1-2.4c12.4-18.5,15.5-19,5.9-1.1c11.8-16.8,10.5-15.6-2.5,2.3
			c11.5-15.7,10.7-14.3-1.4,2.6c10.7-13.6,9.9-12.1-1.5,2.9C78.8,37.1,77.3,38.8,66.2,52.6L66.2,52.6z M59,47.5
			c4.9-14.7,2.4-8-1.6,4.3c2.3-11.9,0.3-11.5-3.9,0.8c2.4-12.8,2.6-14.4,0.5-2.9c2.1-17.2-1.2-19.1-6.3-3.6
			c-3.4-15.5-5-15.4-2.9,0.1c-3.1-15.4,2.8-2.9,3.8,8c-4.2-13.4-7.5-16.3-6.3-5.6c-6.1-16.1-7-18.5-1.6-4.6
			c-5.4-16.7,1-23.1,4.1-4.1c0.1-19.7,4.2-20.1,7.9-0.7c2.6-18.6,3.7-17.8,2.1,1.7c3.6-17.4,4.6-16.1,2,2.5
			C61.6,28.1,62.7,30.2,59,47.5L59,47.5z M27.2,37.4c-8.9-17.9-2.9-15.8,11.6,4.1c-6.5-15.3-6.1-13.1,0.8,4.3
			c-8.7-15.7-11.3-16.2-5-1.1c-11.5-17.4-13.8-19-4.5-3C16.6,21.9,15.1,19.6,27.2,37.4L27.2,37.4z M27.9,34.8
			c-9.6-25.1-5.9-26.7,7-3.1C29.4,8.2,32.4,9,40.8,33.4c-2.5-21-0.2-18.7,4.5,4.4c-5-19.5-6.6-18.5-3.1,1.9
			c-5.7-17.9-6.4-16.9-1.2,1.9c-7.1-21.1-9.4-23.6-4.3-4.7c-10.5-22.6-13.3-23.7-5.3-2C20.5,13,15.2,13,27.9,34.8L27.9,34.8z
			 M46.1,37.8c-2.4-20.2-6.4-38.3-2.5-11.6c-0.2-25,2.4-22.8,5,4.3c0.5-21.5,1.6-17.7,2.2,7.3c-1-20.4-2.2-20.5-2.2-0.2
			C46.2,17.4,45,17.5,46.1,37.8z M49.6,62.1c-1.5-6.5-2.4-6.9-1.7-0.7c-2.2-7.7-2.6-8.5-0.7-1.7c-1.8-9-1.5-9.9,0.7-1.7
			c-0.7-9.6,0.2-9.9,1.7-0.7c0.6-9.2,1.6-8.9,1.8,0.7c1.3-8.1,1.7-7.2,0.7,1.7c1-6.8,0.6-5.9-0.7,1.7C51.2,55.3,50.3,55.7,49.6,62.1
			z"/>`;
    }

    getLength() {
        return 4329;
    }
}
mojs.addShape('elipceR2', elipceR2);
mojs.addShape('elipceD', elipceD);
mojs.addShape('elipceR', elipceR);
mojs.addShape('S', S);
mojs.addShape('mountains', mountains);
mojs.addShape('horizontLine', horizontLine);
mojs.addShape('moon', moon);
mojs.addShape('lilium', lilium);
//TODO заменить на лодаш
function randomArrayItem(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
var Bamboo = {
    bubble:   function (duration, delay, coords) {
        const CIRCLE_RADIUS = 15;
        const RADIUS = 15;
        const circle = function (addDuration) {
            return new mojs.Shape({
                parent:      parentTag,
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
            parent:   parentTag,
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
    lilium: function (duration, delay, coords) {
        const leftLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            timeline: {
                delay: +delay + 100
            },
            children: {
                className:        'lilium',
                shape:            'lilium',
                stroke:           COLORS,
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
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            y:        EndPointY,
            children: {
                className:        'hor_line',
                shape:            'line',
                stroke:           ['#11CDC5', '#FC2D79', '#F9DD5E'],
                scale:            1,
                y:                EndPointY,
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
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            y:        EndPointY - 90,
            children: {
                className:        'hor_line',
                shape:            'line',
                stroke:           ['#11CDC5', '#FC2D79', '#F9DD5E'],
                scale:            1,
                y:                EndPointY - 90,
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
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_d_1',
                x:                COORDINATES_X.str1['D'],
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str1['D'], y: EndPointY - 45});

        const equal = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            x:        +COORDINATES_X.str1.D + 34,
            y:        3,
            degree:   0,
            children: {
                className:        'label_d_2',
                origin:           '50% 100%',
                angle:            -90,
                shape:            'elipceD',
                fill:             'none',
                stroke:           COLORS,
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
            ...this.bubble(duration, +delay + 600, {x: COORDINATES_X.str1['D'], y: EndPointY - 85}),
            equal,
        ]
    },
    plant_A:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   0,
            degree:   0,
            angle:    0,
            children: {
                shape:            'line',
                stroke:           COLORS,
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
            x: COORDINATES_X.str1['A'],
            y: EndPointY - 45
        })
            .then({
                x:     COORDINATES_X.str1['A'] - 16,
                angle: 25,
                y:     EndPointY - 44
            });

        const rightLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   0,
            degree:   0,
            angle:    0,
            children: {
                shape:            'line',
                stroke:           COLORS,
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
            x: +COORDINATES_X.str1['A'],
            y: EndPointY - 45
        })
            .then({
                x:     +COORDINATES_X.str1['A'] + 16,
                angle: -25,
                y:     EndPointY - 44
            });

        const horLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   0,
            degree:   0,
            angle:    90,
            x:        COORDINATES_X.str1['A'],
            y:        EndPointY - 20,
            children: {
                shape:            'line',
                stroke:           COLORS,
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
            ...this.bubble(duration, +delay + 600, {x: COORDINATES_X.str1['A'], y: EndPointY - 20})
        ]
    },
    plant_R:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_r_1',
                x:                COORDINATES_X.str1['R'][0],
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str1['R'][0], y: EndPointY - 45});
        const equal = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            x:        +COORDINATES_X.str1['R'][0] + 34,
            y:        3,
            degree:   0,
            children: {
                className:        'label_r_2',
                angle:            -90,
                shape:            'elipceR',
                fill:             'none',
                stroke:           COLORS,
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
            parent:   parentTag,
            count:    3,
            radius:   2,
            x:        +COORDINATES_X.str1['R'][0] + 34,
            y:        3,
            degree:   0,
            children: {
                className:        'label_r_3',
                origin:           '0% 100%',
                angle:            -90,
                shape:            'elipceR2',
                fill:             'none',
                stroke:           COLORS,
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
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -30,
            children: {
                className:        'label_r_4',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: +COORDINATES_X.str1['R'][0] + 40, y: EndPointY - 19});

        return [
            leftLine,
            equal,
            equal2,
            rightLine,
            ...this.bubble(duration, +delay + +duration, {x: +COORDINATES_X.str1['R'][0] + 31, y: EndPointY - 37})
        ]
    },
    plant_N:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_1',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str1['N'][0], y: EndPointY - 45});
        const rightLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_2',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: +COORDINATES_X.str1['N'][1], y: EndPointY - 45});
        const leftLineToRight = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    140,
            children: {
                className:        'label_n_1_1',
                rx:               0,
                ry:               0,
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: +COORDINATES_X.str1['N'][0] + 10, y: +EndPointY - 70});
        const rightLineToLeft = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -38,
            children: {
                className:        'label_n_2_1',
                rx:               0,
                ry:               0,
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: +COORDINATES_X.str1['N'][1] - 13, y: +EndPointY - 24});

        return [
            leftLine,
            rightLine,
            leftLineToRight,
            ...this.bubble(duration, +delay + 700, {x: +COORDINATES_X.str1['N'][0], y: EndPointY - 83}),
            ...this.bubble(duration, +delay + 700, {x: +COORDINATES_X.str1['N'][1], y: EndPointY - 7}),
            rightLineToLeft
        ]
    },
    plant_E:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (0 + Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_e_1',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str1['E'], y: EndPointY - 45});

        const horLineTop = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            children: {
                className:        'label_e_2',
                shape:            'line',
                stroke:           COLORS,
                scale:            1,
                radius:           20,
                strokeWidth:      6,
                duration:         duration,
                delay:            delayModify(+duration + 600),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '200%'}
            }
        }).tune({x: +COORDINATES_X.str1['E'] + 15, y: EndPointY - 80})
            .then({
                children: {
                    radius: 25,
                }
            });

        const horLineCenter = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            children: {
                className:        'label_e_3',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: +COORDINATES_X.str1['E'] + 15, y: EndPointY - 45})
            .then({
                x:        +COORDINATES_X.str1['E'] + 13,
                children: {
                    radius: 24,
                }
            });

        const horLineBottom = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    90,
            children: {
                className:        'label_e_4',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: +COORDINATES_X.str1['E'] + 15, y: EndPointY - 10})
            .then({
                children: {
                    radius: 25,
                }
            });

        return [
            leftLine,
            ...this.bubble(duration, +delay + 600, {x: +COORDINATES_X.str1['E'], y: EndPointY - 80}),
            ...this.bubble(duration, +delay + 200, {x: +COORDINATES_X.str1['E'], y: EndPointY - 45}),
            ...this.bubble(duration, +delay + 100, {x: +COORDINATES_X.str1['E'], y: EndPointY - 10}),
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
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_o',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str1['O'], y: EndPointY - 10});
        const rightLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            fill:     'none',
            children: {
                className:        'label_o_1',
                shape:            'circle',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str1['O'], y: EndPointY - 45});
        const leftLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            //angle:180,
            fill:     'none',
            children: {
                className:        'label_o_2',
                shape:            'circle',
                stroke:           COLORS,
                fill:             'none',
                scale:            1,
                radius:           40,
                strokeWidth:      6,
                duration:         +duration + 600,
                delay:            delayModify(600),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '50%'}
            }
        }).tune({x: +COORDINATES_X.str1['O'], y: EndPointY - 45});
        const innerRightLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            fill:     'none',
            children: {
                className:        'label_o_1',
                shape:            'circle',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str1['O'], y: EndPointY - 45});

        const innerLeftLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            //angle:180,
            fill:     'none',
            children: {
                className:        'label_o_2',
                shape:            'circle',
                stroke:           COLORS,
                fill:             'none',
                scale:            1,
                radius:           30,
                strokeWidth:      6,
                duration:         +duration + 1000,
                delay:            delayModify(1000),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '60%'}
            }
        }).tune({x: +COORDINATES_X.str1['O'], y: EndPointY - 45});
        return [
            rootLine,
            leftLine,
            rightLine,
            innerRightLine,
            innerLeftLine,
            ...this.bubble(duration, +delay + 400, {x: +COORDINATES_X.str1['O'], y: EndPointY - 5}),
            ...this.bubble(duration, +delay + 1000, {x: +COORDINATES_X.str1['O'], y: EndPointY - 15}),
        ]
    },

    plant_S:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const rootLine1 = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_s',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str2['S'] - 30, y: EndPointY - 10});
        const rootLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -90,
            children: {
                className: 'label_s',
                shape:     'line',
                stroke:    COLORS,
                scale:     1,

                strokeWidth:      2,
                duration:         +duration + 100,
                delay:            delayModify(),
                strokeDasharray:  '100%',
                strokeDashoffset: {
                    '100%': '200%'
                }
            }
        }).tune({x: COORDINATES_X.str2['S'], y: EndPointY, radius: 20,});
        const sLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -90,
            fill:     'none',
            children: {
                className:        'label_s_1',
                shape:            'S',
                stroke:           COLORS,
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
        }).tune({x: +COORDINATES_X.str2['S'] + 10, y: EndPointY - 45});
        const sLine2 = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -90,
            fill:     'none',
            children: {
                className:        'label_s_1',
                shape:            'S',
                stroke:           COLORS,
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
        }).tune({x: +COORDINATES_X.str2['S'] + 10, y: EndPointY - 45});
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
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_1',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str2['T'], y: EndPointY - 45});
        const rightLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_2',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: +COORDINATES_X.str2['T'], y: EndPointY - 45});
        const leftLineToRight = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    140,
            children: {
                className:        'label_n_1_1',
                rx:               0,
                ry:               0,
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: +COORDINATES_X.str2['T'] + 10, y: +EndPointY - 70});
        const rightLineToLeft = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            angle:    -38,
            children: {
                className:        'label_n_2_1',
                rx:               0,
                ry:               0,
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: +COORDINATES_X.str2['T'] - 13, y: +EndPointY - 24});

        return [
            leftLine,
            rightLine,
            leftLineToRight,
            ...this.bubble(duration, +delay + 700, {x: +COORDINATES_X.str2['T'], y: EndPointY - 83}),
            ...this.bubble(duration, +delay + 700, {x: +COORDINATES_X.str2['T'], y: EndPointY - 7}),
            rightLineToLeft
        ]
    },
    plant_U:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_1',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str2['U'][0], y: EndPointY - 45});
        const rightLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_2',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: +COORDINATES_X.str2['U'][1], y: EndPointY - 45});
        return [
            leftLine,
            rightLine,
            ...this.bubble(duration, +delay + 700, {x: +COORDINATES_X.str2['U'][0], y: EndPointY - 83}),
            ...this.bubble(duration, +delay + 700, {x: +COORDINATES_X.str2['U'][1], y: EndPointY - 7}),
        ]
    },
    plant_D2: function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_d_1',
                x:                COORDINATES_X.str2['D'],
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str2['D'], y: EndPointY - 45});

        const equal = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            x:        +COORDINATES_X.str2.D + 34,
            y:        3,
            degree:   0,
            children: {
                className:        'label_d_2',
                origin:           '50% 100%',
                angle:            -90,
                shape:            'elipceD',
                fill:             'none',
                stroke:           COLORS,
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
            ...this.bubble(duration, +delay + 600, {x: COORDINATES_X.str2['D'], y: EndPointY - 85}),
            equal,
        ]
    },
    plant_I:  function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const leftLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_n_1',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str2['I'], y: EndPointY - 45});

        return [
            leftLine,
            ...this.bubble(duration, +delay + 700, {x: +COORDINATES_X.str2['I'], y: EndPointY - 83}),
        ]
    },
    plant_O2: function (duration, delay) {
        let delayModify = function (additionalDelay) {
            additionalDelay = additionalDelay ? Number(additionalDelay) : 0;
            return 'stagger(' + (Number(delay) + additionalDelay) + ',125)';
        };
        const rootLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            children: {
                className:        'label_o',
                shape:            'line',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str2['O'], y: EndPointY - 10});
        const rightLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            fill:     'none',
            children: {
                className:        'label_o_1',
                shape:            'circle',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str2['O'], y: EndPointY - 45});
        const leftLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            //angle:180,
            fill:     'none',
            children: {
                className:        'label_o_2',
                shape:            'circle',
                stroke:           COLORS,
                fill:             'none',
                scale:            1,
                radius:           40,
                strokeWidth:      6,
                duration:         +duration + 600,
                delay:            delayModify(600),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '50%'}
            }
        }).tune({x: +COORDINATES_X.str2['O'], y: EndPointY - 45});
        const innerRightLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            fill:     'none',
            children: {
                className:        'label_o_1',
                shape:            'circle',
                stroke:           COLORS,
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
        }).tune({x: COORDINATES_X.str2['O'], y: EndPointY - 45});

        const innerLeftLine = new mojs.Burst({
            parent:   parentTag,
            count:    3,
            radius:   2,
            degree:   0,
            //angle:180,
            fill:     'none',
            children: {
                className:        'label_o_2',
                shape:            'circle',
                stroke:           COLORS,
                fill:             'none',
                scale:            1,
                radius:           30,
                strokeWidth:      6,
                duration:         +duration + 1000,
                delay:            delayModify(1000),
                strokeDasharray:  '100%',
                strokeDashoffset: {'100%': '60%'}
            }
        }).tune({x: +COORDINATES_X.str2['O'], y: EndPointY - 45});
        return [
            rootLine,
            leftLine,
            rightLine,
            innerRightLine,
            innerLeftLine,
            ...this.bubble(duration, +delay + 400, {x: +COORDINATES_X.str2['O'], y: EndPointY - 5}),
            ...this.bubble(duration, +delay + 1000, {x: +COORDINATES_X.str2['O'], y: EndPointY - 15}),
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
var Stars = {
    color:['#ECCAFD', '#B89AC9', '#FFEAD7', '#FDF47E', '#FDFD40'],
    star:       function (duration, delay, count) {
        count = (count ? count : 5);
        let arStars = [],
            arStarRim = [];
        let blurTime = 19690;
        for (let i = 0; i <= count; i++) {
            let color = this.color;
            let star = new mojs.Shape({
                parent:       parentTag,
                className:    'star',
                x:            'rand(-550, 550)',
                y:            'rand(-130, -45)',
                stroke:       '#fdee88',
                fill:         '#fdee88',
                delay:        delay,
                radius:       'rand(0.2, 2)',
                opacity:      'rand(0.1, 1)',
                strokeWidth:  0.1,
                duration:     duration,
            }).then({
                easing:   'sin.in',
                duration: +duration + 2400,
                stroke:   randomArrayItem(color),
                fill:     randomArrayItem(color),
                delay:    300,
            }).then({
                stroke: randomArrayItem(color),
                fill:   randomArrayItem(color),
                delay:  600,
            }).then({
                stroke: randomArrayItem(color),
                fill:   randomArrayItem(color),
                delay:  900,
            }).then({
                stroke: randomArrayItem(color),
                fill:   randomArrayItem(color),
                delay:  1200,
            });

            let starRim = new mojs.Shape({
                parent:        parentTag,
                className:    'star_rim',
                x:             (star._props.x).replace('px', ''),
                y:             (star._props.y).replace('px', ''),
                stroke:        randomArrayItem(color),
                fill:          'none',
                radius:        star._props.radius / 2 + 0.7,
                strokeOpacity: star._props.opacity - 0.1,
                strokeWidth:   star._props.radius / 4,
                duration:      +duration + 1300,
                delay:         delay,
            }).then({
                stroke:        randomArrayItem(color),
                fill:          randomArrayItem(color),
                strokeOpacity: star._props.opacity * 3,
                delay:         blurTime - delay - (+duration + 1300),
                radius:        star._props.radius * 2,
                duration:      10,
                strokeWidth:   star._props.radius * 3,
            }).then({
                stroke:        randomArrayItem(color),
                fill:          randomArrayItem(color),
                delay:         0,
                duration:      500,
                strokeOpacity: star._props.opacity - 0.1,
                opacity:       star._props.opacity,
                radius:        star._props.radius + 0.7,
                strokeWidth:   star._props.radius / 2,
            }).then({
                stroke: randomArrayItem(color),
                fill:   randomArrayItem(color),
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
    },
    shineStars: function (duration, delay, arrStars, count) {
        let calculateParams = 21090;
        count = count ? Number(count) : 1;
        let curentStars = arrStars.filter(
            function (o) {
                return o._o.className == "star_rim";
            });
        for (let i = 0; i < count; i++) {
            let rimStar = sample(curentStars);
            let color = this.color;
            rimStar.then({
                className: 'star_rim_shine',
                radius:   rimStar._props.radius * 3,
                stroke:   randomArrayItem(color),
                fill:     randomArrayItem(color),
                delay:    delay - calculateParams,
                duration: duration,
                opacity:  rimStar._props.opacity * 8,
            }).then({
                duration: 400,
                delay:    10,
                radius:   rimStar._props.radius,
                opacity:  rimStar._props.opacity,
            });
        }
    },

    hideStars: function () {
        if (this.curentStars) {
            this.curentStars.forEach(function (obj) {
                $(obj.el.children).animate({
                    opacity: 0
                }, 800);
            })
        }
    },
    getTimeLine: function () {
        this.curentStars = [
            ...this.star(200, 17050, 5),
            ...this.star(200, 17300, 15),
            ...this.star(200, 17600, 25),
            ...this.star(200, 17900, 30),
            ...this.star(200, 18200, 35),
        ];
        this.shineStars(10, 21200, this.curentStars);
        this.shineStars(10, 21600, this.curentStars);
        this.shineStars(10, 21900, this.curentStars);

        this.shineStars(10, 22100, this.curentStars);
        this.shineStars(10, 22400, this.curentStars);
        this.shineStars(10, 22700, this.curentStars);
        this.shineStars(10, 22700, this.curentStars);

        this.shineStars(10, 23300, this.curentStars, 20);
        this.shineStars(10, 23900, this.curentStars, 15);
        this.shineStars(10, 24500, this.curentStars, 5);

        return this.curentStars;
    },
};
var MoonRise = {
    moon:         function (duration, delay) {
        let moon = new mojs.Shape({
            parent:    parentTag,
            className: 'moon',
            shape:     'moon',
            stroke:    'none',
            delay:     delay,
            duration:  duration,
            x:         {450: 300},
            y:         {0: -80},
            opacity:   {0: 1},
            scale:     1,
            radius:    75,
            isRefreshState: true,
            isShowEnd:      true
        });

        let moonArea = new mojs.Shape({
            parent:        parentTag,
            className:     'moon',
            delay:         delay,
            duration:      duration,
            stroke:        '#dad9d0',
            x:             400,
            opacity:       0,
            strokeOpacity: 0.2,
            strokeWidth:   20,
            y:             {[+EndPointY + 50]: EndPointY},
            scale:         1,
            fill:          '#dad9d0',
            radius:        40,
            isRefreshState: true,
            isShowEnd:      true
        });
        moon.el.style['z-index'] = 949;
        moonArea.el.style['z-index'] = 949;
        return moon;
    },
    mountains:    function (duration, delay) {
        let mountains = new mojs.Shape({
            parent:      parentTag,
            className:   'mountains',
            shape:       'mountains',
            x:           400,
            opacity:     {0: 1},
            y:           {[+EndPointY + 50]: EndPointY},
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
    },
    horizonLine:  function (duration, delay) {
        const horizonLine = new mojs.Shape({
            parent:           parentTag,
            className:        'horizontLine',
            shape:            'horizontLine',
            stroke:           '#adb9bd',
            fill:             'none',
            scale:            1,
            x:                -150,
            y:                {[+EndPointY + 115]: +EndPointY + 65},
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
    },
    hideMoonRise: function () {
        if (this.curentMoonItems) {
            this.curentMoonItems.forEach(function (obj) {
                $(obj.el.children).animate({
                    opacity: 0
                }, 500);
            })
        }
    },
    getTimeLine:  function () {
        this.curentMoonItems = [
            this.moon(5000, 20000),
            this.mountains(1500, 18500),
            this.horizonLine(1600, 18500),
        ];
        return this.curentMoonItems;
    },
};

var timeOl = 0;
/*var sound = new Howl({
 src:    [SONG],
 sprite: {
 str1: [0, 3200],
 str2: [3200, 5800],
 test: [timeOl, 30100]
 }
 });*/

timeline.add(
    ...Stars.getTimeLine(),
    ...MoonRise.getTimeLine(),
    ...FirstRainbow.getTimeLine(),
    ...Bamboo.getTimeLine(),
    FirstRainbow.rainbow(200, 34077, 'A', 'str1'),
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
 ...defaultParams,
 radius:   { 0: 300 },
 count:    10,
 repeat:   77,
 duration: 1500,
 }).tune({ x: point.left, y: point.top }).play();*/
