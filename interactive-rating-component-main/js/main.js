
const Main = {

    init: function() {

        this.cacheSelectors()
        this.buttons_onclick()
        this.submit()
    },

    cacheSelectors: function() {

        this.$submitButton = document.querySelector('.submitButton')
        this.$buttons = document.querySelectorAll('.buttons')
        this.$body = document.querySelector('body')
    },

    buttons_onclick: function() {
        const self = this
        
        self.$buttons.forEach(function(button){
            button.onclick = function() {

                self.$ranking = button.innerHTML

                self.$buttons.forEach(function(button){
                    const isPattern = button.classList.contains('colorPattern')

                    if(!isPattern) {

                        button.classList.remove('rankingActive')
                        return button.classList.add('colorPattern')

                    } else if(button.innerHTML === self.$ranking) {

                        button.classList.remove('colorPattern')
                        button.classList.add('rankingActive')
                    }
                })
            }
        })
    },

    submit: function() {
        const self = this

        self.$submitButton.onclick = () => {
            
            self.$buttons.forEach((button) => {
                const isActive = button.classList.contains('rankingActive')

                if(!isActive){
                    return
                }
            
                self.$body.innerHTML = `
                    <div class="containerThankYou"> 

                        <div class="imgThanks">
                            <img src="images/illustration-thank-you.svg" alt="Image thank you">
                        </div>
                    
                        <div class="selection">
                            You selected ${self.$ranking} out of 5
                        </div>
                    
                        <h1>
                            Thank you!
                        </h1>
                    
                        <p>
                            We appreciated you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                        </p>
                
                    </div>
                `
            })
        }
    }
}

Main.init()