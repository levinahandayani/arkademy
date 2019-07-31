const siswa = [
{
	"nama":"Achmad zulfikar",
	"kelas":"XI-RPL-1"
},
{
	"nama":"Ghetsa azzahra",
	"kelas":"XI-RPL-1"
},
{
	"nama":"Hilmi",
	"kelas":"XI-RPL-1"
},
{
	"nama":"Muhammad jaki",
	"kelas":"XI-RPL-1"
},
{
	"nama":"Muhammad ajiz",
	"kelas":"XI-RPL-1"
},
{
	"nama":"Risma julianti",
	"kelas":"XI-RPL-1"
},
{
	"nama":"Siti nur azizah",
	"kelas":"XI-RPL-1"
},
];

let x;

for(x in siswa){
	let namaSiswa = siswa[x].nama
	let kelasSiswa = siswa[x].kelas
	let divider = "<div>\
	<span class='nama-siswa'>"+namaSiswa+"</span>\
	<span class='kelas-siswa'>"+kelasSiswa+"</span>\
	</div>";
	document.getElementById('siswa-rpl').innerHTML += divider
}

