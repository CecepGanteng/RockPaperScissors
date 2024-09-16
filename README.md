# Rock Paper Scissors Game

Ini adalah mini project permainan **Rock Paper Scissors** (Batu Gunting Kertas) yang dibuat menggunakan **HTML**, **CSS**, dan **JavaScript**. Project ini menampilkan interaksi seru antara pemain dan komputer (bot), dengan efek visual yang menarik ketika bot melakukan pilihannya.

## Fitur Utama

- **Antarmuka Sederhana**: Desain minimalis dengan nuansa retro menggunakan font khusus.
- **Interaksi Dinamis**: Bot memilih secara acak dengan animasi gambar yang berputar sebelum menentukan hasil.
- **Status Permainan**: Pemain akan langsung mengetahui siapa yang menang setelah bot selesai memilih.
- **Mobile Friendly**: Desain responsif yang bisa dimainkan di perangkat mobile maupun desktop.

## Struktur Project

- **HTML**: Struktur halaman web yang menampilkan elemen-elemen game seperti pilihan pemain, pilihan bot, dan status hasil permainan.
- **CSS**: Desain visual yang sederhana dan menarik dengan gaya retro.
- **JavaScript**: Logika permainan termasuk pemilihan acak oleh bot, penentuan pemenang, dan animasi gambar.

## Cara Bermain

1. **Pilih** antara Batu, Gunting, atau Kertas dengan mengklik salah satu gambar.
2. **Bot** akan melakukan pilihan acak dengan animasi yang berputar selama 1 detik.
3. **Lihat hasil**: Setelah animasi berhenti, status akan menampilkan apakah kamu menang, kalah, atau seri.
   
## Bagaimana Logika Game Bekerja?

- Pilihan bot ditentukan secara acak menggunakan `Math.random()`.
- Hasil permainan dihitung berdasarkan aturan klasik:
  - **Batu** mengalahkan **Gunting**
  - **Gunting** mengalahkan **Kertas**
  - **Kertas** mengalahkan **Batu**
- Gambar bot akan berputar sejenak sebelum menampilkan pilihan akhirnya, memberikan kesan permainan yang lebih hidup.

## Kode Utama

- `getBotPick`: Fungsi untuk mendapatkan pilihan acak bot (0, 1, atau 2).
- `determineWinner`: Fungsi untuk menentukan siapa pemenangnya berdasarkan pilihan pemain dan bot.
- `putar`: Fungsi yang memutar gambar pilihan bot dengan animasi, dan berhenti di pilihan acak yang dipilih bot.
- `playerPick`: Fungsi utama yang menangani aksi pemain, memulai animasi, dan menentukan pemenangnya.

## Instalasi

1. Clone repository ini ke dalam local machine kamu:

```bash
git clone https://github.com/username/repo-name.git
