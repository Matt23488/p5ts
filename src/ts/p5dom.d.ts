interface Slider {
    value(): number;
}

declare var createSlider: {
    (min: number, max: number, startVal: number, step: number): Slider;
};