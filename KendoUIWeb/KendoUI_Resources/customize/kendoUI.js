//DataTime回傳yyyymmdd EX.20160608
function GetFormateDate(datevalue) {
    var yy = datevalue.getFullYear();
    var mm = datevalue.getMonth() + 1; //January is 0!
    var dd = datevalue.getDate();

    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    return yy.toString() + mm.toString() + dd.toString();
}

//Grid欄位，日期查詢格式化
function DateFilter(control) {
    $(control).kendoDatePicker({
        format: "yyyy-MM-dd"
    });
}

//Grid 共用錯誤時回傳訊息
function error_handler(e) {
    if (e.errors) {
        var message = "Errors:\n";
        $.each(e.errors, function (key, value) {
            if ('errors' in value) {
                $.each(value.errors, function () {
                    message += this + "\n";
                });
            }
        });
        alert(message);
        //ShowErrorMessage(message);
    }
}

//Grid共用 儲存事件訊息
//function SaveChangeEvent(arg) {
//    alert("已儲存!");
//}

//Grid共用 儲存後非同步重新載入資料
function SaveSync_handler(e) {
    alert("已處理完成!");
    this.read();
}

//$(function () {
//    ////日期元件，顯示中文語系
//    //kendo.culture('zh-TW'); 
//});


////顯示確認訊息
//function ConfirmMessage(titlemsg, message) {
//    var template = '#popupMessageTemplate';
//    var dfd = new jQuery.Deferred();
//    var result = false;

//    $("<div id='popupWindow'></div>")
//    .appendTo("body")
//    .kendoWindow({
//        width: "50%",
//        height: "30%",
//        modal: true,
//        title: titlemsg,
//        modal: true,
//        visible: false,
//        close: function (e) {
//            this.destroy();
//            dfd.resolve(result);
//        }
//    }).data('kendoWindow').content($(template).html()).center().open()

//    $('.popupMessage').html(message);

//    $('#popupWindow .confirm_yes').val('確認');
//    $('#popupWindow .confirm_no').val('取消');

//    $('#popupWindow .confirm_no').click(function () {
//        $('#popupWindow').data('kendoWindow').close();
//    });

//    $('#popupWindow .confirm_yes').click(function () {
//        result = true;
//        $('#popupWindow').data('kendoWindow').close();
//    });

//    return dfd.promise();
//};

////顯示錯誤跳出訊息
//function ShowErrorMessage(message) {
//    var dfd = ConfirmMessage("錯誤", message);

//    $('#popupWindow .confirm_yes').val('關閉');
//    $('#popupWindow .confirm_no').hide();
//    $('#popupWindow_wnd_title').parent().css('background', '#F6CEEC');
//    return dfd;
//};

////顯示訊息跳出訊息
//function ShowInfoMessage(message) {
//    var dfd = ConfirmMessage("訊息", message);

//    $('#popupWindow .confirm_yes').val('關閉');
//    $('#popupWindow .confirm_no').hide();
//    $('#popupWindow_wnd_title').parent().css('background', '#CEECF5');
//    return dfd;
//};

////顯示成功跳出訊息
//function ShowFinishMessage(message) {
//    var dfd = ConfirmMessage("完成", message);

//    $('#popupWindow .confirm_yes').val('關閉');
//    $('#popupWindow .confirm_no').hide();
//    $('#popupWindow_wnd_title').parent().css('background', '#BCF5A9');
//    return dfd;
//};

////tip是提示信息，type:'success'是成功信息，'danger'是失败信息,'info'是普通信息
//function ShowTip(tip, type) {
//    var $tip = $('#tip');
//    if ($tip.length == 0) {
//        $tip = $('<span id="tip" style="font-weight:bold;font-size:18px;position:absolute;top:50%;left: 50%;z-index:9999"></span>');
//        $('body').append($tip);
//    }
//    $tip.stop(true).attr('class', 'alert alert-' + type).text(tip).css('margin-left', -$tip.outerWidth() / 2).fadeIn(500).delay(2000).fadeOut(500);
//}

//function ShowMsg(msg) {
//    ShowTip(msg, 'info');
//}

//function ShowSuccess(msg) {
//    ShowTip(msg, 'success');
//}

//function ShowFailure(msg) {
//    ShowTip(msg, 'danger');
//}

//function ShowWarn(msg, $focus, clear) {
//    ShowTip(msg, 'warning');
//    if ($focus) $focus.focus();
//    if (clear) $focus.val('');
//    return false;
//}