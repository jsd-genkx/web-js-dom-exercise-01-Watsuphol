// สร้าง function ชื่อตาม html
function changeText() {
    let elementh1 = document.getElementById("myHeading"); // ใช้ตัว getElementByid เผื่อระบุ ตัวh1 ตัวที่เราอยากได้
    elementh1.innerHTML = "Hello JavaScript InnerHTML!"; // คำสั่ง innerHTML เผื่อเเทนค่า text ใหม่เข้าไป
  }
  function resetBtnClick() {
    const resetBtnEl = document.querySelector("#reset-btn");
    resetBtnEl.addEventListener("click", function reloadPage() {
      window.location.reload();
    });
  }
  resetBtnClick();