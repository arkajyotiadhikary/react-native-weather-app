export const CapitalizeFirstLetter = (word = "") => {
    let finalWord = "";
    word.split(" ").forEach((element, index) => {
        finalWord +=
            (index === 0 ? "" : " ") +
            element.charAt(0).toUpperCase() +
            element.slice(1);
    });
    return finalWord;
};

export const FormateDate = (inputDate) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const dateObject = new Date(inputDate);

    const day = ("0" + dateObject.getDate()).slice(-2);
    const month = months[dateObject.getMonth()];
    const year = dateObject.getFullYear().toString().slice(-2);

    return `${day}, ${month}, ${year}`;
};
