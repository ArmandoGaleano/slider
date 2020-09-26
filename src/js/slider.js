function Slider(container, params) {
    this.container = container;
    this.params = params;
    this.init = () => {
        if (this.params !== null) {
            createSlider();
        } else {
            createDefaultSlider();
        }
    }
    const checkObject = () => {

    }
    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }
    const createDefaultSlider = () => {

    }
    const createSlider = () => {
        this.container.addClass('slider');
        let items = this.container.children();
        let quantityOfItems = items.length;
        
        if (Object.keys(this.params).filter(key => key === 'slideToShow').length) {
            let _qtnSlide = this.params.slideToShow;
            let cl = `show-${_qtnSlide}`;
            items.addClass(cl)

        }

    }
}


//_carouselSlider.init();
$.fn.slider = function (params = null) {
    const _slider = new Slider(this, params);
    _slider.init();
}
$('ul.e-vitrine_container').slider({
    slideToShow: 3
});