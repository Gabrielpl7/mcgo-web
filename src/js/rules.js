

function rules () {
    var rules_box = document.getElementById('rules-box')
    var mc_rules = document.getElementById('minecraft-rules')
    var dc_rules = document.getElementById('discord-rules')

    // przyciski dodac .style

    if (rules_box.className == 'minecraft') {
        mc_rules.style.display = "block"
        dc_rules.style.display = "none"
        rules_box.classList.remove('minecraft')
        rules_box.classList.add('discord')
    } else {
        mc_rules.style.display = "none"
        dc_rules.style.display = "block"
        rules_box.classList.add('minecraft')
        rules_box.classList.remove('discord')
    }
}