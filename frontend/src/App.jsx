import React from "react";
import {useState, useEffect} from "react";
import Markdown from "react-markdown";
import "./App.css";

export default () => {
	const [markdown, setMarkdown] = useState("");
	const [chapter, setChapter] = useState("../../Kap1.md");
	const [theme, setTheme] = useState('light-mode');

  	useEffect(() => {
		const fetchMarkdown = async () => {
			const response = await fetch(chapter);
			const md = await response.text();
	
			setMarkdown(md);
		};

		fetchMarkdown();
  	}, [chapter]);

	const handleNavClick = (e) => {
		setChapter(e.target.getAttribute("href"));
		e.preventDefault();
	}


	const chapters = ["../../Kap1.md", "../../Kap2.md", "../../Kap3.md", "../../Kap4.md"];

  	return (
  		<>
			<header><h1>Kurs i Linux-terminalen</h1></header>
			<nav>
				<ul>
					{chapters.map((chapter, index) => (
						<li 
							key={index}
							onClick={handleNavClick}
							href={chapter}
						>
							Kapittel {index + 1}
						</li>
					))	
					}

				</ul>
			</nav>

			<main>
				<Markdown>{markdown}</Markdown>
			</main>					
  		</>
  	)
};
