<?php
$mahasiswa = [
    "nama" => "Budi Santoso",
    "nim" => "3411221001",
    "prodi" => "Informatika",
    "ipk" => 3.85,
    "skill" => ["HTML", "CSS", "JavaScript", "PHP"],
];

echo $mahasiswa["nama"];
echo $mahasiswa["ipk"];

$daftar = [
    ["nama" => "Budi", "ipk" => 3.85],
    ["nama" => "Ani", "ipk" => 3.72],
    ["nama" => "Citra", "ipk" => 3.91],
];

foreach ($daftar as $mhs) {
    echo "{$mhs['nama']} — IPK: {$mhs['ipk']}<br>";
}
?>
