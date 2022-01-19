var ulang = true;
while(ulang) {

//tentukan pilihan
var p = prompt('Pilihlah 3 pilihan ini \norang, gajah, semut');


//tentukan CP
var c = Math.random();
console.log (c)

if(c <= 0.34) {
	c = 'orang';
} else if(c >= 0.34 && c < 0.67) {
	c = 'semut';
} else {
	c = 'gajah';
}

//tentukan cara bermain
var hasil = '';
if(p == c) {
	hasil = 'SERI';
} else if(p == 'orang') {
	hasil = (c == 'gajah') ? 'KALAH' : 'MENANG';
} else if(p == 'semut') {
	hasil = (c == 'orang') ? 'KALAH' : 'MENANG';
} else if(p == 'gajah') {
	hasil = (c == 'semut') ? 'KALAH' : 'MENANG';
} else {
	hasil = 'KAMU SALAH MEMASUKKAN PILIHAN !!';
}

//tampilkan hasil
	alert('Kamu' + ' Memilih : ' + p + ' dan' + ' Komputer' + ' Memilih : ' + c + ' Maka' + ' Hasilnya '+ hasil);
	
	ulang = confirm('Ingin Bermain Lagi??');
}

alert('Terima Kasih telah Bermain :D');