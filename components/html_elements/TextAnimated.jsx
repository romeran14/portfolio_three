"use client"
import {Pane} from 'tweakpane';
import gsap from 'gsap'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin)

const config = {
	theme: 'dark',
	random: true,
}

// Utilities for building random strings
// const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?~'
const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'




const scramble = (event) => {
	console.log("SCRAMBLE")
	const target = event.target.firstElementChild
	if (!target || !target.innerText ) {
		return;
	}
		if (!gsap.isTweening(target) && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {

			gsap.to(target, {
				duration: .8,
				ease: 'sine.in',
				scrambleText: {
					text: target.innerText,
					speed: 2,
					chars: config.random ? defaultChars : target.innerText.replace(/\s/g, '')
				}
			});
	}
}



const TextAnimated = () => {
	return (
		<div className="text_animated_container">

			<section className="text_animated">
        <p
          onScroll={scramble}
          onPointerOver={scramble}
          onPointerEnter={scramble}
          onFocus={scramble}
          className="fluid"
        >
          <span aria-hidden="true">Hi, I'm Romeran Rodriguez FullStack Developer.</span>
        </p>
        <p
          onPointerEnter={scramble}
          onFocus={scramble}
          className="fluid"
        >
          <span aria-hidden="true">Over the past five years, I've worked developing</span>
        </p>
        <hr />
        <p
          onPointerEnter={scramble}
          onFocus={scramble}
          className="fluid"
        >
          <span aria-hidden="true">web applications, REST APIs, and Android apps.</span>
        </p>
        <p
          onPointerEnter={scramble}
          onFocus={scramble}
          className="fluid"
        >
          <span aria-hidden="true">I'm excited to use new technologies and improve the</span>
        </p>
        <p
          onPointerEnter={scramble}
          onFocus={scramble}
          className="fluid"
        >
          <span aria-hidden="true">performance of the software I've built.</span>
        </p>
        <br></br>
        <p
          onPointerEnter={scramble}
          onFocus={scramble}
          className="fluid"
        >
          <span aria-hidden="true">Fun fact: I have a mechanical engineer degree.</span>
        </p>
                <br></br>
        <p
          onPointerEnter={scramble}
          onFocus={scramble}
          className="fluid"
        >
          <span aria-hidden="true">located in Zulia Venezuela</span>
        </p>
		</section>

		</div>
	)
}

export default TextAnimated
