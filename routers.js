const { router, io } = require('./server');
const { Users } = require('./models/user')
const handler = require('express-async-handler');
const path = require('path');
const { Gambars } = require('./models/gambar');
const upload = require('multer')({}).single("file");

router.get('/lihat-semua', handler( Users.lihatSemuaRouter ) )
router.post('/simpan-karyawan', handler(Users.simpanRouter) )
router.get('/lihat-karyawan', handler( Users.lihatSemuaRouter ))
router.post('/hapus-karyawan', handler( Users.hapusRouter ));


router.post('/simpan-gambar', upload, handler(Gambars.simpanGambarRouter) );
router.get('/lihat-gambar/:ukuran/:user_id/:name', handler( Gambars.lihatGambarRouter ));
router.get('/lihat-semua-gambar', handler(Gambars.lihatSemuaGambarRouter ))

module.exports = { router }