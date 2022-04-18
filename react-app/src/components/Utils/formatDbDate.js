export const formatDbDate = (dateArr, key) => {
    let retArr = [];
    if (dateArr.length === 1 && key === "range") {
        let startStr = '';
        let dateSplit = dateArr[0].split(" ");

        startStr += dateSplit[3] + '-';
        if (dateSplit[1] === "Jan") startStr += '01-';
        if (dateSplit[1] === "Feb") startStr += '02-';
        if (dateSplit[1] === "Mar") startStr += '03-';
        if (dateSplit[1] === "Apr") startStr += '04-';
        if (dateSplit[1] === "May") startStr += '05-';
        if (dateSplit[1] === "Jun") startStr += '06-';
        if (dateSplit[1] === "Jul") startStr += '07-';
        if (dateSplit[1] === "Aug") startStr += '08-';
        if (dateSplit[1] === "Sep") startStr += '09-';
        if (dateSplit[1] === "Oct") startStr += '10-';
        if (dateSplit[1] === "Nov") startStr += '11-';
        if (dateSplit[1] === "Dec") startStr += '12-';
        startStr += dateSplit[2]
        retArr.push(startStr)
        return retArr
    }
    if (dateArr.length >= 1) {
        dateArr.forEach((dateObj) => {
            let startStr = '';
            let endStr = '';
            let dateSplit = dateObj.start_date.split(" ");
            let endSplit = dateObj.end_date.split(" ");

            startStr += dateSplit[3] + '-';
            if (dateSplit[2] === "Jan") startStr += '01-';
            if (dateSplit[2] === "Feb") startStr += '02-';
            if (dateSplit[2] === "Mar") startStr += '03-';
            if (dateSplit[2] === "Apr") startStr += '04-';
            if (dateSplit[2] === "May") startStr += '05-';
            if (dateSplit[2] === "Jun") startStr += '06-';
            if (dateSplit[2] === "Jul") startStr += '07-';
            if (dateSplit[2] === "Aug") startStr += '08-';
            if (dateSplit[2] === "Sep") startStr += '09-';
            if (dateSplit[2] === "Oct") startStr += '10-';
            if (dateSplit[2] === "Nov") startStr += '11-';
            if (dateSplit[2] === "Dec") startStr += '12-';
            startStr += dateSplit[1]

            endStr += endSplit[3] + '-';
            if (endSplit[2] === "Jan") endStr += '01-';
            if (endSplit[2] === "Feb") endStr += '02-';
            if (endSplit[2] === "Mar") endStr += '03-';
            if (endSplit[2] === "Apr") endStr += '04-';
            if (endSplit[2] === "May") endStr += '05-';
            if (endSplit[2] === "Jun") endStr += '06-';
            if (endSplit[2] === "Jul") endStr += '07-';
            if (endSplit[2] === "Aug") endStr += '08-';
            if (endSplit[2] === "Sep") endStr += '09-';
            if (endSplit[2] === "Oct") endStr += '10-';
            if (endSplit[2] === "Nov") endStr += '11-';
            if (endSplit[2] === "Dec") endStr += '12-';
            endStr += endSplit[1]

            retArr.push([startStr, endStr]);
        })
    }

    return retArr;
}
