
export const getItem = () => {

    const url = './data/items.json'
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fetch(url)
                .then(response => response.json())
                .then(
                    data => {
                        return data.find((item) => item.id === 1);
                    }))
        }, 2000);
    })
}
