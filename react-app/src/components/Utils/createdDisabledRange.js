import { formatDbDate } from "./formatDbDate";

export const createDisabledRange = (dateArr) => {
    let disabledDates = [];
    dateArr.forEach((dates) => {
        let startDate = new Date(dates[0]);
        let endDate = new Date(dates[1]);

        const date = new Date(startDate)
        date.setMinutes( date.getMinutes() + date.getTimezoneOffset() );
        endDate.setMinutes( date.getMinutes() + date.getTimezoneOffset() );
         while (date <= endDate) {
             let testDate = new Date(date)
             testDate.setMinutes( date.getMinutes() + date.getTimezoneOffset() );
             disabledDates.push(testDate)
             date.setDate(date.getDate() + 1);
         };

    });

    let formattedDates = [];
    disabledDates.forEach((date) => {
        let modifiedDate = new Date(formatDbDate([date.toString()]))
        modifiedDate.setMinutes( date.getMinutes() + date.getTimezoneOffset() );
        formattedDates.push(modifiedDate);
    });
    return formattedDates;
};
