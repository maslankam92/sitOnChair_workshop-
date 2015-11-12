/**
 * Created by MarcinM on 16-Oct-15.
 */
$(function(){

    // ========= DROPDOWN MENU ========

    var dropDownButton = $(".parent-dropDown");
    var dropDownMenu = $(".dropDown");

    dropDownButton.hover(
        function () {
            dropDownMenu.slideDown(100);
        },
        function () {
            dropDownMenu.slideUp(100);
        }
    );




    // ========= HOVER ON IMAGES ON INFO SECTOIN ========

    var imgInFigureTag = $("figure img");
    var figcaption = $("figcaption");


    imgInFigureTag.on("mouseenter", function(event){
        $(this).next().animate({
            opacity: 0
        }, 100);
    });


    imgInFigureTag.on("mouseleave", function(event){
        $(this).next().animate({
            opacity: 1
        }, 100);
    });


    //
    //imgInFigureTag.on("mouseenter", function(event){
    //    $(this).next().hide(1000);
    //});
    //
    //imgInFigureTag.on("mouseleave", function(event){
    //    $(this).next().fadeIn();
    //});


    // ========= JUMBOTRON SLIDER ========


    var images = $(".slider li");
    var visibleImage = 0;
    images.eq(visibleImage).show();

    $(".right").click(function(){
        images.eq(visibleImage).hide(0);
        visibleImage++;
        if(visibleImage >= images.length){
            visibleImage = 0;
        }

        images.eq(visibleImage).show();
    });


    $(".left").click(function(){
        images.eq(visibleImage).hide(0);
        visibleImage--;
        if(visibleImage < 0){
            visibleImage = images.length-1;
        }

        images.eq(visibleImage).show();
    });



    // ========= Order and checkout form ======


    /**
     * function is triggered after each click on select button. It iterates throughout cells with price values and adds them up.
     */

    var totalPriceCell = $(".order-checkout > table > tfoot > tr > td:nth-child(2)");

    function summingLastResult() {
        var sum = 0;
        $(".order-checkout-table .priceCell").each(function (index) {
            if(!isNaN(parseInt($(this).text()))){
                sum += (parseInt($(this).text()));
                return sum
            }
        });
        totalPriceCell.text(sum);
    }

    //selection button of chair type =====

    var chairSelect = $(".chair-type");

    chairSelect.click(function(){
        var chairTypeTableCell = $(".order-checkout > table > thead > tr > th:nth-child(1)");
        var chairTypePriceTabelCell = $(".order-checkout > table > thead > tr > th:nth-child(2)");
        var chairTypeSelect = $(".chair-type option:selected");
        var chairTypeValue = chairTypeSelect.val();
        var chairTypePriceValue = chairTypeSelect.data("price");

        chairTypeTableCell.text(chairTypeValue);
        chairTypePriceTabelCell.text(chairTypePriceValue);
        summingLastResult();
    });


    //selection of chair color =====

    var chairsImgs = $(".order-chair-image img");
    chairsImgs.eq(0).siblings().hide();

    var colorSelect = $(".chair-color");

    var chairColorTableCell = $(".order-checkout > table > tbody > tr:nth-child(1) > td:nth-child(1)");
    var chairColorPriceTabelCell = $(".order-checkout > table > tbody > tr:nth-child(1) > td:nth-child(2)");

    colorSelect.click(function(){
        var chairColorSelect = $(".chair-color option:selected");
        var chairColorValue = chairColorSelect.val();
        var chairColorPriceValue = chairColorSelect.data("price");

        var chairNumImage = chairColorSelect.data("num");

        if(chairNumImage !== undefined ){
            chairsImgs.hide();
            chairsImgs.eq(chairNumImage).show();
        };

        chairColorTableCell.text(chairColorValue);
        chairColorPriceTabelCell.text(chairColorPriceValue);

        summingLastResult();
    });


    //selection of chair fabric =====
    var fabricSelect = $(".chair-fabric");

    var chairFabricTableCell = $(".order-checkout > table > tbody > tr:nth-child(2) > td:nth-child(1)");
    var chairFabricPriceTabelCell = $(".order-checkout > table > tbody > tr:nth-child(2) > td:nth-child(2)");

    fabricSelect.click(function(){
        var chairFabricSelect = $(".chair-fabric option:selected");
        var chairFabricValue = chairFabricSelect.val();
        var chairFabricPriceValue = chairFabricSelect.data("price");
        chairFabricTableCell.text(chairFabricValue);
        chairFabricPriceTabelCell.text(chairFabricPriceValue);

        summingLastResult();
    });


    var transportSelect = $(".order-wrapper .checkbox label");

    var chairTransportTableCell = $(".order-checkout > table > tbody > tr:nth-child(3) > td:nth-child(1)");
    var chairTransportPriceTabelCell = $(".order-checkout > table > tbody > tr:nth-child(3) > td.priceCell");

    transportSelect.click(function(){
        var checked = window.getComputedStyle(
            document.querySelector('.order-wrapper .checkbox label'), ':after'
        ).getPropertyValue('display');

        if(checked == "none") {
            chairTransportTableCell.text("Transport");
            chairTransportPriceTabelCell.text("100");
        } else {
            chairTransportTableCell.text("");
            chairTransportPriceTabelCell.text("");
        }

        summingLastResult();

    });
















});
