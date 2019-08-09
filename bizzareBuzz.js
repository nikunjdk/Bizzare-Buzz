//Buying and Selling Buttons Functions
$(".buyInput").val("");
$(".sellInput").val("");

$("#B0").click(function() { 
            var i = 0;
            var buyInput = parseInt($(".buyInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareBought;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());

            valueOfShareBought = marketValue*buyInput;

            if(finalValue>=valueOfShareBought){
            sharesOwned = sharesOwned + buyInput;                
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
            }
            else{
                alert("Insufficient Balance!!!");
                $(".buyInput").eq(i).val("");
            }
        });

$("#S0").click(function() { 
            var i = 0;
            var sellInput = parseInt($(".sellInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareSold;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareSold = marketValue*sellInput;

            if(sharesOwned>=sellInput){
            sharesOwned = sharesOwned - sellInput;                
            finalValue = finalValue + valueOfShareSold;
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
            }
            else{
                alert("Insufficient Shares!!!");
                $(".sellInput").eq(i).val("");
            }
        }); 

$("#B1").click(function() { 
            var i = 1;
            var buyInput = parseInt($(".buyInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareBought;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareBought = marketValue*buyInput;

            if(finalValue>=valueOfShareBought){
            sharesOwned = sharesOwned + buyInput;                
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
            }
            else{
                alert("Insufficient Balance!!!");
                $(".buyInput").eq(i).val("");
            }
        });

$("#S1").click(function() { 
            var i = 1;
            var sellInput = parseInt($(".sellInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareSold;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareSold = marketValue*sellInput;

            if(sharesOwned>=sellInput){
            sharesOwned = sharesOwned - sellInput;                
            finalValue = finalValue + valueOfShareSold;
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
            }
            else{
                alert("Insufficient Shares!!!");
                $(".sellInput").eq(i).val("");
            }
        }); 

$("#B2").click(function() { 
            var i = 2;
            var buyInput = parseInt($(".buyInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareBought;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareBought = marketValue*buyInput;

            if(finalValue>=valueOfShareBought){
            sharesOwned = sharesOwned + buyInput;                
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
            }
            else{
                alert("Insufficient Balance!!!");
                $(".buyInput").eq(i).val("");
            }
        });

$("#S2").click(function() { 
            var i = 2;
            var sellInput = parseInt($(".sellInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareSold;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareSold = marketValue*sellInput;

            if(sharesOwned>=sellInput){
            sharesOwned = sharesOwned - sellInput;                
            finalValue = finalValue + valueOfShareSold;
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
            }
            else{
                alert("Insufficient Shares!!!");
                $(".sellInput").eq(i).val("");
            }
        }); 

$("#B3").click(function() { 
            var i = 3;
            var buyInput = parseInt($(".buyInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareBought;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareBought = marketValue*buyInput;

            if(finalValue>=valueOfShareBought){
            sharesOwned = sharesOwned + buyInput;                
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
            }
            else{
                alert("Insufficient Balance!!!");
                $(".buyInput").eq(i).val("");
            }
        });

$("#S3").click(function() { 
            var i = 3;
            var sellInput = parseInt($(".sellInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareSold;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareSold = marketValue*sellInput;

            if(sharesOwned>=sellInput){
            sharesOwned = sharesOwned - sellInput;                
            finalValue = finalValue + valueOfShareSold;
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
            }
            else{
                alert("Insufficient Shares!!!");
                $(".sellInput").eq(i).val("");
            }
        }); 

$("#B4").click(function() { 
            var i = 4;
            var buyInput = parseInt($(".buyInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareBought;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareBought = marketValue*buyInput;

            if(finalValue>=valueOfShareBought){
            sharesOwned = sharesOwned + buyInput;                
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
            }
            else{
                alert("Insufficient Balance!!!");
                $(".buyInput").eq(i).val("");
            }
        });

$("#S4").click(function() { 
            var i = 4;
            var sellInput = parseInt($(".sellInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareSold;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareSold = marketValue*sellInput;

            if(sharesOwned>=sellInput){
            sharesOwned = sharesOwned - sellInput;                
            finalValue = finalValue + valueOfShareSold;
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
            }
            else{
                alert("Insufficient Shares!!!");
                $(".sellInput").eq(i).val("");
            }
        }); 

$("#B5").click(function() { 
            var i = 5;
            var buyInput = parseInt($(".buyInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareBought;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareBought = marketValue*buyInput;

            if(finalValue>=valueOfShareBought){
            sharesOwned = sharesOwned + buyInput;                
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
            }
            else{
                alert("Insufficient Balance!!!");
                $(".buyInput").eq(i).val("");
            }
        });

$("#S5").click(function() { 
            var i = 5;
            var sellInput = parseInt($(".sellInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareSold;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareSold = marketValue*sellInput;

            if(sharesOwned>=sellInput){
            sharesOwned = sharesOwned - sellInput;                
            finalValue = finalValue + valueOfShareSold;
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
            }
            else{
                alert("Insufficient Shares!!!");
                $(".sellInput").eq(i).val("");
            }
        }); 

$("#B6").click(function() { 
            var i = 6;
            var buyInput = parseInt($(".buyInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareBought;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareBought = marketValue*buyInput;

            if(finalValue>=valueOfShareBought){
            sharesOwned = sharesOwned + buyInput;                
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
            }
            else{
                alert("Insufficient Balance!!!");
                $(".buyInput").eq(i).val("");
            }
        });

$("#S6").click(function() { 
            var i = 6;
            var sellInput = parseInt($(".sellInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareSold;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareSold = marketValue*sellInput;

            if(sharesOwned>=sellInput){
            sharesOwned = sharesOwned - sellInput;                
            finalValue = finalValue + valueOfShareSold;
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
            }
            else{
                alert("Insufficient Shares!!!");
                $(".sellInput").eq(i).val("");
            }
        }); 

$("#B7").click(function() { 
            var i = 7;
            var buyInput = parseInt($(".buyInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareBought;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareBought = marketValue*buyInput;

            if(finalValue>=valueOfShareBought){
            sharesOwned = sharesOwned + buyInput;                
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
            }
            else{
                alert("Insufficient Balance!!!");
                $(".buyInput").eq(i).val("");
            }
        });

$("#S7").click(function() { 
            var i = 7;
            var sellInput = parseInt($(".sellInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareSold;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareSold = marketValue*sellInput;

            if(sharesOwned>=sellInput){
            sharesOwned = sharesOwned - sellInput;                
            finalValue = finalValue + valueOfShareSold;
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
            }
            else{
                alert("Insufficient Shares!!!");
                $(".sellInput").eq(i).val("");
            }
        }); 

$("#B8").click(function() { 
            var i = 8;
            var buyInput = parseInt($(".buyInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareBought;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareBought = marketValue*buyInput;

            if(finalValue>=valueOfShareBought){
            sharesOwned = sharesOwned + buyInput;                
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
            }
            else{
                alert("Insufficient Balance!!!");
                $(".buyInput").eq(i).val("");
            }
        });

$("#S8").click(function() { 
            var i = 8;
            var sellInput = parseInt($(".sellInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareSold;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareSold = marketValue*sellInput;

            if(sharesOwned>=sellInput){
            sharesOwned = sharesOwned - sellInput;                
            finalValue = finalValue + valueOfShareSold;
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
            }
            else{
                alert("Insufficient Shares!!!");
                $(".sellInput").eq(i).val("");
            }
        }); 

$("#B9").click(function() { 
            var i = 9;
            var buyInput = parseInt($(".buyInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareBought;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareBought = marketValue*buyInput;

            if(finalValue>=valueOfShareBought){
            sharesOwned = sharesOwned + buyInput;                
            finalValue = finalValue - valueOfShareBought;
            valueOfShareOwned = valueOfShareOwned + valueOfShareBought;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".buyInput").eq(i).val("");
            }
            else{
                alert("Insufficient Balance!!!");
                $(".buyInput").eq(i).val("");
            }
        });

$("#S9").click(function() { 
            var i = 9;
            var sellInput = parseInt($(".sellInput").eq(i).val());
            var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
            var marketValue = parseInt($(".marketValue").eq(i).text());
            var valueOfShareSold;
            var finalValue = parseInt($("#finalValue").text());
            var valueOfShareOwned = parseInt($(".valueOfSharesOwned").eq(i).text());
            
            valueOfShareSold = marketValue*sellInput;

            if(sharesOwned>=sellInput){
            sharesOwned = sharesOwned - sellInput;                
            finalValue = finalValue + valueOfShareSold;
            valueOfShareOwned = valueOfShareOwned - valueOfShareSold;

            $( ".sharesOwned").eq(i).text(sharesOwned);
            $(".valueOfSharesOwned").eq(i).text(valueOfShareOwned);
            $("#finalValue").text(finalValue);
            $(".sellInput").eq(i).val("");
            }
            else{
                alert("Insufficient Shares!!!");
                $(".sellInput").eq(i).val("");
            }
        });

//Reload Function
// window.onbeforeunload = function() {
//         return "";
//     }

//Timer Function
    function CountDownTimer(duration, granularity) {
  this.duration = duration;
  this.granularity = granularity || 1000;
  this.tickFtns = [];
  this.running = false;
}

CountDownTimer.prototype.start = function() {
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
        i = i+1
        if (i<=4)
        {
            if(i-1 == 1)
            {
                diff = 0;
                that.running = false;
                alert("Start Round "+i);
                $(".round").text(i);
                var mv0 = parseInt($("#mv0").text());
                mv0 = 400;
                $("#mv0").text(mv0);
                var mv1 = parseInt($("#mv1").text());
                mv1 = 2200;
                $("#mv1").text(mv1);
                var mv2 = parseInt($("#mv2").text());
                mv2 = 380;
                $("#mv2").text(mv2);
                var mv3 = parseInt($("#mv3").text());
                mv3 = 390;
                $("#mv3").text(mv3);
                var mv4 = parseInt($("#mv4").text());
                mv4 = 300;
                $("#mv4").text(mv4);
                var mv5 = parseInt($("#mv5").text());
                mv5 = 800;
                $("#mv5").text(mv5);
                var mv6 = parseInt($("#mv6").text());
                mv6 = 270;
                $("#mv6").text(mv6);
                var mv7 = parseInt($("#mv7").text());
                mv7 = 250;
                $("#mv7").text(mv7);
                var mv8 = parseInt($("#mv8").text());
                mv8 = 330;
                $("#mv8").text(mv8);
                var mv9 = parseInt($("#mv9").text());
                mv9 = 35800;
                for(j=0;j<10;j++)
                {
                    var sharesOwned = parseInt($(".sharesOwned").eq(j).text());
                    var marketValue = parseInt($(".marketValue").eq(j).text());
                    var valueOfSharesOwned = sharesOwned*marketValue;
                    $(".valueOfSharesOwned").eq(j).text(valueOfSharesOwned);
                }

                var finalValue = parseInt($("#finalValue").text());
                if (finalValue>200000) {
                    $("#finalValue").text(200000);
                }

                $("#mv9").text(mv9);
                $("#h1").text("EBITDA of ZEE are likely to rise by 5% Y-o-Y and 2.9% on Q-o-Q");
                $("#h2").text("ITC's Q1 profits rose by 16.8%, revenue by 5.6%");
                $("#h3").text("Gold Silver Ratio has been changing rapidly for the past 2 months");
                $("#h4").text("Adani may face a huge fluctuation in his share value due to the need of dissolution of ownership share last year");
                $("#h5").text("Director and CEO of Wipro may sacrifice their shares to attract more people");
                $("#h6").text("BPCL's March '19 quaterly net profit reported of 3124.91 crores up by 16.8% from 2673.85 crores in March '18");
                $("#h7").text("ICICI Banks posted a profit of 1908 crores in June quarter over lower provisioning and healthy NII growth");
                $("#h8").text("There may be a whooping jump in SBI's profit on Q-o-Q basis inspite of the penalty imposed by RBI");
                $("#h9").text("Infosys has alloted shares worth 5 crores to its employees");
                $("#h10").text("TCS may report Q2 profit at 14000 crores");
            }

            if(i-1 == 2)
            {
                diff = 0;
                that.running = false;
                alert("Start Round "+i);
                $(".round").text(i);
                var mv0 = parseInt($("#mv0").text());
                mv0 = 380;
                $("#mv0").text(mv0);
                var mv1 = parseInt($("#mv1").text());
                mv1 = 2180;
                $("#mv1").text(mv1);
                var mv2 = parseInt($("#mv2").text());
                mv2 = 400;
                $("#mv2").text(mv2);
                var mv3 = parseInt($("#mv3").text());
                mv3 = 400;
                $("#mv3").text(mv3);
                var mv4 = parseInt($("#mv4").text());
                mv4 = 300;
                $("#mv4").text(mv4);
                var mv5 = parseInt($("#mv5").text());
                mv5 = 850;
                $("#mv5").text(mv5);
                var mv6 = parseInt($("#mv6").text());
                mv6 = 250;
                $("#mv6").text(mv6);
                var mv7 = parseInt($("#mv7").text());
                mv7 = 220;
                $("#mv7").text(mv7);
                var mv8 = parseInt($("#mv8").text());
                mv8 = 360;
                $("#mv8").text(mv8);
                var mv9 = parseInt($("#mv9").text());
                mv9 = 35500;
                for(j=0;j<10;j++)
                {
                    var sharesOwned = parseInt($(".sharesOwned").eq(j).text());
                    var marketValue = parseInt($(".marketValue").eq(j).text());
                    var valueOfSharesOwned = sharesOwned*marketValue;
                    $(".valueOfSharesOwned").eq(j).text(valueOfSharesOwned);
                }

                var finalValue = parseInt($("#finalValue").text());
                if (finalValue>200000) {
                    $("#finalValue").text(200000);
                }

                $("#mv9").text(mv9);
                $("#h1").text("TCS overtakes RIL to become the most valued firm by m-cap");
                $("#h2").text("Adani has taken over seven electronic companies whose return will be recieved in the long run");
                $("#h3").text("CLSA, JM Financial, CITI and Jefferies have cut their 12 month price target on SBI");
                $("#h4").text("BPCL, IOC, HPCL have decided to set up close to 80000 fuel retail outlets as a part of their biggest ever expansion of the fuel retail network");
                $("#h5").text("Wipro may recieve benefits due to sky rocketing investments in previous year");
                $("#h6").text("Infosys lifted revenue forcast from 8.5% to 10%");
                $("#h7").text("Morgan Stanley say except FMCG and EBIT all business segments have missed their estimates");
                $("#h8").text("ZEE promoters to sell 11% stakes to Invesco Oppenheimer Fund");
                $("#h9").text("");
                $("#h10").text("");
            }

            if(i-1 == 3)
            {
                diff = 0;
                that.running = false;
                alert("Start Round "+i);
                $(".round").text(i);
                var mv0 = parseInt($("#mv0").text());
                mv0 = 420;
                $("#mv0").text(mv0);
                var mv1 = parseInt($("#mv1").text());
                mv1 = 2250;
                $("#mv1").text(mv1);
                var mv2 = parseInt($("#mv2").text());
                mv2 = 350;
                $("#mv2").text(mv2);
                var mv3 = parseInt($("#mv3").text());
                mv3 = 380;
                $("#mv3").text(mv3);
                var mv4 = parseInt($("#mv4").text());
                mv4 = 270;
                $("#mv4").text(mv4);
                var mv5 = parseInt($("#mv5").text());
                mv5 = 900;
                $("#mv5").text(mv5);
                var mv6 = parseInt($("#mv6").text());
                mv6 = 290;
                $("#mv6").text(mv6);
                var mv7 = parseInt($("#mv7").text());
                mv7 = 300;
                $("#mv7").text(mv7);
                var mv8 = parseInt($("#mv8").text());
                mv8 = 340;
                $("#mv8").text(mv8);
                var mv9 = parseInt($("#mv9").text());
                mv9 = 35600;
                for(j=0;j<10;j++)
                {
                    var sharesOwned = parseInt($(".sharesOwned").eq(j).text());
                    var marketValue = parseInt($(".marketValue").eq(j).text());
                    var valueOfSharesOwned = sharesOwned*marketValue;
                    $(".valueOfSharesOwned").eq(j).text(valueOfSharesOwned);
                }

                var finalValue = parseInt($("#finalValue").text());
                if (finalValue>200000) {
                    $("#finalValue").text(200000);
                }

                $("#mv9").text(mv9);
                $("#h1").text("TCS $100 mn clients bucket has not seen any major boom in the past one year");
                $("#h2").text("Zee and Infosys are planning to have a buyback in the next one month");
                $("#h3").text("The government is planning to pass strict rules against loan defaulters and also regarding depotation of the same");
                $("#h4").text("Wipro has touched its peak expectations in June '19 itself");
                $("#h5").text("There has been an easing demand for gold in the past 2 months");
                $("#h6").text("Diversified conglumarate reported a 12.69% rise in ITC's consolidated net profit");
                $("#h7").text("");
                $("#h8").text("");
                $("#h9").text("");
                $("#h10").text("");
            }
        }
        else
        {   
            $(".round").text(i);
                var mv0 = parseInt($("#mv0").text());
                mv0 = 470;
                $("#mv0").text(mv0);
                var mv1 = parseInt($("#mv1").text());
                mv1 = 2320;
                $("#mv1").text(mv1);
                var mv2 = parseInt($("#mv2").text());
                mv2 = 300;
                $("#mv2").text(mv2);
                var mv3 = parseInt($("#mv3").text());
                mv3 = 480;
                $("#mv3").text(mv3);
                var mv4 = parseInt($("#mv4").text());
                mv4 = 350;
                $("#mv4").text(mv4);
                var mv5 = parseInt($("#mv5").text());
                mv5 = 800;
                $("#mv5").text(mv5);
                var mv6 = parseInt($("#mv6").text());
                mv6 = 200;
                $("#mv6").text(mv6);
                var mv7 = parseInt($("#mv7").text());
                mv7 = 200;
                $("#mv7").text(mv7);
                var mv8 = parseInt($("#mv8").text());
                mv8 = 300;
                $("#mv8").text(mv8);
                var mv9 = parseInt($("#mv9").text());
                mv9 = 33000;

            var i = 0;
            var totalValueOfShareOwned = 0;

            for(i=0;i<10;i++)
            {
                var totalValueOfShareOwnedPerCompany;
                var sharesOwned = parseInt($(".sharesOwned").eq(i).text());
                var marketValue = parseInt($(".marketValue").eq(i).text());
                var finalValue = parseInt($("#finalValue").text());
                var finalBalance;

                totalValueOfShareOwnedPerCompany = sharesOwned*marketValue;
                totalValueOfShareOwned = totalValueOfShareOwned+totalValueOfShareOwnedPerCompany;
                finalBalance = finalValue + totalValueOfShareOwned;
                $( ".sharesOwned").eq(i).text(0);
                $(".valueOfSharesOwned").eq(i).text(0);
            }

            $("#finalValue").text(finalBalance);
            $(".buyButton").prop('disabled', true);
            $(".sellButton").prop('disabled', true);
            console.log(finalBalance);
            $("H2").hide();
            $("#startButton").hide();
            $(".hintsDiv").hide();
            $(".timerDivOuter").hide();
            $(".timerDivInner").hide();
            alert("Thanks for competing\nYour Final Balance is "+finalBalance);   
            
        }     
    }

    obj = CountDownTimer.parse(diff);
    that.tickFtns.forEach(function(ftn) {
      ftn.call(this, obj.minutes, obj.seconds);
    }, that);
  }());
};

CountDownTimer.prototype.onTick = function(ftn) {
  if (typeof ftn === 'function') {
    this.tickFtns.push(ftn);
  }
  return this;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
};

CountDownTimer.parse = function(seconds) {
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
