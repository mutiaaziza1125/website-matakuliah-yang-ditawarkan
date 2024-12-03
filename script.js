const courses = [
    // Data mata kuliah - ini hanya contoh, sesuaikan dengan 87 mata kuliah yang ada
    { kode: "TIF 2 019 P", mataKuliah: "Praktikum Pemrograman Web I", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 2, ruangan: "B-306", jadwal: "Senin,10:20-12:00", dosen: "Niskarto Zendrato S.Kom., M.Kom" },
    { kode: "TIF 2 018 P", mataKuliah: "Praktikum Pemrograman Mobile", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 2, ruangan: "Ruang 105 2.1.13", jadwal: "Senin,09:20-11:00", dosen: "Dr. Syahriol Sitorus S.Si., M.IT." },
    { kode: "TIF 2 015 P", mataKuliah: "Praktikum Jaringan Komputer", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 2, ruangan: "B-305", jadwal: "Senin,10:20-12:00", dosen: "Drs Dahlan Reyner Panuturi Sitompul M.Eng" },
    { kode: "TIF 2 018 P", mataKuliah: "Praktikum Multimedia II", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 2, ruangan: "Ruang B-207", jadwal: "Rabu,13:30-14:20", dosen: "Erwin S.Si., M.Si." },
    { kode: "TIF 2 014 P", mataKuliah: "Praktikum Sistem Basis Data", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 2, ruangan: "Ruang 104.2.2.2", jadwal: "Rabu,08:30-10:10", dosen: "Dr. Syahriol Sitorus S.Si., M.IT. "},
    { kode: "TIF 2 019", mataKuliah: "Pemrograman Web I", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 1, ruangan: "Ruang I05.2.1.13", jadwal: "jumat, 15:00 - 15:50", dosen: "Niskarto Zendrato S.Kom., M.Kom" },
    { kode: "TIF 2 018", mataKuliah: "Pemrograman Mobile", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 1, ruangan: "Ruang I04.2.2.2", jadwal: "jumat, 14:00 - 14:50", dosen: "Dr. Syahriol Sitorus S.Si., M.IT." },
    { kode: "TIF 2 017", mataKuliah: "Jaringan Komputer", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 2, ruangan: "Ruang B-306", jadwal: "senin, 13:30 - 15:100", dosen: "Drs Dahlan Reyner Panuturi Sitompul M.Eng" },
    { kode: "TIF 2 016", mataKuliah: "Pengantar Sistem Operasi", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 2, ruangan: "Ruang I05.2.1.13", jadwal: "rabu, 15:20 - 17:00", dosen: "Yudhistira Adhitya Pratama" },
    { kode: "TIF 2 015", mataKuliah: "Multimedia II", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 1, ruangan: "Ruang I05.2.1.11", jadwal: "rabu, 15:20 - 16:100", dosen: "Erwin S.Si., M.Si" },
    { kode: "TIF 2 014", mataKuliah: "Sistem Basis Data", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 2, ruangan: "Ruang I05.2.1.11", jadwal: "selasa, 15:20 - 17:00", dosen: "Dr. Syahriol Sitorus S.Si., M.IT." },
    { kode: "TTIF 2 013", mataKuliah: "Struktur Data dan Algortima", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 2, ruangan: "Ruang I05.2.1.12", jadwal: "kamis, 13:30 - 15:10", dosen: "Dra. Normalina Napitupulu M.Sc" },
    { kode: "TIF 2 012", mataKuliah: "Aljabar Linier", semester: "3", kelas: "3A", tipeKelas: "REGULER", tipe: "W", sks: 2, ruangan: "B-306", jadwal: "selasa, 13:30 - 15:10", dosen: "Asima Manurung S.Si., M.Si." },
    
    // Tambahkan data lainnya sesuai dengan jumlah mata kuliah yang ada
];

let currentPage = 1;
const rowsPerPage = 10;

// Fungsi untuk menampilkan data mata kuliah
function displayCourses(page, filteredCourses = courses) {
    const start = (page - 1) * rowsPerPage;
    const end = page * rowsPerPage;
    const paginatedCourses = filteredCourses.slice(start, end);

    const tableBody = document.getElementById("course-table-body");
    tableBody.innerHTML = "";

    paginatedCourses.forEach((course, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${start + index + 1}</td>
            <td>${course.kode}</td>
            <td>${course.mataKuliah}</td>
            <td>${course.semester}</td>
            <td>${course.kelas}</td>
            <td>${course.tipeKelas}</td>
            <td>${course.tipe}</td>
            <td>${course.sks}</td>
            <td>${course.ruangan}</td>
            <td>${course.jadwal}</td>
            <td>${course.dosen}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk menyiapkan pagination
function setupPagination(filteredCourses = courses) {
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayCourses(currentPage, filteredCourses);
        }
    });

    nextButton.addEventListener("click", () => {
        const totalPages = Math.ceil(filteredCourses.length / rowsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayCourses(currentPage, filteredCourses);
        }
    });
}

// Fungsi pencarian
function searchCourses() {
    const kodeInput = document.getElementById("kodeInput").value.toLowerCase();
    const mataKuliahInput = document.getElementById("mataKuliahInput").value.toLowerCase();
    const dosenInput = document.getElementById("dosenInput").value.toLowerCase();

    const filteredCourses = courses.filter(course => {
        return (
            (!kodeInput || course.kode.toLowerCase().includes(kodeInput)) &&
            (!mataKuliahInput || course.mataKuliah.toLowerCase().includes(mataKuliahInput)) &&
            (!dosenInput || course.dosen.toLowerCase().includes(dosenInput))
        );
    });

    currentPage = 1; // Reset ke halaman pertama setelah pencarian
    displayCourses(currentPage, filteredCourses);
    setupPagination(filteredCourses);
}

// Fungsi untuk menampilkan semester yang dipilih
function updateSelectedSemester() {
    const semesterFilter = document.getElementById("semesterFilter").value;
    const selectedSemesterText = semesterFilter ? `Semester yang dipilih: ${semesterFilter}` : "Semester yang dipilih: -";

    document.getElementById("selectedSemester").textContent = selectedSemesterText;

    const filteredCourses = semesterFilter
        ? courses.filter(course => course.semester === semesterFilter)
        : courses;

    currentPage = 1; // Reset ke halaman pertama
    displayCourses(currentPage, filteredCourses);
    setupPagination(filteredCourses);
}

// Menyiapkan event listener saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    displayCourses(currentPage);
    setupPagination();

    document.getElementById("searchKodeBtn").addEventListener("click", searchCourses);
    document.getElementById("searchMataKuliahBtn").addEventListener("click", searchCourses);
    document.getElementById("searchDosenBtn").addEventListener("click", searchCourses);
    document.getElementById("semesterFilter").addEventListener("change", updateSelectedSemester);
});
