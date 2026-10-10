function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Sistem Database Apotek')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function simpanData(data) {
  try {
    var ss = SpreadsheetApp.openById('16zSk6tJ1GjislZc1p-TkjhZK1atrl5cqNRUzMApSZuk');
    var sheet = ss.getSheetByName('Sheet1'); 
    
    if (!sheet) {
      return "Error: Tab 'Sheet1' tidak ditemukan. Pastikan nama tab di bawah adalah Sheet1";
    }

    var sekarang = new Date();
    var waktuInput = Utilities.formatDate(sekarang, "GMT+7", "dd MMMM yyyy HH:mm");
    
    sheet.appendRow([
      data.nama,           // Kolom A
      data.tgl_kunjungan,  // Kolom B (Sekarang berisi Tanggal Kunjungan)
      data.usia,           // Kolom C (Sekarang diisi Manual)
      data.alamat,         // Kolom D
      data.pekerjaan,      // Kolom E
      data.keluhan,        // Kolom F
      data.diagnosis,      // Kolom G
      data.terapi,         // Kolom H
      waktuInput           // Kolom I
    ]);
    
    return "Data Pasien Berhasil Disimpan!";
    
  } catch (err) {
    return "Terjadi kesalahan sistem: " + err.message;
  }
}