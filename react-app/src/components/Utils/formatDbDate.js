export const formatDbDate = (dateArr) => {
    let retArr = [];
    dateArr.forEach((dateObj) => {
        let startStr = '';
        let endStr = '';
        let dateSplit = dateObj.start_date.split(" ");
        let endSplit = dateObj.end_date.split(" ");

        startStr += dateSplit[3] + '-';
        if (dateSplit[2] === "Jan") startStr += '00-';
        if (dateSplit[2] === "Feb") startStr += '02-';
        if (dateSplit[2] === "Mar") startStr += '02-';
        if (dateSplit[2] === "Apr") startStr += '03-';
        if (dateSplit[2] === "May") startStr += '04-';
        if (dateSplit[2] === "Jun") startStr += '05-';
        if (dateSplit[2] === "Jul") startStr += '06-';
        if (dateSplit[2] === "Aug") startStr += '07-';
        if (dateSplit[2] === "Sep") startStr += '08-';
        if (dateSplit[2] === "Oct") startStr += '09-';
        if (dateSplit[2] === "Nov") startStr += '10-';
        if (dateSplit[2] === "Dec") startStr += '11-';
        startStr += dateSplit[1]

        endStr += endSplit[3] + '-';
        if (endSplit[2] === "Jan") endStr += '00-';
        if (endSplit[2] === "Feb") endStr += '02-';
        if (endSplit[2] === "Mar") endStr += '02-';
        if (endSplit[2] === "Apr") endStr += '03-';
        if (endSplit[2] === "May") endStr += '04-';
        if (endSplit[2] === "Jun") endStr += '05-';
        if (endSplit[2] === "Jul") endStr += '06-';
        if (endSplit[2] === "Aug") endStr += '07-';
        if (endSplit[2] === "Sep") endStr += '08-';
        if (endSplit[2] === "Oct") endStr += '09-';
        if (endSplit[2] === "Nov") endStr += '10-';
        if (endSplit[2] === "Dec") endStr += '11-';
        endStr += endSplit[1]

        retArr.push([startStr, endStr]);
    })
    return retArr; 
}
