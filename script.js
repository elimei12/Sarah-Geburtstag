function showNextStep(currentStep, nextStep) {
    document.getElementById(currentStep).classList.add("hidden");
    document.getElementById(nextStep).classList.remove("hidden");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showMessage(id, message, isCorrect) {
    let element = document.getElementById(id);
    element.innerText = message;
    element.classList.remove("correct", "wrong");
    element.classList.add(isCorrect ? "correct" : "wrong");
}

function checkPuzzle() {
    let input = document.getElementById("puzzleZahl").value;
    if (input === "9") {
        showMessage("puzzleResult", "Richtige Zahl! SUPER", true);
        sleep(1000).then(() => showNextStep("step1", "step2"))
    } else {
        showMessage("puzzleResult", "Das wars nicht ganz! Versuche es erneut.", false);
    }
}

function checkNumbers() {
    let bday = Number(document.getElementById("bday").value);
    let urlaub = Number(document.getElementById("urlaub").value);
    let alter = Number(document.getElementById("alter").value);

    if (bday === 12 && urlaub === 2 && alter === 19) {
        showMessage("numbersResult", "Alles richtig", true);
        sleep(1000).then(() => showNextStep("step2", "step3"))
    } else {
        showMessage("numbersResult", "Mindestens eine Zahl ist falsch!", false);
    }
}

function checkFlower() {
    let input = document.getElementById("flower").value.toLowerCase();
    if (input === "tulpe") {
        showMessage("flowerResult", "Ich hoffe ich habe welche bekommen.", true);
        sleep(3000).then(() => showNextStep("step3", "step4"))
    } else {
        showMessage("flowerResult", "Auch eine schöne Blume, aber nicht die die gesucht ist.", false);
    }
}

function checkFood() {
    let input = document.getElementById("food").value.toLowerCase();
    if (input === "nudeln" || input === "nudel") {
        showMessage("foodResult", "Mhhh lecker.", true);
        sleep(1000).then(() => showNextStep("step4", "step5"))
    } else {
        showMessage("foodResult", "Tipp: Tomatensoße.", false);
    }
}

function checkKiss() {
    let input = document.getElementById("kiss").value.toLowerCase();
    if (input === "küssen") {
        showMessage("kissResult", "Jaaaaaaaaaaaaa", true);
        sleep(2000).then(() => showNextStep("step5", "step6"))
    } else if (input === "kuss") {
        showMessage("kissResult", "Oh schade, das war wohl etwas zu kurz", false);
    } else {
        showMessage("kissResult", "Ich hab wohl keinen Kuss bekommen", false);
    }
}

function checkCoin() {
    let input = document.getElementById("coin").value.toLowerCase();
    if (input === "socken" || input === "socke") {
        showMessage("coinResult", "💶", true);
        sleep(1000).then(() => showNextStep("step6", "step7"))
    } else {
        showMessage("coinResult", "Falscher Ort! Such weiter!", false);
    }
}

function checkQuestions() {
    let correctAnswers = 0;
    let answers = {
        car: ["nissan gtr r35", "nissan gtr", "gtr", "r35", "nissan"],
        phone: ["google", "pixel", "6", "6 Pro", "6Pro"],
        fashion: ["peso", "olakala"],
        friend: ["alex", "erik", "michael"],
        job: ["tüv trust it", "tüv", "tuev"]
    };

    if (answers.car.includes(document.getElementById("car").value.toLowerCase())) correctAnswers++;
    if (answers.phone.includes(document.getElementById("phone").value.toLowerCase())) correctAnswers++;
    if (answers.fashion.includes(document.getElementById("fashion").value.toLowerCase())) correctAnswers++;
    if (answers.friend.includes(document.getElementById("friend").value.toLowerCase())) correctAnswers++;
    if (answers.job.includes(document.getElementById("job").value.toLowerCase())) correctAnswers++;

    if (correctAnswers >= 2) {
        showMessage("questionsResult", "Du weißt ja alles über mich!", true);
        sleep(3000).then(() => showNextStep("step7", "step8"))
    } else {
        showMessage("questionsResult", "Mindestens zwei Antworten müssen richtig sein!", false);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("sportsFields");
    for (let i = 0; i < 15; i++) {
        let input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.classList.add("letterInput");
        container.appendChild(input);
    }
});

function checkSports() {
    let expectedWord = "elefantenrüssel";
    let inputs = document.querySelectorAll("#sportsFields input");
    let userWord = Array.from(inputs).map(i => i.value.toLowerCase()).join("");

    if (userWord === expectedWord) {
        showMessage("sportsResult", "Soo sportlich", true);
        sleep(2000).then(() => showNextStep("step8", "step9"))
    } else {
        showMessage("sportsResult", "Waren wohl zu wenig Übungen", false);
    }
}

function checkChoice() {
    let input = document.getElementById("choice").value.toLowerCase();
    if (input === "silber") {
        showMessage("choiceResult", "Das Packerl auf der linken Seite ist deins.", true);
    } else if (input === "gold") {
        showMessage("choiceResult", "Das Packerl auf der rechten Seite ist deins.", true);
    } else {
        showMessage("choiceResult", "Eine Farbe musst du wählen.", false);
    }
}
