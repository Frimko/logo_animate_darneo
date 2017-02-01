/**
 * Created by Сергей on 01.02.2017.
 */
import mojs from 'mo-js';
import {Howler, Howl} from 'howler';
import FirstRainbow from './classes/FirstRainbow';
import Stars from './classes/Stars';
//import MojsPlayer from 'mojs-player';
import MoonRise from './classes/MoonRise';
import Letters from './classes/Letters';
import {elipceD, elipceR, elipceR2, S, S2, U1, U2, mountains, horizontLine, moon} from './resorce.js';
import './index.css';
import './range.css';
/*global
 $
 */
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
            'T': '165',
            'U': ['221', '275'],
            'D': '318',
            'I': '419',
            'O': '501',
        }
    },
    startPointY:   -100,
    EndPointY:     55,
    parentTag:     '#animate_logo',
    COLORS:        ['#F9DD5E', '#FC2D79', '#11CDC5'],
    STARS_COLOR:   ['#ECCAFD', '#B89AC9', '#FFEAD7', '#FDF47E', '#FDFD40'],
    endTimeSong:   34014
};
class Animation {
    delay = 1000;
    constructor() {
        this.sound();
        this.initResorce();
        this.timeLine();
        this.durationSound = this.sound.duration();
        return this.startAnimation();
    }
    startAnimation(){
        let timeLine = this.timeline;
        this.addOverflow(this.delay);
        setTimeout(() => {
            this.sound.play();
            timeLine.play(0);
        }, +this.delay + 500);
    }
    sound(){
        this.sound = new Howl({
            src: ['din-dong.mp3']
        })
    }
    initResorce() {
        mojs.addShape('elipceR2', elipceR2);
        mojs.addShape('elipceD', elipceD);
        mojs.addShape('elipceR', elipceR);
        mojs.addShape('U1', U1);
        mojs.addShape('U2', U2);
        mojs.addShape('S', S);
        mojs.addShape('S2', S2);
        mojs.addShape('mountains', mountains);
        mojs.addShape('horizontLine', horizontLine);
        mojs.addShape('moon', moon);
    }

    getTimeLineClasses() {
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
                that.hideStars(100,this.durationSound);
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
        return [...TimeLineFR, ...TimeLineMR, ...TimeLineStars, ...TimeLineLetters];
    }
    timeLine() {
        this.timeline = new mojs.Timeline({
            onStart () {
                console.log('start timeline');
            },
            onComplete () {
                console.log('end timeline');
                //removeOverflow();
            },
            onProgress(p){
                p *= 100;
                console.log((p * 34014) / 100);
                $('#js-slider').val((p * 34014) / 100);
            }
        }).add(...this.getTimeLineClasses());
    }
    addOverflow(delay) {
        delay = (delay ? delay : 700);
        let duration = this.durationSound;
        if ($('.shadow').length === 0) {
            let range = '<div id="controls__timeline">' +
                '<input type="range" step="1" min="0" max="'+duration+'" value="0" id="js-slider">' +
                '</div>';
            $('.logo').after($('.logo').clone().addClass('shadow').html(range));
            $('.logo').after($('<div>').addClass('overflow_logo'));
            $('.shadow, .overflow_logo').animate({
                opacity: 1
            }, delay);
        }
        this.slider = document.querySelector('#js-slider');
        this.slider.addEventListener('input', (e)=> {
            return this.timeline.setProgress((e.target.valueAsNumber) / duration);
        });
    }
    removeOverflow() {
        $('.shadow , .overflow_logo').animate({
            opacity: 0
        }, 700, function () {
            $(this).remove();
        })
    };
}

if (process.env.NODE_ENV === 'development') {
    //var debug = false;
    /*    var playerPanel = new MojsPlayer({
     add:         timeline,
     isPlaying:   false,
     isSaveState: false,
     });

     $(playerPanel.stopButton.el).click(function () {
     sound.stop();
     removeOverflow();
     console.log('stopPlayEventButton');
     });*/
    //new Animation.addOverflow();
}
window.animateLogo = () => {
/*    if (debug) {
        $('.intro__title').after(`<div class="play">play</div>
                        <div class="stop">stop</div>
						<div class="time"><input value="0" type="text" style="width: 60px; height: 20px"></div>`);
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
                timeline.play(time);
                setTimeout(() => {
                    timeline.stop();
                    timeline.reset();
                    sound.stop();
                    console.log('stop timer');
                }, 18000);
            } else {
                timeline.play(0);
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
    }else{
    }*/
    return new Animation();

};
//addOverflow();


var loaderAnimationLogo = {
    scriptPath:    "./animate_logo.js",
    init:          function () {
        this.addPlayButton();
    },
    addPlayButton: function () {
        $('.intro__title').after('<div class="play_animation play_button">' +
            '<svg fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="glass" x="0px" y="0px" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">' +
            '<path d="M8.73794928,0.348150316 C9.11206309,0.27529234 9.51838182,0.296610044 9.86109583,0.47605654 C10.2191072,0.665217432 10.5062677,0.969062175 10.7198937,1.31068513 C10.7491465,1.3573682 10.7802779,1.41268629 10.8403937,1.42132131 C11.9978922,1.69278473 13.1035944,2.21790185 14.0149936,2.98938685 C14.7361155,3.59491758 15.3281492,4.36073586 15.7033365,5.22882515 C15.9494358,5.79576814 16.1067031,6.40345762 16.1542054,7.02059166 C16.1778223,7.33469049 16.1759437,7.65013854 16.1759437,7.9650469 C16.1821163,9.17907665 16.1746018,10.3931064 16.1791642,11.6068663 C16.1716497,12.0920465 16.1839949,12.6039412 16.4147969,13.0421684 C16.4695452,13.0872324 16.5454952,13.0920896 16.6104417,13.117455 C16.9434943,13.2264721 17.2784254,13.4040297 17.4705815,13.7097634 C17.6031584,13.9437184 17.6587119,14.223547 17.6146985,14.4898834 C17.5159367,15.0257943 17.019981,15.4640215 16.4746443,15.4731962 C14.8845265,15.4972124 13.2941402,15.4702279 11.7040223,15.4904662 C11.3795578,16.3329203 10.6525317,17.0293886 9.76850669,17.2366291 C9.2373939,17.354551 8.66817196,17.3340429 8.15852911,17.1330088 C7.44572691,16.8615454 6.861476,16.2759832 6.58397695,15.5625147 C6.56867961,15.5352604 6.56545912,15.4807518 6.52037223,15.492625 C5.12294712,15.4729264 3.72552201,15.4907361 2.3280969,15.4812915 C2.13218364,15.4767042 1.93600201,15.4845297 1.7406255,15.4694184 C1.41401394,15.440545 1.09384337,15.2883528 0.887463517,15.0282229 C0.66122396,14.7581087 0.578564668,14.3781678 0.660418838,14.036275 C0.727780793,13.7456527 0.906786468,13.4755385 1.16630444,13.3249653 C1.37617316,13.2019163 1.6120742,13.1371536 1.83965562,13.0559305 C1.98350426,12.746419 2.06267469,12.4072247 2.07179941,12.0656017 C2.08468138,10.5010441 2.0667003,8.93648657 2.08468138,7.37192901 C2.09648985,6.29255159 2.44376623,5.22612671 3.03741024,4.32970376 C3.49445171,3.64456895 4.08702222,3.05307012 4.76171528,2.58489017 C5.57945185,2.01848687 6.51205263,1.63422851 7.47524808,1.40189252 C7.75838299,0.922648946 8.18134093,0.479834361 8.73794928,0.348150316 L8.73794928,0.348150316 Z M5.89264468,3.58736194 C5.14575894,4.04609734 4.4949512,4.68104111 4.0778975,5.46008176 C3.7663149,6.03565977 3.57952637,6.68382591 3.56932815,7.34089691 C3.54597958,8.8800891 3.57362214,10.4195511 3.55778805,11.9587433 C3.55215219,12.3659385 3.47781251,12.7677367 3.41984365,13.1698048 C3.35623894,13.4005217 3.23439699,13.6112702 3.09859958,13.8063676 C7.12662983,13.8063676 11.1543917,13.8060978 15.182422,13.8066375 C15.0345477,13.6269211 14.9113639,13.4215696 14.8448071,13.1973289 C14.6166889,12.1152531 14.7119618,11.0034943 14.6963961,9.90657703 C14.6859295,9.01663035 14.7124985,8.12614398 14.6786833,7.23646714 C14.6472836,6.34840937 14.2919559,5.48949479 13.7436672,4.79896309 C13.1089619,3.99995396 12.2337932,3.40926467 11.2794541,3.06656234 C9.5258963,2.43782499 7.48786167,2.60809678 5.89264468,3.58736194 L5.89264468,3.58736194 Z"></path>' +
            '</svg></div>');
        this.events();
    },
    hideButton:    function () {
        $('.play_animation').animate({
            opacity: 0
        }, 700, function () {
            $(this).hide();
        });
    },
    events:        function () {
        var that = this;
        $('.play_animation').on('click', function () {
            that.loadScript();
            that.hideButton();
        });
    },
    loadScript:    function () {
        window.animateLogo();
        /*$.getScript(this.scriptPath, function() {
         //колбек, выдаст нам объект при оформлении в форме
         window.animateLogo(appElement, data, function (obj) {
         window.animateLogo();
         });
         });*/
    }
};
loaderAnimationLogo.init();
