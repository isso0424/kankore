function calculation() {
    var form = document.forms.lv
    now_lv = form.now_lv.value
    tar_lv = form.tar_lv.value
    rem_exp = form.rem_exp.value
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
    String(ex)
    var hi = document.getElementById("result")
    hi.innerText = "目標レベルまで　あと" + ex + "　経験値";
}