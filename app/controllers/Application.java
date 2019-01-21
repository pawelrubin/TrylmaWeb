package controllers;

import akka.actor.ActorSystem;
import akka.stream.Materializer;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.WebSocket;
import views.html.index;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class Application extends Controller {

  /**
   * An action that renders an HTML page with a welcome message.
   * The configuration in the <code>routes</code> file means that
   * this method will be called when the application receives a
   * <code>GET</code> request with a path of <code>/</code>.
   */
  public Result index() {
    return ok(index.render("Testowańsko", "GREEN", "GREEN"));
  }

  public Result boardJs() {
    return ok(views.js.board.render());
  }
}
