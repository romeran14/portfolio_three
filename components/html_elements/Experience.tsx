import { memo } from "react"
import { useIntersectionObserver } from "../hooks/useInterceptorObserver"
import Image from "next/image"
import { TabsControls } from "./TabsControls"
import { MobileExperience } from "./MobileExperience"

export const Experience = memo(function Experience() {

	const [oberserverRef, isIntersecting] = useIntersectionObserver( {
		options: {
			rootMargin: '200px', // Añade un margen inferior de 100px al root (viewport)
		},
	})
    

	return (
		<div ref={oberserverRef} className="experience" >
			{
				isIntersecting &&
				<>
						<div className="card desktop-experience">
                    <TabsControls>

					<div className="tabsBox">
						<div className="indicator"></div>
						<button><span>Overview</span></button>
						<button><span>Frontend</span></button>
						<button><span>Backend</span></button>
						<button><span>Mobile</span></button>
					</div>
					<div className="tabsContentContainer">
					<div className="contentBox">
						<h4 className="card1">Bitnat Redes y Sistemas (2023 – 2025)</h4>
						<p className="card2">
							During my time here, we worked on migrating a dashboard with nearly
							7,000 active users. The legacy software was built in JQuery using a
							commercial template, and the web API was built in PHP. The goal was
							to move it to a modern framework. React.js / Next.js was used for 
							the user interface. Laravel and MySQL were used as the backend and database.
							In addition to the main project, other web and mobile/TV app projects had
							to be created in parallel. I signed a confidentiality agreement.
							Therefore, I cannot provide details about the nature of the business nor
							can I add links to completed projects. <b>On next tab is a more detailed list of 
							the usual activities &rarr;</b>
						</p>
                        <div className="icons_filler" >
                            <Image 
                                alt="react icon" 
                                src={"/svg/react-svgrepo-com.svg"} 
                                className="image_exp" width={60} height={60}
                                />
                            <Image 
                                alt="next icon" 
                                src={"/svg/next-js-svgrepo-com.svg"} 
                                className="image_exp" width={60} height={60}
                                />
                            <Image 
                                alt="laravel icon" 
                                src={"/svg/laravel-svgrepo-com.svg"} 
                                className="image_exp" width={60} height={60}
                                />
                            <Image 
                                alt="mysql icon" 
                                src={"/svg/mysql-svgrepo-com.svg"} 
                                className="image_exp" width={60} height={60}
                                />
                            <Image 
                                alt="git icon" 
                                src={"/svg/git-svgrepo-com.svg"} 
                                className="image_exp" width={60} height={60}
                                />
                            <Image
                                alt="node icon" 
                                src={"/svg/nodejs02-svgrepo-com.svg"} 
                                className="image_exp" width={60} height={60}
                                />
                            <Image 
                                alt="expo icon" 
                                src={"/svg/light-expo-svgrepo-com.svg"} 
                                className="image_exp" width={60} height={60}
                            />
                        </div>
					</div>
					<div className="contentBox">
						<h4 className="card1">Frontend dev Activities</h4>
						<ul>
							<li>Design reusable components following solid principles.</li>
							<li>Define the style guide for mantain homogeneity throughout the project</li>
							<li>Develop state managent usually <b>Redux</b> and <b>Context API</b></li>
							<li>Consume API Rest endpoints using <b>axios</b> or <b>SWR/ReduxQuery</b> and caching data if applies</li>
							<li>Create session persistence mechanics</li>
							<li>Consume webSockets <b>(Pusher.js/ laravel-echo)</b></li>
							<li>Inplement <b>React Router DOM</b> for React apps routing. Next.js file-based routing system.</li>
							<li>Component styling <b>(CSS Pure, Material UI, Chakra UI)</b></li>
							<li>Configure development tools <b>(ESLint, Prettier).</b></li>
                            <li>Custom Hooks creation for reusable logic</li>
							<li>Inplement refresh token mechanism within retry failed requests with async-mutex</li>
							<li>Lazy loading of components and routes.</li>
							<li>Server-Side Rendering <b>(SSR) and Static Site Generation (SSG)</b> with Next.js.</li>
							<li>Image optimization.</li>
							<li>Form Handling: Formik, Yup (for validation)</li>
							<li><b>TypeScript: </b>For static typing, improves maintainability and prevents errors.</li>
							<li>Unit Test:Jest</li>
							<li>Use <b>SEO</b> techniques</li>
						</ul>
					</div>

					<div className="contentBox">
						<h4 className="card1">Backend dev Activities</h4>
						<ul>
							<li>Design the database structure (tables, columns, relationships).</li>
							<li>API Rest development</li>
							<li>Create and run database migrations to define table schemas.</li>
							<li>Use seeders to populate the database with dummy data for development/testing.</li>
							<li>Define Eloquent models for database tables.</li>
							<li>Use route groups, middleware, and route model binding.</li>
							<li>Implement application logic within controllers. Handle requests, process data, and prepare responses.</li>
							<li>Implement user authentication using Laravel Sanctum.</li>
							<li>Implement server-side form validation using Laravel&#39;s validation rules.</li>
							<li>Implement caching for performance optimization (Memcached).</li>
							<li>Unit Tests: Write tests for individual classes, methods, and functions (PHPUnit).</li>
							<li>Create docs using Postman</li>
							<li>WebSocket development <b>(reverb)</b></li>
							<li>Task Scheduling( trigger periodical jobs on server)</li>
						</ul>
					</div>
					<div className="contentBox">
						<h4 className="card1">Android dev Activities (React native)</h4>
						<ul>
							<li>Use React Native native components</li>
							<li>React Navigation <b>(Stack Navigator, Tab Navigator, Drawer Navigator)</b>.</li>
							<li>Accessing Native Functionalities: Camera, GPS, storage, push notifications (using <b>Expo</b> modules or native libraries).</li>
							<li>Offline-First and Synchronization: AsyncStorage</li>
							<li>Generate builds and development builds on <b>Expo EAS</b> platform</li>
							<li>Bluetooth classic integration with termal portatil printer</li>
							<li>Optimize FlatList and SectionList</li>
							<li>Animations (React Reanimated)</li>
							<li>Tv app development <b>react-native-tvos</b></li>
						</ul>
					</div>

				</div> 
                </TabsControls>

			    </div>

				<div className="card desktop-experience">
                    <TabsControls>

                        <div className="tabsBox">
                            <div className="indicator"></div>
                            <button><span>Overview</span></button>
                            <button><span>Frontend</span></button>
                            <button><span>More Frontend</span></button>
                        </div>
                        <div className="tabsContentContainer">
                            <div className="contentBox">
                                <h4 className="card1">Tesla Media Group (2020 – 2023)</h4>
                                <p className="card2">
                                    This was my first professional experience developing websites.
                                    The bulk of the work consisted of creating web pages in Joomla
                                    (a CMS similar to Wordpress). To improve the customization of 
                                    page styles, we avoided using no-code tools; instead, everything 
                                    was laid out and styled in a very artisanal way by writing HTML
                                    and CSS (SCSS/LESS). To create carousels, modals, pop-ups, tabs,
                                    navigation links, etc., we relied on PHP and Javascript/JQuery.
                                    This entire experience built a comprehensive foundation and
                                    understanding of styling, layout, responsiveness, and SEO.  &rarr;
                                </p>
                                <div className="icons_filler" >
                                    <Image 
                                        alt="joomla icon" 
                                        src={"/svg/joomla-svgrepo-com.svg"} 
                                        className="image_exp" width={60} height={60}
                                        />
                                    <Image
                                        alt="html icon" 
                                        src={"/svg/html5-01-svgrepo-com.svg"} 
                                        className="image_exp" width={60} height={60}
                                        />
                                    <Image 
                                        alt="css icon" 
                                        src={"/svg/css3-01-svgrepo-com.svg"} 
                                        className="image_exp" width={60} height={60}
                                        />
                                    <Image 
                                        alt="javascript icon" 
                                        src={"/svg/javascript-155-svgrepo-com.svg"} 
                                        className="image_exp" width={60} height={60}
                                        />
                                    <Image 
                                        alt="php icon" 
                                        src={"/svg/php02-svgrepo-com.svg"} 
                                        className="image_exp" width={60} height={60}
                                        />
                                    <Image 
                                        alt="jquery icon" 
                                        src={"/svg/jquery-svgrepo-com.svg"} 
                                        className="image_exp" width={60} height={60}
                                        />
                                    <Image 
                                        alt="wordpress icon" 
                                        src={"/svg/wordpress-139-svgrepo-com.svg"} 
                                        className="image_exp" width={60} height={60}
                                    />
                                </div>
                            </div>
                            <div className="contentBox">
                                <h4 className="card1" >Frontend Activities</h4>
                                <ul>
                                    <li>Installing, configuring, and managing Joomla CMS installations.</li>
                                    <li>Evaluating, installing, and configuring third-party Joomla extensions (components, modules, plugins).</li>
                                    <li>Troubleshooting and resolving conflicts between Joomla core, templates, and extensions.</li>
                                    <li>Performing Joomla core and extension updates and migrations.</li>
                                    <li>Customizing existing Joomla templates to match specific design requirements using <b>LESS</b> and <b>Bootstrap</b>.</li>
                                    <li>Developing custom Joomla templates from scratch, ensuring <b>responsive web design</b> for various devices.</li>
                                    <li>Implementing custom overrides for Joomla core and extension layouts.</li>
                                    <li>Optimizing template performance for faster loading times.</li>
                                    <li>Structuring website content using Joomla&lsquo;s article, category, and menu systems.</li>
                                    <li>Implementing and managing custom fields for articles and users.</li>
                                    <li>Configuring user access levels (ACL) for content and features.</li>
                                    <li>Implementing interactive and dynamic user interfaces using <b>JavaScript</b> and <b>jQuery</b>.</li>
                                    <li>Developing custom scripts and functionalities to enhance user experience.</li>
                                </ul>
                            </div>

                            <div className="contentBox">
                                <h4 className="card1">More Frontend Activities</h4>
                                <ul>
                                    <li>Ensuring cross-browser compatibility and performance.</li>
                                    <li>Developing custom Joomla components and modules using <b>PHP</b> for specific functionalities not available off-the-shelf.</li>
                                    <li>Interacting with Joomla&lsquo;s database layer (JDatabase) for custom data manipulation.</li>
                                    <li>Implementing custom PHP logic within templates and extensions.</li>
                                    <li>Implementing on-page SEO best practices within Joomla (meta descriptions, titles, URLs).</li>
                                    <li>Configuring Joomla&lsquo;s built-in SEO features (SEF URLs).</li>
                                    <li>Utilizing tools like <b>Screaming Frog SEO Spider</b> for website audits, identifying broken links, duplicate content, and other SEO issues.</li>
                                    <li>Optimizing website performance (image optimization, caching configurations, minification of CSS/JS).</li>
                                    <li>Performing regular backups of Joomla websites.</li>
                                    <li>Monitoring website security and applying necessary patches or fixes.</li>
                                    <li>Troubleshooting and debugging issues related to Joomla functionality, database errors, or server configurations.</li>
                                    <li>Utilizing Git (or similar VCS) for managing code changes and collaborating on projects.</li>
                                    <li>Manage and add content of wordpress pages.</li>
                                </ul>
                            </div>
                        </div>
                    </TabsControls>
					</div>
			

				<MobileExperience />
			</>

			}

</div>
	)
})
