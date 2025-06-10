import ExcelJs from "exceljs"


const excelTest = async (str,edit) =>{
    let col
    let roww
    const workbook = new ExcelJs.Workbook()
    await workbook.xlsx.readFile("C:/Users/Bipin Kumar/Desktop/Test/Excel/download.xlsx")
    const worksheet = workbook.getWorksheet("Sheet1")
    worksheet.eachRow((row,rowNumber) =>{
        row.eachCell((cell,cellNumber) =>{
            if(cell.value === str){
                col = cellNumber
                roww = rowNumber
            }
        })
    })
    // to write into excel file
    const cell = worksheet.getCell(roww,col)
    cell.value = edit
    await workbook.xlsx.writeFile("C:/Users/Bipin Kumar/Desktop/Test/Excel/download.xlsx")
}


excelTest("Iphone",'I')