import { PropsWithChildren, FC, useRef, useEffect } from "react"
import gsap from "gsap"

export const TabsControls:FC<PropsWithChildren> = ({children}) => {

        /**This can be refactor on individual/reusable components but i need finish this to get a job*/
        const tabRef = useRef<HTMLDivElement>(null)

    
        useEffect(() => {
            if ( !tabRef.current) return;
    
    
                let tabButtons = tabRef.current.querySelectorAll('.tabsBox button')
                let tabIndicator = tabRef.current.querySelector('.tabsBox .indicator');
                let contetnBox = tabRef.current.querySelectorAll('.tabsContentContainer .contentBox')
    
                    // flag
                let activeIndex:number;
    
                    // initialise tab animation
                animateTabs();
                // add gsap logic
                tabButtons.forEach((tab, index) => {
                    tab.addEventListener('click', () => {
                        animateTabs(tab, index)
                    })
                })
    
    
                function animateTabs(tab = tabButtons[0], index = 0) {
                    if (activeIndex === index) return;
    
                    activeIndex = index;
                    //moveIndicator
                    
                    gsap.to(tabIndicator, {
                        //@ts-ignore
                        x: tab.offsetLeft,
                        //@ts-ignore
                        width: tab.offsetWidth,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                    //move contentBox
                    gsap.to(contetnBox, {
                        x: -index * 100 + "%",
                        duration: 0.5,
                        ease: "power2.out"
                    })
                    //animate h3 and p tag
                    let activeBox = contetnBox[index];
    
                    //@ts-ignore
                    let [h3, p, div] = activeBox.children;
    
                    gsap.timeline()
                        .fromTo([h3, p , div ],
                            {
                                opacity: 0,
                                y: 5
                            },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.3,
                                ease: "power2.out",
                                stagger: 0.2,
                                delay: 0.2,
                            }
                        )
                }
    
        }, [])
  return (
    <div ref={tabRef} className="tabsContainer">
      {children}
    </div>
  )
}

