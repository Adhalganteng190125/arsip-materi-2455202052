
export async function ambilMateri() {
  let response;

  try {
    response = await fetch(
      `${import.meta.env.VITE_API_URL}/materi`
    );
  } catch (error) {
    throw new Error(
      "Tidak dapat terhubung ke server API. Periksa koneksi backend."
    );
  }

  if (!response.ok) {
    let pesan = `Gagal mengambil materi (HTTP ${response.status})`;

    try {
      const hasil = await response.json();
      if (hasil.error) {
        pesan = hasil.error;
      }
    } catch (error) {
      // Gunakan pesan HTTP jika respons bukan JSON
    }

    throw new Error(pesan);
  }

  return await response.json();
}
