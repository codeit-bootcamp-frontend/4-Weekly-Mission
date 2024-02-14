function getCoustomDate(createDate){
    const coustomDate = {
        year: createDate.getFullYear(),
        month: createDate.getMonth() + 1,
        date: createDate.getDate()
    }
    return coustomDate;
}

export default getCoustomDate;