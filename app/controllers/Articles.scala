package controllers

import models.Article
import play.api.mvc.{Action, Controller}
import play.api.libs.json._

/**
 * Created by xmitya on 09.11.14.
 */
object Articles extends Controller with Security {

  def getArticle(id: Long) = Action {
    Ok(Json.toJson(Article.findById(id)))
  }

  def getArticles(startPage: Int, pageSize: Int) = Action {
    Ok(Json.toJson(Article.getArticles(0, 10, None)))
  }
}
