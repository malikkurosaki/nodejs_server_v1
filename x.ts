const { User } = require("./models/user");
const { Kelamin } = require("./models/kelamin");

const x = process.argv.splice(2);


;(async () => {
    switch (x[0]){
        case "--aktifkan":
            await User.aktifkanForce();
            // await Kelamin.aktifkanForce();
        break;
        case "--lihat":
            //console.log(JSON.stringify(await Gambar.lihatSemuaGambar()))
            //console.log(JSON.stringify(await Akun.lihatSemua()))
            console.log(JSON.stringify(await User.findAll({
                include: {
                    model: Kelamin
                }
            }), null, 2));
        break;
        case "--lihat-kelamin":
            console.log(await Kelamin.lihatSemua())
        break;
        case "--simpan":
            const data = await User.simpan(User.fake);
            // const data = await Kelamin.simpan({nama: "pria"})
            console.log(JSON.stringify(data, null, 2))
        break;
        case "--percobaan":
            
        break;
        default: console.log("kunci tidk aada")
    }

})()