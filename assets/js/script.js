$(document).on("scroll", function () {
    if ($(document).scrollTop() > 300) {
        $("#navbar").addClass("shrink");
    } else {
        $("#navbar").removeClass("shrink");
    }

    //console.log($(document).scrollTop());
});

function openNav() {
    document.getElementById("mobileNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
  }

filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("gallery-item");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        gRemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) gAddClass(x[i], "show");
    }
}

function gAddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function gRemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}



function test(pageName) {
    const isNotService = true;
    const idName = pageName;
    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page);

    if (page != "services.html") {
        console.log(page);
        window.location = 'services.html';
        // window.onload = test2("service1");
        // setTimeout(test2("service1"), 6000);
        window.onload = function () {
            document.getElementById('service2').style.display = "block";
        };
    }
}

function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    console.log('here!!!');
    tabcontent = document.getElementsByClassName("main-service-item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(pageName).style.display = "block";
    elmnt.className += " active";

    // elmnt.style.backgroundColor = color;
    document.body.scrollTop = 0;
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").;

document.addEventListener("DOMContentLoaded", function (event) {
    // document.getElementById("service1").style.display = "block";
    document.body.scrollTop = 0;

    // Add active class to the current button
    var filterContainer = document.getElementById("filter");
    if (!!filterContainer) {
        var btns = filterContainer.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace("active", " ");
                this.className += " active";
            });
        }
    }
});
