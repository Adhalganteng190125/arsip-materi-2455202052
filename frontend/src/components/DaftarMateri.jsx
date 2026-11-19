
function DaftarMateri({ materi }) {
  return (
    <div className="daftar-materi">
      {materi.map((item) => (
        <div className="materi-card" key={item.id}>
          <h2>{item.judul}</h2>

          <p>
            <strong>Mata Kuliah:</strong> {item.mataKuliah}
          </p>

          <p>Pertemuan {item.pertemuan}</p>

          {item.tautan !== null && (
            <a
              href={item.tautan}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default DaftarMateri;
