window.onload = function(){
	var oRoomList = document.getElementById('RoomList');
	displayALL();

	var oALL = document.getElementById('ALL');
	var oTPE = document.getElementById('TPE');
	var oTXG = document.getElementById('TXG');
	var oTNN = document.getElementById('TNN');

	oALL.addEventListener('click', displayALL);
	oTPE.addEventListener('click', displayTPE);
	oTXG.addEventListener('click', displayTXG);
	oTNN.addEventListener('click', displayTNN);

	// ajax('get', 'HotelInfo.json', '', function(response){
	// 	var RoomData = JSON.parse(response);
	// 	var Hotel = RoomData.Hotel;

	// 	for(var i = 0; i < Hotel.length; i++){
	// 		createList(Hotel, i);		
	// 	}

	// });

	// var request = new XMLHttpRequest();

	// request.open('GET', 'HotelInfo.json', true);

	// request.send();

	// request.onreadystatechange = function(){
	// 	if(request.readyState == 4){
	// 		if(request.status == 200){
	// 			var RoomData = JSON.parse(request.response);
	// 			var Hotel = RoomData.Hotel;

	// 			for(var i = 0; i < Hotel.length; i++){
	// 				createList(Hotel, i);
	// 				console.log(i);
	// 			}
	// 		}
	// 	}
	function ajax(method, url, args, successFn){
		var request = window.XMLHttpRequest ? 
		new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

		if(method == 'get' || method == 'GET'){
			url = url + '?' + args;
		}
		request.open(method, url, true);

		if(method == 'get' || method == 'GET'){
			request.send();
		}else{
			request.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			request.send(args);
		}

		request.onreadystatechange = function(){
			if(request.readyState == 4){
				if(request.status == 200){					
					successFn & successFn(request.response);
				}else{
					alert('資料獲取失敗');
				}
			}
		}
	}

	function displayALL(){
		createList('ALL');
	}
	function displayTPE(){
		createList('TPE');
	}
	function displayTXG(){
		createList('TXG');
	}
	function displayTNN(){
		createList('TNN');
	}

	// function createList(Room, num){
	// 	var oSection = document.createElement('div');
	// 	oSection.className = 'section';
	// 	oRoomList.appendChild(oSection);

	// 	var oImg = document.createElement('img');
	// 	oImg.src = Room[num].pic;
	// 	oSection.appendChild(oImg);

	// 	var oRoomInfo = document.createElement('div');
	// 	oRoomInfo.className = 'RoomInfo';
	// 	oSection.appendChild(oRoomInfo);

	// 	var oName = document.createElement('span');
	// 	oName.innerHTML = Room[num].Name;
	// 	oRoomInfo.appendChild(oName);

	// 	var oPrice = document.createElement('span');
	// 	oPrice.innerHTML = Room[num].price;
	// 	oRoomInfo.appendChild(oPrice);

	// 	var oBooking = document.createElement('a');
	// 	oBooking.href = "javascript:;";
	// 	oBooking.innerHTML = '馬上預訂';
	// 	oSection.appendChild(oBooking);
	// }
	function createList(position){
		position = position || 'ALL';
		$('.section').remove();
		console.log(position);	
		ajax('get', 'HotelInfo.json', '', function(response){
			var RoomData = JSON.parse(response);
			var Hotel = RoomData.Hotel;

			for(var i = 0; i < Hotel.length; i++){
				if(Hotel[i].position == position || position == 'ALL'){						
					var oSection = document.createElement('div');
					oSection.className = 'section';
					oRoomList.appendChild(oSection);

					var oImg = document.createElement('img');
					oImg.src = Hotel[i].pic;
					oSection.appendChild(oImg);

					var oRoomInfo = document.createElement('div');
					oRoomInfo.className = 'RoomInfo';
					oSection.appendChild(oRoomInfo);

					var oName = document.createElement('span');
					oName.innerHTML = Hotel[i].Name;
					oRoomInfo.appendChild(oName);

					var oPrice = document.createElement('span');
					oPrice.innerHTML = Hotel[i].price;
					oRoomInfo.appendChild(oPrice);

					var oBooking = document.createElement('a');
					oBooking.href = "javascript:;";
					oBooking.innerHTML = '馬上預訂';
					oSection.appendChild(oBooking);	
				}						
			}

		});	
	}
}