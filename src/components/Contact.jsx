import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: "power1.inOut"
        })

        timeline
            .from(titleSplit.words, {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .from('#contact h3, #contact p', {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .to('#f-right-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            }).to('#f-left-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            }, '<')
    })

    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

            <div className="content">
                <h2>Where to Find Us</h2>

                <div>
                    <h3>Visit Our Bar</h3>
                    <p>
                        864 Alta Loma Dr
                        South San Francisco, California(CA), 94080</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>(302) 540-0798</p>
                    <p>pvrbchinmayee@gmail.com</p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>

                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <img src={social.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center py-6 text-white-100 text-sm space-y-2">
                <p className="text-base font-semibold">
                    Let’s Connect
                </p>

                <p className="opacity-80">
                    Open to collaborations, learning, and meaningful conversations.
                </p>

                <div className="flex justify-center gap-6 text-sm">
                    <a
                        href="mailto:pvrbchinmayee@gmail.com"
                        className="hover:underline"
                    >
                        Email
                    </a>
                    <a
                        href="https://github.com/ChinmayeePrasad327"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chinmayee-prasad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        LinkedIn
                    </a>
                </div>

                <p className="pt-3 opacity-70">
                    Demo project crafted by <span className="font-semibold">P. V. R. B. Chinmayee</span> using React & GSAP
                </p>
            </div>


        </footer>
    )
}

export default Contact            