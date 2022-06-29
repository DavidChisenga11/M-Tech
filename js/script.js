const Cars ={
    brands: ['Ford', 'Benz', 'BMW', 'VW'],
    model: 'Sports car',
    message:function(){
        return this.brands.map(brand =>{
            console.log(`${brand} is a ${this.model}`)
        })
    }
}
Cars.message();