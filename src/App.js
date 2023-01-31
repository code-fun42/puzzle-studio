export class App {
  constructor(vanta) {
    this.vanta = vanta;
  }

  price() {
    const animationBackgroundPrice = () => {
      this.vanta.FOG({
        el: "#price",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xffa300,
        midtoneColor: 0x9b00ff,
        lowlightColor: 0xffb400,
        baseColor: 0xff,
      });
    };
    animationBackgroundPrice();
  }
}
