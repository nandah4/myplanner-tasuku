const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
};

const formatedDate = (date) => {
    if (!date) {
        return "...";  // Atau return nilai default lainnya seperti "" atau pesan khusus
    }
    const dateA = new Date(date)
    const dateAfterFormat = new Intl.DateTimeFormat('en-US', options).format(dateA)
    return dateAfterFormat;
}

export { formatedDate };