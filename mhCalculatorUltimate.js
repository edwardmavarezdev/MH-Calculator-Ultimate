
//explain button
var explain = document.getElementById("explanation")
var explainText = document.getElementById("explanationText")
explain.addEventListener("click",showExplain)

function showExplain(){
    if (explainText.innerHTML == ""){
        explainText.innerHTML = "The comparator is maded obvided the type of attack and the monster hit part, these datas are depend of your way to hunt and your mission choise, so the same monster in the same parts with same hunt style but with diferent weapons show the average damage result"
    }
    else{
        explainText.innerHTML = ""
    }
}

//Select Weapon Buttons
var gsButton
var lsButton
var snsButton
var dbButton
var hButton
var hhButton
var lButton
var glButton
var saButton
var igButton
var cbButton

var botonesArmas = document.getElementById("botonesArmas")

var mhfu = document.getElementById("MHFU")
var mh4u = document.getElementById("MH4U")

mhfu.addEventListener("click", MHfreedomUniteSelect)
mh4u.addEventListener("click", MH4UltimateSelect)


function MHfreedomUniteSelect(){
    MH4UltimateSelect()
    botonesArmas.innerHTML = '<input type="button" id = "greatSword">'+
        '<input type="button" id = "longSword">'+
        '<input type="button" id = "swordAndShield">'+
        '<input type="button" id = "dualBlades"></br>'+
        '<input type="button" id = "hammer">'+
        '<input type="button" id = "huntingHorn">'+
        '<input type="button" id = "lance">'+
        '<input type="button" id = "gunLance">'
        weaponDefine1()
        weaponTypeValue = [4.8, 4.8, 1.4, 1.4, 5.2, 5.2, 2.3, 2.3, 5.4, 3.1, 3.6]
        sharp=[0.5, 0.75, 1, 1.125, 1.25, 1.30, 1.5]
        elementSharpness=[0.25, 0.5, 0.75, 1, 1.0625, 1.125, 1.2]
        sharpness = 0
        elementSharp = 0
        weaponType = 1
}
//MHfreedomUniteSelect()

function MH4UltimateSelect(){
    botonesArmas.innerHTML = '<input type="button" id = "greatSword">'+
        '<input type="button" id = "longSword">'+
        '<input type="button" id = "swordAndShield">'+
        '<input type="button" id = "dualBlades"></br>'+
        '<input type="button" id = "hammer">'+
        '<input type="button" id = "huntingHorn">'+
        '<input type="button" id = "lance">'+
        '<input type="button" id = "gunLance"></br>'+
        '<input type="button" id = "switchAxe">'+
        '<input type="button" id = "insectGlaive">'+
        '<input type="button" id = "chargeBlade">'
        weaponDefine1()
        weaponDefine2()
        sharpness = 0
        elementSharp = 0
        weaponType = 1
}


//Blade Master Buttons Values and Selections

var weaponCompareValue = [
    "background-position: -1px -3px",
    "background-position: -85px -3px",
    "background-position: -165px -3px",
    "background-position: -244px -3px",
    "background-position: -323px -3px",
    "background-position: -403px -3px",
    "background-position: -484px -3px",
    "background-position: -564px -3px",
    "background-position: -644px -5px",
    "background-position: -884px -2px",
    "background-position: -804px -4px"]

    //compare value used in compare buttons functions

/* Weapon type Array ^ respond to the Weapon selected:
4.8 to Great Sword      & long Sword,
1.4 to Sword and Shield & Dual Swords
5.2 to Hammer Huntin    & Horn
2.3 to Lance            & Gun Lance*/

/*Weapon Compare was used first to name every weapon but it changes to
indicate every weapon with a background-image change between each other
 with his position in a only one background in the order of
 great sword, long sword, sword & shield, dual blades
 hammer, hunting horn, lance and gunlance*/


var weaponType = 1
var weaponSelectIndicator = "border:blue solid 3px"
var weaponSelect

var noneWeapon = document.getElementById("noneWeapon")
/*used in calculate for none chose*/

var weaponCompare = "background-position: -721px -3px"

    function weaponSelection(){
        gsButton.style = "border:"
        lsButton.style = "border:"
        snsButton.style = "border:"
        dbButton.style = "border:"
        hButton.style = "border:"
        hhButton.style = "border:"
        lButton.style = "border:"
        glButton.style = "border:"
        saButton.style = "border:"
        igButton.style = "border:"
        cbButton.style = "border:"

        weaponSelect.style = weaponSelectIndicator

        if(noneWeapon.innerHTML == "Chose a Weapon")
            {
        noneWeapon.innerHTML = "Chose Your Weapon"
        noneWeapon.style = "font-size: 25px;"+
                            "margin: 10px auto;"+
                            "background-color: rgb(0,32,96);"+
                            "color: rgb(186,222,232);"+
                            "width: 230px;"+
                            "padding: 3px 0px;"+
                            "border-radius: 5px;"
            }
    }

//All weapons define
function weaponDefine1()
{
gsButton = document.getElementById("greatSword")
gsButton.addEventListener("click", gsSelect)

lsButton = document.getElementById("longSword")
lsButton.addEventListener("click", lsSelect)

snsButton = document.getElementById("swordAndShield")
snsButton.addEventListener("click", snsSelect)

dbButton = document.getElementById("dualBlades")
dbButton.addEventListener("click", dbSelect)

hButton = document.getElementById("hammer")
hButton.addEventListener("click", hSelect)

hhButton = document.getElementById("huntingHorn")
hhButton.addEventListener("click", hhSelect)

lButton = document.getElementById("lance")
lButton.addEventListener("click", lSelect)

glButton = document.getElementById("gunLance")
glButton.addEventListener("click", glSelect)

}

function weaponDefine2()
{
saButton = document.getElementById("switchAxe")
saButton.addEventListener("click", saSelect)

igButton = document.getElementById("insectGlaive")
igButton.addEventListener("click", igSelect)

cbButton = document.getElementById("chargeBlade")
cbButton.addEventListener("click", cbSelect)
}

//weapon Functions

//Great Sword
function gsSelect()
{
    weaponType = weaponTypeValue[0]
    weaponSelect = gsButton
    weaponSelection()
    gsButton = weaponSelect

    weaponCompare = weaponCompareValue[0]
}

//Long Sword

function lsSelect()
{   
    weaponType = weaponTypeValue[1]
    weaponSelect = lsButton
    weaponSelection()
    lsButton = weaponSelect

    weaponCompare = weaponCompareValue[1]
}

//Sword and Shield

function snsSelect()
{
    weaponType = weaponTypeValue[2]
    weaponSelect = snsButton
    weaponSelection()
    snButton = weaponSelect

    weaponCompare = weaponCompareValue[2]
}

//Dual Blades

function dbSelect()
{
    weaponType = weaponTypeValue[3]
    weaponSelect = dbButton
    weaponSelection()
    dbButton = weaponSelect

    weaponCompare = weaponCompareValue[3]
}

//Hammer

function hSelect()
{
    weaponType = weaponTypeValue[4]
    weaponSelect = hButton
    weaponSelection()
    hButton = weaponSelect

    weaponCompare = weaponCompareValue[4]
}

//Huntong Horn

function hhSelect()
{
    weaponType = weaponTypeValue[5]
    weaponSelect = hhButton
    weaponSelection()
    hhButton = weaponSelect

    weaponCompare = weaponCompareValue[5]
}

//Lance

function lSelect()
{
    weaponType = weaponTypeValue[6]
    weaponSelect = lButton
    weaponSelection()
    lButton = weaponSelect

    weaponCompare = weaponCompareValue[6]
}

//Gunlance

function glSelect()
{
    weaponType = weaponTypeValue[7]
    weaponSelect = glButton
    weaponSelection()
    glButton = weaponSelect

    weaponCompare = weaponCompareValue[7]
}

//Switch Axe

function saSelect()
{
    weaponType = weaponTypeValue[8]
    weaponSelect = saButton
    weaponSelection()
    saButton = weaponSelect

    weaponCompare = weaponCompareValue[8]
}

//Insect Glaive

function igSelect()
{
    weaponType = weaponTypeValue[9]
    weaponSelect = igButton
    weaponSelection()
    igButton = weaponSelect

    weaponCompare = weaponCompareValue[9]
}

//Charge Blade

function cbSelect()
{
    weaponType = weaponTypeValue[10]
    weaponSelect = cbButton
    weaponSelection()
    cbButton = weaponSelect

    weaponCompare = weaponCompareValue[10]
}
////////Sharpness Buttons///////


var Scolor=['red', 'orange', 'yellow', 'green', 'blue', 'white', 'purple']

// Sharp Arrays ^ respond to sharness colors:
// red, orange, yellow, green, blue, white and purple

var sharpness = 0
var elementSharp = 0
var buttonSelectIndicator = "border: black solid 3px"
var Select

var comparisonColor = "None"
var colorStyle = ["background-color: red", "background-color: orange", "background-color: yellow", "background-color: rgb(14, 231, 14)", "background-color: blue", "background-color: white", "background-color: rgb(190, 0, 190)"]
//used in sharp color for comparison section and his array colorstyle

var noneSharp = document.getElementById("sharpTittle")
// used in calculate for none sharpness select button

    function buttonSelect()
    {
    redButton.style = "border:"
    yellowButton.style = "border:"
    orangeButton.style = "border:"
    greenButton.style = "border:"
    blueButton.style = "border:"
    whiteButton.style = "border:"
    purpleButton.style = "border:"

    Select.style = buttonSelectIndicator
    
    if(noneSharp.innerHTML == "Chose a Sharpness")
        {
        noneSharp.innerHTML = "Sharpness"
        noneSharp.style = "font-size: 25px;"+
                            "margin: 0px auto -10px auto;"+
                            "background-color: rgb(62, 28, 88);"+
                            "color: rgb(236, 236, 13);"+
                            "width: 140px;"+
                            "border-radius: 4px;"+
                            "padding: 3px 0px;"
        }


    }

//Red Sharpness
var redButton = document.getElementById("redSharp")
redButton.addEventListener("click", redSelect)

function redSelect()
{
    sharpness = sharp[0]
    elementSharp = elementSharpness[0]
    Select = redButton
    buttonSelect()
    redButton = Select

    comparisonColor = colorStyle[0]

}

//Orange Sharpness
var orangeButton = document.getElementById("orangeSharp")
orangeButton.addEventListener("click", orangeSelect)

function orangeSelect()
{
    sharpness = sharp[1]
    elementSharp = elementSharpness[1]
    Select = orangeButton
    buttonSelect()
    orangeButton = Select 

    comparisonColor = colorStyle[1]

}

//Yellow Sharpness
var yellowButton = document.getElementById("yellowSharp")
yellowButton.addEventListener("click", yellowSelect)

function yellowSelect()
{
    sharpness = sharp[2]
    elementSharp = elementSharpness[2]
    Select = yellowButton
    buttonSelect()
    yellowButton = Select

    comparisonColor = colorStyle[2]
}

//Green Sharpness
var greenButton = document.getElementById("greenSharp")
greenButton.addEventListener("click", greenSelect)

function greenSelect()
{
    sharpness = sharp[3]
    elementSharp = elementSharpness[3]
    Select = greenButton
    buttonSelect()
    greenButton = Select

    comparisonColor = colorStyle[3]
}

//Blue Sharpness
var blueButton = document.getElementById("blueSharp")
blueButton.addEventListener("click", blueSelect)

function blueSelect()
{
    sharpness = sharp[4]
    elementSharp = elementSharpness[4]
    Select = blueButton
    buttonSelect()
    blueButton = Select

    comparisonColor = colorStyle[4]
}

//White Sharpness
var whiteButton = document.getElementById("whiteSharp")
whiteButton.addEventListener("click", whiteSelect)

function whiteSelect()
{
    sharpness = sharp[5]
    elementSharp = elementSharpness[5]
    Select = whiteButton
    buttonSelect()
    whiteButton = Select

    comparisonColor = colorStyle[5]
}

//Purple Sharpness
var purpleButton = document.getElementById("purpleSharp")
purpleButton.addEventListener("click", purpleSelect)

function purpleSelect()
{
    sharpness = sharp[6]
    elementSharp = elementSharpness[6]
    Select = purpleButton
    buttonSelect()
    purpleButton = Select

    comparisonColor = colorStyle[6]
}


//Next variables for the Damage Ecuation

var rawNormal
var rawCritical
var rawResult

var elementNormal
var elementCritical
var elementResult

var rawDamageResult = document.getElementById("rawDamageResult")
var rawCriticalResult =document.getElementById("rawCriticalResult")
var rawAverage = document.getElementById("rawAverage")

var elementDamageResult = document.getElementById("elementDamageResult")
var elementCriticalResult = document.getElementById("elementCriticalResult")
var elementAverage = document.getElementById("elementAverage")

var totalNormal = document.getElementById("totalNormal")
var totalCritical = document.getElementById("totalCritical")
var totalDamageAverage = document.getElementById("totalDamageAverage")

var calculateButton = document.getElementById("calculate")
calculateButton.addEventListener("click", calculateFunction)



//Ecuation Variables
    var rawDamage = document.getElementById("rawDamageId")
    var elementalDamage = document.getElementById("elementalDamageId")
    var affinity = document.getElementById("affinityId")

    //Refresh
    rawDamage.value = 0
    elementalDamage.value = 0
    affinity.value = 0
    totalDamageAverage.value = 0
    
//Reset Data Input -- Relationed with "Values Comprobation" in "Ecuation"

    rawDamage.addEventListener("click" , resetRawDamage)
    elementalDamage.addEventListener("click", resetElementalDamage)
    affinity.addEventListener("click", resetAffinity)

    var inputData

        function resetData(){
            if(inputData.value == "ERROR" || inputData.value == 0)
            {
                inputData.value = ""
                inputData.style = "color:Black"
            }
        }

    function resetRawDamage(){
        inputData = rawDamage
        resetData()
        rawDamage = inputData
    }

    function resetElementalDamage(){
        inputData = elementalDamage
        resetData()
        elementalDamage = inputData
    }

    function resetAffinity(){
        inputData = affinity
        resetData()
        affinity = inputData
    }
    

//Ecuation (Calculate Buttom)

function calculateFunction()
{

    //Values Comprobation -- Relationed with -- "Reset Data Input"

        inputData = rawDamage
        valueComprobation()
        rawDamage = inputData

        inputData = elementalDamage
        valueComprobation()
        elementalDamage = inputData

        inputData = affinity
        valueComprobation()
        affinity = inputData
        
            function valueComprobation()
            {
                if(inputData.value =="")
                {
                    inputData.value = 0
                }
                else if (isNaN(inputData.value))
                {
                    inputData.value = "ERROR"
                    inputData.style = "color:red"
                }
            }

    //Choose Weapon Correction and None Chose
        if(weaponType == 1){
            rawNormal = 0
            elementNormal = 0
            noneWeapon.innerHTML = "Chose a Weapon"
            noneWeapon.style = "color: red;"+
                                "font-size: 20px;"+
                                "background-color: white;"+
                                "border: solid black 2px;"+
                                "width: 80%;"+
                                "margin:auto;"

            var colorNoneWeapon = "border: solid red 3px"
            gsButton.style = colorNoneWeapon
            lsButton.style = colorNoneWeapon
            snsButton.style = colorNoneWeapon
            dbButton.style = colorNoneWeapon
            hButton.style = colorNoneWeapon
            hhButton.style = colorNoneWeapon
            lButton.style = colorNoneWeapon
            glButton.style = colorNoneWeapon
            saButton.style = colorNoneWeapon
            igButton.style = colorNoneWeapon
            cbButton.style = colorNoneWeapon
        }

    //Chose Sharpness Correction and None Chose
        if(sharpness == 0 && elementSharp == 0 ){

            noneSharp.innerHTML = "Chose a Sharpness"
            noneSharp.style = "color: red;"+
                                "font-size: 20px;"+
                                "background-color: white;"+
                                "border: solid black 2px;"+
                                "width: 80%;"+
                                "margin-:auto;"+
                                "margin-top: 5px;"
                                

            var colorNoneSharp = "border: solid red 3px"
            redButton.style = colorNoneSharp
            yellowButton.style = colorNoneSharp
            orangeButton.style = colorNoneSharp
            greenButton.style = colorNoneSharp
            blueButton.style = colorNoneSharp
            whiteButton.style = colorNoneSharp
            purpleButton.style = colorNoneSharp
        }

//Ecuation Execution       

    //Normal Damage
        rawNormal = parseInt(rawDamage.value) * sharpness / weaponType
        elementNormal = parseInt(elementalDamage.value * elementSharp / 10 / 4)

        if(weaponType == 1){
            rawNormal = 0
            elementNormal = 0
        }


    //Critical Damage
        if (parseInt(affinity.value)>0)
        {
            rawCritical = parseInt(rawNormal*1.25)
            elementCritical = parseInt(elementNormal*1.25)
        }

        else if (parseInt(affinity.value)<0)
        {
            rawCritical = parseInt(rawNormal*0.75)
            elementCritical = parseInt(elementNormal*0.75)
        }
        else 
        {
            rawCritical = "None"
            elementCritical = "None"
        }
    //Promediate Damage
        rawResult = ((rawNormal*(100-parseInt(affinity.value)))+
            (rawNormal*1.25*(parseInt(affinity.value))))/100


        elementResult = ((elementNormal*(100-parseInt(affinity.value))+
            (elementNormal*1.25*(parseInt(affinity.value))))/100)

    //Average Damage

    totalNormalCalculate = parseInt(rawNormal) + elementNormal

    totalCriticalCalculate = rawCritical + elementCritical
    if(totalCriticalCalculate == "NoneNone"){
        totalCriticalCalculate = "None"
    }

    totalAverageCalculate = parseInt(rawResult + elementResult)

    //Print in page
        rawDamageResult.innerHTML = parseInt(rawNormal)
        rawCriticalResult.innerHTML = rawCritical
        rawAverage.innerHTML = parseInt(rawResult)

        elementDamageResult.innerHTML = elementNormal
        elementCriticalResult.innerHTML = elementCritical
        elementAverage.innerHTML = parseInt(elementResult)

        totalNormal.innerHTML = totalNormalCalculate
        totalCritical.innerHTML = totalCriticalCalculate
        totalDamageAverage.innerHTML = totalAverageCalculate

}

// Compare (Compare Buttom)

var divC=['c1','c2']

    //compare button value change

    var compareValue
    var compareStyle

    var dataTotal1 = 1
    var dataTotal2 = 1

    function compareValueButonChange() 
    {

        if(compareValue == "Click Here to Compare")
        {
            compareValue = "Click to Compare Another Weapon"
            compareStyle = "background-color: rgb(105, 15, 90); color:white;"
        }
    }

var compare1 = document.getElementById("compare1")
compare1.addEventListener("click", comparison1)
var putComparison1 = document.getElementById("putComparison1")


function comparison1()
{
    c=divC[0]
    putComparisonDiv = putComparison1
    comparisonDiv()
    putComparison1 = putComparisonDiv

    dataTotal1 = document.getElementById("totalComparisonc1")
    if(isNaN(dataTotal2.innerHTML))
        {
        comparisonWeapon1()
        }
    else{
        comparisonWeapon1()
        comparisonPercent()
        }

    compareValue = compare1.value
    compareValueButonChange()
    compare1.value = compareValue
    compare1.style = compareStyle 
}

var compare2 = document.getElementById("compare2")
compare2.addEventListener("click", comparison2)
var putComparison2 = document.getElementById("putComparison2")

function comparison2()
{
    c=divC[1]
    putComparisonDiv = putComparison2
    comparisonDiv()
    putComparison2 = putComparisonDiv

    dataTotal2 = document.getElementById("totalComparisonc2")
    if(isNaN(dataTotal1.innerHTML))
        {
        comparisonWeapon2()
        }
    else{
        comparisonWeapon2()
        comparisonPercent()
        }

    compareValue = compare2.value
    compareValueButonChange()
    compare2.value = compareValue
    compare2.style = compareStyle
}


var putComparison3 = document.getElementById("putComparison3")

function comparisonWeapon1()
{
    innerComparison1.innerHTML = '<div id = "weaponImageA1"></div>'+
    '<div id = "boxA1"><p id = "percentData1"></p></div>'

    compareA1 = document.getElementById("weaponImageA1")
    compareA1.style = weaponCompare
    innerPercent1 = document.getElementById("percentData1")
}

function comparisonWeapon2()
{
    innerComparison2.innerHTML = '<div id = "weaponImageA2"></div>'+
    '<div id = "boxA2"><p id = "percentData2"></p></div>'

    compareA2 = document.getElementById("weaponImageA2")
    compareA2.style = weaponCompare
    innerPercent2 = document.getElementById("percentData2")
}

function comparisonPercent(leftWeapon, rightWeapon)
{
    if(dataTotal1.innerHTML == 0 && dataTotal2.innerHTML == 0)
    {
        leftWeapon = 0
        rightWeapon = 0
    }
    else if(dataTotal1.innerHTML == 0)
    {
        leftWeapon = -100
        rightWeapon = totalComparisonc2.innerHTML
    }
    else if(dataTotal2.innerHTML == 0)
    {
        rightWeapon = -100
        leftWeapon = totalComparisonc1.innerHTML
    }
    else
    {
    leftWeapon = ((dataTotal1.innerHTML*100/dataTotal2.innerHTML)-100).toFixed(1)
    rightWeapon = ((dataTotal2.innerHTML*100/dataTotal1.innerHTML)-100).toFixed(1)
    }
    
    if(leftWeapon>0)
    {

        innerPercent1.innerHTML = (leftWeapon+"%, More Damage")
        innerPercent2.innerHTML = (rightWeapon+"%, Less Damage")
        innerPercent1.style = "color:green"
        innerPercent2.style = "color:red"
    }
    else if(rightWeapon>0)
    {
        innerPercent1.innerHTML = (leftWeapon+"%, Less Damage")
        innerPercent2.innerHTML = (rightWeapon+"%, More Damage")
        innerPercent1.style = "color:red"
        innerPercent2.style = "color:green"
    }
    else
    {
        innerPercent1.innerHTML = leftWeapon+"% Damage"
        innerPercent2.innerHTML = rightWeapon+"% Damage"
        innerPercent1.style = "color:black; margin:16px 1px 0 0;"
        innerPercent2.style = "color:black; margin:16px 1px 0 0;"
    }
}



function comparisonDiv()
{
    calculateFunction()
    putComparisonDiv.innerHTML = '<div class = "weaponComparison">' +
    '<div id = "weaponImage'+c+'"></div>'  +
    '<div id = "damageComparison'+c+'">1</div>'  +
    '<div id = "elementComparison'+c+'">2</div>' +
    '<div id = "sharpComparisonBox'+c+'"></div>'+
    '<div id = "sharpComparison'+c+'"></div>'   +
    '<div id = "affinityComparison'+c+'">4</div>'+
    '<div id = "totalComparison'+c+'">5</div></div>'+
    
    '<div id = "damageText'+c+'">Damage</div>'+
    '<div id = "elementText'+c+'">Element</div>'+
    '<div id = "sharpText'+c+'">Sharpness</div>'+
    '<div id = "affinityText'+c+'">Affinity</div>'+
    '<div id = "totalText'+c+'">Total (A)</div>'
    

    dataComparison()
}

function dataComparison()
{
weaponImage = document.getElementById("weaponImage"+c)
weaponImage.style = weaponCompare

damageComparison = document.getElementById("damageComparison"+c)
damageComparison.innerHTML = rawDamage.value

elementComparison = document.getElementById("elementComparison"+c)
elementComparison.innerHTML = elementalDamage.value

sharpComparison = document.getElementById("sharpComparison"+c)

if(comparisonColor == "None"){
    sharpComparison.style = "color:red"
    sharpComparison.innerHTML = "<span>None</span>"
}
else
{
sharpComparison.innerHTML = "<p></p>"
sharpComparison.style = "border: solid  1px blue;"
sharpComparison.style = comparisonColor
}
                        

affinityComparison = document.getElementById("affinityComparison"+c)
affinityComparison.innerHTML = affinity.value

totalComparison = document.getElementById("totalComparison"+c)
totalComparison.innerHTML = totalAverageCalculate
}

/* comparison1()
comparison2()
comparison3()*/

// Interactive Width

/*var d = document.body

var li = document.getElementById("interactiveDiv");

var bW = document.getElementById("bw")
bW.addEventListener("click", buttonWidth)

d.addEventListener("onchange", prueba2)

console.log(li)
function prueba2() {
    console.log("hola");
}
    


function buttonWidth()
{
    li.innerHTML = "xdxdxddd";
}

var bl = document.getElementById("bl")
bl.addEventListener("click", buttonWidth2)

function buttonWidth2()
{
    li.innerHTML = "<link rel ='stylesheet' href = 'mhCalculatorWidth.css'/>";
}

console.log(sharp)
console.log(weaponTypeValue)*/