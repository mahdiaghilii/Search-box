fetch('json/full_store_mock_optimized.json')
.then(response => response.json())
.then(resp => {
    console.log(resp)        
})