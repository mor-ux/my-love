let users = [];

function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    let userName = profile.getName();
    let userEmail = profile.getEmail();

    document.getElementById("login-section").style.display = "none";
    document.getElementById("giveaway-section").style.display = "block";
    document.getElementById("user-name").innerText = userName;

    users.push(userEmail);
}

function joinGiveaway() {
    if (users.length === 0) {
        alert("Belum ada peserta!");
        return;
    }

    let winnerIndex = Math.floor(Math.random() * users.length);
    let winner = users[winnerIndex];

    document.getElementById("winner").innerText = "🎊 Pemenang: " + winner + " 🎊";
}

function signOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.getElementById("login-section").style.display = "block";
        document.getElementById("giveaway-section").style.display = "none";
        document.getElementById("winner").innerText = "";
    });
}