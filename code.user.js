// ==UserScript==
// @name        QLDT Enhance by quochungcyou
// @description Some enhance for QLDT PTIT by quochungcyou
// @author      quochungcyou
// @match      https://*.qldt.ptit.edu.vn/*
// @version     BCVT.23.6.20
// @grant    GM_addStyle
// @grant   GM_getValue
// @grant   GM_setValue
// @grant unsafeWindow
// @run-at      document-start
// @require http://code.jquery.com/jquery-2.1.0.min.js
// @downloadURL https://github.com/quochung-cyou/QLDT_Enhancer/raw/main/code.user.js
// @updateURL https://github.com/quochung-cyou/QLDT_Enhancer/raw/main/code.user.js
// @license MIT

// ==/UserScript==


//Some round corner for button
GM_addStyle(`
    /* Tròn nút */
    .card-header {
        border-radius: 15px !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125) !important;
        padding: 0.75rem 1.25rem !important;
        margin-bottom: 0 !important;
    }

    .container-fluid {
        border-radius: 15px !important;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3) !important;

    }

    .card {
        border: 0px solid rgba(0, 0, 0, 0.125) !important;
        border-radius: 15px !important;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.125) !important;
    }

    .btn-primary {
        border: 0px solid rgba(0, 0, 0, 0.125) !important;
        border-radius: 15px !important;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.125) !important;
    }


    /* Dịu mắt */
    html {
        background: #f2f2f2;
    }
    body {
        background: inherit !important;
        margin: 0;
        font-family: "Inter", sans-serif;
    }

    .banner {
        background-color: #fff !important;
    }

    .banner {
        display: block;
        width: 100% !important;
        height: 728px !important;
        border-bottom-left-radius: 15px !important;
        border-bottom-right-radius: 15px !important;

    }

    .float {
        position: fixed;
        z-index: 1;
        width:60px;
        height:60px;
        bottom:40px;
        right:40px;
        color: #000000;
        background: #FFF;
        border-radius: 50%;
        border: none;
        transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1), transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
      }
    .float:after {
        font-size: 2.5em;
        line-height: 1.1em;
      }
    .float:hover {
        transform: rotate(45deg);
        box-shadow: 0 0 1px 15px rgba(138, 59, 88, 0.4), 0 0 1px 30px rgba(138, 59, 88, 0.1), 0 0 1px 45px rgba(138, 59, 88, 0.1);
      }

    .editTKB {
        background-color:#10470b !important;
    }

    .editTKB > i {
        color: #fff !important;
    }

    #tkb_div {
        display: none;
        z-index: 1;
        height: auto;
        width: auto;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 60px;
        align-items: center;
        justify-content: center;
        background-color: #fefefe;
        border-collapse: collapse;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.02);
    }

    .tkb_preview_table {
        z-index: 1;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        justify-content: center;
        background-color: #fefefe;
        border-collapse: collapse;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.02);
    }

    .tkb_preview_table > thead {
        background-color: #07689F;
    }

    .tkb_preview_table > thead > tr > th {
        color: #fff;
        padding: 0.5px;
        text-align: center;
    }

    .cellqh {
        border: 1px solid green;
        max-width: 8px;
        max-height: 8px;
        font-size: 8px;
        position: relative;
        border-bottom: 1px dotted black;
    }

    .cellqh .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: rgba(0,0,0,0.6);
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        display: block;
        float: left;
      }

      .cellqh:hover .tooltiptext:not(:empty) {
        visibility: visible;
      }

    .starttimerow {
        padding: 1px;
        vertical-align: middle;
        border-top: 0.2px solid #edeef2;
        background-color: #07689F;
        color: #fff;
        max-width: 30px;
        max-height: 10px;
        font-size: 8px;
    }

    .chonngaydiv {
        text-align: center;
        margin-bottom: 10px;
        background-color: #fefefe;
        border-collapse: collapse;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.02);
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }

    .dropdownlecture {
        text-align: center;
        margin-bottom: 10px;
        margin-top: 30px;
        background-color: #fefefe;
        border-collapse: collapse;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.02);
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }

    input[type="date"]::-webkit-datetime-edit, input[type="date"]::-webkit-inner-spin-button, input[type="date"]::-webkit-clear-button {
        color: #fff;
        position: relative;
    }

      input[type="date"]::-webkit-datetime-edit-year-field {
        position: absolute !important;
        border-left:1px solid #8c8c8c;
        padding: 2px;
        color:#000;
        left: 56px;
      }

      input[type="date"]::-webkit-datetime-edit-month-field {
        position: absolute !important;
        border-left:1px solid #8c8c8c;
        padding: 2px;
        color:#000;
        left: 26px;
      }


    input[type="date"]::-webkit-datetime-edit-day-field {
        position: absolute !important;
        color:#000;
        padding: 2px;
        left: 4px;
    }









    `
);


//Giữ trang k bị đóng (5s ping 1 lần)
function keepAlive() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', "/");
    httpRequest.send(null);
}

setInterval(keepAlive, 5000);




//Khi load xong
window.onload = function () {
    //Thêm nút cài đặt
    if (!unsafeWindow.tkbLich) {
        unsafeWindow.tkbLich = tkbLich;
        unsafeWindow.addEdit = addEdit;
        unsafeWindow.removeEdit = removeEdit;
        unsafeWindow.getData = getData;
        unsafeWindow.drawTable = drawTable;
        unsafeWindow.caoMaMon = caoMaMon;
    }

    const button = document.createElement('button');
    button.innerHTML = `<button onclick="tkbLich()" class="float"><i class="fa fa-cogs"></i></button>`;

    document.body.appendChild(button)

    //Thêm table
    drawTable();
    $("#tkb_div").attr("style", "display: none !important")



}



//Cào mã môn học và tên môn học
function caoMaMon() {
    var maMon = new Map();
    let elements = $(".editTKBcheckbox");
    for (let i = 0; i < elements.length; i++) {
        let ele = $(elements[i]);
        let data = ele.closest("tr"); //tìm lại data của cả hàng
        let ma = data.find("td:nth-child(2)").text();
        let ten = data.find("td:nth-child(3)").text();
        let lop = data.find("td:nth-child(7)").text();
        GM_setValue(ma + lop, undefined);
        GM_setValue(ma, ten);
        console.log(ma + " " + ten)
        maMon.set(ma, ten);
    }
    if (unsafeWindow.maMon) unsafeWindow.maMon = maMon;
    alert("Đã cào xong mã môn học và tên môn học, vui lòng chọn môn học trong dropdown")
    //Thêm vào dropdown
    var dropdown = $(".dropdownlecture");
    for (let [key, value] of maMon) {
        dropdown.append(`<option value="${key}">${key} - ${value}</option>`);
    }
}

//Xử lí chọn môn học trong dropdown
$(document).on("change", ".dropdownlecture", function (e) {
    let dropdown = $(this);
    let name = dropdown.val();
    let table = $(".table-sm");
    let findInputBox = table.find("thead > tr:nth-child(2) > td:nth-child(2) > input");
    findInputBox.val(name).change();
    findInputBox = document.querySelector(".table-sm > thead > tr:nth-child(2) > td:nth-child(2) > input");
    findInputBox.focus();
    const EVENT_OPTIONS = { bubbles: true, cancelable: false, composed: true };
    const EVENTS = {
        BLUR: new Event("blur", EVENT_OPTIONS),
        CHANGE: new Event("change", EVENT_OPTIONS),
        INPUT: new Event("input", EVENT_OPTIONS),
    };
    const tracker = findInputBox._valueTracker;
    tracker && tracker.setValue(name);
    findInputBox.dispatchEvent(EVENTS.INPUT);
    findInputBox.dispatchEvent(EVENTS.BLUR);

    $(".custom-control").attr("style", "display: none !important");
    $(".editTKBcheckbox").remove();
    let elements = $(".clickable.ng-untouched.ng-pristine.ng-valid");
    elements.append(`<input type="checkbox" class="editTKBcheckbox" style="margin-left: 10px;">`)
})

//Khi hover vào các cell
$(document).on("mouseover", ".cellqh", function (e) {
    let cell = $(this);
    let classList = cell.attr("class").split(/\s+/);
    //Show hover các tên môn học ở tooltip
    for (let i = 0; i < classList.length; i++) {
        if (classList[i] == "cellqh") continue;
        let tooltip = cell.find(".tooltiptext");
        let text = GM_getValue(classList[i]);
        console.log(classList[i] + " - " + text)
        if (text == undefined) text = classList[i];
        tooltip.text(tooltip.text() + " " + text);
    }


})


//Khi hover ra khỏi các cell
$(document).on("mouseout", ".cellqh", function (e) {
    let cell = $(this);
    let tooltip = cell.find(".tooltiptext");
    tooltip.text("");
})



//Xử lí nút bấm
function tkbLich() {
    var float = $(".float");
    if (float.hasClass("editTKB")) {
        //Tắt chế độ TKB
        removeEdit();

    } else {
        //Bật chế độ TKB
        addEdit();
        //Cào mã môn học và tên môn học
        caoMaMon();

    }
}


//Thay nút edit
function addEdit() {
    let elements = $(".clickable.ng-untouched.ng-pristine.ng-valid");
    if (elements.length == 0) {
        alert("Không tìm thấy môn học, vui lòng đợi trang load xong hoàn toàn dữ liệu");
        return;
    }
    var float = $(".float");
    float.addClass("editTKB"); //Hiện nút edit sẽ có màu khác
    console.log("Bật chế độ TKB");
    $(".custom-control").attr("style", "display: none !important"); //Tắt các checkbox mặc định k click được
    $("#tkb_div").attr("style", "display: block !important") //Hiện TKB
    elements.append(`<input type="checkbox" class="editTKBcheckbox" style="margin-left: 10px;">`) //Thêm checkbox mới
}
function removeEdit() {
    console.log("Tắt chế độ TKB");
    var float = $(".float");
    float.removeClass("editTKB"); //Tắt nút edit
    $(".custom-control").attr("style", "display: block !important"); //Hiển thị lại các checkbox mặc định
    $(".editTKBcheckbox").remove(); //Xoá checkbox mới
    $("#tkb_div").attr("style", "display: none !important") //Ẩn TKB
}



//Khi click vào checkbox, update lịch học
$(document).on("click", ".editTKBcheckbox", function (e) {
    let checkbox = $(this);
    //Nhớ ô đã tick


    if ($("#datetimepicker").val() == "") {
        alert("Chưa chọn ngày bắt đầu tuần đầu tiên");
        if (checkbox.prop("checked") == true) checkbox.prop("checked", false); //Chỉnh checkbox về như cũ
        else checkbox.prop("checked", true);
        return;
    }

    let name = checkbox.closest("tr").find("td:nth-child(2)").text();
    let text = checkbox.closest("tr").find("td:nth-child(10)").text();
    let malop = checkbox.closest("tr").find("td:nth-child(7)").text();


    GM_setValue(name + malop, checkbox.prop("checked"));
    let result = getData(text, name);



    updateTable(result, checkbox.prop("checked"));

});

//Cập nhật box liên tục
function keepUpdateCheckBox() {
    let checkboxs = $(".editTKBcheckbox");
    for (let i = 0; i < checkboxs.length; i++) {
        let checkbox = $(checkboxs[i]);
        let name = checkbox.closest("tr").find("td:nth-child(2)").text();
        let text = checkbox.closest("tr").find("td:nth-child(10)").text();
        let malop = checkbox.closest("tr").find("td:nth-child(7)").text();
        let result = GM_getValue(name + malop);
        if (result == undefined) continue;
        if (checkbox.prop("checked") != result) {
            //update lại trạng thái nút
            console.log("Cập nhật lại trạng thái checkbox " + name + " " + malop + " " + result)
            checkbox.prop("checked", result);
        }

        //Update lại table
        result = getData(text, name);
        updateTable(result, checkbox.prop("checked"));
    }
}setInterval(keepUpdateCheckBox, 1000);


    class Lecture {
        constructor(name, day, time, room, teacher, date) {
            this.name = name;
            this.day = day;
            this.time = time;
            this.room = room;
            this.teacher = teacher;
            this.date = date;
        }

    }


    function getData(inputString, name) {
        const result = [];
        var count = 0, lastplace = 0;
        var day = "none", time = "none", room = "none", teacher = "none", date = "none";
        inputString = inputString.replaceAll("Chủ nhật", "Thứ 8")
        var dataSplit = inputString.split("Thứ");
        for (var i = 1; i < dataSplit.length; i++) {
            var temp = dataSplit[i].split(",");
            day = "Thứ" + temp[0];
            time = temp[1];
            room = temp[2];
            teacher = temp[3];
            date = temp[temp.length - 1];
            result.push(new Lecture(name, day, time, room, teacher, date));
        }
        return result;
    }

    function drawTable() {
        var rows = 14; //14 tiết
        var cols = 80;
        var tables = []
        var tkb_div = $('<div id="tkb_div"></div>')
        tkb_div.append('<h4 style="text-align:center;">Made by quochung.cyou from ProPTIT with <3.</h1>')
        tkb_div.append('<h5 style="text-align:center;">Cách sử dụng: Bật chế độ TKB, chọn ngày bắt đầu tuần đầu tiên, click vào checkbox để thêm/xoá môn học</h2>')
        tkb_div.append('<h5 style="text-align:center;">Lưu ý: Chỉnh sửa TKB sẽ bị mất khi tải lại trang</h2>')
        tkb_div.append('<h5 style="text-align:center;">Lưu ý: Ngày đầu tiên của tuần có thể xem ở tkb theo tuần</h2>')
        tkb_div.append('<h5 style="text-align:center;">Các lỗi vui lòng báo về nguyenquochung.workvn@gmail.com</h2>')
        tkb_div.append('<h5 style="text-align:center;">Chúc bạn học tập tốt!</h2>')
        tkb_div.append('<h5 style="text-align:center;">Lưu ý: Tool không sử dụng trong thời gian đăng ký, chỉ để xếp lịch trước</h2>')

        for (var i = 1; i <= 3; i++) {
            var count = 0;
            var table_id = "tkbPreview" + i;
            tables[i] = $('<table style="table-layout:fixed;text-align:center;border-collapse: collapse;" class="tkb_preview_table" id=' + table_id + '><thead> <th></th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th> </thead><tbody>');
            var tkb_separator, start_time_in_hr;
            for (var r = 0; r < rows; r++) {
                if (r % 2) tkb_separator = 'border-bottom:2px solid blue;'
                else tkb_separator = '';
                start_time_in_hr = r + 7;
                //Thêm hàng, thời gian bắt đầu tiết
                var tr = $('<tr class="responsive-table__row" style="height:1px;' + tkb_separator + '"><td class="starttimerow">' + start_time_in_hr + 'h00</td>');
                for (var c = 0; c < cols; c++) {
                    if ((c + 1) % 8) {
                        count++;
                        $('<td class="cellqh" id="' + (70 * (i - 1) * 14 + count) + '">' + "+" + '<span class="tooltiptext"></span></td>').appendTo(tr);
                    } else {
                        //divider
                        $('<td style="height:0px; width: 15px; background-color: #fff"></td>').appendTo(tr);
                    }
                }
                tr.appendTo(tables[i]);
            }


            $('</tbody></table>').appendTo(tables[i]);
            tkb_div.append(tables[i])

        }
        tkb_div.append('<div class="chonngaydiv"><label for="datetimepicker">Chọn ngày bắt đầu tuần đầu tiên (Xem trong TKB tuần)    </label><input class="inputdate" id="datetimepicker" type="date" value="2023-07-03"></input><br></div>');
        tkb_div.append('<select class="dropdownlecture"><option value="" class="label_dropdownlecture">Chọn môn</option></select>')

        //Thêm vào trang
        $('body').prepend(tkb_div)
        console.log("Đã thêm bảng TKB")

    }

    function updateTable(lecturelist, state) {

        console.log("Cập nhật bảng cho môn " + lecturelist[0].name)

        var start_date = new Date($("#datetimepicker").val());

        for (let i = 0; i < lecturelist.length; i++) {
            var time = lecturelist[i].date;
            if (time[9] == 'đ') {
                var start_time = time.substring(0, 9);
                var end_time = time.substring(13, 21);
                var start_time_date = new Date("20" + start_time.substring(6, 10), start_time.substring(3, 5) - 1, start_time.substring(0, 2));
                var end_time_date = new Date("20" + end_time.substring(6, 10), end_time.substring(3, 5) - 1, end_time.substring(0, 2));
            } else {
                start_time = time.substring(0, 9);
                start_time_date = new Date("20" + start_time.substring(6, 10), start_time.substring(3, 5), start_time.substring(0, 2));
                end_time_date = start_time_date;
            }
            var loop = start_time_date;
            //Thứ 8 = 8
            var ngayTrongTuan = lecturelist[i].day[4];
            if (ngayTrongTuan == 8) ngayTrongTuan = 0;
            else ngayTrongTuan = ngayTrongTuan - 1;


            //đi qua chuỗi ngày để update vào lịch
            while (loop <= end_time_date) {
                if (loop.getDay() == ngayTrongTuan) {
                    const diffTime = Math.abs(loop - start_date);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    const hour = extractHoursFromString(lecturelist[i].time);
                    for (let j = hour[0]; j <= hour[1]; j++) {
                        var vitri = 1 + 14 * 70 * (parseInt(diffDays / 70)) + (j - 7) * 70 + (diffDays - 70 * (parseInt(diffDays / 70)));
                        console.log("vị trí " + vitri + " " + lecturelist[i].name + " " + parseInt(diffDays / 70) + " " + (j - 7) + " " + diffDays)
                        if (state) dienLich(vitri, lecturelist[i].name)
                        else xoaLich(vitri, lecturelist[i].name)
                    }
                }
                loop.setDate(loop.getDate() + 1);
            }
        }
    }

    //lấy giờ kíp từ chuỗi
    function extractHoursFromString(str) {
        const regex = /từ\s*(\d{1,2}):(\d{2})\s*đến\s*(\d{1,2}):(\d{2})/;
        const match = str.match(regex);

        if (!match) {
            return null;
        }

        const startHour = parseInt(match[1]);
        const endHour = parseInt(match[3]);

        if (startHour > endHour) {
            return null;
        }

        return [startHour, endHour];
    }

    //Điền vào lịch
    function dienLich(vitri, name) {
        console.log("Điền lịch " + name + " vào vị trí " + vitri);
        var element = document.getElementById(vitri);
        element.classList.add(name);
        var ele = $("#" + vitri);
        if (element.classList.length == 2) {
            ele.attr("style", "border:solid green 1px;height:1px;background-color: #32a852"); //green
            ele.get(0).lastChild.nodeValue = "v"

        } else if (element.classList.length > 2) {
            ele.attr("style", "border:solid green 1px;height:1px;background-color: #ff0000"); //red
            ele.get(0).lastChild.nodeValue = "x"
        } else {
            ele.attr("style", "border:solid green 1px;height:1px;background-color: #fff"); //white
            ele.get(0).lastChild.nodeValue = "+"
        }
    }

    //Xoá khỏi lịch
    function xoaLich(vitri, name) {
        console.log("Xoá lịch " + name + " khỏi vị trí " + vitri);
        var element = document.getElementById(vitri);
        element.classList.remove(name);
        var ele = $("#" + vitri);
        if (element.classList.length == 2) {
            ele.attr("style", "border:solid green 1px;height:1px;background-color: #32a852"); //green
            ele.get(0).lastChild.nodeValue = "v"

        } else if (element.classList.length > 2) {
            ele.attr("style", "border:solid green 1px;height:1px;background-color: #ff0000"); //red
            ele.get(0).lastChild.nodeValue = "x"
        } else {
            ele.attr("style", "border:solid green 1px;height:1px;background-color: #fff"); //white
            ele.get(0).lastChild.nodeValue = "+"
        }
    }

