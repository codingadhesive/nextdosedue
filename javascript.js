/*
Continuos clock display =======================================
===============================================================
-needs to be white font on black background still, and click to adjust from
12 hr format to 24, with all values altered per choice
*/

function display_c() {
    var refresh=1000;
    mytime=setTimeout("display_ct()", refresh)
}

function display_ct() {
    var x = new Date();
    var x1 = x.getMonth() + 1 + "/" + x.getDate() + "/" + x.getFullYear();
    x1 = x1 + " - " + x.getHours()+ ":" + x.getMinutes() + ":" + x.getSeconds();
/*    if (month < 10) {
        month = "0" + month; 
    }
    if (day < 10) {
        day = "0" + day;
    }
    var x3 = month + "/" + day + "-" + year;
*/
    document.getElementById("ct").innerHTML = x1;
    display_c();
}



/* REMAINING PROBLEMS =========================================
===============================================================
1)  LAST GIVEN:
    USER input-
        -black boxes, when clicked, a pull down comes down where you can select
        if you want to, or just manual type entry
        -if not numbers, alert and ask to re-enter
        -possibly show "hours ago"
        -select today or yesterday (today default)
    (DRAFT):
    -DISPLAY TEXT/BOXES
    -INPUT NUMBERS ONLY or error
    -manual entry, upon clicking drop down pops up
*/


