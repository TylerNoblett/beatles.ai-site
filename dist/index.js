import * as ABCJS from 'abcjs/midi';
import 'abcjs/abcjs-audio.css';
import './styles.css';

// const abc2 = `T:New Beatles Song\nM: 4/4\nL: 1/4\nQ: 138\nK: G\n"C"c/2"G"e/2d/2=f/2d/2d/2"Em"d|"A"f"G"d/2c/2"C"c/2"Bmin"d/2"G"d/2d/2|-d/2"C"d/2"Em"d/2"D"ee/2"C"ad/2|\nw: you said on the day of this *  what was to last by then *  back in the ussr on the\nw: suddenly was low in a shop in *  the city in an octopuss garden garden with eight lives friends with two\n-d/2d/2"G"d/2e/2d/2d/2"Em"d/2"G"d/2|-d/2=f"D"d/2"G7"B/2"G"c/2"C"B/2d/2"G"d/2|-d/2=f/2d/2d/2"G7"d/2"G"g/2|\nw: *  night before : it took from the *  first time in the world so no *  reply the *  time that\nw: two friends and friends but and at one one time the two were the first liveslives to be  *  born i\n"C"d/2"G"g"D"a/2"G"d/2"C"d/2||"G"d/2"Em"z"D"B/2"D7"B/2"D"c/2"Em"d/2"G"d/2|-d/2"C"d/2d/2"D"c/2"Am"c/2"G"c/2d/2"A"d/2"C"d/2|\nw: the *  *  first time see *  the pair of soul *  filling wings on the wings of the universe\nw: Tennessee  *   *  at the\n-d/2"G"d/2|-d/2d/2"Em"B/2"G"d/2=f/2"C"e"G"d/2|-d/2e/2B/2"C"B/2d/2"G"e/2f/2|\nw: * *  pa of two four but three *  broken *  broken wings are in\n-f/2"D"g/2"G"f/2"C"c/2"G"e/2dc/2|-c/2"C"c/2d/2"G"c/2d/2"C"d/2:|"G"B/2A"G7"B/2"G"B/2"Em"d/2_B/2"G"d/2"D"^g/2|\nw: *  : the children of the night *  is six years old love *  eight easy to find and to win\n-^g/2"G"d/2d/2d/2_e/2"C"e/2"G"c/2"C"d/2"F"_B/2|-_B/2"C"d/2c/2"Cm"A/2"G"A/2"C"G/2d/2"G"e/2g/2|-g/2"C"d/2g/2"G"e/2d/2c/2"Bb"d/2"G"c/2||\nw: *  a way to make all the people lose *  their soul - filling broken *  and at *  *  times there will be the only\n"G"d/2"Em"z"D"B/2"D7"B/2"D"c/2"Em"d/2"G"d/2"C"d/2|-d/2d/2"D"c/2"Am"c/2"G"c/2d/2"A"d/2"C"d/2|-d/2"G"d/2d/2"Em"B/2"G"d/2=f/2"C"e/2|\nw: see *  the pair of soul *  filling *  wings on the wings of the *  *  *  pa of two four but\n-e/2"G"d/2e/2B/2"C"B/2d/2"G"e/2f/2|-f/2"D"g/2"G"f/2"C"c/2"G"e/2dc/2|-c/2"C"c/2d/2"G"c/2d/2"C"d/2"Fmaj7"g/2"D7"f/2|]\nw: *  *  broken *  broken wings are * *  : the children of the * *  is six years old *  to be\n`;
const abc1 = `T:Beatles Song #1\nM: 4/4\nL: 1/4\nQ: 138\nK: G\n "G"G/2"D"A/2G"G7"z/2|G/2"G"A/2G/2"D"G/2"G"G"D"A/2"G"G|\nw: eleanor through in *  City Number No *  - 4 *\nw: for this First  *  Run to be -  Live and -\n-Gz/2"C"A/2"G"G|"G7"A"D"G"C"c/2A/2"G"G/2"A"G/2|\nw: * *  4 *  *  * nine *\nw: *  *   the -  Long -  -  Tour is *\n"C"G/2"D7"D/2G/2"Cm"G/2"Em"A/2"A"A/2|-A/2"D7"GD/2"D"E"G"G|\nw: *  to the same that the *  number of *  *\nw: -  a long long long long long long long -  -  \n"Gsus"A"G"GG"C"G/2"Em"=F/2|-=F/2"D"G"C"z"G"A/2|\nw: yourself is the number *  *  where *  *\nw: time since the Long -  -  Way  -  - \n-A/2A"C"G"G7"B/2"G"G|E/2BA"Em"B/2"A"A/2"G"B/2||\nw: *  *  its all four four four can *  be found \nw: -  -  is left but the day before -  when the\n"G"d/2d"D"e/2"C"d/2"G"d/2d/2=f/2|"Am"^c"D"d/2"Am"d"G"f/2d/2"D7"c/2|\nw: let to go go go go go go go by way of a \n"G"d/2dd/2"D7"d/2"Em"df/2|"G"d"Em"z/2"G"B/2d/2a/2g|\nw: deep hole in the stream of *  *  mind running on the \n-g/2d|d/2d/2"C"d/2"G7"g/2"G"e/2gc/2|\nw: *  trees of the car and *  *  * \nc/2c/2d/2z/2d/2|-d/2d/2d/2"C"e"G"c/2:|\nw: threw right past *  *  *  the *  trees and \n"G"B/2B/2B/2B/2G/2G/2"C"z|"G"D/2"C"=F/2"A"G"G"G/2G/2|\nw: Im the taxman of me please la la *  la la *  \n-G/2D/2G"A"=F/2"G"GG/2|G/2"D7"A/2"D"A/2"D7"G/2"G"G/2|\nw: *  *  do do do do *  nt nt *  *  \n-G/2z"C"E/2"G"D"C"D/2"G"E/2=F/2|-=F/2zE/2"Em"=F/2"G"G/2"D7"E/2"G"z/2"Em"G/2||\nw: *  *  nt nt la la la *  *  la they they *  they they \n"G"d/2d"D"e/2"C"d/2"G"d/2d/2=f/2|"Am"^c"D"d/2"Am"d"G"f/2d/2"D7"c/2|\nw: let to go go go go go go go by way of a \n"G"d/2dd/2"D7"d/2"Em"df/2|"G"d"Em"z/2"G"B/2d/2a/2g|\nw: deep hole in the stream of *  *  mind running on *  \n-g/2dd/2d/2|"C"d/2"G7"g/2"G"e/2gc/2c/2c/2d/2|\nw: *  trees of the car and *  *  *  threw right past \n-d/2z/2d/2d/2d/2"C"e/2|]\nw: *  *  *  the *  trees \n`;
const abc2 = `T:Beatles Song #2\nM: 4/4\nL: 1/4\nQ: 123\nK: G\n"G"d/2c"C"d/2"G"d/2=f/2d/2d/2|-d/2c/2d"Em"d/2"G"d/2d/2|\nw: now had a long time of fine *  *  peace *  of mind \nw: got to a change in the style style  *  of  *  the time\n-d/2"D"a"C"e/2"G"d/2f/2"C"d/2|-d/2d/2"Em"e/2"G"d/2eA/2|\nw: *  and the word could *  *  *  *  have lasted *\nw: time that shining along with  *  *   *   *  the people  *  \n -A/2"Em"c"G"d/2"C"c/2"D"B/2|-B/2"Em"^G/2"Am"G/2|\nw: *  *  years after *  *  the * \nw:  *   *  of the  *  *  New  *   \n-G/2"G"A/2G"G7"G/2"G"B/2"C"G/2|-G/2A/2G"G"z/2"C"A/2|\nw: *  *  end of the * *  *  *  *  First \nw:  *   *  Orleans people and  *  *   *   *   *  people\nG"B7"G/2"A"G/2"G"G/2|-G/2"D"G/2"G"E/2_B/2GG|\nw: After World News *  *  *  at the *  *\nw: in the late  *  *   *  Christ she  *   *\n"C"z/2"G"A/2||"D7"z/2"G"G|\nw: *  *  *  shes\nw:  *   *  \nG/2G"Em"B/2G"G"G|"C"A/2"G"B/2"D"G"C"B/2"D"G"Em"G/2|\nw: very far away be * on earth that the world would \n"C"A/2"G"GG/2"C"G"Cm"G"G"G/2|-G/2G/2"Am"D/2"Em"E/2"C"z/2"Em"=F/2"G"G/2G/2|\nw: be lonesome and ever has the *  *  fun that you said *  we \nE/2"C"zA/2AG/2"G7"A/2F/2|"D"A/2"D7"G"F"z"Am"E/2"D"A/2"Em"A/2"A"F/2:|\nw: *  *  ve got to do and all things *  stand our hands well \n"G"B/2"C"B/2"D"A/2"G"G/2"C"A/2A"Em"G/2|-G/2"C"A/2"G"B/2"C"B/2"Em"c"G"A/2G/2"Em"B/2|\nw: ah like the old one *  be *  no - one is *  the *  \n-B/2"C"B/2"G"A/2"D"B/2"C"B/2"G"B/2A/2G/2"D"A/2|-A/2"G"GG/2A/2A/2G/2G/2|\nw: *  one who got it lay down the *  *  trees and *  there is *  \n-G/2"C"G"G"GG/2"D"A/2||"D7"z/2"G"G|\nw: *  a hole in the *  shes \nG/2G"Em"B/2G"G"G|"C"A/2"G"B/2"D"G"C"B/2"D"G"Em"G/2|\nw: very far away be * on earth that the world would \n"C"A/2"G"GG/2"C"G"Cm"G"G"G/2|G/2"Am"D/2"Em"E/2"C"z/2"Em"=F/2"G"G/2G/2E/2|\nw: be lonesome and ever has *  *  fun that you said *  we *  \n"C"zA/2AG/2"G7"A/2F/2"D"A/2|"D7"G"F"z"Am"E/2"D"A/2"Em"A/2"A"F/2"C"A/2|]\nw: *  ve got to do and all things *  stand our hands *  i\n`;
const abc3 = `T:Beatles Song #3\nM: 4/4\nL: 1/4\nQ: 102\nK: G\n"G"B/2GA/2"C"G/2"A"A/2|-A/2"C"A/2"B7"A/2"G"A/2G/2"Em"B/2"G"G/2"C"A/2"G"A/2|\nw: eleanor *  on a * *  tree in the shade the of the world \nw: nothing  *  is more  *  *  five and a more Big Sue look up \n"C"G/2"G"G/2"C"E/2D"G7"c/2"G"G/2d/2|"C"_B/2B/2"G"c/2c/2A/2d/2^c/2"C"B/2"Em"B/2|\nw: is in the home where *  the *  world has been *  beneath the ocean *\nw: up the number of number  *  the *  number and evening  *  of the two  * \n"G"A/2A/2"C"G/2"D"G"G"GB/2|-B/2d/2B/2A"Em"G/2"C"E|\nw: *  where *  it will be *  to *  be free on\nw:  *  city  *  in the ticket ticket number  *  five number six\n-E/2"G"G/2G/2G/2E/2"Em"G/2||"Em"G/2"D7"G/2"G"A/2"D"A/2"B7"G/2"G7"b/2|\nw: *  *  the *  clouds that *  im really ready to love\nw: six  *  eight  *  days a\n"C"B/2"G"A/2"C"G"G"G_B/2d/2|-d/2"C"B/2"Em"B/2"C"A/2"D"G"C"E/2"A"A/2|\nw: *  you all *  my world *  is my love of *  love \n"C"A/2c/2d/2d/2"D7"d/2"D"d/2"G"d/2"Em"g/2"C"g/2|-g/2"Em"d"G"c/2"C"B/2"Em"c/2"C"d/2"D"e/2"G"d/2|\nw: and love girl me love love yeh yeh yeh *  yeh you you you you do do \n-d/2"D7"d/2"Em"a"G"z/2|-z/2G/2|\nw: *  do do *  *  * \n-G/2A"C"G"G"E/2:|"Em"B/2"C"A/2G/2"G"A/2"A"c/2"C"B/2|\nw: *  *  nt * day at nine oclock on the \n"Em"G/2"D7"A/2"G"G/2"Gsus"A/2"Em"A/2|-A/2"G7"A/2A/2"D7"G/2"D"G"undefined"G/2"Em"G/2|\nw: city line – e * *  - *  *  a - e \n-G/2"G"E/2"C"G/2"G"D/2"C"G/2"D"A/2F/2"C"G/2A/2z/2|-z/2"G"G"C7"A/2"Am"G/2"A"G/2|\nw: *  - e - e - o - o * *  - *  *  * \n-G/2"D"z"Bb"A/2"C"B"Em"c/2||"Em"G/2"D7"G/2"G"A/2"D"A/2"B7"G/2"G7"b/2|\nw: *  *  e - e *  im really ready to love \n"C"B/2"G"A/2"C"G"G"G_B/2d/2|-d/2"C"B/2"Em"B/2"C"A/2"D"G"C"E/2"A"A/2"C"A/2|\nw: *  you all *  my * *  is my love of *  love and \n-A/2c/2d/2d/2"D7"d/2"D"d/2"G"d/2"Em"g/2"C"g/2"Em"d/2|-d/2"G"c/2"C"B/2"Em"c/2"C"d/2"D"e/2"G"d/2"D7"d/2|\nw: *  love girl me love love yeh yeh *  yeh *  you you you you do *  do \n"Em"a"G"z/2G/2A/2|-A/2"C"G"G"E/2|]\nw: do *  *  *  *  nt *\n`;
const abc4 = `T:Beatles Song #4\nM: 4/4\nL: 1/4\nQ: 78\nK: G\n"Em"z/2"G"d/2"Em"e/2|"G"d/2d/2B/2"D"B/2"G"G/2B/2"C"G/2"Em"A/2|\nw: *  she said about her and how she was born *\nw:  *  as : a lie ring was lost there set  *\nA/2"C"G|"G"z/2G/2"C"B/2B/2"G"A|\nw: when *  *  she was walking down\nw: to  *  *  be a lie cos \n"D"G"G"A/2"G7"A/2"G"A/2A/2|G/2z/2E"C"A/2"G"G/2"C"z/2"G"G/2G/2|\nw: *  in *  the *  *  *  shade she said *  : a\nw:  *  the  *  lie  * *  *  left a lie  *  cos the    \n-G/2B/2"G"B/2"C"B/2"G"B/2_B"C"B/2"G"G/2|-G/2GA/2"Am"G/2"D"G/2"C"E/2"G"E/2G/2||\nw: *  long long time waiting *  for nine *  - o -  - o - o \nw: the sign was lost to  *  him and and he wanted  *  it to a book \n"Bb"A/2"D"A"C"G/2"Em"z"G"A/2A/2|"C"A/2"G"G/2GA/2"D"E"G"D/2|\nw: come on after *  nine years to see the world *  she \n-D/2B/2Bc"C"B/2"G"d/2|-d/2g"D"g/2"C"d/2"G7"c/2"C"=f/2|\nw: *  knew who knew *  who *  knew the world and how \n-=f/2"F"d/2"G"d/2cc/2B/2"A"B/2|-B/2"G"c/2"G7"z"G"B/2B/2|\nw: *  *  they could get it *  *  *  *  is a \n-B/2A/2"D"G/2"G"A/2"C"G"G"A/2"D"G"Em"G/2:|"Em"c/2"C"d"G"=f/2"C"d/2d/2d/2d/2|\nw: *  lot to the world *  they met ah like she was in the world \n-d/2d"G"d/2"D"e/2"C"A/2"G"G|B/2A/2"C"G"Em"A/2"C"G/2"G"G/2"D"G/2"G"G/2|\nw: *  well if you *  *  ve seen *  her *  walk right back \n-G/2A/2"C"zz"D"c/2B/2"G"G/2|-G/2F/2G/2"C"G"G"A/2"C"B"G"A/2||\nw: *  to *  *  her she *  *  was the *  only *  model \n"Bb"A/2"D"A"C"G/2"Em"z"G"A/2A/2|"C"A/2"G"G/2GA/2"D"E"G"D/2|\nw: come on after *  nine years to see the world *  *  \nB/2Bc"C"B/2"G"d/2g/2|-g/2"D"g/2"C"d/2"G7"c/2"C"=f/2"F"d/2"G"d/2c/2|\nw: knew who knew *  *  knew *  the world and *  *  they could \n-c/2c/2B/2"A"B/2"G"c/2"G7"z/2|-z/2"G"B/2B/2A/2"D"G/2"G"A/2"C"G"G"A/2|\nw: *  get it *  *  *  *  is *  lot to the world *  \n"D"G"Em"G/2"C"G"G"E/2|]\nw: they *  in *\n`;
const abcArr = [abc1, abc2, abc3, abc4];
let position = 0;
let abc = abc1;

const abcOptions = { add_classes: true, responsive: "resize" };
const audioParams = { chordsOff: false };

const createSong = () => {
	let visualObj = ABCJS.renderAbc("paper", 
			abc, abcOptions);

	// let timingCallbacks = new ABCJS.TimingCallbacks(visualObj, {qpm: 171});

	createSynth.init({ visualObj: visualObj[0] }).then(function () {
		synthControl.setTune(visualObj[0], false, audioParams).then(function () {
			console.log("Audio successfully loaded.")
		}).catch(function (error) {
			console.warn("Audio problem:", error);
		});
	}).catch(function (error) {
		console.warn("Audio problem:", error);
	});
}

function CursorControl() {
	const self = this;

	self.onStart = function() {
		let svg = document.querySelector("#paper svg");
		let cursor = document.createElementNS("http://www.w3.org/2000/svg", "line");
		cursor.setAttribute("class", "abcjs-cursor");
		cursor.setAttributeNS(null, 'x1', 0);
		cursor.setAttributeNS(null, 'y1', 0);
		cursor.setAttributeNS(null, 'x2', 0);
		cursor.setAttributeNS(null, 'y2', 0);
		svg.appendChild(cursor);

	};
	self.beatSubdivisions = 2;
	self.onBeat = function(beatNumber, totalBeats, totalTime) {
		if (!self.beatDiv)
			self.beatDiv = document.querySelector(".beat");
	};
	self.onEvent = function(ev) {
		if (ev.measureStart && ev.left === null)
			return; // this was the second part of a tie across a measure line. Just ignore it.

		let lastSelection = document.querySelectorAll("#paper svg .highlight");
		for (let k = 0; k < lastSelection.length; k++)
			lastSelection[k].classList.remove("highlight");

		for (let i = 0; i < ev.elements.length; i++ ) {
			let note = ev.elements[i];
			for (let j = 0; j < note.length; j++) {
				note[j].classList.add("highlight");
			}
		}

		let cursor = document.querySelector("#paper svg .abcjs-cursor");
		if (cursor) {
			cursor.setAttribute("x1", ev.left - 2);
			cursor.setAttribute("x2", ev.left - 2);
			cursor.setAttribute("y1", ev.top);
			cursor.setAttribute("y2", ev.top + ev.height);
		}
	};
	self.onFinished = function() {
		let els = document.querySelectorAll("svg .highlight");
		for (let i = 0; i < els.length; i++ ) {
			els[i].classList.remove("highlight");
		}
		let cursor = document.querySelector("#paper svg .abcjs-cursor");
		if (cursor) {
			cursor.setAttribute("x1", 0);
			cursor.setAttribute("x2", 0);
			cursor.setAttribute("y1", 0);
			cursor.setAttribute("y2", 0);
		}
	};
}
let cursorControl = new CursorControl();

let synthControl = new ABCJS.synth.SynthController();
synthControl.load("#audio", 
		cursorControl, 
		{
				displayLoop: true, 
				displayRestart: true, 
				displayPlay: true, 
				displayProgress: true, 
				displayWarp: true
		}
);

let createSynth = new ABCJS.synth.CreateSynth();
createSong();

const newSong = document.getElementById("new-song");
newSong.onclick = () => {
	position < 3 ? position++ : position = 0;
	abc = abcArr[position];
	createSong()
}







