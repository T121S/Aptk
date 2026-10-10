/** * @OnlyCurrentDoc */

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Sistem Apotek Pro')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function cekLogin(user, pass) {
  var USERS = {
    "trisna": "passTrisna77",
    "budi": "budiapotek",
    "admin": "adminutama"
  };
  if (USERS[user] && USERS[user] === pass) {
    return { success: true, user: user };
  }
  return { success: false, msg: "Login Gagal!" };
}

function simpanData(obj) {
  var SS_ID = '1_3ri0GqtJOYQv0Kj3F0YDmRPgMaKJkxx0XbByiHnNTc';
  try {
    var ss = SpreadsheetApp.openById(SS_ID);
    var sheet = ss.getSheetByName('Sheet1') || ss.getSheets()[0];
    
    var sekarang = new Date();
    var waktu = Utilities.formatDate(sekarang, "GMT+7", "dd/MM/yyyy HH:mm");
    
    sheet.appendRow([
      obj.petugas, 
      obj.nama, 
      obj.tgl_lahir, 
      obj.usia, 
      obj.alamat, 
      obj.pekerjaan, 
      obj.keluhan, 
      obj.diagnosis, 
      obj.terapi, 
      waktu
    ]);
    
    return "✅ Berhasil Disimpan!";
  } catch (e) {
    return "❌ Gagal: " + e.toString();
  }
}