var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This is as specified, resolved promise")
    }, 5000)
})

myPromise.then((resolutionData) => {
    debugger;
},(rejectionData) => {
    debugger;
})