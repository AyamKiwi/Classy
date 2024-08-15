const list_ruangan = load_list_ruangan();
const list_jam = load_list_jam();
const weekdays = load_weekdays();

const link_jadwal_classy = load_link_jadwal_classy();
const link_jadwal_resmi = load_link_jadwal_resmi();

init_checkbox(list_jam);
// init_date();

function filter_classy(row) {
    const filter_date = new Date(document.getElementById('tanggal').value).toDateString();
    const data_date = new Date(row['Tanggal']).toDateString();
    if(data_date != filter_date) {return false}
    for(let jam of list_jam) {
        const jam_checked = document.getElementById(jam).checked
        if(jam_checked && row['Jam [Jam]'].includes(jam)) {return true}
    }
    return false;
}

function display(res, array, string, type) {
    for(let ruangan of array) {
        const item = document.createElement('div');
        item.innerHTML = `${string} ${ruangan}`;
        item.setAttribute('class', `result ${type} roboto-regular`)
        res.appendChild(item);
    }
}

function search_classy(results) {
    const classy = results.data.filter(filter_classy).map(function(row) {
        return row['Ruangan']
    });
    jadwal_classy = [...(new Set(classy))];
    tersedia = tersedia.filter(function(ruangan) {
        return !(jadwal_classy.includes(ruangan))
    });

    const res = document.getElementById('results');
    res.innerHTML = '';
    display(res, tersedia, '✅(Tersedia)', 'tersedia');
    display(res, jadwal_classy, '⚠️(Terjadwal Classy)', 'jadwal-classy');
    display(res, jadwal_resmi, '⛔(Terjadwal Resmi)', 'jadwal-resmi');
    const gform = document.getElementById('gform');
    if(gform.style.display === 'none') {gform.style.display = 'block'}
    document.getElementById('search-btn').setAttribute('style','opacity: 1');
    document.getElementById('search-btn').innerHTML = 'Search!';
}

function to_bool(string) {
    return string == 'TRUE';
}

function filter_resmi(row) {
    const date = new Date(document.getElementById('tanggal').value);
    const day = weekdays[date.getDay()];
    if(row['Hari'] != day) {return false}
    for(let jam of list_jam) {
        const jam_checked = document.getElementById(jam).checked
        if(jam_checked && to_bool(row[jam]) == jam_checked) {return true}
    }
    return false;
}

function search_resmi(results) {
    const resmi = results.data.filter(filter_resmi).map(function(row) {
        return row['Ruangan'];
    });
    jadwal_resmi = [...(new Set(resmi))];
    tersedia = list_ruangan.filter(function(ruangan){
        return !(jadwal_resmi.includes(ruangan));
    });
    Papa.parse(link_jadwal_classy, {
        download: true,
        header: true,
        complete: search_classy
    });
}

function search() {
    let tersedia = [];
    let jadwal_classy = [];
    let jadwal_resmi = [];
    document.getElementById('search-btn').setAttribute('style','opacity: 0.6');
    document.getElementById('search-btn').innerHTML = 'Loading...';
    Papa.parse(link_jadwal_resmi, {
        download: true,
        header: true,
        complete: search_resmi
    })
}