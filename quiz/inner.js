function submitQuiz() {    
    console.log(question_answer);  
    var recommendation = "";
    
    real_answers1=['c. Combination', 'c. Normal', 'a. Acne', 'c. Frequently', 'b. Basic', 'a. Natural', 'a. Yes, often', 'a. 18-24', 'a. Less than 5 minutes', 'a. Less than 5 minutes'];

    real_answers2= ['a. Oily', 'b. Sensitive', 'c. Dark spots', 'a. Rarely', 'a. Minimalist', 'a. Natural', 'b. Occasionally', 'a. 18-24', 'a. Less than 5 minutes', 'a. Less than 5 minutes'];

    real_answers3= ['b. Dry', 'a. Very sensitive', 'c. Dark spots', 'b. Occasionally', 'c. Comprehensive', 'a. Natural', 'c. Rarely', 'b. 25-34', 'a. Less than 5 minutes', 'a. Less than 5 minutes'];

    real_answers4= ['d. Normal', 'c. Normal', 'c. Dark spots', 'c. Frequently', 'b. Basic', 'c. No preference', 'a. Yes, often', 'b. 25-34', 'b. 5-10 minutes', 'b. 5-10 minutes'];

    real_answers5= ['a. Oily', 'd. Not sensitive', 'b. Aging', 'd. Constantly', "d. I don't have a routine", 'b. Synthetic', 'b. Occasionally', 'b. 25-34', 'a. Less than 5 minutes', 'a. Less than 5 minutes'];

    const update_msg = document.querySelector("#Result-message");
    if (JSON.stringify(question_answer) === JSON.stringify(real_answers1)) {
            update_msg.innerHTML = "<center><img alt = 'Argan Oil' src = 'img/argen-oil.jpg' width='130' height = '130'><center><br>We recommend Tea Tree Oil  for Normal skin with frequent breakouts and acne marks.";
    }
    else if (JSON.stringify(question_answer) === JSON.stringify(real_answers2)) {
            update_msg.innerHTML = "<center><img alt = 'Tomato-And-Honey-Face-Mask' src = 'img/Tomato-And-Honey-Face-Mask.jpg' width='130' height = '130'><center><br>We recommend Tomattos,aelovera and Yogurt for oily skin with frequent breakouts.";
    }
    else if (JSON.stringify(question_answer) === JSON.stringify(real_answers3)) {
            update_msg.innerHTML = "<center><img alt = 'Dry skin' src = 'img/Dry Skin.png' width='130' height = '130'><center><br>We recommend Milk, Honey,coconate Oil and Avacado for dry skin with frequent breakouts.";
    }
    else if (JSON.stringify(question_answer) === JSON.stringify(real_answers4)) {
            update_msg.innerHTML = "<center><img alt = 'Shea Butter' src = 'img/Shea Butter.jpg' width='130' height = '130'><center><br>We recommend almond oil,shea butter and out proteins  for normal skin with Dark spot.";
    }
    else if (JSON.stringify(question_answer) === JSON.stringify(real_answers5)) {
            update_msg.innerHTML = "<center><img alt = 'Tomato-And-Honey-Face-Mask' src = 'img/Tomato-And-Honey-Face-Mask.jpg' width='130' height = '130'><center><br>We recommend Milk, Honey,coconate Oil and Avacado for oily skin.";
    }
    else{
         update_msg.innerHTML="<center><img alt = 'Oats' src = 'img/Oats.png' width='130' height = '130'><center><br> We rocommend Orange pills, Oats and Milk based on your Type.";
    }
    resultBox.classList.add('active');
}