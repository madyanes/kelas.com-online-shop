# Perencanaan

Aplikasi ini merupakan tugas akhir kelas **Pengembangan Back-End Menggunakan JavaScript dan Node.js** dari lembaga pelatihan **Kelas.com**. Dikarenakan waktu yang sangat terbatas dan harus segera dikumpulkan, mustahil saya dapat merancang dan menyelesaikan keseluruhan fitur. Jadi, saya akan berfokus menyelesaikan beberapa fitur saja tetapi tetap mempertahankan kesan sebagai toko daring.

Untuk sekarang, mungkin aplikasi ini lebih mirip sistem Point of Sale, karena konsep awalnya adalah pelanggan dapat membeli barang tanpa login ke dalam sistem.

## Entitas terlibat

Entitas atau _role_ yang terlibat di dalam sistem adalah:

1. Owner atau pemilik toko
2. Admin atau karyawan toko
3. Pembeli

**Pembeli** tidak perlu melakukan registrasi ke dalam sistem. Pembeli hanya perlu memilih produk-produk yang hendak dibeli dan mengisi alamat pengiriman yang selanjutnya pembeli akan menerima ID pesanan. Setelah pembayaran selesai, status pembayaran pada pesanan akan diubah secara manual oleh admin dan pesanan segera dikirim ke alamat tujuan.

**Admin** dapat menambahkan dan memperbarui produk, melakukan validasi pesanan setelah pembayaran terbukti telah dilakukan.

**Owner** dapat melakukan semua yang dapat dilakukan admin dan juga dapat menambahkan data karyawan yang memungkinkan karyawan bisa masuk atau _login_ ke dalam sistem dan menggunakannya.

## Sistem pemesanan

Pembeli memilih produk-produk yang ingin dibeli dan menyertakan alamat pengiriman. Setelah permintaan ini diterima sistem, pesanan tidak dapat dibatalkan, tetapi dapat diabaikan hingga periode pembayaran habis.

Jika pembayaran berhasil dilakukan dalam periode tersebut, pembeli wajib menyertakan bukti pembayaran dan menunggu validasi dari admin. Apabila bukti valid, pesanan segera dikirim.
