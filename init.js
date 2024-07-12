function load_list_ruangan() {
    return [
        'Ruang Kreatif N-110',
        'Ruang Kelas E-201',
        'Smart Classroom E-210',
        'Ruang Kelas S-301',
        'Ruang Kelas S-302',
        'Ruang Kelas S-303',
        'Ruang Kelas S-304',
        'Ruang Kelas S-305',
        'Ruang Kelas S-306',
        'Ruang Kelas E-301',
        'Ruang Komputer E-305',
        'Ruang Komputer E-306',
        'Ruang Kegiatan Akademik dan Kemahasiswaan Internal FPMIPA E-405',
        'Ruang Kegiatan Akademik dan Kemahasiswaan Internal FPMIPA E-406',
        'Ruang B-105',
        'Ruang Kelas B-113',
        'Ruang Kelas B-114',
        'Ruang Kelas B-115',
        'Ruang Kelas B-203',
        'Ruang Kelas B-205',
        'Ruang Kelas B-210',
        'Ruang Kelas B-301',
        'Ruang Kelas B-303',
        'Ruang Kelas B-304',
        'Ruang Kelas B-305',
        'Microteaching Room B-309',
        'Ruangan Kelas B-405',
        'Ruang Kelas C-101',
        'Ruang Kelas C-102',
        'Ruang Kelas C-103',
        'Ruang Kelas C-104',
        'Ruang Kelas C-105',
        'Ruang Kelas C-106',
        'Ruang Kelas C-107',
        'Ruang Kelas C-108',
        'Ruang Kelas C-301',
        'Ruang Kelas C-302',
        'Ruang Kelas C-303',
        'Ruang Kelas C-304',
        'Ruang Kelas C-305',
        'Ruang Kelas C-306',
        'Ruang Kelas C-307',
        'Ruang Kelas C-308',
        'Ruang Kelas C-309'
    ];
}

function load_list_jam() {
    return [
        '07:00 - 07:50',
        '07:50 - 08:40',
        '08:40 - 09:30',
        '09:30 - 10:20',
        '10:20 - 11:10',
        '11:10 - 12:00',
        '13:00 - 13:50',
        '13:50 - 14:40',
        '14:40 - 15:30',
        '15:30 - 16:20',
        '16:20 - 17:10',
        '17:10 - 18:00'
    ]
}

function load_weekdays() {
    return [
        'Minggu',
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jumat',
        'Sabtu'
    ]
}

function load_link_jadwal_classy() {
    return 'https://docs.google.com/spreadsheets/d/1pbv0br3skT8Pn4JKTEdCcgYIrKM0OV40A0RLM2Pp2y0/export?format=csv'
}

function load_link_jadwal_resmi() {
    return 'https://docs.google.com/spreadsheets/d/13pjkYc3CEfkE1fhBbTlWID2DcGjD8GeZu91v1gBZgFc/export?format=csv'
}

function init_checkbox(list_jam) {
    for(let jam of list_jam) {
        const checkbox_jam = document.createElement('input')
        checkbox_jam.setAttribute('type', 'checkbox');
        checkbox_jam.setAttribute('id', jam);
        document.getElementById('jam').appendChild(checkbox_jam);
        const label_jam = document.createElement('label');
        label_jam.setAttribute('for', jam);
        label_jam.innerHTML = jam;
        document.getElementById('jam').appendChild(label_jam);
        const br = document.createElement('br')
        document.getElementById('jam').appendChild(br);
    }
}