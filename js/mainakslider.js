 var i=0;
	  var images=[];
	  var time=3000;
	  images[0]='img/patientimage/PreparedImage01.jpg';
	  images[1]='img/patientimage/PreparedImage06.jpg';
      images[2]='img/patientimage/Pictureone.jpg';
	  images[3]='img/patientimage/Picturetwo.jpg';
	  images[4]='img/patientimage/Picturethree.jpg';
	  images[5]='img/patientimage/Picturefour.jpg';
	  images[6]='img/patientimage/Picturefive.jpg';
	  images[7]='img/patientimage/Picturesix.jpg';
	  images[8]='img/patientimage/Pictureseven.jpg';
	  images[9]='img/patientimage/Pictureeight.jpg';
	  images[10]='img/patientimage/Picturenine.jpg';
	
	  
	  
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