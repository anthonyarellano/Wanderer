export const formatDateForCalendar = (date) => {
        let retArr = [];
        date.forEach((date) => {
            let returnStr = ''
            let dateArr = date.toString().split(" ");
            returnStr += dateArr[3] + "-"
            if (dateArr[1] === "Jan") returnStr += '01-';
            if (dateArr[1] === "Feb") returnStr += '02-';
            if (dateArr[1] === "Mar") returnStr += '03-';
            if (dateArr[1] === "Apr") returnStr += '04-';
            if (dateArr[1] === "May") returnStr += '05-';
            if (dateArr[1] === "Jun") returnStr += '06-';
            if (dateArr[1] === "Jul") returnStr += '07-';
            if (dateArr[1] === "Aug") returnStr += '08-';
            if (dateArr[1] === "Sep") returnStr += '09-';
            if (dateArr[1] === "Oct") returnStr += '10-';
            if (dateArr[1] === "Nov") returnStr += '11-';
            if (dateArr[1] === "Dec") returnStr += '12-';
            returnStr += dateArr[2]
            retArr.push(returnStr);
        })
        return retArr;
    };
