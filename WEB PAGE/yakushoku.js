const roles = ["市民１", "パン屋", "占い師", "騎士", "バカ", "狂人", "人狼", "市民２"];
const players = [1, 2, 3, 4, 5, 6, 7, 8];

// 配列をシャッフルする関数
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 役割をシャッフル
const shuffledRoles = shuffle(roles);

// プレイヤーに役割を割り当てる
const playerRoles = {};
for (let i = 0; i < players.length; i++) {
    playerRoles[players[i]] = shuffledRoles[i];
}

// 役職割り当てをセッションストレージに保存
for (let player in playerRoles) {
    sessionStorage.setItem(`player${player}`, playerRoles[player]);
}

// セッションストレージの内容を確認
for (let player in playerRoles) {
    console.log(`Player ${player}: ${sessionStorage.getItem(`player${player}`)}`);
}