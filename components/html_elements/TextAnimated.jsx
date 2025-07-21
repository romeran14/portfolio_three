"use client"
import {Pane} from 'tweakpane';
import gsap from 'gsap'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrambleTextPlugin)

const config = {
	random: true,
}

// Utilities for building random strings
const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'


const scramble = (event) => {
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

  const ref = useRef(null)

const scrambleAll = (e) => {
   console.log("AQUII")
  const allParragraph = e.target.getElementsByClassName("fluid")
  console.log(allParragraph)
}

useEffect(() => {
  const allParragraph = ref.current.getElementsByClassName("fluid")
  if (!ref.current && !(allParragraph.length > 0)) return;
  

  console.log("HOLIS",allParragraph)

  for (let i = 0; i < allParragraph.length; i++) {
        const target = allParragraph[i]
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


  
}, [])

	return (
		<div  ref={ref}  className="text_animated_container">

			<section className="text_animated">
        <p
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
