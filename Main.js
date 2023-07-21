// JavaScript source code
var vehicleRFIDs = ["555677", "555678", "555679", "555680", "555681", "555682"];
var vehicleDetails = [
    {
        "VinNo": "334AS5",
        "RFID": "555677",
        "Make": "Honda",
        "Model": "Accord",
        "Owner": "Andrew Laytin",
        "RegYear": "2012",
        "RegNo": "BKL5548D",
        "OwnerContact":"8098790756"
    },
    {
        "VinNo": "334AS6",
        "RFID": "555678",
        "Make": "Mercedes",
        "Model": "Benj",
        "Owner": "Michael Morell",
        "RegYear": "2013",
        "RegNo": "CBD8767F",
        "OwnerContact": "9798097898"
    },
    {
        "VinNo": "334AS7",
        "RFID": "555679",
        "Make": "Audi",
        "Model": "A7",
        "Owner": "Petra Leno",
        "RegYear": "2014",
        "RegNo": "SGF1989T",
        "OwnerContact": "9734675476"
    },
    {
        "VinNo": "334AS8",
        "RFID": "555680",
        "Make": "Lamborghini",
        "Model": "Sian",
        "Owner": "Pedro Oliva",
        "RegYear": "2015",
        "RegNo": "AEV3390F",
        "OwnerContact": "7890876789"
    },
    {
        "VinNo": "334AS9",
        "RFID": "555681",
        "Make": "Volkswagen",
        "Model": "Vento",
        "Owner": "Mike Morell",
        "RegYear": "2016",
        "RegNo": "ZBC4453G",
        "OwnerContact": "7899878789"
    },
    {
        "VinNo": "334AS1",
        "RFID": "555682",
        "Make": "Ford",
        "Model": "Endeavour",
        "Owner": "Tim Cook",
        "RegYear": "2017",
        "RegNo": "WEG3349H",
        "OwnerContact": "9876875096"
    }
];
var random = 1;

var vehicleServiceHistory = [
    { "RFID": "555677", "ServiceHistory": [{ "LastServiceDate": "12/02/2023", "OdometerReading": "25155", "OilChanged": "Yes", "FilterChanged": "Yes" }] },
    { "RFID": "555678", "ServiceHistory": [{ "LastServiceDate": "25/01/2023", "OdometerReading": "26666", "OilChanged": "Yes", "FilterChanged": "No" }] },
    { "RFID": "555679", "ServiceHistory": [{ "LastServiceDate": "26/03/2023", "OdometerReading": "38190", "OilChanged": "Yes", "FilterChanged": "Yes" }] },
    { "RFID": "555680", "ServiceHistory": [{ "LastServiceDate": "13/01/2023", "OdometerReading": "45876", "OilChanged": "Yes", "FilterChanged": "No" }] },
    { "RFID": "555681", "ServiceHistory": [{ "LastServiceDate": "18/06/2023", "OdometerReading": "38490", "OilChanged": "Yes", "FilterChanged": "Yes" }] },
    { "RFID": "555682", "ServiceHistory": [{ "LastServiceDate": "05/04/2023", "OdometerReading": "50212", "OilChanged": "Yes", "FilterChanged": "No" }] }
];

$(document).ready(() => {
    random = Math.floor((Math.random() * 5) + 1);
    if (random == 6) {
        //add new vehicle
    }
    else {
        var RFID = vehicleRFIDs[random];
        var vehicleDetail = vehicleDetails.find(obj => {
            return obj.RFID == RFID;
        })
        $("#divRegNo").html('<b>' + vehicleDetail.RegNo +'<b/>');
        $("#divOwnerName").html('<b>' + vehicleDetail.Owner + '<b/>');
        $("#divOwnerContact").html(vehicleDetail.OwnerContact);
        $("#divVinNo").html(vehicleDetail.VinNo);
        $("#divRegYear").html(vehicleDetail.RegYear);
        $("#divMake").html(vehicleDetail.Make);
        $("#divModel").html(vehicleDetail.Model);
        $("#divModelYear").html(vehicleDetail.RegYear);
        $("#divServiceQuote").attr("data-rfid",RFID)
        $("#imgCar").attr('src', 'images/' + random + '.jpg');
    }

    $("#divServiceQuote").click(function () {
        $("#divServiceQutation").show();
        $("#divselectedpart").hide();
        $("#divServiceHistory").hide();
    });

    $("#divHistory").click(function () {
        $("#divServiceQutation").hide();
        $("#divselectedpart").hide();
        $("#divServiceHistory").show();
        ShowServiceHistoryDetailsDiv();
    });

    function ShowServiceHistoryDetailsDiv() {
        $(".serviceHistoryDetails").hide();
        if (random == 1) {
            $("#divServiceHistory1").show();
            $("#divServiceHistory1").css("background-color", "gainsboro");
            $("#divServiceHistory3").show();
            $("#divServiceHistory5").show();
            $("#divServiceHistory5").css("background-color", "gainsboro");
        }
        else if (random == 2) {
            $("#divServiceHistory2").show();
            $("#divServiceHistory2").css("background-color", "gainsboro");
            $("#divServiceHistory3").show();
            $("#divServiceHistory4").show();
            $("#divServiceHistory4").css("background-color", "gainsboro");
            $("#divServiceHistory5").show();
        }
        else if (random == 3) {
            $("#divServiceHistory2").show();
            $("#divServiceHistory2").css("background-color", "gainsboro");
            $("#divServiceHistory3").show();
            $("#divServiceHistory5").show();
            $("#divServiceHistory5").css("background-color", "gainsboro");
        }
        else if (random == 4) {
            $("#divServiceHistory1").show();
            $("#divServiceHistory1").css("background-color", "gainsboro");
            $("#divServiceHistory2").show();
            $("#divServiceHistory3").show();
            $("#divServiceHistory3").css("background-color", "gainsboro");
        }
        else if (random == 5) {
            $("#divServiceHistory2").show();
            $("#divServiceHistory2").css("background-color", "gainsboro");
            $("#divServiceHistory3").show();
        }

    }
    

    $("#btnGenerate").click(function () {
        var html = '';
        var totalprice = 0;
      
        $("#divServiceQutation input[type=radio]:checked").each(function () {
            debugger;
            var price = $("input[name='" + this.name + "']:checked").val();
            if (price && price!='on') {
                var checkyesoptions = $("input[name='" + this.name + "']:checked").attr("data-options");
                var selectedPart = $("input[name='" + this.name + "']:checked").attr("data-heading");
                totalprice = parseInt(totalprice) + parseInt(price);
                if (checkyesoptions == "Yes") {
                    html += "<div class='col-sm-6' style='border: 1px solid #e0e0e0;font-size:17px;background-color: lightblue;padding: 7px 7px 7px 7px;text-align: center'><label>" + selectedPart +"</label> </div>"
                        + "<div class='col-sm-6' style='border: 1px solid #e0e0e0;font-size:17px;background-color: #EBEBEB;padding: 7px 7px 7px 7px;text-align: center'><label>" + price +" $</label></div>";
                   // console.log("selected equip and price is==>", selectedPart, price);
                }
            }
        });

        if (html != "") {
            html += "<div class='col-sm-6' style='border: 1px solid #e0e0e0;font-size:17px;background-color: lightblue;padding: 7px 7px 7px 7px;text-align: center'><label>Total Price</label> </div>"
                + "<div class='col-sm-6' style='border: 1px solid #e0e0e0;font-size:17px;background-color: #EBEBEB;padding: 7px 7px 7px 7px;text-align: center'><label>" + totalprice + " $</label></div>";

            if ($.trim($("#txtComments").val()) != "") {
                html += "<div class='col-sm-6' style='border: 1px solid #e0e0e0;font-size:17px;background-color: lightblue;padding: 7px 7px 7px 7px;text-align: center'><label>Comments</label> </div>"
                    + "<div class='col-sm-6' style='border: 1px solid #e0e0e0;font-size:17px;background-color: #EBEBEB;padding: 7px 7px 7px 7px;text-align: center'><label>" + $("#txtComments").val() + "</label></div>";
            }
            $("#divServiceQutation").hide();
            $("#divselectedpart").show();
            $("#innerparts").html(html);
        }
    });

    $('.btnPrint').click(function(){
    window.print();
    return false;
});

});

