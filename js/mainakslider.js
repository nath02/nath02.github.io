 var i=0;
	  var images=[];
	  var time=3000;
	  images[0]='img/patientimage/PreparedImage01.jpg';
	  images[1]='img/patientimage/PreparedImage02.jpg';
	  images[2]='img/patientimage/PreparedImage03.jpg';
	  images[3]='img/patientimage/PreparedImage04.jpg';
	  images[4]='img/patientimage/PreparedImage05.jpg';
	  images[5]='img/patientimage/PreparedImage06.jpg';
	  
	  
	  function changeImg(){
		  document.slide.src=images[i];
		  if(i<images.length-1){
			  i++;
		  }else{
			  i=0;
		  }
		  setTimeout("changeImg()",time);
		}
	  window.onload=changeImg;