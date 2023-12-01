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
