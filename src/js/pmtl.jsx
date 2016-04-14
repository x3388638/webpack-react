import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Pmtl extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var iconStyle = {
			background: '#B93838', 
			padding: '20px 0px', 
			margin: '10px 20px',
			fontSize: '16px', 
			color: '#f3f3f3'
		};
		return (
			<div>
				<Row>
					<Col className="text-center" md={12} lg={12}>
						<h1 style={{color: '#B93838'}}>Concept</h1>
					</Col>
				</Row>
				<Row>
					<Col md={10} lg={10} style={{background: '#f3f3f3'}}>
						<h2 style={{color: '#B93838'}}>Our History</h2>
						<img width="100%" src="http://fakeimg.pl/640x480/ff0000,128/000,255" />
						<p>
						人色禮國心麼
己黃帶。舉傷作點有破試說西定北相國地代少細四外笑受的到商，業學在題不企給只上洋，備供本入、作人靈爸沒不了做圖，成黨畫自？

的財質生，元城去打直年、公流有告政意起視卻然車位戰不感應事氣治利那人為時，服經球風媽程是為院放不值頭呢產象海如遊，性前牛道華們但企的器我我便水理類個，地岸習進門業和灣注可？室友心，那沒長十中最身致聯，車分他機現？推準理存別？了國提成語，最運臉費春口果望力我，色究點好你利他畫天別活老死。面友之。

多子道真到可樂水河告，都那主！院毛民給決和作然裡……到驗們字我的化和自力友知度有入香色願車不相多，金我住強子，能風會。且雨為市統財片上來，人用會容在受。安冷人大面求之界羅帶們我門受發花定便無時要玩人！壓不氣。大影這；要回兩，體為明電的的打布代；東音。

夫你東一以？所說成那，輕全安國時！地好被作操盡看。

演農他冷，小質一！半適下新上小們法；心再開知之聯。是由務何歡上麼現們！度廣這無愛別於，這全叫是裡呢接不來方說做告服院總社教合日不眼世司四越長！著成！

直麼後大得股的要會使成事公人策公！我古車未書！上工題向案校立詩為色能狀計氣卻力沒時臺地是了養、後天連意市風怕著數往發民文手好，費的而西成曾給理必事後生包，就雄一過電流人住完是成；識愛作流：數關與不個性，還行案！住像印以排傷顧向樓事不音受差，重飯就孩他政的給滿綠不受相斷現記打主體時日形下我去於元資己話發建光首中細門走愛發地，醫兒海現發。慢溫太東整林班試不。
						</p>
					</Col>
					<Col md={2} lg={2}>
						<Row>
							<Col md={12} lg={12}>
								<div className="text-center" style={iconStyle} >
									<span className="glyphicon glyphicon-tint" aria-hidden="true"></span><br />
									<span className="hidden-md">gtint</span>
								</div>
							</Col>
							<Col md={12} lg={12}>
								<div className="text-center" style={iconStyle} >
									<span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span><br />
									<span className="hidden-md">info-sign</span>
								</div>
							</Col>
							<Col md={12} lg={12}>
								<div className="text-center" style={iconStyle} >
									<span className="glyphicon glyphicon-comment" aria-hidden="true"></span><br />
									<span className="hidden-md">comment</span>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}

module.exports = Pmtl;