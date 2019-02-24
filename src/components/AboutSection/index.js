import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faBusinessTime, faHandshake, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

let About = (props) => {
	return (
		<section id="about">
			<p>
				Опыт работы <span className="exclamation">более 15 лет</span> и более <span className="exclamation">140</span> качественно выполненных проектов
			</p>
			<p className="about-item">
				<span>
					<FontAwesomeIcon icon={faCarSide} />
				</span>
				Выезд на объект
			</p>
			<p className="about-item">
				<span>
					<FontAwesomeIcon icon={faBusinessTime} />
				</span>
				Соблюдение сроков
			</p>
			<p className="about-item">
				<span>
					<FontAwesomeIcon icon={faHandshake} />
				</span>
				Согласовнаие проектов
			</p>
			<p className="about-item">
				<span>
					<FontAwesomeIcon icon={faHandHoldingUsd} />
				</span>
				Безналичный расчет
			</p>
			<p>
				Имеем право работать с объектами <span className="exclamation">1-4 классов сложности</span>.
			</p>
			<p>
				Наши проекты включают: внутреннее инженерное оборудование,&nbsp;
				внутренние сети и системы (электроснабжения, электрооборудования,&nbsp;
				электроосвещения); наружные сети и системы электроснабжения.
			</p>
		</section>
	)
}

export default About;