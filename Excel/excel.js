import ExcelJs from "exceljs"

// to read value form excal
const excelTest = async ()=>{
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("C:/Users/Bipin Kumar/Desktop/Test/Excel/download.xlsx")
    const worksheet = workbook.getWorksheet("Sheet1" )
    worksheet.eachRow((row,rowNumber)=>{
        row.eachCell((cell,colNumber) =>{
            if(cell.value === "Apple"){
                console.log(rowNumber,colNumber,cell.value)
                return [rowNumber,colNumber]
            }
            
        })
    })
}

excelTest()

