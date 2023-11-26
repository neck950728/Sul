const id = document.getElementById("id");
const idMsg = document.getElementById("idMsg");
const pw = document.getElementById("pw");
const pwMsg = document.getElementById("pwMsg");
const pw2 = document.getElementById("pw2");
const pw2Msg = document.getElementById("pw2Msg");
const name1 = document.getElementById("name1");
const nameMsg = document.getElementById("nameMsg");
const address = document.getElementById("address");
const addressMsg = document.getElementById("addressMsg");
const birth = document.getElementById("birth");
const birthMsg = document.getElementById("birthMsg");
const frm = document.getElementById("frm");
const input = document.getElementsByClassName("input");
let checks = [false, false, false, false, false, false];
let phoneCheck = true;


$("#adrBtn").click(function () {
    addr();
})

function addr() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수
            let a = '';
            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if (data.userSelectedType === 'R') {
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if (data.buildingName !== '' && data.apartment === 'Y') {
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if (extraAddr !== '') {
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                a = extraAddr;

            } else {
                a = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            a = data.zonecode + addr + a;
            address.value = a;
            // 커서를 상세주소 필드로 이동한다.
            checks[4] = true;
            address.focus();
        }
    }).open();
}




$("#id").blur(function () {
    $("#idMsg").text = '';
    fetch("idCheck?id=" + id.value, { method: "get" })
        .then((response) => { return response.text() })
        .then((r) => {
            if (r.trim() == 1) {
                if (id.value.length > 10 || id.value == '') {
                    idMsg.innerHTML = '아이디를 10자이내로 입력하시오';
                    idMsg.className = 'f';
                } else {
                    idMsg.innerHTML = '사용 가능한 아이디 입니다.';
                    idMsg.className = 't';
                    checks[0] = true;
                }
            } else {
                idMsg.innerHTML = '이미 가입된 아이디 입니다.';
                idMsg.className = 'f';
            }
        })
});

pw.addEventListener("blur", function () {
    if (pw.value.length < 8 || pw.value.length > 16 || pw.value == '') {
        pwMsg.innerHTML = "비밀번호를 8자이상 16자이내로 입력하시오.";
        pwMsg.className = "f"
    } else {
        pwMsg.innerHTML = '사용가능한 비밀번호';
        pwMsg.className = "t"
        checks[1] = true;
    }

});

pw2.addEventListener("keyup", function () {
    if (pw2.value == pw.value) {
        pw2Msg.innerHTML = "비밀번호가 일치합니다.";
        pw2Msg.className = "t";
        checks[2] = true;
    } else {
        pw2Msg.innerHTML = "비밀번호가 틀렸습니다";
        pw2Msg.className = "f";
    }
});

name1.addEventListener("blur", function () {
    nameMsg.innerHTML = '';
    if (name1.value == '') {
        nameMsg.innerHTML = "이름을 입력해주세요";
        nameMsg.className = 'f';
    } else {
        checks[3] = true;
    }
});


address.addEventListener("blur", function () {
    addressMsg.innerHTML = '';
    if (address.value == '') {
        addressMsg.innerHTML = "주소를 입력하세요.";
        addressMsg.className = "f";
    } else {
    	checks[4] = true;
    }
})

birth.addEventListener("change", function () {
    let check = emptyCheck(birth);
    birthMsg.innerHTML = "생년월일을 입력하세요.";
    birthMsg.className = "f";
    if (!check) {
        birthMsg.innerHTML = "OK";
        birthMsg.className = "s";
        checks[5] = true;
    }
})

function emptyCheck(element) {
    if (element.value == null || element.value.length == 0) {
        return true;
    } else {
        return false;
    }
}

$("#regBtn").click(function () {
    let allCheck = checks.includes(false);
    if (!allCheck) {
        if ($("#smsCheck").is(':checked')) {
            $("#sms").val(1);
        } else {
            $("#sms").val(0);
        }
        frm.submit();
    } else {
        for (let i = 0; checks.length; i++) {
            if (checks[i] == false) {
                input[i].focus();
                alert("빈칸을 채워주세요.")
                return;
            }
        }
    }
})




