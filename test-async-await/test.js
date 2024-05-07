const test = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    return 'test'
}

test().then(result=>console.log(result))

//console.log(test())