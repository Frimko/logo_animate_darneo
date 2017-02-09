/**
 * Created by frimko on 24.01.2017.
 */
import mojs from 'mo-js';

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
class U1 extends mojs.CustomShape {
    getShape() {
        return `<path d="M35,100C16.8,100,0,88.3,0,66.1V0"/>`;
    }

    getLength() {
        return 300;
    }
}
class U2 extends mojs.CustomShape {
    getShape() {
        return `<path d="M35,0C16.8,0,0,11.7,0,33.9V100"/>`;
    }

    getLength() {
        return 300;
    }
}
class S extends mojs.CustomShape {
    getShape() {
        return `<path d="M64.3,22.5c-0.6-2.6-1.7-5-3.1-7.2c-1.4-2.2-3.3-4.1-5.6-5.7s-5-2.9-8.2-3.8s-6.8-1.4-10.8-1.4
			c-8.5,0-14.9,1.6-19.3,4.7c-4.3,3.3-6.5,7.6-6.5,13.1c0,2.5,0.4,4.7,1.2,6.6s2.2,3.5,4.1,5s4.5,2.8,7.7,3.9
			c3.2,1.1,7.1,2.2,11.9,3.2c2.8,0.6,5.6,1.2,8.6,1.8c2.9,0.6,5.8,1.4,8.6,2.3c2.8,0.9,5.5,2,8,3.2c2.5,1.3,4.8,2.9,6.6,4.7
			c1.9,1.9,3.4,4.1,4.5,6.7c1.1,2.6,1.7,5.7,1.7,9.2c0,4.1-0.9,7.8-2.6,11.2c-1.7,3.4-4.1,6.4-7.1,8.8c-3,2.5-6.6,4.4-10.8,5.8
			s-8.7,2.1-13.7,2.1c-0.9,0-1.7,0-2.6,0"/>`;
    }

    getLength() {
        return 300;
    }
}
class S2 extends mojs.CustomShape {
    getShape() {
        return `<path d="M36.9,96.7c-5.3-0.2-10.1-0.9-14.2-2.1c-4.8-1.4-8.8-3.3-12.1-5.9c-3.3-2.5-5.8-5.6-7.5-9.2s-2.2-7.7-3-12.1" />`;
    }

    getLength() {
        return 200;
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
class star extends mojs.CustomShape {
    getShape() {
        return `
    <g>
		<line class="st0" x1="50" y1="10" x2="50" y2="90"/>
<line class="st1" x1="10" y1="50" x2="90" y2="50"/>
<line class="st1" x1="28.8" y1="71.2" x2="71.2" y2="28.8"/>
<line class="st1" x1="28.8" y1="28.8" x2="71.2" y2="71.2"/>
	</g>
`;
    }

    getLength() {
        return 360;
    }
}

export {elipceD, elipceR, elipceR2, S, S2, U1, U2, mountains, horizontLine, moon, star}



