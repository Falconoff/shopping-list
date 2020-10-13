let list=[];	/*переменная типа массив */

/*ф-ция вызывается после нажатия кнопки "Добавить товар"
Получаем данные, введённые в 3 поля и добавляем их в конец списка list, 
используя метод push */
function addItem() {

let productName = document.getElementById("product").value;
let quantity = document.getElementById("nmbr").value;
let	price = document.getElementById("price").value;

/*сделаем проверку вводимых данных (чтоб nmbr и price были числами), а иначе
у нас в Общих расходах будет NaN*/
let messageError = document.getElementById("err");
	if (productName.length==0) {messageError.innerHTML = "Введите название товара!";}
		else if (isNaN(quantity) || quantity<=0) {messageError.innerHTML = "Введите корректное количество товара!"}
			else if (isNaN(price) || price<=0) {messageError.innerHTML = "Введите корректную стоимость товара!"}
				else {
					list.push([ productName, quantity, price ]);

// стираем занесённые значения в ячейках
					document.getElementById("product").value = "";
					document.getElementById("nmbr").value = "";
					document.getElementById("price").value = "";
// запускаем скрипт дальше
					showList(); 
				};
}


function showList() {     /*кол-во строк зависит от того, сколько товара добавили или удалили*/
	let content = document.getElementById("table");
	let rez = "<table>", total = 0;
	for (var i = 0; i < list.length; i++) {
		rez += "<tr>";
		for (var j = 0; j < list[i].length; j++) {
			rez += "<td>"+list[i][j]+"</td>";
		}
	rez += "<td><div class='delete'><span onclick='deleteItem("+i+");'>&#215</span></div></td></tr>"	;
	total += list[i][1]*list[i][2];     /*общая стоимость товара: кол-во х цена/1шт  */
	}
	document.getElementById("total").innerHTML = total;
	rez += "</table>";
	content.innerHTML = rez;
}

/* ф-ция удаления строки ранее выбранного товара */
function deleteItem(row) {
	list.splice(row,1);
	showList();
}
