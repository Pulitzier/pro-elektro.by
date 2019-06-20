import React from "react";
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBusinessTime, faCarSide, faHandHoldingUsd, faHandshake} from "@fortawesome/free-solid-svg-icons";

let ServicesSection = (props) => {
	return (
		<section id="services">
      <p>Мы проектируем:</p>
			<ul>
				<li>Сети 10-0,4кВ</li>
				<li>ТП 10/0,4кВ</li>
				<li>Электроснабжение стройплощадки</li>
				<li>Наружное освещение</li>
				<li>Молниезащита и заземление всех типов (в том числе активная молниезащита и глубинное заземление)</li>
				<li>Внутреннее освещение и силовое электрооборудование объектов промышленного назначения, жилых и общественных зданий и сооружений</li>
			</ul>
			<p>Мы оказываем услуги:</p>
			<ul>
				<li>Разработка разделов ЭС,ЭМ,ЭО,ЭП,ЭГ</li>
				<li>Согласование в государственных организациях</li>
				<li>Авторский надзор</li>
				<li>Подбор электротехнического и светотехнического оборудования для объектов различного назначения</li>
				<li>Реконструкция зданий и сооружений</li>
				<li>восстановление проектной документации</li>
			</ul>
		</section>
	)
};

export default ServicesSection;