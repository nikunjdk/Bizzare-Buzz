//Buying and Selling Buttons Functions
$(".buyInput").val("");
$(".sellInput").val("");

$('.overlay').hide(); //Hiding for 1st Round


$("#submitButton").click(function () {
    var submitInput = $("#submitText").val();
    var i = parseInt($(".round").eq(0).text());
    if (submitInput == "bb1" && i - 1 == 1) {
        $('.overlay').hide();
        $("#submitText").val("");
    }
    else if (submitInput == "stock" && i - 1 == 2) {
        $('.overlay').hide();
        $("#submitText").val("");
    }
    else if (submitInput == "market" && i - 1 == 3) {
        $('.overlay').hide();
        $("#submitText").val("");
    }
    else {
        $("#submitText").val("");
		$("#invalidPasswordTest").text("NOT VALID!").show().fadeOut(2000);
    }
});

$("#B0").click(function () {
    var i = 0;
    var buyInput = parseInt($(".buyInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareBought;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareBought = marketValue * buyInput;

    if (finalValue >= valueOfShareBought) {
        sharesOwned = sharesOwned + buyInput;
        if(sharesOwned < 0) {
            alert("Insufficient Shares!!!");
            $(".buyInput").eq(i).val("");
        }
        else {
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Balance!!!");
        $(".buyInput").eq(i).val("");
    }
});

$("#S0").click(function () {
    var i = 0;
    var sellInput = parseInt($(".sellInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareSold;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareSold = marketValue * sellInput;

    if (sharesOwned >= sellInput) {
        sharesOwned = sharesOwned - sellInput;
        finalValue = finalValue + valueOfShareSold;
        if(finalValue < 0) {
            alert("Insufficient Balance!!!");
            $(".sellInput").eq(i).val("");
        }
        else {
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Shares!!!");
        $(".sellInput").eq(i).val("");
    }
});

$("#B1").click(function () {
    var i = 1;
    var buyInput = parseInt($(".buyInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareBought;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareBought = marketValue * buyInput;

    if (finalValue >= valueOfShareBought) {
        sharesOwned = sharesOwned + buyInput;
        if(sharesOwned < 0) {
            alert("Insufficient Shares!!!");
            $(".buyInput").eq(i).val("");
        }
        else {
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Balance!!!");
        $(".buyInput").eq(i).val("");
    }
});

$("#S1").click(function () {
    var i = 1;
    var sellInput = parseInt($(".sellInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareSold;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareSold = marketValue * sellInput;

    if (sharesOwned >= sellInput) {
        sharesOwned = sharesOwned - sellInput;
        finalValue = finalValue + valueOfShareSold;
        if(finalValue < 0) {
            alert("Insufficient Balance!!!");
            $(".sellInput").eq(i).val("");
        }
        else {
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Shares!!!");
        $(".sellInput").eq(i).val("");
    }
});

$("#B2").click(function () {
    var i = 2;
    var buyInput = parseInt($(".buyInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareBought;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareBought = marketValue * buyInput;

    if (finalValue >= valueOfShareBought) {
        sharesOwned = sharesOwned + buyInput;
        if(sharesOwned < 0) {
            alert("Insufficient Shares!!!");
            $(".buyInput").eq(i).val("");
        }
        else {
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Balance!!!");
        $(".buyInput").eq(i).val("");
    }
});

$("#S2").click(function () {
    var i = 2;
    var sellInput = parseInt($(".sellInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareSold;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareSold = marketValue * sellInput;

    if (sharesOwned >= sellInput) {
        sharesOwned = sharesOwned - sellInput;
        finalValue = finalValue + valueOfShareSold;
        if(finalValue < 0) {
            alert("Insufficient Shares!!!");
            $(".sellInput").eq(i).val("");
        }
        else {
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Shares!!!");
        $(".sellInput").eq(i).val("");
    }
});

$("#B3").click(function () {
    var i = 3;
    var buyInput = parseInt($(".buyInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareBought;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareBought = marketValue * buyInput;

    if (finalValue >= valueOfShareBought) {
        sharesOwned = sharesOwned + buyInput;
        if(sharesOwned < 0) {
            alert("Insufficient Shares!!!");
            $(".buyInput").eq(i).val("");
        }
        else {
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Balance!!!");
        $(".buyInput").eq(i).val("");
    }
});

$("#S3").click(function () {
    var i = 3;
    var sellInput = parseInt($(".sellInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareSold;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareSold = marketValue * sellInput;

    if (sharesOwned >= sellInput) {
        sharesOwned = sharesOwned - sellInput;
        finalValue = finalValue + valueOfShareSold;
        if(finalValue < 0) {
            alert("Insufficient Balance!!!");
            $(".sellInput").eq(i).val("");
        }
        else {
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Shares!!!");
        $(".sellInput").eq(i).val("");
    }
});

$("#B4").click(function () {
    var i = 4;
    var buyInput = parseInt($(".buyInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareBought;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareBought = marketValue * buyInput;

    if (finalValue >= valueOfShareBought) {
        sharesOwned = sharesOwned + buyInput;
        if(sharesOwned < 0) {
            alert("Insufficient Shares!!!");
            $(".buyInput").eq(i).val("");
        }
        else {
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Balance!!!");
        $(".buyInput").eq(i).val("");
    }
});

$("#S4").click(function () {
    var i = 4;
    var sellInput = parseInt($(".sellInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareSold;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareSold = marketValue * sellInput;

    if (sharesOwned >= sellInput) {
        sharesOwned = sharesOwned - sellInput;
        finalValue = finalValue + valueOfShareSold;
        if(finalValue < 0) {
            alert("Insufficient Balance!!!");
            $(".sellInput").eq(i).val("");
        }
        else {
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Shares!!!");
        $(".sellInput").eq(i).val("");
    }
});

$("#B5").click(function () {
    var i = 5;
    var buyInput = parseInt($(".buyInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareBought;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareBought = marketValue * buyInput;

    if (finalValue >= valueOfShareBought) {
        sharesOwned = sharesOwned + buyInput;
        if(sharesOwned < 0) {
            alert("Insufficient Shares!!!");
            $(".buyInput").eq(i).val("");
        }
        else {
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Balance!!!");
        $(".buyInput").eq(i).val("");
    }
});

$("#S5").click(function () {
    var i = 5;
    var sellInput = parseInt($(".sellInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareSold;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareSold = marketValue * sellInput;

    if (sharesOwned >= sellInput) {
        sharesOwned = sharesOwned - sellInput;
        finalValue = finalValue + valueOfShareSold;
        if(finalValue < 0) {
            alert("Insufficient Balance!!!");
            $(".sellInput").eq(i).val("");
        }
        else {
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Shares!!!");
        $(".sellInput").eq(i).val("");
    }
});

$("#B6").click(function () {
    var i = 6;
    var buyInput = parseInt($(".buyInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareBought;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareBought = marketValue * buyInput;

    if (finalValue >= valueOfShareBought) {
        sharesOwned = sharesOwned + buyInput;
        if(sharesOwned < 0) {
            alert("Insufficient Shares!!!");
            $(".buyInput").eq(i).val("");
        }
        else {
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Balance!!!");
        $(".buyInput").eq(i).val("");
    }
});

$("#S6").click(function () {
    var i = 6;
    var sellInput = parseInt($(".sellInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareSold;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareSold = marketValue * sellInput;

    if (sharesOwned >= sellInput) {
        sharesOwned = sharesOwned - sellInput;
        finalValue = finalValue + valueOfShareSold;
        if(finalValue < 0) {
            alert("Insufficient Balance!!!");
            $(".sellInput").eq(i).val("");
        }
        else {
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Shares!!!");
        $(".sellInput").eq(i).val("");
    }
});

$("#B7").click(function () {
    var i = 7;
    var buyInput = parseInt($(".buyInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareBought;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareBought = marketValue * buyInput;

    if (finalValue >= valueOfShareBought) {
        sharesOwned = sharesOwned + buyInput;
        if(sharesOwned < 0) {
            alert("Insufficient Shares!!!");
            $(".buyInput").eq(i).val("");
        }
        else {
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Balance!!!");
        $(".buyInput").eq(i).val("");
    }
});

$("#S7").click(function () {
    var i = 7;
    var sellInput = parseInt($(".sellInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareSold;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareSold = marketValue * sellInput;

    if (sharesOwned >= sellInput) {
        sharesOwned = sharesOwned - sellInput;
        finalValue = finalValue + valueOfShareSold;
        if(finalValue < 0) {
            alert("Insufficient Balance!!!");
            $(".sellInput").eq(i).val("");
        }
        else {
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Shares!!!");
        $(".sellInput").eq(i).val("");
    }
});

$("#B8").click(function () {
    var i = 8;
    var buyInput = parseInt($(".buyInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareBought;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareBought = marketValue * buyInput;

    if (finalValue >= valueOfShareBought) {
        sharesOwned = sharesOwned + buyInput;
        if(sharesOwned < 0) {
            alert("Insufficient Shares!!!");
            $(".buyInput").eq(i).val("");
        }
        else {
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Balance!!!");
        $(".buyInput").eq(i).val("");
    }
});

$("#S8").click(function () {
    var i = 8;
    var sellInput = parseInt($(".sellInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareSold;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareSold = marketValue * sellInput;

    if (sharesOwned >= sellInput) {
        sharesOwned = sharesOwned - sellInput;
        finalValue = finalValue + valueOfShareSold;
        if(finalValue < 0) {
            alert("Insufficient Balance!!!");
            $(".sellInput").eq(i).val("");
        }
        else {
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Shares!!!");
        $(".sellInput").eq(i).val("");
    }
});

$("#B9").click(function () {
    var i = 9;
    var buyInput = parseInt($(".buyInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareBought;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareBought = marketValue * buyInput;

    if (finalValue >= valueOfShareBought) {
        sharesOwned = sharesOwned + buyInput;
        if(sharesOwned < 0) {
            alert("Insufficient Shares!!!");
            $(".buyInput").eq(i).val("");
        }
        else {
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Balance!!!");
        $(".buyInput").eq(i).val("");
    }
});

$("#S9").click(function () {
    var i = 9;
    var sellInput = parseInt($(".sellInput").eq(i).val());
    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
    var marketValue = parseInt($(".marketValue").eq(i).text());
    var valueOfShareSold;
    var finalValue = parseInt($("#finalValue").text());
    var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

    valueOfShareSold = marketValue * sellInput;

    if (sharesOwned >= sellInput) {
        sharesOwned = sharesOwned - sellInput;
        finalValue = finalValue + valueOfShareSold;
        if(finalValue < 0) {
            alert("Insufficient Balance!!!");
            $(".sellInput").eq(i).val("");
        }
        else {
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $(".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
        }
    }
    else {
        alert("Insufficient Shares!!!");
        $(".sellInput").eq(i).val("");
    }
});

//Reload Function
window.onbeforeunload = function () {
    return "";
}

//Timer Function
function CountDownTimer(duration, granularity) {
    this.duration = duration;
    this.granularity = granularity || 1000;
    this.tickFtns = [];
    this.running = false;
}

CountDownTimer.prototype.start = function () {
    if (this.running) {
        return;
    }
    this.running = true;
    var start = Date.now(),
        that = this,
        diff, obj;

    (function timer() {
        diff = that.duration - (((Date.now() - start) / 1000) | 0);

        if (diff > 0) {
            setTimeout(timer, that.granularity);
        } else {
            $(".buyButton").prop('disabled', true);
            $(".sellButton").prop('disabled', true);
            var i = parseInt($(".round").eq(0).text());
            var j = 0;
            i = i + 1
            if (i <= 4) {
                $(".overlay").show();
                if (i - 1 == 1) {
                    diff = 0;
                    that.running = false;
                    $(".round").text(i);
                    var mv0 = parseInt($("#mv0").text());
                    mv0 = 680;
                    $("#mv0").text(mv0);
                    var mv1 = parseInt($("#mv1").text());
                    mv1 = 330;
                    $("#mv1").text(mv1);
                    var mv2 = parseInt($("#mv2").text());
                    mv2 = 1275;
                    $("#mv2").text(mv2);
                    var mv3 = parseInt($("#mv3").text());
                    mv3 = 265;
                    $("#mv3").text(mv3);
                    var mv4 = parseInt($("#mv4").text());
                    mv4 = 1830;
                    $("#mv4").text(mv4);
                    var mv5 = parseInt($("#mv5").text());
                    mv5 = 1350;
                    $("#mv5").text(mv5);
                    var mv6 = parseInt($("#mv6").text());
                    mv6 = 460;
                    $("#mv6").text(mv6);
                    var mv7 = parseInt($("#mv7").text());
                    mv7 = 50;
                    $("#mv7").text(mv7);
                    var mv8 = parseInt($("#mv8").text());
                    mv8 = 42500;
                    $("#mv8").text(mv8);
                    var mv9 = parseInt($("#mv9").text());
                    mv9 = 4500;
                    $("#mv9").text(mv9);

                    for (j = 0; j < 10; j++) {
                        var sharesOwned = parseInt($(".sharesOwned").eq(j).text());
                        var marketValue = parseInt($(".marketValue").eq(j).text());
                        var valueOfSharesOwned = sharesOwned * marketValue;
                        $(".valueOfSharesOwned").eq(j).text(valueOfSharesOwned);
                    }

                    var finalValue = parseInt($("#finalValue").text());
                    if (finalValue > 200000) {
                        $("#finalValue").text(200000);
                    }

                    $("#h1").text("Infosys Q4 PAT may dip 11.1% Q-o-Q.");
                    $("#h2").text("SBI to launch OTP based cash withdrawals at all its ATMs.");
                    $("#h3").text("ICE Brent futures prices were boosted by positive news on the US - China trade talks. Call on OPEC crude in 2020 is estimated at 28.9M bps, 1M bpd lower than current production.");
                    $("#h4").text("Brokerages bullish on HDFC Bank post Q3 results.");
                    $("#h5").text("Gold: Silver ratio in rose to 90:1.");
                    $("#h6").text("VI and Bharti Airtel to pay AGR dues to DoT.");
                    $("#h7").text("Amazon expects an upsurge in its net profit due to the proposed deal with Yatra.com in the hospitality sector.");
                    $("#h8").text("ZEE ltd to see a marginal increase in Q4 Y-o-Y.");
                    $("#h9").text("Google may suffer losses amounting to $44 billion globally in ad revenue.");
                    $("#h10").text("DGFT blacklists Bharti Airtel following non fullfillment of export obligations");

                    $("#invalidPasswordTest").text("");
                }

                if (i - 1 == 2) {
                    diff = 0;
                    that.running = false;
                    $(".round").text(i);
                    var mv0 = parseInt($("#mv0").text());
                    mv0 = 730;
                    $("#mv0").text(mv0);
                    var mv1 = parseInt($("#mv1").text());
                    mv1 = 320;
                    $("#mv1").text(mv1);
                    var mv2 = parseInt($("#mv2").text());
                    mv2 = 1230;
                    $("#mv2").text(mv2);
                    var mv3 = parseInt($("#mv3").text());
                    mv3 = 270;
                    $("#mv3").text(mv3);
                    var mv4 = parseInt($("#mv4").text());
                    mv4 = 1650;
                    $("#mv4").text(mv4);
                    var mv5 = parseInt($("#mv5").text());
                    mv5 = 1375;
                    $("#mv5").text(mv5);
                    var mv6 = parseInt($("#mv6").text());
                    mv6 = 420;
                    $("#mv6").text(mv6);
                    var mv7 = parseInt($("#mv7").text());
                    mv7 = 40;
                    $("#mv7").text(mv7);
                    var mv8 = parseInt($("#mv8").text());
                    mv8 = 45000;
                    $("#mv8").text(mv8);
                    var mv9 = parseInt($("#mv9").text());
                    mv9 = 3500;
                    $("#mv9").text(mv9);

                    for (j = 0; j < 10; j++) {
                        var sharesOwned = parseInt($(".sharesOwned").eq(j).text());
                        var marketValue = parseInt($(".marketValue").eq(j).text());
                        var valueOfSharesOwned = sharesOwned * marketValue;
                        $(".valueOfSharesOwned").eq(j).text(valueOfSharesOwned);
                    }

                    var finalValue = parseInt($("#finalValue").text());
                    if (finalValue > 200000) {
                        $("#finalValue").text(200000);
                    }


                    $("#h1").text("Infosys retains position in top10 IT firms.");
                    $("#h2").text("Google accussed of trafficking user browsing session via chrome incognito mode");
                    $("#h3").text("Demand for oil falls largely due to coronavirus pandemic. WTI & Brent oil drops to 21-year low.");
                    $("#h4").text("HDFC Bank surge up to 21% post Q4 biz update amid Covid-19 woes.");
                    $("#h5").text("70% of banking sector debt affected by corona virus impact.");
                    $("#h6").text("Silver might lose its importance as a safe asset.");
                    $("#h7").text("Google may eye a 5% stake in VI.");
                    $("#h8").text("Amazon pledges $2 billion venture capital fund to invest in clean energy.");
                    $("#h9").text("ICICI Direct expects Zee Ltd.'s net profit to decrease by 55.5% Y-o-Y");
                    $("#h10").text("Bharti Airtel PAT may decrease 90% Y-o-Y.");

                    $("#invalidPasswordTest").text("");
                }

                if (i - 1 == 3) {
                    diff = 0;
                    that.running = false;
                    $(".round").text(i);
                    var mv0 = parseInt($("#mv0").text());
                    mv0 = 690;
                    $("#mv0").text(mv0);
                    var mv1 = parseInt($("#mv1").text());
                    mv1 = 200;
                    $("#mv1").text(mv1);
                    var mv2 = parseInt($("#mv2").text());
                    mv2 = 950;
                    $("#mv2").text(mv2);
                    var mv3 = parseInt($("#mv3").text());
                    mv3 = 140;
                    $("#mv3").text(mv3);
                    var mv4 = parseInt($("#mv4").text());
                    mv4 = 1700;
                    $("#mv4").text(mv4);
                    var mv5 = parseInt($("#mv5").text());
                    mv5 = 1380;
                    $("#mv5").text(mv5);
                    var mv6 = parseInt($("#mv6").text());
                    mv6 = 430;
                    $("#mv6").text(mv6);
                    var mv7 = parseInt($("#mv7").text());
                    mv7 = 55;
                    $("#mv7").text(mv7);
                    var mv8 = parseInt($("#mv8").text());
                    mv8 = 45000;
                    $("#mv8").text(mv8);
                    var mv9 = parseInt($("#mv9").text());
                    mv9 = 2300;
                    $("#mv9").text(mv9);

                    for (j = 0; j < 10; j++) {
                        var sharesOwned = parseInt($(".sharesOwned").eq(j).text());
                        var marketValue = parseInt($(".marketValue").eq(j).text());
                        var valueOfSharesOwned = sharesOwned * marketValue;
                        $(".valueOfSharesOwned").eq(j).text(valueOfSharesOwned);
                    }

                    var finalValue = parseInt($("#finalValue").text());
                    if (finalValue > 200000) {
                        $("#finalValue").text(200000);
                    }

                    $("#h1").text("Infosys acquires Guidevision & strikes a long term partnership with Lanxess.");
                    $("#h2").text("Airtel to come up with new Airtel extreme fiber broadband plans.");
                    $("#h3").text("Oil demand might increase as worldwide lockdowns come to ease.");
                    $("#h4").text("US law firm files class action suit against HDFC Bank for misleading claims.");
                    $("#h5").text("SBI reported an 81% YoY jump in net profit for Q1 FY21.");
                    $("#h6").text("MCX gets SEBI approval to launch silver mini options.");
                    $("#h7").text("Verizon, amazon may invest $4billion in VI.");
                    $("#h8").text("Google working on tools to improve user privacy in digital advertising.");
                    $("#h9").text("Revenues in media sector rises, as they air new shows and episodes.");
                    $("#h10").text("Jeff Bezoz might see Amazon shares worth $3.1 billion.");

                    $("#invalidPasswordTest").text("");
                }
            }
            else {
                $(".round").text(i);
                var mv0 = parseInt($("#mv0").text());
                mv0 = 800;
                $("#mv0").text(mv0);
                var mv1 = parseInt($("#mv1").text());
                mv1 = 400;
                $("#mv1").text(mv1);
                var mv2 = parseInt($("#mv2").text());
                mv2 = 1020;
                $("#mv2").text(mv2);
                var mv3 = parseInt($("#mv3").text());
                mv3 = 200;
                $("#mv3").text(mv3);
                var mv4 = parseInt($("#mv4").text());
                mv4 = 1800;
                $("#mv4").text(mv4);
                var mv5 = parseInt($("#mv5").text());
                mv5 = 1400;
                $("#mv5").text(mv5);
                var mv6 = parseInt($("#mv6").text());
                mv6 = 440;
                $("#mv6").text(mv6);
                var mv7 = parseInt($("#mv7").text());
                mv7 = 75;
                $("#mv7").text(mv7);
                var mv8 = parseInt($("#mv8").text());
                mv8 = 43000;
                $("#mv8").text(mv8);
                var mv9 = parseInt($("#mv9").text());
                mv9 = 4000;
                $("#mv9").text(mv9);

                var i = 0;
                var totalValueOfShareOwned = 0;

                for (i = 0; i < 10; i++) {
                    var totalValueOfShareOwnedPerCompany;
                    var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
                    var marketValue = parseInt($(".marketValue").eq(i).text());
                    var finalValue = parseInt($("#finalValue").text());
                    var finalBalance;

                    totalValueOfShareOwnedPerCompany = sharesOwned * marketValue;
                    totalValueOfShareOwned = totalValueOfShareOwned + totalValueOfShareOwnedPerCompany;
                    finalBalance = finalValue + totalValueOfShareOwned;
                    $(".sharesOwned").eq(i).text(0);
                    $(".valueOfSharesOwned").eq(i).text(0);
                }

                $("#finalValue").text(finalBalance);
                $(".buyButton").prop('disabled', true);
                $(".sellButton").prop('disabled', true);
                $("H2").hide();
                $("#startButton").hide();
                $(".hintsDiv").hide();
                $(".timerDivOuter").hide();
                $(".timerDivInner").hide();
                alert("Thanks for competing\nYour Final Balance is " + finalBalance);

            }
        }

        obj = CountDownTimer.parse(diff);
        that.tickFtns.forEach(function (ftn) {
            ftn.call(this, obj.minutes, obj.seconds);
        }, that);
    }());
};

CountDownTimer.prototype.onTick = function (ftn) {
    if (typeof ftn === 'function') {
        this.tickFtns.push(ftn);
    }
    return this;
};

CountDownTimer.prototype.expired = function () {
    return !this.running;
};

CountDownTimer.parse = function (seconds) {
    return {
        'minutes': (seconds / 60) | 0,
        'seconds': (seconds % 60) | 0
    };
};
window.onload = function () {
    $(".buyButton").prop('disabled', true);
    $(".sellButton").prop('disabled', true);

    var display = document.querySelector('#time');
    timer = new CountDownTimer(480);
    timeObj = CountDownTimer.parse(480);

    format(timeObj.minutes, timeObj.seconds);

    timer.onTick(format);

    document.querySelector('#startButton').addEventListener('click', function () {
        timer.start();
        $(".buyButton").prop('disabled', false);
        $(".sellButton").prop('disabled', false);
    });

    function format(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
    }
};
