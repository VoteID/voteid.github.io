import { getFloatInRange, getIntInRange } from '@vuesion/utils/dist/randomGenerator';

class Circle {
  private opacity: number = getFloatInRange(0.05, 0.9);
  private counter: number = 0;
  private direction: number = 0;

  constructor(
    private context: CanvasRenderingContext2D | any,
    private radius: number,
    private speed: number,
    private width: number,
    private xPos: number,
    private yPos: number,
  ) {
    this.direction = getIntInRange(0.4, 0.6) === 1 ? 1 : -1;
  }

  public update(): void {
    this.counter += this.direction * this.speed;

    const opacityDirection: number = getIntInRange(0, 1) === 1 ? -1 : 1;
    this.opacity += opacityDirection * (getIntInRange(0, 999) / 50000);

    this.context.beginPath();
    /*
    this.context.arc(
      this.xPos + Math.cos(this.counter / 100) * this.radius,
      this.yPos + Math.sin(this.counter / 100) * this.radius,
      this.width,
      0,
      Math.PI * 2,
      false,
    );
    */

    const x = this.xPos + Math.cos(this.counter / 100) * this.radius;
    const y = this.yPos + Math.sin(this.counter / 100) * this.radius;
    this.context.moveTo(x + 200, y + 200);
    const a = (Math.PI * 2) / 5;

    if (this.opacity <= 0) {
      this.counter = 0;
      this.opacity = getFloatInRange(0.05, 0.9);
      this.width = 0.1;
      this.speed = getFloatInRange(0.1, 1);
    }

    for (let i = 1; i < 5; i++) {
      this.context.lineTo(this.width * Math.cos(a * i), this.width * Math.sin(a * i));
    }
    this.context.fillStyle = 'rgba(141, 195, 249,' + this.opacity + ')';
    this.context.closePath();

    this.context.fill();
    // this.context.stroke()
  }
}

const getCircles = (
  circleCount: number,
  canvas: HTMLCanvasElement | any,
  context: CanvasRenderingContext2D | any,
): Circle[] => {
  const localCircles: any[] = [];

  for (let i = 0; i < circleCount; i++) {
    localCircles.push(
      new Circle(
        context,
        getIntInRange(50, 350),
        getFloatInRange(0.1, 1),
        getFloatInRange(2, 10),
        getIntInRange(0, canvas.width),
        getIntInRange(0, canvas.height),
      ),
    );
  }

  return localCircles;
};

const draw = (canvas: HTMLCanvasElement | any, context: CanvasRenderingContext2D | any, circles: Circle[]): void => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  circles.forEach((circle: Circle) => {
    circle.update();
  });

  /* istanbul ignore next */
  (window as any).requestAnimationFrame(() => {
    draw(canvas, context, circles);
  });
};

export const CircleAnimation = (canvas: HTMLCanvasElement | any): any => {
  const context: CanvasRenderingContext2D | any = canvas.getContext('2d');
  const circleCount: number = 50;
  const circles: Circle[] = getCircles(circleCount, canvas, context);

  if (context) {
    draw(canvas, context, circles);
  }

  return {
    draw,
    circles,
  };
};
