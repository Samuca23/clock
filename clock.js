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
    getHourNow = () => {
        let oDate = new Date();

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