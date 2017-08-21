function convert(){

	// Width, Height, Path
	var width = parseInt(document.getElementById('width').value);
	var height = parseInt(document.getElementById('height').value);
	var path = document.getElementById('path').value;

	// Split
	var path_array = path.split(' ');

	var new_path;
	for (i in path_array) {

		if(i!=0 && i%3!=0 ){

			if((i-1)%3==0){
				var x = parseInt(path_array[i]);
				var new_x = x/width*100;
				new_path = new_path + new_x+' ';
			}

			else if((i+1)%3==0){
				var y = parseInt(path_array[i]);
				var new_y = y/height*100;
				new_path = new_path + new_y+' ';
			}


		}else{

			if(i!=0){
				new_path = new_path + path_array[i]+' ';
			}else{
				new_path = path_array[i]+' ';
			}

		}
	}

	document.getElementById('result').innerHTML = new_path;

}