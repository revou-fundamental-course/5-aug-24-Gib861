function calculateBMI() {
    // Mendapatkan nilai input dari formulir
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var gender = document.getElementById('gender').value;
    var age = document.getElementById('age').value;

    // Validasi apakah input kosong
    if (!height || !weight || !age) {
        alert('Harap isi semua bidang formulir!');
        return;
    }

    // Menghitung BMI
    var heightInMeters = height / 100;
    var bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Menampilkan hasil BMI
    var bmiValue = document.getElementById('bmiValue');
    var bmiExplanation = document.getElementById('bmiExplanation');
    var ageInfo = document.getElementById('ageInfo');

    bmiValue.innerHTML = 'BMI Anda adalah: ' + bmi;
    ageInfo.innerHTML = 'Umur Anda: ' + age + ' tahun';

    // Menentukan kategori BMI dan penjelasannya
    var category = '';
    var advice = ''; // Variabel untuk menyimpan saran

    if (bmi < 18.5) {
        category = 'Kurus (Underweight)';
        advice = 'Disarankan untuk meningkatkan asupan kalori dengan makanan sehat yang kaya akan nutrisi. Konsultasikan dengan ahli gizi untuk mendapatkan rencana makan yang sesuai, dan pertimbangkan untuk menambahkan latihan kekuatan untuk membangun massa otot.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal (Normal weight)';
        advice = 'Anda sudah berada di kategori berat badan yang ideal. Jaga pola makan yang seimbang dan terus lakukan aktivitas fisik secara teratur untuk mempertahankan kesehatan.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Gemuk (Overweight)';
        advice = 'Disarankan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik. Fokuslah pada diet yang seimbang dengan lebih banyak sayuran, buah-buahan, protein tanpa lemak, dan hindari makanan tinggi gula dan lemak jenuh. Latihan kardiovaskular dan kekuatan secara teratur dapat membantu menurunkan berat badan.';
    } else {
        category = 'Sangat Gemuk (Obesity)';
        advice = 'Disarankan untuk segera mengubah pola makan dan meningkatkan aktivitas fisik. Konsultasikan dengan ahli kesehatan untuk mendapatkan rencana diet dan latihan yang sesuai. Pertimbangkan untuk mengurangi asupan makanan yang tinggi kalori dan rendah nutrisi, serta fokus pada pola makan yang lebih sehat dan aktif secara fisik setiap hari.';
    }

    bmiExplanation.innerHTML = 'Kategori BMI: ' + category + '<br>' + advice;
}
