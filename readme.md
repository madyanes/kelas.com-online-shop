# API Toko Daring

API sederhana untuk transaksi jual beli toko daring. [Pelajari lebih lanjut di sini.](./plans.md)

## Kebutuhan Sistem

Teknologi beserta versi yang digunakan ketika proyek ini dikembangkan:

- Node.js (v18.16.0)
- MySQL (v8.0.34)

## Environment Variables

Sebelum menjalankan proyek ini, terlebih dulu sesuaikan nilai-nilai dari _environment variable_ sesuai preferensi:

1. Duplikat berkas `.env.sample`, dengan nama `.env`.
2. Sesuaikan nilai-nilai di dalamnya.

## Siapkan Basis Data

1. Sediakan basis data dengan nama yang sesuai dengan variabel `DB_NAME` di berkas `.env`.
2. Jalankan kueri di dalam berkas `init.sql` untuk membuat tabel-tabel yang diperlukan.

## Menjalankan di Komputer Lokal

1. Klon proyek ini.
2. Pasang modul Node.js yang dibutuhkan:

   ```shell
   npm install
   ```

3. [Sesuaikan konfigurasi _environment variable_ yang dibutuhkan.](#environment-variables)

4. Jalankan server dengan perintah:

   ```shell
   npm run dev
   ```

5. Untuk menghentikan server, ketik kombinasi tombol `ctrl` dan `c`.
