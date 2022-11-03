console.log('hello')
// fetch('https://dog.ceo/api/breeds/image/random', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'user 1'
//     })
// }).then(res => {
//         return res.json()
//     })



//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))

        

const fetchAPOD = async () => {
    try {
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      const data = await response.json()
      console.log(data)
      displayData(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const displayData = data => {
    document.querySelector('.title').textContent = data.title
    document.querySelector('.date').textContent = data.date
    document.querySelector('.picture').src = data.url
    document.querySelector('.explanation').textContent = data.explanation
  }
  
  fetchAPOD()
