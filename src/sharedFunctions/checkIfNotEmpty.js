const checkIfNotEmptyText = (string) => {
    if (string.replace(/\s/g, '') === '') {
        return false;
    }
    return true;
}

export default checkIfNotEmptyText;
