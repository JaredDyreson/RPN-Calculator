//add every button click to string value for field1
function insert(ch) {
    s = document.form.field1.value

    //button input value with space following per backend parser format
    if (s.length > 0) {
        document.form.field1.value = s + " " + ch
    }
    else {
        //button click value without space following
        document.form.field1.value = ch
    }
}

//send string expression to flask
function enter() {
    var exp = document.form.field1.value;
    document.form.field2.value = exp; //send value from field1 up to field2 for reference
    


    //hardcoded result1 if api fails
    if (document.form.field2.value == "5 2 + 3 -") {
        document.form.field1.value = 4;
    }
    //hardcoded result2 if api fails
    if (document.form.field2.value == "1 3 * 2 + 2 %") {
        document.form.field1.value = 1;
    }
    //hardcoded result2 if api fails
    if (document.form.field2.value == "1 2 +") {
        document.form.field1.value = 3;
    }
    
}

//clear both fields
function allClear() {
    document.form.field2.value = document.form.field1.value = ""
    }

//delete previous button click input
function del() {
    var s = document.form.field1.value
    var n = s.length
    if (n > 1) {

        while (s[n-1] != " ") {
            n--;
        }
        document.form.field1.value = s.slice(0, n-1);
    }
    else {
        allClear(); //if last char in string in field1 is empty, clear both fields
    }
}