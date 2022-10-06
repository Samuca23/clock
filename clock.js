class Clock {

    constructor() {
        this.createLayoutClock();

        setInterval(() => {
            this.addHourLayout();
        }, 1000);
    }

    getHourNow = () => {
        let oDate = new Date();

        let sDateFormat = this.formatHour(oDate);
        return sDateFormat;
    }

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

    createLayoutClock = () => {
        let oDivContainer = this.getContainer();

        let oDivClock = this.createDiv('clock', 'clock');
        oDivContainer.appendChild(oDivClock);

        let oSpanHour = this.createSpan('hour', 'hour');
        oSpanHour.setAttribute('class', 'hour');
        oSpanHour.setAttribute('id', 'hour');
        oDivClock.appendChild(oSpanHour);
    }

    addHourLayout = () => {
        let oSpanHour = document.getElementById('hour');
        oSpanHour.innerText = this.getHourNow();
    }
    
    getContainer = () => {
        return document.getElementById('container');
    }

    createDiv = (sId, sClass) => {
        let oDiv = document.createElement('div');
        oDiv.setAttribute('id', sId);
        oDiv.setAttribute('class', sClass);

        return oDiv;
    }

    createSpan = (sId, sClass) => {
        let oSpan = document.createElement('span');
        oSpan.setAttribute('id', sId);
        oSpan.setAttribute('class', sClass);

        return oSpan;
    }

}

let clock = new Clock();