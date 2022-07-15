const binary_search = (list, item) => {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        let mid = (low + high)
        let guess = list[mid]
        if (guess === item) return mid
        guess > item ? high = mid - 1 : low = mid + 1
    }
    return null
}

console.log(binary_search([1, 3, 5, 6, 7, 9, 10], 3)) //return 1