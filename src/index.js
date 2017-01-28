/* eslint-disable */
import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';
import {Howler, Howl} from 'howler';
import FirstRainbow from './classes/FirstRainbow';
import Stars from './classes/Stars';
import MoonRise from './classes/MoonRise';
import Letters from './classes/Letters';
import {elipceD, elipceR, elipceR2, S, mountains, horizontLine, moon, lilium} from './resorce.js';
import './index.css';


mojs.isDebug = true;
const PARAMS = {
    COORDINATES_X: {
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
    },
    startPointY:   -100,
    EndPointY:     55,
    parentTag:     '#animate_logo',
    COLORS:        ['#F9DD5E', '#FC2D79', '#11CDC5'],
    STARS_COLOR:   ['#ECCAFD', '#B89AC9', '#FFEAD7', '#FDF47E', '#FDFD40']
};

mojs.addShape('elipceR2', elipceR2);
mojs.addShape('elipceD', elipceD);
mojs.addShape('elipceR', elipceR);
mojs.addShape('S', S);
mojs.addShape('mountains', mountains);
mojs.addShape('horizontLine', horizontLine);
mojs.addShape('moon', moon);
mojs.addShape('lilium', lilium);

let TimeLineFR = new FirstRainbow({
    PARAMS:                     PARAMS,
    defaultParamsForBurstChild: {
        shape:       'line',
        stroke:      PARAMS.COLORS,
        radius:      60,
        strokeWidth: 8,
        isForce3d:   true,
    },
    defaultParamsForBurst:      {
        parent:         PARAMS.parentTag,
        y:              {[PARAMS.startPointY]: PARAMS.EndPointY},
        count:          3,
        degree:         7,
        radius:         {250: 0},
        isRefreshState: false,
        isShowEnd:      false
    },
    timeLine(o) {
        let that = o;
        return [
            that.firstD(),

            ...that.rainbow(200, 500, 'A', 'str1'),
            ...that.rainbow(200, 850, 'R', 'str1', 0),
            ...that.rainbow(200, 850, 'R', 'str1', 1),
            ...that.rainbow(200, 1400, 'N', 'str1', 0),
            ...that.rainbow(200, 1400, 'N', 'str1', 1),
            ...that.rainbow(200, 2000, 'E', 'str1'),
            ...that.rainbow(200, 2500, 'O', 'str1'),

            ...that.rainbow(200, 3200, 'S', 'str2'),
            ...that.rainbow(200, 3700, 'T', 'str2'),
            ...that.rainbow(200, 4300, 'U', 'str2', 0),
            ...that.rainbow(200, 4300, 'U', 'str2', 1),
            ...that.rainbow(200, 5000, 'D', 'str2'),
            ...that.rainbow(200, 5350, 'I', 'str2'),
            ...that.rainbow(200, 5600, 'O', 'str2'),

            ...that.rainbow(200, 6150, 'O', 'str1'),
            ...that.rainbow(200, 6150, 'D', 'str2'),

            ...that.rainbow(200, 6800, 'R', 'str1', 0),
            ...that.rainbow(200, 6800, 'T', 'str2'),

            ...that.rainbow(200, 7400, 'O', 'str1'),
            ...that.rainbow(200, 7400, 'S', 'str2'),

            ...that.rainbow(200, 7900, 'D', 'str1'),
            ...that.rainbow(200, 7900, 'O', 'str2'),

            ...that.rainbow(200, 8400, 'R', 'str1', 0),
            ...that.rainbow(200, 8400, 'D', 'str2'),
        ]
    }
});
let TimeLineMR = new MoonRise({
    PARAMS: PARAMS,
    timeLine(o) {
        let that = o;
        that.curentMoonItems = [
            that.moon(5000, 20000),
            that.mountains(1500, 18500),
            that.horizonLine(1600, 18500),
        ];
        return that.curentMoonItems;
    }
});
let TimeLineStars = new Stars({
    PARAMS: PARAMS,
    timeLine (o) {
        let that = o;
        that.curentStars = [
            ...that.star(200, 17050, 5),
            ...that.star(200, 17300, 15),
            ...that.star(200, 17600, 25),
            ...that.star(200, 17900, 30),
            ...that.star(200, 18200, 35),
        ];
        that.shineStars(10, 21200, that.curentStars);
        that.shineStars(10, 21600, that.curentStars);
        that.shineStars(10, 21900, that.curentStars);

        that.shineStars(10, 22100, that.curentStars);
        that.shineStars(10, 22400, that.curentStars);
        that.shineStars(10, 22700, that.curentStars);
        that.shineStars(10, 22700, that.curentStars);

        that.shineStars(10, 23300, that.curentStars, 20);
        that.shineStars(10, 23900, that.curentStars, 15);
        that.shineStars(10, 24500, that.curentStars, 5);

        return that.curentStars;
    }
});
let TimeLineLetters = new Letters({
    PARAMS: PARAMS,
    timeLine(o) {
        //TODO рандомное перемешивание таймеров роста букв
        let that = o;
        that.curentPlants = [
            //...that.horLine(800, 10111),
            //...that.horLine2(800, 10111),
            ...that.plant_D(800, 10111),
            ...that.plant_A(800, 10400),
            ...that.plant_R(800, 10800),
            ...that.plant_N(800, 11000),
            ...that.plant_E(800, 11200),
            ...that.plant_O(800, 11600),

            ...that.plant_S(800, 12000),
            ...that.plant_T(800, 12400),
            ...that.plant_U(800, 12800),
            ...that.plant_D2(800, 13200),
            ...that.plant_I(800, 13600),
            ...that.plant_O2(800, 14300),
        ];
        return that.curentPlants;

    },
});

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


timeline.add(
    ...TimeLineStars,
    ...TimeLineMR,
    ...TimeLineFR,
    ...TimeLineLetters,
);

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

addOverflow();

