class Clock {

    constructor() {
        this.createLayoutClock();

        setInterval(() => {
            this.addHourLayout();
        }, 1000);
    }

    /**
     * Obtem a Hora atual;
     * 
     * @returns string
     */
    getHourNow = (bRetunDate = false) => {
        let oDate = new Date();
        
        if (bRetunDate) {
            return oDate;
        }

        let sDateFormat = this.formatHour(oDate);
        return sDateFormat;
    }

    /**
     * Formata a hora, adicionando o '0'.
     * 
     * @param {object Date} oDate 
     * @returns string
     */
    formatHour = (oDate) => {
        let iHour = oDate.getHours();
        let iMinute = oDate.getMinutes();
        let iSecond = oDate.getSeconds();

        if (parseInt(iSecond) < 10) {
            iSecond = '0' + iSecond;
        }
        if (parseInt(iMinute) < 10) {
            iMinute = '0' + iMinute;
        }

        let sDateFormat = iHour + ':' + iMinute + ':' + iSecond;
        return sDateFormat;
    }

    /**
     * Cria o layout do relógio
     */
    createLayoutClock = () => {
        let oDivContainer = this.getContainer();

        let oDivClock = this.createDiv('clock', 'clock');
        oDivContainer.appendChild(oDivClock);

        let oSpanHour = this.createSpan('hour', 'hour');
        oSpanHour.setAttribute('class', 'hour');
        oSpanHour.setAttribute('id', 'hour');
        oDivClock.appendChild(oSpanHour);

        let oDivDate = this.createDiv('date', 'date');
        oDivDate.innerText = this.getDate();
        oDivClock.appendChild(oDivDate);
    }

    /**
     * Pega a data
     * 
     * @returns string
     */
    getDate = () => {
        let oDate = this.getHourNow(true);
        let sDateFormat = this.formatDate(oDate.getDate(), oDate.getMonth(), oDate.getFullYear());
        return sDateFormat;
    }

    /**
     * Formata a data
     * 
     * @param {string} sDay 
     * @param {string} sMonth 
     * @param {string} sYear 
     * @returns 
     */
    formatDate = (sDay, sMonth, sYear) => {
        return sDay +'/' +  parseInt(sMonth + 1) + '/' + sYear;
    }

    /**
     * Adiciona a hora no elemento span
     */
    addHourLayout = () => {
        let oSpanHour = document.getElementById('hour');
        oSpanHour.innerText = this.getHourNow();
    }
    
    /**
     * Retorna a div container
     * 
     * @returns element
     */
    getContainer = () => {
        return document.getElementById('container');
    }

    createButtonBackgroundColo = () {
        
    }

    /**
     * Função para criar div.
     * 
     * @param {string} sId 
     * @param {string} sClass 
     * @returns 
     */
    createDiv = (sId, sClass) => {
        let oDiv = document.createElement('div');
        oDiv.setAttribute('id', sId);
        oDiv.setAttribute('class', sClass);

        return oDiv;
    }

    /**
     * Função para criar span.
     * 
     * @param {string} sId 
     * @param {string} sClass 
     * @returns 
     */
    createSpan = (sId, sClass) => {
        let oSpan = document.createElement('span');
        oSpan.setAttribute('id', sId);
        oSpan.setAttribute('class', sClass);

        return oSpan;
    }

}

let clock = new Clock();