const Main = {

    init: function() {
        
        this.cacheSelectors()
        this.events()
    },

    cacheSelectors: function() {

        this.$button = document.querySelector('#button')
        this.$inputs = document.querySelectorAll('.input')
        this.$spans = document.querySelectorAll('.span')
    },

    events: function() {

        const self = this

        this.$button.onclick = () => {
            self.$inputs.forEach(element => {
                
                self.$input = element.value

                if(!self.$input) {
                    
                    if(element.id === 'email') {
                        element.placeholder = 'email@example.com'
                    } else {
                        element.placeholder = ''
                    }

                    element.classList.remove('input')
                    element.classList.add('inputError')
                } else {

                    element.classList.remove('inputError')
                    element.classList.add('input')
                }

                if(!self.$input) {

                    self.$spans.forEach(element => {

                        element.classList.remove('hidden')
                        
                    })

                } else {

                    self.$spans.forEach(element => {
                        
                        element.classList.add('hidden')  
                    })
                }           
            })
        }
    }
}

Main.init()