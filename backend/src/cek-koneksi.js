
import db from "./db.js";

try {
  const [rows] = await db.query(`
    SELECT
      VERSION() AS versi,
      DATABASE() AS db,
      CURRENT_USER() AS pengguna
  `);

  console.log("Koneksi database berhasil!");
  console.table(rows);

} catch (error) {
  console.error("Koneksi database gagal!");
  console.error("Kode error:", error.code);
  console.error("Pesan:", error.message);

  process.exitCode = 1;

} finally {
  await db.end();
}
