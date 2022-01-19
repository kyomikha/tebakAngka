var ulang = true;
while(ulang) {

alert('Tebaklah angka 1-10 \nKamu memiliki 3x kesempatan');	

//tentukan CP
var c =Math.round(Math.random()*10);
//console.log(c);

//tentukan peraturan
var i = 3;

//tentukan cara bermain
	for (i; i > 0; i--) {
		
		var p = prompt('Masukkan Angka tebakan!');
		k = i - 1;
		
			if(p == null) {
				alert('Yah, Sayang Sekali Dilewati.');
				 i = 0; 
			} else if(p == '') { if(k > 0) {
				alert('Kamu Melewatkan Kesempatan \nAyo Masih ada ' + k +' Kesempatan');
			} else { 
				alert('Kamu Melewatkan Kesempatan \nKamu Sudah Tidak Ada Kesempatan');
				alert('KAMU GAGAL \nAngka yang dicari adalah ' + c);
			}} else { if(p == c) {
			alert('KAMU BENAR \nAngka yang dicari adalah ' + c);
			i = 0;
				} else if(p > c) { if(k > 0) {
			alert('Terlalu TINGGI \nAyo Masih ada ' + k +' Kesempatan');		
				} else {
			alert('Terlalu TINGGI \nKamu Sudah Tidak Ada Kesempatan');
			alert('KAMU GAGAL \nAngka yang dicari adalah ' + c);
				}} else if(p < c) { if(k > 0) {
			alert('Terlalu RENDAH \nAyo Masih ada ' + k +' Kesempatan');	
				} else {
			alert('Terlalu RENDAH \nKamu Sudah Tidak Ada Kesempatan');
			alert('KAMU GAGAL \nAngka yang dicari adalah ' + c);
				}} else {
			alert('Kamu Salah Memasukkan Angka');
			i = 0; 
				} 
			}
				
			
		//null = jika cancel ditekan saat kolom kosong maka akan true
		//'' = jika ok ditekan saat kolom kosong maka akan true
}	
	ulang = confirm('Mau Mencoba Lagi?');
	
}

alert('Terima Kasih Sudah Mencoba, Semoga Gamenya Menyenangkan.');