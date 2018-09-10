window.onload=function(){
"use strict";
var d = new Date();
switch(d.getDay())
{
	case 0:
		document.getElementById("title").style.backgroundColor = '#4c3c5f';
		document.getElementById("sidebar").style.backgroundColor = '#4c3c5f';
		break;
	case 1:
		document.getElementById("title").style.backgroundColor = '#008378';
		document.getElementById("sidebar").style.backgroundColor = '#008378';
		break;
	case 2:
		document.getElementById("title").style.backgroundColor = '#512741';
		document.getElementById("sidebar").style.backgroundColor = '#512741';
		break;
	case 3:
		document.getElementById("title").style.backgroundColor = '#584630';
		document.getElementById("sidebar").style.backgroundColor = '#584630';
		break;
	case 4:
		document.getElementById("title").style.backgroundColor = '#58bab0';
		document.getElementById("sidebar").style.backgroundColor = '#58bab0';
		break;
	case 5:
		document.getElementById("title").style.backgroundColor = '#202020';
		document.getElementById("sidebar").style.backgroundColor = '#202020';
		break;
	case 6:
		document.getElementById("title").style.backgroundColor = '#237025';
		document.getElementById("sidebar").style.backgroundColor = '#237025';
		break;
}
	switch(d.getHours())
{
	case 0,23:
		document.body.style.backgroundColor = '#151521';
		break;
	case 1,22:
		document.body.style.backgroundColor = '#11172B';
		break;
	case 2,21:
		document.body.style.backgroundColor = '#01214D';
		break;
	case 3,20:
		document.body.style.backgroundColor = '#35386F';
		break;
	case 4,19:
		document.body.style.backgroundColor = '#A883A0';
		break;
	case 5,18:
		document.body.style.backgroundColor = '#DBBFC6';
		break;
	case 6,17:
		document.body.style.backgroundColor = '#DFCCCC';
		break;
	case 7,16:
		document.body.style.backgroundColor = '#CAC7CD';
		break;
	case 8,15:
		document.body.style.backgroundColor = '#95B8C7';
		break;
	case 9,14:
		document.body.style.backgroundColor = '#34B1C1';
		break;
	case 10,13:
		document.body.style.backgroundColor = '#0495C5';
		break;
	case 11,12:
		document.body.style.backgroundColor = '#0087B5';
		break;
	//case 12:
//		document.body.style.backgroundColor = '#';
//		break;
//	case 13:
//		document.body.style.backgroundColor = '#';
//		break;
//	case 14:
//		document.body.style.backgroundColor = '#';
//		break;
//	case 15:
//		document.body.style.backgroundColor = '#';
//		break;
//	case 16:
//		document.body.style.backgroundColor = '#';
//		break;
//	case 17:
//		document.body.style.backgroundColor = '#';
//		break;
//	case 18:
//		document.body.style.backgroundColor = '#';
//		break;
//	case 19:
//		document.body.style.backgroundColor = '#';
//		break;
//	case 20:
//		document.body.style.backgroundColor = '#';
//		break;
//	case 21:
//		document.body.style.backgroundColor = '#';
//		break;
//	case 22:
//		document.body.style.backgroundColor = '#';
//		break;
//	case 23:
//		document.body.style.backgroundColor = '#';
//		break;
		
}
};