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

## API Endpoints

Sampel **request body** untuk masing-masing endpoint.  
(Validasi user atau role belum dibuat)

### Login

```shell
curl --request POST \
  --url http://127.0.0.1:3000/login \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: Insomnia/2023.5.7' \
  --data '{
  "email": "admin@domain.com",
  "password": "admin"
}'
```

### Retrieve all users

```shell
curl --request GET \
  --url http://127.0.0.1:3000/users \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoiY2VtaW5nQGdtYWlsLmNvbSIsImlhdCI6MTY5NzM3ODgyOSwiZXhwIjoxNjk3MzgyNDI5fQ.Ytqo3AH8jooLWP2uK-Rup3kSXOieHFFgPsW3H233cVM' \
  --header 'User-Agent: Insomnia/2023.5.7'
```

### Create a new user

```shell
curl --request POST \
  --url http://127.0.0.1:3000/users \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: Insomnia/2023.5.7' \
  --data '{
  "email": "mingke@gmail.com",
  "password": "mingke"
}'
```

### Delete a user

```shell
curl --request DELETE \
  --url http://127.0.0.1:3000/users \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: Insomnia/2023.5.7' \
  --data '{
  "id": "2"
}'
```

### Update a user

```shell
curl --request PUT \
  --url http://127.0.0.1:3000/users \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: Insomnia/2023.5.7' \
  --data '{
  "id": "1",
  "email": "admin@domain.com",
  "password": "admin"
}'
```

### Retrieve all products

```shell
curl --request GET \
  --url http://127.0.0.1:3000/products \
  --header 'User-Agent: Insomnia/2023.5.7'
```

### Make an order

```shell
curl --request POST \
  --url http://127.0.0.1:3000/orders \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: Insomnia/2023.5.7' \
  --data '{
  "cart": [
    {"product_id": 1, "qty": 5},
    {"product_id": 2, "qty": 10}
  ],
  "shipping_address": "Kediri"
}'
```
