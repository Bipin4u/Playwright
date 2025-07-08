import ExcelJs from "exceljs"
const coordinates = {row:-1,col:-1}
const readfile = async ()=>{

    const workbook = new ExcelJs.Workbook()
    await workbook.xlsx.readFile("C:/Users/Bipin Kumar/Desktop/Test/Excel/download.xlsx")
    const worksheet = workbook.getWorksheet("Sheet1")
    worksheet.eachRow((row,rownumber) =>{
        row.eachCell((cell,cellnumber) =>{
            if(cell.value === "Winter"){
                coordinates.row=rownumber
                coordinates.col= cellnumber
            }
        })
    })
    const cell = worksheet.getCell(coordinates.row,coordinates.col)
    cell.value = "summer"
    workbook.xlsx.writeFile("C:/Users/Bipin Kumar/Desktop/Test/Excel/download.xlsx")

        worksheet.eachRow((row,rownumber) =>{
        row.eachCell((cell,cellnumber) =>{
            console.log(cell.value)
        })
    })
}


await readfile()
console.log(coordinates)



