/**
 * Created by Сергей on 01.02.2017.
 */
import mojs from 'mo-js';
import {Howl} from 'howler';
import FirstRainbow from './classes/FirstRainbow';
import Stars from './classes/Stars';
import MoonRise from './classes/MoonRise';
import Letters from './classes/Letters';
import MojsPlayer from 'mojs-player';
import PointsTimer from './classes/PointsTimer';
import {elipceD, elipceR, elipceR2, S, S2, U1, U2, mountains, horizontLine, moon, star} from './resorce.js';
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

    constructor(data) {
        this.soundSrc = data.soundSrc;
        this.sound();
        this.initResorce();
        this.timeLine();
        this.addOverley(this.delay);
        this.initPointsTimer(() => {
            return this.removeOverflow()
        });
    }

    start() {
        return this.startAnimation();
    }

    stopAnimation() {
        this.sound.stop();
        this.timeline.stop();
        this.timeline.reset();
    }

    startAnimation() {
        setTimeout(() => {
            this.sound.play('stars');
            this.timeline.play(17000);
        }, +this.delay + 1000);
    }

    restart() {
        this.timelineTimer.stop();
        this.timelineTimer.reset();
        this.stopAnimation();
        setTimeout(() => {
            this.sound.play();
            this.timeline.play();
        }, +this.delay + 500);
    }

    sound() {
        let that = this;
        this.sound = new Howl({
            src: [that.soundSrc],
            sprite: {
                start: [0, 34014],
                stars: [17000, 34014],
            }
        });
        this.durationSound = PARAMS.endTimeSong;
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
        mojs.addShape('star', star);
    }

    getTimeLineClasses() {
        let durationSound = this.durationSound;
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
        let TimeLineLetters = new Letters({
            PARAMS: PARAMS,
            timeLine(o) {
                let that = o;
                that.curentLetters = [
                    //...that.horLine(800, 10111),
                    //...that.horLine2(800, 10111),
                    ...that.plant_D(800, 10111),
                    ...that.plant_A(800, 10200),
                    ...that.plant_R(800, 10300),
                    ...that.plant_N(800, 10400),
                    ...that.plant_E(800, 10500),
                    ...that.plant_O(800, 10600),

                    ...that.plant_S(800, 12500),
                    ...that.plant_T(800, 13100),
                    ...that.plant_U(800, 13400),
                    ...that.plant_D2(800, 13700),
                    ...that.plant_I(800, 14000),
                    ...that.plant_O2(800, 14300),
                ];
                //that.hideLetters(1000, +durationSound+300);
                return that.curentLetters;

            },
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
                that.hideMoonRise(500, durationSound);
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
                that.shineStars(10, 21200, that.curentStars, 3);
                that.shineStars(10, 21600, that.curentStars, 3);
                that.shineStars(10, 21900, that.curentStars, 3);

                that.shineStars(10, 22100, that.curentStars, 4);
                that.shineStars(10, 22400, that.curentStars, 4);
                that.shineStars(10, 22700, that.curentStars, 4);

                that.shineStars(10, 23300, that.curentStars, 10);
                that.shineStars(10, 23900, that.curentStars, 15);
                that.shineStars(10, 24500, that.curentStars, 12);

                that.shineStars(10, 25150, that.curentStars, 9);
                that.shineStars(10, 25700, that.curentStars, 6);
                that.shineStars(10, 26300, that.curentStars, 7);
                that.shineStars(10, 26600, that.curentStars, 4);
                that.shineStars(10, 27200, that.curentStars, 8);
                that.shineStars(10, 28170, that.curentStars, 3);

                that.blurShineStars(100, 29300);

                that.shootingStar(500, 29600, {y: 52, x: PARAMS.COORDINATES_X.str1.D});
                that.shootingStar(500, 29800, {y: 52, x: PARAMS.COORDINATES_X.str1.A});
                that.shootingStar(500, 30100, {y: 52, x: PARAMS.COORDINATES_X.str1.R[0]});
                that.shootingStar(500, 30400, {y: 52, x: PARAMS.COORDINATES_X.str1.N[0]});
                that.shootingStar(500, 30700, {y: 52, x: PARAMS.COORDINATES_X.str1.N[1]});
                that.shootingStar(500, 31070, {y: 52, x: PARAMS.COORDINATES_X.str1.E});
                that.shootingStar(500, 31370, {y: 52,x: PARAMS.COORDINATES_X.str1.O});

/*                that.shootingStar(500, 29600, {y: 55, x: PARAMS.COORDINATES_X.str2.S});
                that.shootingStar(500, 29800, {y: 55, x: PARAMS.COORDINATES_X.str2.T});
                that.shootingStar(500, 30100, {y: 55, x: PARAMS.COORDINATES_X.str2.U[0]});
                that.shootingStar(500, 30400, {y: 55, x: PARAMS.COORDINATES_X.str2.U[1]});
                that.shootingStar(500, 30700, {y: 55, x: PARAMS.COORDINATES_X.str2.D});
                that.shootingStar(500, 31070, {y: 55, x: PARAMS.COORDINATES_X.str2.I});
                that.shootingStar(500, 31370, {y: 55, x: PARAMS.COORDINATES_X.str2.O});*/

                that.hideStars(500, durationSound);
                return [
                    ...that.curentStars,
                    ...that.shineFarFarStar(300, 30500, {y: -100, x: 0}),

                    ...that.shineFarFarStar(300, 31600, {y: -65, x: PARAMS.COORDINATES_X.str2.U[0]}),
                    ...that.shineFarFarStar(300, 31800, {y: -79, x: PARAMS.COORDINATES_X.str2.T}),
                    ...that.shineFarFarStar(300, 32000, {y: -90, x: PARAMS.COORDINATES_X.str2.S}),
                    ...that.shineFarFarStar(300, 32200, {y: -100, x: 20}),
                    ...that.shineFarFarStar(300, 32400, {y: -100, x: PARAMS.COORDINATES_X.str1.O}),
                    ...that.shineFarFarStar(300, 32600, {y: -90, x: PARAMS.COORDINATES_X.str1.E}),
                    ...that.shineFarFarStar(300, 32800, {y: -87, x: PARAMS.COORDINATES_X.str1.N[1]}),
                    ...that.shineFarFarStar(300, 33000, {y: -83, x: PARAMS.COORDINATES_X.str1.N[0]}),
                    ...that.shineFarFarStar(300, 33100, {y: -80, x: PARAMS.COORDINATES_X.str1.R[1]}),
                    ...that.shineFarFarStar(300, 33300, {y: -79, x: PARAMS.COORDINATES_X.str1.R[0]}),
                    ...that.shineFarFarStar(300, 33400, {y: -75, x: PARAMS.COORDINATES_X.str1.A}),
                    ...that.shineFarFarStar(300, 33500, {y: -65, x: PARAMS.COORDINATES_X.str1.D}),
                ];
            }
        });
        return [...TimeLineStars, ...TimeLineMR, ...TimeLineFR, ...TimeLineLetters];
    }
    timeLine() {
        let that = this;
        this.timeline = new mojs.Timeline({
            onStart () {
                console.log('start timeline');
            },
            onPlaybackComplete(){
                console.log('end onPlaybackComplete');
                that.showPanel();

            },
            onProgress(p){
                p *= 100;
                $('#js-slider').val((p * 34014) / 100);
            }
        }).add(...this.getTimeLineClasses());
        const MojsCurveEditor = require('mojs-curve-editor').default;
        var playerPanel = new MojsPlayer({
         add:         this.timeline,
         isPlaying:   false,
         isSaveState: true,
         });
    }

    hidePanel() {
        $('.panel').animate({
            opacity: 0
        }, 200, function () {
            //$('#controls__timeline, .replay_button').hide();
        });
        //this.timelineTimer.stop();
        //this.timelineTimer.reset();
    }

    showPanel() {
        let that = this;
        $('.panel').animate({
            opacity: 1
        }, 200, function () {
            that.timelineTimer.play();
        });
    }

    addPanel($tag) {
        let duration = this.durationSound;
        let $range = $('<div id="controls__timeline">').append('<input type="range" step="1" min="0" max="' + duration + '" value="0" id="js-slider">');
        let $replayButton = $('<div class="replay_button" title="restart">').append(
            '<svg><path d="M5.03868442,0.355114828 C5.18894493,0.105224017 5.48268728,-0.0462129771 5.76249569,' +
            '0.0127011539 C6.07958679,0.0633119511 6.33566986,0.367372131 6.34885061,0.703064059 C6.3544995,' +
            '0.854105656 6.31684022,1.00672884 6.2403919,1.13483742 C6.01933195,1.49425316 5.79074015,' +
            '1.84852874 5.56591427,2.2055721 C6.05774441,2.20636289 6.54957455,2.19805956 7.04102809,' +
            '2.21506162 C9.1710367,2.28741925 11.2053908,3.45779393 12.5065187,5.21216977 C13.1512455,' +
            '6.0749257 13.6238694,7.08476926 13.8483187,8.15748092 C14.1955372,9.7932377 13.9338053,' +
            '11.5464273 13.1945537,13.0252116 C12.5558524,14.3055066 11.5661666,15.3968019 10.3610698,' +
            '16.1006083 C9.29907824,16.7312663 8.06874971,17.0539101 6.8482126,16.9926236 C5.29175475,' +
            '16.9309417 3.75789246,16.3097732 2.57426144,15.2441787 C1.61093718,14.3830044 0.892398202,' +
            '13.2347719 0.482288694,11.9805731 C0.139212695,10.9481919 -0.00690529302,9.84938406 0.000249969294,' +
            '8.75848414 C0.0119243447,8.50226698 0.16030189,8.2606795 0.377595908,8.14403743 C0.630666239,' +
            '7.99932218 0.966586975,8.04360663 1.17634914,8.25118998 C1.34242654,8.40341777 1.41812169,' +
            '8.6378881 1.41096642,8.86524129 C1.41849828,9.8181477 1.55105893,10.7777759 1.87266914,' +
            '11.6721635 C2.24135345,12.7199652 2.88570365,13.6661499 3.73868623,14.3387199 C4.60974527,' +
            '15.0318506 5.68190484,15.4351554 6.77138768,15.5063268 C7.76257981,15.5818476 8.76958883,' +
            '15.339074 9.63801172,14.8345476 C11.0483516,14.0247748 12.0930199,12.5566663 12.4473937,' +
            '10.9118154 C12.6654409,9.91818311 12.6323007,8.86168272 12.3193521,7.89414662 C11.6670935,' +
            '5.84322314 9.9144308,4.23633033 7.89852979,3.80851094 C7.1287742,3.6376995 6.33830601,' +
            '3.69859061 5.55762923,3.68910109 C5.78207851,4.03467794 6.0008789,4.38460415 6.22231544,' +
            '4.73255338 C6.33679964,4.91048197 6.38123759,5.14099833 6.32437208,5.34937247 C6.25846835,' +
            '5.62733646 6.0219681,5.8483633 5.75232769,5.88908918 C5.49360847,5.93732759 5.21831916,' +
            '5.81277759 5.06881184,5.58740138 C4.61313461,4.87805943 4.16724879,4.16160033 3.71307793,' +
            '3.45107219 C3.52591133,3.19287804 3.48712227,2.8208096 3.65809538,2.54245022 C4.1145258,' +
            '1.81057064 4.58112422,1.08620361 5.03868442,0.355114828 L5.03868442,0.355114828 Z"></path>' +
            '</svg>');
        $tag.append($replayButton, $range);
        $replayButton.on('click', () => {
            this.hidePanel();
            this.restart();
        });
        $('#js-slider').on('input', (e) => {
            this.timeline.setProgress((e.target.valueAsNumber) / duration);
            //this.timelineTimer.stop();
            this.timelineTimer.reset();
        });
    }

    addOverley(delay) {
        delay = (delay ? delay : 700);
        let $logo = $('.logo');
        if ($('.panel').length === 0) {
            let $shadow = $('<div>').addClass('panel');
            $logo.after($shadow);
            this.addPanel($shadow);
            $logo.after($('<div>').addClass('overflow_logo'));
            $('.overflow_logo').animate({
                opacity: 1
            }, delay);
        }
    }

    removeOverflow() {
        this.stopAnimation();
        $('.panel , .overflow_logo').animate({
            opacity: 0
        }, 700, function () {
            $(this).remove();
        });
        $('#animate_logo').animate({
            opacity: 0
        }, 700, function () {
            $(this).html('');
        })
    };

    initPointsTimer(callBackEndTimeLine) {
        let TimeLinePT = new PointsTimer({
            PARAMS: PARAMS,
            timeLine(o) {
                return [
                    ...o.bubble(2000, 1000, {x: 300, y: 200}),
                    ...o.bubble(2000, 3000, {x: 400, y: 200}),
                    ...o.bubble(2000, 5000, {x: 500, y: 200}),
                ];
            }
        });
        this.timelineTimer = new mojs.Timeline({
            onPlaybackComplete () {
                console.log('hide animation');
                callBackEndTimeLine();
            },
        }).add(...TimeLinePT);
        //window.timelineTimer = timelineTimer;
    }
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
    return new Animation({soundSrc: 'din-dong.mp3'});

};
//addOverflow();


var loaderAnimationLogo = {
    scriptPath:    "./animate_logo.js",
    init:          function () {
        this.addPlayButton();
    },
    addPlayButton: function () {
        $('.intro__title').after('<div class="play_animation">' +
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
        var anim = window.animateLogo();
        anim.start();
        /*$.getScript(this.scriptPath, function() {
         //колбек, выдаст нам объект при оформлении в форме
         window.animateLogo();
         });*/
    }
};
loaderAnimationLogo.init();
let item = window.animateLogo();
item.addOverley(1000);
//item.showPanel();
//window.timer = item.timelineTimer;





let shootingStar = (duration, delay) => {
    const LINE1_DURATION = 1000;
    let coordFirst = {x: -100, y: -100};
    let coordLast = {x: -200, y: 100};
    let katet1 = coordFirst.y - coordLast.y;
    let katet2 = coordFirst.x - coordLast.x;
//45
    let angle = (Math.atan(katet2/katet1)/ Math.PI) * 180;

    const ball = new mojs.Shape({
        shape: 'circle',
        fill: '#F9DD5E',
        radius: 3,
        x: {
            [coordFirst.x]: coordLast.x
        },
        y:{
            [coordFirst.y]: coordLast.y
        },
        angle: -90 - angle,
        radiusX: 4,
        duration: 2 * LINE1_DURATION,
        easing: 'cubic.out',
    });
    const trailOpts = {
        parent: ball.el,
        fill: 'none',
        stroke: '#F9DD5E',
        shape: 'line',
        radiusY: 0,
        radiusX: 30,
        strokeDasharray: '100%',
        strokeDashoffset: {
            '100%': '0%'
        },
        duration: LINE1_DURATION / 2,
        strokeWidth: { 2: 1 },
        isShowStart: true,
        easing: 'cubic.out',
        opacity: .75,
        y: 1,
        x: 10,
        left: 35
    };

    const trail2Opts = {
        ...trailOpts,
        radiusX: 35,
        y: 0,
        x: 15,
    };
    const trail3Opts = {
        ...trailOpts,
        y: -1
    };
    const trailReturn = {
        easing: 'quad.in',
        strokeDashoffset: '100%',
        duration: LINE1_DURATION / 2,
    };

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

    return timeline.add( ball, trail1, trail2, trail3, );
};


/*new MojsPlayer({
    add: shootingStar(),
    isPlaying: true,
    isRepeat: true
});*/
