let borrowRecords = [
    {
        recordId: "PM01",
        studentId: "SV101",
        bookTitle: "JavaScript Cơ Bản",
        borrowDays: 12,
        isReturned: false
    },
    {
        recordId: "PM02",
        studentId: "SV102",
        bookTitle: "Clean Code",
        borrowDays: 20,
        isReturned: false
    },
    {
        recordId: "PM03",
        studentId: "SV103",
        bookTitle: "HTML CSS",
        borrowDays: 10,
        isReturned: false
    }
];

console.log("==================================================");
console.log("              KHỞI TẠO DANH SÁCH");
console.log("==================================================");

for (let i = 0; i < borrowRecords.length; i++) {
    console.log(
        borrowRecords[i].recordId,
        "|",
        borrowRecords[i].studentId,
        "|",
        borrowRecords[i].bookTitle,
        "|",
        borrowRecords[i].borrowDays + " ngày",
        "| Đã trả:",
        borrowRecords[i].isReturned
    );
}

// CREATE: Thêm phiếu PM04
console.log("");
console.log("==================================================");
console.log("                 CREATE - THÊM MỚI");
console.log("==================================================");

borrowRecords.push({
    recordId: "PM04",
    studentId: "SV104",
    bookTitle: "Clean Code",
    borrowDays: 18,
    isReturned: false
});

console.log("Đã thêm phiếu PM04.");

// READ: Tính tiền phạt quá hạn
console.log("");
console.log("==================================================");
console.log("              READ - TÍNH TIỀN PHẠT");
console.log("==================================================");

for (let i = 0; i < borrowRecords.length; i++) {
    let record = borrowRecords[i];
    let fine = 0;

    if (record.borrowDays > 14) {
        fine = (record.borrowDays - 14) * 5000;
    }

    console.log(
        record.recordId,
        "|",
        record.bookTitle,
        "|",
        "Số ngày:",
        record.borrowDays,
        "|",
        "Tiền phạt:",
        fine.toLocaleString("vi-VN") + " VNĐ"
    );
}

// UPDATE: Cập nhật PM01 đã trả sách
console.log("");
console.log("==================================================");
console.log("              UPDATE - TRẢ SÁCH");
console.log("==================================================");

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === "PM01") {
        borrowRecords[i].isReturned = true;

        console.log("Phiếu PM01 đã cập nhật: Đã trả sách.");
        break;
    }
}

// DELETE: Xóa phiếu PM03
console.log("");
console.log("==================================================");
console.log("              DELETE - XÓA PHIẾU");
console.log("==================================================");

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === "PM03") {
        borrowRecords.splice(i, 1);

        console.log("Đã xóa phiếu PM03 khỏi danh sách.");
        break;
    }
}

// In bảng tổng kết
console.log("");
console.log("==================================================");
console.log("          BẢNG TỔNG KẾT THƯ VIỆN");
console.log("==================================================");

for (let i = 0; i < borrowRecords.length; i++) {
    let record = borrowRecords[i];
    let fine = 0;

    if (record.borrowDays > 14) {
        fine = (record.borrowDays - 14) * 5000;
    }

    console.log(
        record.recordId +
        " | " +
        record.studentId +
        " | " +
        record.bookTitle +
        " | " +
        record.borrowDays +
        " ngày | Đã trả: " +
        record.isReturned +
        " | Phạt: " +
        fine.toLocaleString("vi-VN") +
        " VNĐ"
    );
}

console.log("==================================================");