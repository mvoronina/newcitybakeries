    function calculations() {
        resetInfo();
        var cakeShape = document.querySelector('input[name = "cakeShape"]:checked').value;

        if (cakeShape === "sheetCake") {
            getPersonalInfo();
            calculateSheetCake();

        } else if (cakeShape === "roundCake") {
            getPersonalInfo();
            calculateRoundCake();

        }
    }

    function calculateRoundCake() {
        var radius = document.getElementById("radiusCake").value;
        var area = radius * radius * 3.14;
        area = (area).toFixed(0);
        var minDimensions = 707;
        var dimensionsExceedMin = area - minDimensions;
        var price = 15;
        price = price + dimensionsExceedMin * 0.02;
        var totalPrice = 0.0;

        var layers = document.getElementById("numOfLayers").value;
        switch (layers) {
            case '1':
                price = price;
                break;
            case '2':
                price = price + 0.5 * price;
                break;
            case '3':
                price = price * 2;
                break;
        }
        totalPrice +=price;

        var extra = "";
        //get value from additional choices
        if (document.querySelector('input[name=creamCheese]:checked')) {
            totalPrice+= 5;
            extra +="Cream Cheese icing $5";

        }
        if (document.querySelector('input[name=fruitAlmonds]:checked')) {
            totalPrice += 7;
            extra +="<br> " + "Fruit and Almonds topping $7";
        }
        if (document.querySelector('input[name =fruitJam]:checked')) {
            totalPrice += 4;
            extra += "<br>"+"Fruit jam filling between layers $4";
        }


        document.getElementById("extra").innerHTML += extra;

        var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "Round" + radius + "cm " +" with " + layers + " layers:";
        cell2.innerHTML = "$" + price;
        var row2 = table.insertRow(1);
        var cell21 = row2.insertCell(0);
        var cell22 = row2.insertCell(1);
        cell21.innerHTML = "Total";
        cell22.innerHTML = "$" + totalPrice;

    }

    function calculateSheetCake() {
        var length = document.getElementById("lengthCake").value;
        var width = document.getElementById("widthCake").value;
        var area = length * width;

        area = (area).toFixed(0);
        var minDimensions = 900;
        var dimensionsExceedMin = area - minDimensions;
        var price = 18;
        price = price + dimensionsExceedMin * 0.02;


        var layers = document.getElementById("numOfLayers").value;
        switch (layers) {
            case '1':
                price = price;
                break;
            case '2':
                price = price + 0.5 * price;
                break;
            case '3':
                price = price * 2;
                break;
        }

    var totalPrice = 0;
    totalPrice +=price;

        var extra = "";
    //get value from additional choices
        if (document.querySelector('input[name=creamCheese]:checked')) {
            totalPrice+= 5;
            extra +="Cream Cheese icing $5";

        }
        if (document.querySelector('input[name=fruitAlmonds]:checked')) {
            totalPrice += 7;
            extra +="<br> " + "Fruit and Almonds topping $7";
        }
        if (document.querySelector('input[name =fruitJam]:checked')) {
            totalPrice += 4;
            extra += "<br>"+"Fruit jam filling between layers $4";
        }


        document.getElementById("extra").innerHTML += extra;

        var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "Sheet cake " + length + "cm " + width + "cm with " + layers + " layers:";
        cell2.innerHTML = "$" + price;
        var row2 = table.insertRow(1);
        var cell21 = row2.insertCell(0);
        var cell22 = row2.insertCell(1);
        cell21.innerHTML = "Total";
        cell22.innerHTML = "$" + totalPrice;

    }

    function enable() {

        var cakeShape = document.querySelector('input[name = "cakeShape"]:checked').value;

        if (cakeShape === "sheetCake") {
            document.getElementById("lengthCake").disabled = false;
            document.getElementById("widthCake").disabled = false;
            document.getElementById("radiusCake").disabled = true;
        } else if (cakeShape === "roundCake") {
            document.getElementById("lengthCake").disabled = true;
            document.getElementById("widthCake").disabled = true;
            document.getElementById("radiusCake").disabled = false;
        }
    }

    function getPersonalInfo() {
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var address = document.getElementById("address").value;
        var postalcode = document.getElementById("postalcode").value;
        var phonenumber = document.getElementById("phoneNumber").value;
        var email = document.getElementById("email").value;

        document.getElementById('information').innerHTML +=
            firstname + " " + lastname + "<br>"
            + address + "<br>" +
            postalcode + "<br>" +
            phonenumber + "<br>" +
            email;
    }

    function resetInfo() {
        document.getElementById("information").innerHTML = "";
        document.getElementById("extra").innerHTML = "";
        document.getElementById("myTable").innerHTML = "";
    }

