const ponsel = [
{
	"nama":"vivo",
	"harga":"1.900.000",
	"ram":"",
	"storage":""
},
{
	"nama":"oppo",
	"harga":"2.000.000",
	"ram":"",
	"storage":""
},
{
	"nama":"xiaomi",
	"harga": "2.000.000",
	"ram":"",
	"storage":""
},
{
	"nama":"i-phone",
	"harga":"",
	"ram":"",
	"storage":""
},
{
	"nama":"samsung",
	"harga":"1.800.000",
	"ram":"",
	"storage":""
},
{
	"nama":"advan",
	"harga":"1.300.000",
	"ram":"",
	"storage":""
},
{
	"nama":"nokia",
	"harga":"",
	"ram":"",
	"storage":""
},
{
	"nama":"asus",
	"harga":"",
	"ram":"",
	"storage":""
},
{
	"nama":"lenovo",
	"harga":"",
	"ram":"",
	"storage":""
},
{
	"nama":"huawei",
	"harga":"",	
	"ram":"",
	"storage":""
},
];

let n;

for(n in ponsel){
	let namaPonsel = ponsel[n].nama
	let hargaPonsel = ponsel[n].harga
	let ramPonsel = ponsel[n].ram
	let storagePonsel = ponsel[n].storage
	let divider = "<div>\
	<span class='nama-ponsel'>"+namaPonsel+"</span>\
	<span class='harga-ponsel'>"+hargaPonsel+"</span>\
	<span class='ram-ponsel'>"+ramPonsel+"</span>\
	<span class='storage-ponsel'>"+storagePonsel+"</span>\
	</div>";
	document.getElementById('namaPonsel').innerHTML += divider
}