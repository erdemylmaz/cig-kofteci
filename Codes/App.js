
 let clock = document.getElementById('tiktak');
            
            addExtraZero = (x) => {
                return x < 10 ? "0" + x : x;
            }

            tiktak = () => {
                let date = new Date()
                
                let h = addExtraZero(date.getHours());
                let m = addExtraZero(date.getMinutes());
                let s = addExtraZero(date.getSeconds());

                let currentTime = [h,m,s].join(':');
                clock.innerHTML = currentTime;
            }

            setInterval(tiktak ,1000)
        // yardimcilar
            class helpers {
                cirakFee = 500;
                currentCirak = 0;
                hasCirak = false;

                ustaFee = 2000;
                currentUsta = 0;
                hasUsta = false;

                buyUsta = () => {
                    money -= this.ustaFee;
                    this.currentUsta++;
                    this.ustaFee += Math.floor(this.ustaFee * 60 / 100);
                    htmlCurrentUstaAmount.innerHTML = this.currentUsta;
                    htmlUstaFee.innerHTML = this.ustaFee;
                    htmlmoney.innerHTML = `Kasadaki Para : ${money}`;
                    return this.hasUsta = true;
                }
                
                buyCirak = () => {
                    money -= this.cirakFee;
                    this.currentCirak++;
                    this.cirakFee += Math.floor(this.cirakFee * 50 / 100);
                    htmlCurrentCirakAmount.innerHTML = this.currentCirak;
                    htmlCirakFee.innerHTML = this.cirakFee;
                    htmlmoney.innerHTML = `Kasadaki Para : ${money}`;
                    return this.hasCirak = true;
                }
                    
                }
            let yardimcilar = new helpers();
        // usta
            let htmlUstaFee = document.getElementById('ustaFee');
            let buyUstaButton = document.getElementById('ustaButton');
            let htmlCurrentUstaAmount = document.getElementById('currentUstaAmount');
            htmlCurrentUstaAmount.innerHTML = yardimcilar.currentUsta;
            htmlUstaFee.innerHTML = yardimcilar.ustaFee;
        //cirak
            let htmlCirakFee = document.getElementById('cirakFee');
            let buyCirakButton = document.getElementById('cirakButton');
            let htmlCurrentCirakAmount = document.getElementById('currentCirakAmount');
            htmlCurrentCirakAmount.innerHTML = yardimcilar.currentCirak;
            htmlCirakFee.innerHTML = yardimcilar.cirakFee;
        //dark mode
            function myFunction() {
                var element = document.body;
                element.classList.toggle("dark-mode");
            } 
            var darkModeButton = document.getElementById('darkModeButton');
            darkModeButton.onclick = myFunction;
            buttons = document.querySelectorAll('#button');
        // Buttons
            var buyButton = document.querySelector("#makeButton");
            var sellButton = document.querySelector("#sellButton");
            var artiButton = document.getElementById('arti');
            var eksiButton = document.getElementById('eksi');
            var buyMaterialButton = document.getElementById('buyMaterialButton');
            var buyAutoBuyerButton = document.getElementById('autoBuyerButton');
            var autoBuyerLine = document.getElementById('autoBuyer');
        // tools
            var cigKofte = 0;
            var level = 0;
            var currentCigKofte = 0;
            var money = 0;
            var material = 10000;
            var buyMaterialFee = 1000;
            var cigKofteFee = 20;
            var maxCigKofteFee = 50;
            var minCigKofteFee = 10;
            var autoBuyerCost = 15000;
            var buyMaterialAmount = 10000;
            var cigKofteMaterialAmount = 100;
            var newLevel = 500;
            var makeCigKofteAmount = 1;
            var displayAutoBuyerAmount = 2000;
        // html in js
            let htmlMaterialFee = document.getElementById('materialFee');
            var htmlCigKofte = document.getElementById('cigKofte');
            var htmlLevel = document.getElementById('level');
            var htmlAutoBuyerText = document.getElementById('autoBuyerText');
            var htmlmoney = document.getElementById('money');
            var htmlmaterial = document.getElementById('material');
            var htmlCigKofteFee = document.getElementById('cigKofteFee');
            var htmlcck = document.getElementById('cck');
        // begin
        document.title = "Cig Kofteci Erdem Usta"
            autoBuyerLine.style.visibility = "hidden";
            var hasAutoBuyer;
            htmlMaterialFee.innerHTML = buyMaterialFee;
            sellButton.disabled = true;
            buyUstaButton.style.marginTop = "8px";
            buyAutoBuyerButton.disabled = true;
            buyMaterialButton.disabled = true;
            htmlLevel.innerHTML = level;
            htmlcck.innerHTML = `Mevcut Cig Kofte : ${this.currentCigKofte}`;
            htmlmoney.innerHTML = `Kasadaki Para : ${this.money}₺ ` ;
            htmlmaterial.innerHTML = `Mevcut Malzeme: ${this.material}gr` ;
            htmlCigKofteFee.innerHTML = cigKofteFee;
        // functions
            
            function randomMaterialFeeFunction() {
                buyMaterialFee = 1000 + Math.floor(Math.random() * 750 + -250);
                htmlMaterialFee.innerHTML = buyMaterialFee;
            }
            function sellCigKofte() {
                money += cigKofteFee * makeCigKofteAmount;
                currentCigKofte-= makeCigKofteAmount;
                htmlcck.innerHTML = `Mevcut Cig Kofte : ${currentCigKofte}`;
                htmlmoney.innerHTML = `Kasadaki Para : ${money}₺ ` ;
                
                return money;
            }
            function buyMaterial() {
                money -= buyMaterialFee;
                material += buyMaterialAmount;
                htmlmoney.innerHTML = `Kasadaki Para : ${money}₺ ` ;
                htmlmaterial.innerHTML = `Mevcut Malzeme: ${material}gr` ;
                 
                
            }
            function buyAutoBuyer() {
                money -= autoBuyerCost;
                htmlmoney.innerHTML = `Kasadaki Para : ${money}₺ ` ;
                buyAutoBuyerButton.style.visibility = "hidden";
                htmlAutoBuyerText.innerHTML = "Aktif";
                return hasAutoBuyer = true;
            }
            
            function cigKofteFeeArti() {
                cigKofteFee+= 1;
                htmlCigKofteFee.innerHTML = cigKofteFee;
                
            }
            function cigKofteFeeEksi() {
                cigKofteFee-= 1;
                htmlCigKofteFee.innerHTML = cigKofteFee;
            }
            function levelUP() {
                maxCigKofteFee +=5;
                level++;
                artiButton.disabled = false;
                htmlLevel.innerHTML = level;
                return makeCigKofteAmount += 1;
            }
            function makeCigKofte() {
                material -= cigKofteMaterialAmount * makeCigKofteAmount;
                currentCigKofte += makeCigKofteAmount;
                cigKofte+= makeCigKofteAmount;
                htmlCigKofte.innerHTML = cigKofte;
                htmlcck.innerHTML = `Mevcut Cig Kofte : ${currentCigKofte}`;
                htmlmaterial.innerHTML = `Mevcut Malzeme: ${material}gr` ;
                
            }
            control = () => {
                if (money < yardimcilar.cirakFee) {
                    buyCirakButton.disabled = true;
                } else {buyCirakButton.disabled = false;}
                if (money < yardimcilar.ustaFee) {
                    buyUstaButton.disabled = true;
                } else {buyUstaButton.disabled = false;}
                if (currentCigKofte < makeCigKofteAmount) {
                    sellButton.disabled = true;
                }
                if (money >= buyMaterialFee) {
                    buyMaterialButton.disabled = false;
                }
                if (money < autoBuyerCost ) {
                    buyAutoBuyerButton.disabled = true;
                } else {
                    buyAutoBuyerButton.disabled = false;
                }
                if (money < buyMaterialFee) {
                   buyMaterialButton.disabled = true;
                }
                if (cigKofteFee >= maxCigKofteFee) {
                    artiButton.disabled = true;
                }
                if (cigKofteFee >= minCigKofteFee) {
                    eksiButton.disabled = false;
                }
                if (cigKofteFee <= minCigKofteFee) {
                    eksiButton.disabled = true;
                }
                if (cigKofteFee < maxCigKofteFee) {
                    artiButton.disabled = false;
                }  
                if (money < buyMaterialFee) {
                    buyMaterialButton.disabled = true;
                } else {buyMaterialButton.disabled = false;}
                if (currentCigKofte > 0) {
                    sellButton.disabled = false;
                }
                if (material + cigKofteMaterialAmount == cigKofteMaterialAmount) {
                    makeButton.disabled = true;
                }
                if (cigKofte >= newLevel) {
                    levelUP();
                    return newLevel += (newLevel * 75 / 100) + 500;
                }
                if (material <= 0) {
                    makeButton.disabled = true;
                }
                if (material > cigKofteMaterialAmount) {
                    makeButton.disabled = false;
                }
                if (cigKofte >= displayAutoBuyerAmount) {
                    autoBuyerLine.style.visibility = "visible";
                }
                if (hasAutoBuyer && material <= 500 && money >= buyMaterialFee) {
                    buyMaterial();
                }
                if (money <= autoBuyerCost) {
                    autoBuyerButton.disabled = true;
                }
                if (Math.random() * cigKofteFee < 3 && currentCigKofte > 0) {
                    sellCigKofte();
                }
            };

                cirak = () => {
                    if (yardimcilar.hasCirak && material >= (cigKofteMaterialAmount * yardimcilar.currentCirak)) {
                        material -= cigKofteMaterialAmount * yardimcilar.currentCirak;
                        currentCigKofte += yardimcilar.currentCirak;
                        cigKofte+= yardimcilar.currentCirak;
                        htmlCigKofte.innerHTML = cigKofte;
                        htmlcck.innerHTML = `Mevcut Cig Kofte : ${currentCigKofte}`;
                        htmlmaterial.innerHTML = `Mevcut Malzeme: ${material}gr` ;
                    }
                }
                usta = () => {
                    if (yardimcilar.hasUsta && material >= (cigKofteMaterialAmount * yardimcilar.currentUsta)) {
                        material -= (cigKofteMaterialAmount * yardimcilar.currentUsta) * 3;
                        currentCigKofte += yardimcilar.currentUsta * 3;
                        cigKofte+= yardimcilar.currentUsta * 3;
                        htmlCigKofte.innerHTML = cigKofte;
                        htmlcck.innerHTML = `Mevcut Cig Kofte : ${currentCigKofte}`;
                        htmlmaterial.innerHTML = `Mevcut Malzeme: ${material}gr` ;
                    }
                }
                setInterval(usta , 1000)
                setInterval(randomMaterialFeeFunction , 10000);
                setInterval(cirak , 1000);
                setInterval(control , 1000 / 30);
            eksiButton.onclick = cigKofteFeeEksi;
            artiButton.onclick = cigKofteFeeArti;
            hasAutoBuyer ? htmlAutoBuyerText.innerHTML = "Aktif" : htmlAutoBuyerText.innerHTML = "Yok";
        // onclicks
            buyUstaButton.onclick = yardimcilar.buyUsta;
            buyCirakButton.onclick = yardimcilar.buyCirak;
            autoBuyerButton.onclick = buyAutoBuyer;
            buyButton.onclick = makeCigKofte; 
            sellButton.onclick = sellCigKofte;
            buyMaterialButton.onclick = buyMaterial;