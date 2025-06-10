import ExcelJS from "exceljs"

const coordinates = {row:-1,col:-1}

const write = async (target,value,path) =>{    
    const workbook = new ExcelJS.Workbook()
    await workbook.xlsx.readFile(path)
    const workSheet = workbook.getWorksheet("Sheet1")

    read(workSheet,target)

    
    if(coordinates.col !== -1 && coordinates.row !== -1){
        console.log("Coordinates found:", coordinates);
        const cell = workSheet.getCell(coordinates.row,coordinates.col)
        cell.value = value
        await workbook.xlsx.writeFile(path)
    }else{
        console.log(`${target} not fount`)
    }
}

const read = (workSheet,target)=>{

    workSheet.eachRow((row,rowNumber)=>{
        row.eachCell((cell,cellNumber)=>{
            if(cell.value===target){
                coordinates.row = rowNumber
                coordinates.col = cellNumber
            }
        })
    })
}

write('All','96',"C:/Users/Bipin Kumar/Desktop/Test/Excel/download.xlsx")

