package logic;

public class Point {
  private final int x;
  private final int y;

  public Point(int x, int y) {
    this.x = x;
    this.y = y;
  }

  int getX() {
    return x;
  }

  int getY() {
    return y;
  }

  @Override
  public boolean equals(Object object) {
    Point point;
    if (object instanceof Point) {
      point = (Point) object;
    } else {
      return false;
    }

    return this.x == point.getX() && this.y == point.getY();
  }
}
