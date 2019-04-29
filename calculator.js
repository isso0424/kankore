function calculation() {
    var form = document.forms.lv
    now_lv = form.now_lv.value
    tar_lv = form.tar_lv.value
    rem_exp = form.rem_exp.value
    var ok = form.kin.value
    var kanmusu = form.kanmusu.value
    String(kanmusu)
    if (ok != "none") {
        if (kanmusu == "asa") {
            tar_lv = 85
        }
        if (kanmusu == "kagero" || kanmusu == "muraku" ||kanmusu == "akatuki" || kanmusu == "murasame"|| kanmusu == "tama") {
            tar_lv = 70
        }
        if (kanmusu == "mutuki" || kanmusu == "kisa" || kanmusu == "hatuharu" || kanmusu == "oosio" || kanmusu == "nati" ||kanmusu == "asigara"||kanmusu == "haguro") {
            tar_lv = 65
        }
        if (kanmusu == "nuinui") {
            tar_lv = 72
        }
        if (kanmusu == "humi" || kanmusu == "siratuyu" || kanmusu == "mitisio"||kanmusu == "yura") {
            tar_lv = 77
        }
        if (kanmusu == "yuugumo"||kanmusu == "kinu"||kanmusu =="hie"||kanmusu == "RJ") {
            tar_lv = 75
        }
        if (kanmusu == "kasumi"||kanmusu == "suzuya"||kanmusu == "kumano"||kanmusu == "nagato"||kanmusu =="ise") {
            tar_lv = 88
        }
        if (kanmusu == "tenryu") {
            tar_lv =84
        }
        if (kanmusu == "tatuta"||kanmusu == "huso"||kanmusu == "yamasiro") {
            tar_lv = 80
        }
        if (kanmusu == "zintu")
            tar_lv = 60
        if (kanmusu == "kinugasa") {
            tar_lv =55
        }
        if (kanmusu == "mutu") {
            tar_lv = 89
        }
        if (kanmusu == "hyuga") {
            tar_lv = 90
        }
        if (kanmusu == "tiyoda") {
            tar_lv =50
        }
    }
    Number(now_lv)
    Number(tar_lv)
    Number(rem_exp)
    var all_xp = 0
    var alt_xp = 0
    if (now_lv == 99) {
        all_xp += 148500
        now_lv -= 1
    }
    if (now_lv == 98) {
        all_xp += 90000
        now_lv -= 1
    }
    if (now_lv == 97) {
        all_xp += 60000
        now_lv -= 1
    }
    if (now_lv == 96) {
        all_xp += 40000
        now_lv -= 1
    }
    if (now_lv == 95) {
        all_xp += 30000
        now_lv -= 1
    }
    if (now_lv == 94) {
        all_xp += 25000
        now_lv -= 1
    }
    if (now_lv == 93) {
        all_xp += 22000
        now_lv -= 1
    }
    if (now_lv == 92) {
        all_xp += 20000
        now_lv -= 1
    }
    if (now_lv <= 91) {
        while (now_lv > 80) {
            add_xp = (now_lv - 81) * 500 + 14000
            now_lv -= 1
            all_xp += add_xp
        }
    }
    if (now_lv < 81) {
        while (now_lv > 70) {
            add_xp = (now_lv - 71) * 400 + 10000
            now_lv -= 1
            all_xp += add_xp
        }
    }
    if (now_lv < 71) {
        while (now_lv > 60) {
            add_xp = (now_lv - 61) * 300 + 7000
            now_lv -= 1
            all_xp += add_xp
        }
    }
    if (now_lv < 61) {
        while (now_lv > 50) {
            add_xp = (now_lv - 51) * 200 + 5000
            now_lv -= 1
            all_xp += add_xp
        }
    }
    if (now_lv < 51) {
        while (now_lv > 1) {
            add_xp = (now_lv - 1) * 100
            now_lv -= 1
            all_xp += add_xp
        }
    }
    if (tar_lv == 99) {
        alt_xp += 148500
        tar_lv -= 1
    }
    if (tar_lv == 98) {
        alt_xp += 90000
        tar_lv -= 1
    }
    if (tar_lv == 97) {
        alt_xp += 60000
        tar_lv -= 1
    }
    if (tar_lv == 96) {
        alt_xp += 40000
        tar_lv -= 1
    }
    if (tar_lv == 95) {
        alt_xp += 30000
        tar_lv -= 1
    }
    if (tar_lv == 94) {
        alt_xp += 25000
        tar_lv -= 1
    }
    if (tar_lv == 93) {
        alt_xp += 22000
        tar_lv -= 1
    }
    if (tar_lv == 92) {
        alt_xp += 20000
        tar_lv -= 1
    }
    if (tar_lv <= 91) {
        while (tar_lv > 80) {
            add_xp = (tar_lv - 81) * 500 + 14000
            tar_lv -= 1
            alt_xp += add_xp
        }
    }
    if (tar_lv < 81) {
        while (tar_lv > 70) {
            add_xp = (tar_lv - 71) * 400 + 10000
            tar_lv -= 1
            alt_xp += add_xp
        }
    }
    if (tar_lv < 71) {
        while (tar_lv > 60) {
            add_xp = (tar_lv - 61) * 300 + 7000
            tar_lv -= 1
            alt_xp += add_xp
        }
    }
    if (tar_lv < 61) {
        while (tar_lv > 50) {
            add_xp = (tar_lv - 51) * 200 + 5000
            tar_lv -= 1
            alt_xp += add_xp
        }
    }
    if (tar_lv < 51) {
        while (tar_lv > 1) {
            add_xp = (tar_lv - 1) * 100
            tar_lv -= 1
            alt_xp += add_xp
        }
    }
    alt_xp += Number(rem_exp)
    ex = alt_xp - all_xp
    var progress
    progress = all_xp / alt_xp
    progress *= 100
    progress.toFixed(1)
    var stage = form.stage.value
    var mvp = form.MVP.checked
    var reader = form.reader.checked
    var s = form.s.checked
    String(s)
    String(mvp)
    String(reader)
    String(stage)
    var stage_ex
    if (stage == "1-5") {
        stage_ex = 457
    }
    if (stage == "5-2") {
        stage_ex = 150
    }
    if (stage == "3-2") {
        stage_ex = 170
    }
    if (stage == "2-2") {
        stage_ex = 172
    }
    if (stage == "7-1") {
        stage_ex = 882
    }
    if (mvp == true) {
        stage_ex *= 2
    }
    if (reader == true) {
        stage_ex *= 1.5
    }
    if (s == true) {
        stage_ex *= 1.2
    }
    count = Math.ceil(ex / stage_ex)
    String(count)
    var err
    if (ex >= 0) {
        String(ex)
        var hi = document.getElementById("result")
        hi.innerText = "目標レベルまで　あと" + ex + "　経験値\nレベリングの進捗は" + progress.toFixed(1) + "%です";
    } else if(ex < 0){
        var hi = document.getElementById("result")
        hi.innerText = "レベルは下げることができません"
        err = 0
    } else {
        var hi = document.getElementById("result")
        hi.innerText = "何らかのエラーにより計算できませんでした"
        err = 0
    }
    if (err == 0) {
        var an = document.getElementById("stage_count")
        an.innerText = ""
    }else if (stage == "1-5" || stage == "2-2" || stage == "3-2" || stage == "5-2" || stage == "7-1") {
        var an = document.getElementById("stage_count")
        an.innerText = stage + "を 約" + count + "週"
    } else {
        var an = document.getElementById("stage_count")
        an.innerText = "ステージが指定されていません"
    }
}
function kink(){
    form = document.forms.lv
    kin = form.kin.value
    var kia = document.getElementById("kanmusu")
    if (kin == 'kutiku'){
        kia.innerHTML = "<h5>目標艦娘選択</h5><select name = 'kanmusu'><option value='asa'>朝潮改二(lv.85)</option><option value = 'kagero'>陽炎(lv.70)</option><option value='nuinui'>不知火改二(lv.72)</option><option value='muraku'>叢雲改二(lv.70)</option><option value='mutuki'>睦月改二(lv.65)</option><option value='kisa'>如月改二(lv.65)</option><option value='humi'>文月(lv.77)</option><option value='akatuki'>暁改二(lv.70)</option><option value='hatuharu'>初春改二(lv.65)</option><option value='siratuyu'>白露改二(lv.77)</option><option value='murasame'>村雨改二(lv.70)</option><option value='oosio'>大潮改二(lv.65)</option><option value='kasumi'>霞改二(lv.88)</option><option value='mitisio'>満潮改二(lv.77)</option><option value='yuugumo'>夕雲改二(lv.75)</option></select> "
    }
    if (kin == "keijun") {
        kia.innerHTML = '<h5>目標艦娘選択</h5><select name="kanmusu"><option value="tama">多摩改二(lv.70)</option><option value="tenryu">天龍改二(lv.84)</option><option value="tatuta">龍田改二</option><option value="kinu">鬼怒改二(lv.75)</option><option value="yura">由良改二(lv.77)</option><option value="zintu">神通改二(lv.60)</option></select>'
    }
    if (kin == "jujun") {
        kia.innerHTML = '<h5>目標艦娘選択</h5><select name="kanmusu"><option value="nati">那智改二(lv.65)</option><option value="asigara">足柄改二(lv.65)</option><option value="haguro">羽黒改二(lv.65)</option><option value="kinugasa">衣笠改二(lv.55)</option><option value="suzuya">鈴谷改二(lv.88)</option><option value="kumano">熊野改二(lv.88)</option></select>'
    }
    if (kin == "senkan") {
        kia.innerHTML = '<h5>目標艦娘選択</h5><select name="kanmusu"><option value="nagato">長門改二(lv.88)</option><option value="mutu">陸奥改二(lv.89)</option><option value="hie">比叡改二(lv.75)</option><option value="huso">扶桑改二(lv.80)</option><option value="yamasiro">山城改二(lv.80)</option><option value="ise">伊勢改二(lv.88)</option><option value="hyuga">日向改二(lv.90)</option></select>'
    }
    if (kin == "keiku") {
        kia.innerHTML = '<h5>目標艦娘選択</h5><select name = "kanmusu"><option value="RJ">龍驤改二(lv.75)</option><option value="tiyoda">千代田航改二(lv.50)</option></select>'
    }
    if (kin == "seikuu") {
        kia.innerHTML = '<h5>目標艦娘選択</h5><select name = "kanmusu"><option value="syokaku">翔鶴改二(lv.80)</option><option value="kainiko">翔鶴改二甲(lv.88)</option></select>'
    }
    if (kin == "other") {
        kia.innerHTML = '<h5>今のとこ誰もいねえ</h5>'
    }
}