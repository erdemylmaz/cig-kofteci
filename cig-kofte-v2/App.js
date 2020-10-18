// isletme adini alma
const form = document.getElementById('operation-name-form');
const input = document.getElementById('operation-name-input');
const startArea = document.getElementById('start');
const gameArea = document.getElementById('game');
let operationName;
const operationNameH1 = document.getElementById('operationName');


onSubmit = (e) => {
    e.preventDefault();

    if (input.value !== "") {
        operationName = input.value;
        startArea.style.display = "none";
        gameArea.style.display = "block";
        operationNameH1.innerHTML = operationName;
    }
}
// form.addEventListener('submit' , onSubmit);
// gameArea.style.display = "none";

// GAME
const materialArea = document.getElementById('material');
const moneyArea = document.getElementById('money');
const currentCigKofteArea = document.getElementById('currentCigKofte');
const cigKofteFeeArea = document.getElementById('cigKofteFee');
const makedCigKofteArea = document.getElementById('makedCigKofte')
const makeButton = document.getElementById('makeCigKofteButton');
const buyMaterialButton = document.getElementById('buyMaterial');
const materialCostArea = document.getElementById('materialCost');

class Game {
    material = 10000;
    money = 0;
    cigKofteFee = 50;
    cigKofteMaterialAmount = 100;
    makedCigKofte = 0;
    currentCigKofte = 0;
    materialCost = 1000;

    makeCigKofte = () => {
        
            this.material = this.material - this.cigKofteMaterialAmount;
            this.makedCigKofte++;
            this.currentCigKofte++;

            materialArea.innerHTML = `${this.material}`;
            currentCigKofteArea.innerHTML = `${game.currentCigKofte}`;
            makedCigKofteArea.innerHTML = `${game.makedCigKofte}`;

            if(this.material < this.cigKofteMaterialAmount) {
                makeButton.disabled = true;
            } else if (this.material >= this.cigKofteMaterialAmount){
                makeButton.disabled = false;
            }
        
    }

    sellCigKofte = () => {
        if (Math.random() > (this.cigKofteFee / 100 * 1.82) && this.currentCigKofte > 0){
            this.money += this.cigKofteFee;
            this.currentCigKofte--;

            currentCigKofteArea.innerHTML = `${game.currentCigKofte}`;
            moneyArea.innerHTML = `${game.money}₺`;
        }
    }

    buyMaterial = () => {
        this.money -= this.materialCost
        this.material += 10000;

        materialArea.innerHTML = `${this.material}`;
        moneyArea.innerHTML = `${game.money}₺`;

        makeButton.disabled = false;
    }
    canMakeCigKofte = () => {
        return this.material >= this.cigKofteMaterialAmount ? makeButton.disabled = false : makeButton.disabled = true;
    }
    canBuyMaterial = () => {
        return this.money >= this.materialCost ? buyMaterialButton.disabled = false : buyMaterialButton.disabled = true;
    }

}
let game = new Game();

setInterval(game.sellCigKofte, 1000/(Math.random() * 30));

makeButton.addEventListener('click', game.makeCigKofte);
buyMaterialButton.addEventListener('click', game.buyMaterial);

materialArea.innerHTML = `${game.material}`;
moneyArea.innerHTML = `${game.money}₺`;
currentCigKofteArea.innerHTML = `${game.currentCigKofte}`;
makedCigKofteArea.innerHTML = `${game.makedCigKofte}`;
cigKofteFeeArea.innerHTML = `${game.cigKofteFee}₺`
materialCost.innerHTML = `${game.materialCost}₺`;

check = () => {
    game.canMakeCigKofte();
    game.canBuyMaterial();
}

setInterval(check, 1000/30);

 