package logic;

public class Pawn {
  private int x;
  private int y;
  private final String color;

  public Pawn(int x, int y, String color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  public int getX() {
    return x;
  }

  public void setX(int x) {
    this.x = x;
  }

  public int getY() {
    return y;
  }

  public void setY(int y) {
    this.y = y;
  }

  public String getColor() {
    return color;
  }
}
