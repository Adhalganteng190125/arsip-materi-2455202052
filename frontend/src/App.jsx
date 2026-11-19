
import { useState, useEffect } from "react";
import DaftarMateri from "./components/DaftarMateri";
import { ambilMateri } from "./api/materi";
import "./App.css";

function App() {
  const [materi, setMateri] = useState([]);
  const [status, setStatus] = useState("memuat");
  const [error, setError] = useState("");
  const [percobaan, setPercobaan] = useState(0);

  useEffect(() => {
    let dibatalkan = false;

    async function muatData() {
      setStatus("memuat");
      setError("");

      try {
        const data = await ambilMateri();

        if (!dibatalkan) {
          setMateri(data);
          setStatus("berhasil");
        }
      } catch (err) {
        if (!dibatalkan) {
          setError(err.message);
          setStatus("gagal");
        }
      }
    }

    muatData();

    return () => {
      dibatalkan = true;
    };
  }, [percobaan]);

  function cobaLagi() {
    setPercobaan((nilai) => nilai + 1);
  }

  return (
    <main className="container">
      <h1>ArsipMateri</h1>

      <p className="subtitle">
        Daftar Arsip Materi Perkuliahan
      </p>

      {status === "memuat" && (
        <p>Memuat…</p>
      )}

      {status === "gagal" && (
        <div className="error-box">
          <p>Terjadi kesalahan: {error}</p>

          <button onClick={cobaLagi}>
            Coba lagi
          </button>
        </div>
      )}

      {status === "berhasil" && materi.length === 0 && (
        <p>Belum ada materi</p>
      )}

      {status === "berhasil" && materi.length > 0 && (
        <DaftarMateri materi={materi} />
      )}
    </main>
  );
}

export default App;
