window.onload = function(){
	var oRoomList = document.getElementById('RoomList');
	displayALL();

	var oALL = document.getElementById('ALL');
	var oTPE = document.getElementById('TPE');
	var oTXG = document.getElementById('TXG');
	var oTNN = document.getElementById('TNN');

	oALL.addEventListener('click', function(){createList('ALL')});
	oTPE.addEventListener('click', function(){createList('TPE')});
	oTXG.addEventListener('click', function(){createList('TXG')});
	oTNN.addEventListener('click', function(){createList('TNN')});

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

	// function displayALL(){
	// 	createList('ALL');
	// }
	// function displayTPE(){
	// 	createList('TPE');
	// }
	// function displayTXG(){
	// 	createList('TXG');
	// }
	// function displayTNN(){
	// 	createList('TNN');
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