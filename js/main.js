var deck = [];
var hand = [];
hand[0] = ["qs", "js", "6s", "4s", "kh", "9h", "5h", "3h", "kd", "9d", "7d", "kc", "4c"];
hand[1] = ["ks", "9s", "7s", "5s", "10h", "6d", "4d", "qc", "10c", "9c", "9c", "5c", "2c"];
hand[2] = ["10s", "8s", "3s", "qh", "8h", "6h", "4h", "2h", "ad", "8d", "5d", "2d", "jc"];
hand[3] = ["as", "2s", "ah", "jh", "7h", "qd", "jd", "10d", "3d", "ac", "7c", "6c", "3c"];

for (t = 0; t < 13; t++) {
    console.log("TRICK: " + t);

    for (n = 0; n < 4; n++) {
        //console.log(hand[n][0]);
        console.log("Hand " + n + ": " + hand[n]);
        hand[n].splice(0, 1);
    }
    console.log(" ");
}