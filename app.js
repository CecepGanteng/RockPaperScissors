const choices = ['rock', 'paper', 'scissors'];

// Fungsi untuk mendapatkan pilihan acak bot
const getBotPick = () => Math.floor(Math.random() * 3);

// Fungsi untuk menentukan pemenang antara pemain dan bot
const determineWinner = (playerPick, botPick) => {
    if (playerPick === botPick) return 'Tidak ada yang Menang';
    
    if (
        (playerPick === 0 && botPick === 2) || // Rock beats Scissors
        (playerPick === 1 && botPick === 0) || // Paper beats Rock
        (playerPick === 2 && botPick === 1)    // Scissors beats Paper
    ) {
        return 'Kamu Menang';
    } else {
        return 'Bot Menang';
    }
};

// Fungsi untuk memutar gambar bot dan berhenti pada gambar sesuai pilihan bot
const putar = (botPick) => {
    return new Promise((resolve) => {
        // Mengambil elemen gambar dari DOM
        const imgComputer = document.getElementById('botPick');
        
        // Daftar gambar untuk efek putar
        const gambar = ['rock', 'paper', 'scissors'];
        
        let i = 0; // Indeks gambar saat ini
        const putarInterval = 100; // Interval waktu untuk mengganti gambar (dalam milidetik)
        const durasiPutar = 1000; // Durasi total putaran (dalam milidetik)
        const waktuMulai = new Date().getTime(); // Waktu mulai putaran
    
        // Set interval untuk mengganti gambar secara berkala
        const intervalId = setInterval(() => {
            imgComputer.src = `img/${gambar[i]}.svg`; // Mengatur src gambar berdasarkan indeks
            i = (i + 1) % gambar.length; // Mengubah indeks gambar ke gambar berikutnya
        
            // Mengecek apakah durasi putar telah mencapai batas waktu yang ditentukan
            if (new Date().getTime() - waktuMulai > durasiPutar) {
                clearInterval(intervalId); // Menghentikan interval
                imgComputer.src = `img/${gambar[botPick]}.svg`; // Mengatur gambar akhir sesuai pilihan bot
                resolve(); // Menyelesaikan Promise setelah putaran selesai
            }
        }, putarInterval);
    });
};

// Fungsi utama untuk menangani pilihan pemain
const playerPick = async (index) => {
    // Mendapatkan pilihan acak bot
    const botPick = getBotPick();
    console.log(`Bot memilih ${choices[botPick]}`);

    // Menentukan pemenang berdasarkan pilihan pemain dan bot
    const statusPlay = determineWinner(index, botPick);

    // Memutar gambar bot dan menunggu hingga selesai
    await putar(botPick);

    // Menampilkan status permainan setelah gambar berhenti berputar
    const statusGame = document.getElementById('status');
    statusGame.textContent = statusPlay;
};


/* 
Penjelasan Kode:
getBotPick:

Menghasilkan angka acak antara 0 dan 2 yang mewakili pilihan bot.
determineWinner:

Menentukan hasil permainan antara pilihan pemain dan pilihan bot.
putar:

Fungsi ini mengatur gambar bot untuk berputar dan berhenti pada gambar yang sesuai dengan pilihan bot setelah periode tertentu.
Menggunakan Promise untuk memastikan bahwa status permainan hanya diperbarui setelah efek putar selesai.
playerPick:

Fungsi ini menangani logika permainan ketika pemain membuat pilihan.
Menunggu efek putar selesai menggunakan await putar(botPick).
Memperbarui status permainan setelah efek putar selesai.
*/